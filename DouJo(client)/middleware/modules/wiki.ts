import wikiReducer, {
  addWiki,
  initialCompleted,
  initialWiki,
  modifyWiki,
  removeWiki,
} from "../../provider/modules/wikis";
import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { WikiItem } from "../../provider/modules/wikis";
import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import api, { WikiItemRequest, WikiItemResponse } from "../../api/wiki";
import { AxiosResponse } from "axios";

/* ========= saga action Payload 타입 =============== */
export interface PageRequest {
  page: number;
  size: number;
}

/* ========= saga action을 생성하는 부분 =============== */

// wiki를 추가하도록 요청하는 action creator를 생성
// const actionCreator = createAction<Payload타입>(Action.type문자열)
// 전체 데이터 조회에서 추가할 때
export const requestAddWiki = createAction<WikiItem>(
  `${wikiReducer.name}/requestAddWiki`
);

// wiki를 가져오는 action
export const requestFetchWiki = createAction(
  `${wikiReducer.name}/requestFetchWikis`
);

// 1건의 wiki만 가져오는 action
export const requestFetchWikiItem = createAction<number>(
  `${wikiReducer.name}/requestFetchWikiItem`
);

// wiki를 삭제하는 action
export const requestRemoveWiki = createAction<number>(
  `${wikiReducer.name}/requestRemoveWiki`
);

// wiki를 수정하는 action
export const requestModifyWiki = createAction<WikiItem>(
  `${wikiReducer.name}/requestModifyWiki`
);

/* ========= saga action을 처리하는 부분 =============== */

// 서버에 POST로 데이터를 보내 추가하고, redux state를 변경
function* addData(action: PayloadAction<WikiItem>) {
  try {
    const wikiItemPayload = action.payload;
    const wikiItemRequest: WikiItemRequest = {
      title: wikiItemPayload.title,
      name: wikiItemPayload.name,
      description: wikiItemPayload.description,
    };
    const result: AxiosResponse<WikiItemResponse> = yield call(
      api.add,
      wikiItemRequest
    );
    const wikiItem: WikiItem = {
      id: result.data.id,
      title: result.data.title,
      name: result.data.name,
      description: result.data.description,
      createdTime: result.data.createdTime,
    };
    // dispatcher와 동일한 처리
    // useDispatch로 dispatcher 만든 것은 컴포넌트에서만 가능
    // put 이펙트를 사용함
    yield put(addWiki(wikiItem));
    // complete 속성 삭제
    yield put(initialCompleted());
  } catch (e: any) {
    // 에러 발생시
    console.log("Add Wiki: Error");
  }
}
function* fetchData() {
  yield console.log("----Saga: fetch Data----");
  // 백엔드에서 데이터 받아오기
  const result: AxiosResponse<WikiItemResponse[]> = yield call(api.fetch);
  // 응답 데이터 배열을 액션페이로드 배열로 변환
  // WikiItemResponse[] => WikiItem[]
  const wikis = result.data.map(
    (item) =>
      ({
        id: item.id,
        name: item.name,
        description: item.description,
      } as WikiItem)
  );
  yield put(initialWiki(wikis));
}

function* modifyData(action: PayloadAction<WikiItem>) {
  yield console.log("----Saga: modify Data----");
  const wikiItemPayload = action.payload;
  // rest api로 보낼 요청 객체
  const wikiItemRequest: WikiItemRequest = {
    title: wikiItemPayload.title,
    description: wikiItemPayload.description,
    name: wikiItemPayload.name,
  };

  const result: AxiosResponse<WikiItemResponse> = yield call(
    api.modify,
    wikiItemPayload.id,
    wikiItemRequest
  );
  // 백엔드에서 처리한 데이터 객체로 state를 변경할 payload객체 생성
  const wikiItem: WikiItem = {
    id: result.data.id,
    title: result.data.title,
    name: result.data.name,
    description: result.data.description,
    createdTime: result.data.createdTime,
  };
  // wiki 변경
  yield put(modifyWiki(wikiItem));
  // complete 속성 삭제
  yield put(initialCompleted());
}
function* removeData(action: PayloadAction<number>) {
  yield console.log("----Saga: delete Data----");
  const id = action.payload;
  // rest api 연동
  const result: AxiosResponse<boolean> = yield call(api.remove, id);
  // 반환값이 true
  if (result.data) {
    yield put(removeWiki(id));
  }
  yield put(initialCompleted());
}
/* saga action을 감지하는 부분 */
// redux wiki 처리와 관련된 saga action들을 감지할 saga를 생성
// saga는 generator 함수로 작성
export default function* wikiSaga() {
  yield takeEvery(requestAddWiki, addData);
  yield takeLatest(requestFetchWiki, fetchData);
  yield takeLatest(requestModifyWiki, modifyData);
  yield takeEvery(requestRemoveWiki, removeData);
}
