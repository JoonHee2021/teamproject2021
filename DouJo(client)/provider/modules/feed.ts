import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { penguin } from "../../common/data";

// 데이터구조를 interface로 만듦
export interface FeedItem {
  id: number;
  title: string;
}

export interface FeedPage {
  data: FeedItem[];
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast: boolean;
}

// 백엔드 연동 고려해서 state 구조를 설계
interface FeedState {
  data: FeedItem[]; // 위키 아이템 배열
  isFetched: boolean; // 서버에서 데이터를 받아왔는지에 대한 여부
  isAddCompleted?: boolean; // 데이터 추가가 완료되었는지 여부
  isRemoveCompleted?: boolean; // 데이터 삭제가 완료되었는지 여부
  isModifyCompleted?: boolean; // 데이터 수정이 완료되었는지 여부
  totalElements?: number;
  totalPages: number;
  page: number;
  pageSize: number;
  isLast?: boolean;
}

// wiki state를 목록 -> array
const initialState: FeedState = {
  data: [
    {
      id: 1,
      title: "제",
    },
    {
      id: 2,
      title: "목",
    },
    {
      id: 3,
      title: "입",
    },
    {
      id: 4,
      title: "니다",
    },
  ],
  isFetched: false,
  page: 0,
  pageSize: 8,
  totalPages: 0,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    // payload 없는 reducer
    // completed 관련된 속성을 삭제함(undefined 상태)
    initialCompleted: (state) => {
      delete state.isAddCompleted;
      delete state.isRemoveCompleted;
      delete state.isModifyCompleted;
    },
    // payload로 id값을 받음
    // action: PayloadAction<number>
    // reducer 넘어오는 action은 payload있는 액션인데,
    // payload의 타입이 number이다.
    removeFeed: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      // id에 해당하는 아이템의 index를 찾고 그 index로 splice를 한다.
      state.data.splice(
        state.data.findIndex((item) => item.id === id),
        1
      );
      state.isRemoveCompleted = true; // 삭제 되었음을 표시
    },
    initialFeedItem: (state, action: PayloadAction<FeedItem>) => {
      const feed = action.payload;
      // 백엔드에서 받아온 데이터
      state.data = [{ ...feed }];
    },
    // payload값으로 state를 초기화하는 reducer 필요함
    initialFeed: (state, action: PayloadAction<FeedItem[]>) => {
      const feeds = action.payload;
      // 백엔드에서 받아온 데이터
      state.data = feeds;
      // 데이터를 받아옴으로 값을 남김
      state.isFetched = true;
    },
    addTotalpages: (state) => {
      state.totalPages++;
    },
    // payload값으로 state를 초기화하는 reducer 필요함
    initialPagedFeed: (state, action: PayloadAction<FeedState>) => {
      // 백엔드에서 받아온 데이터
      // 컨텐트
      state.data = action.payload.data;
      // 페이징 데이터
      state.totalElements = action.payload.totalElements;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.isLast = action.payload.isLast;
      // 데이터를 받아옴으로 값을 남김
      state.isFetched = true;
    },
    initialNextFeed: (state, action: PayloadAction<FeedPage>) => {
      // 백엔드에서 받아온 데이터를 기존데이터 뒤로 합침
      // 컨텐트
      state.data = state.data.concat(action.payload.data);
      // 페이징 데이터
      state.totalElements = action.payload.totalElements;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.isLast = action.payload.isLast;
      // 데이터를 받아옴으로 값을 남김
      state.isFetched = true;
    },
  },
});

// action creator 내보내기: action creator는 action객체를 반환하는 함수
export const {
  removeFeed,
  initialFeedItem,
  initialFeed,
  initialCompleted,
  addTotalpages,
  initialPagedFeed,
  initialNextFeed,
} = feedSlice.actions;

export default feedSlice.reducer;
