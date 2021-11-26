import { useState, useEffect } from "react";
import TaskModal from "../../components/modal/TaskModal";
import Link from "next/link";
import { useRouter } from "next/router";
import { removeFeed, FeedItem } from "../../provider/modules/feed";
import { AppDispatch, RootState } from "../../provider";
import { useDispatch, useSelector } from "react-redux";
import { showTaskModal } from "../../provider/modules/taskModal";

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  // 백엔드에서 온 MQ 객체의 task Id
  const itemId = 1;

  const id = router.query.id as string;
  console.log(id);

  const feedItem = useSelector((state: RootState) =>
    state.feed.data.find((item) => item.id === +id)
  );

  const isRemoveCompleted = useSelector(
    (state: RootState) => state.feed.isRemoveCompleted
  );

  const DeleteClick = () => {
    dispatch(removeFeed(+id));
  };

  const showModal = () => {
    const taskProp = {
      isOn: true,
      taskItemId: itemId,
    };
    dispatch(showTaskModal(taskProp));
  };

  useEffect(() => {
    isRemoveCompleted;
  }, [isRemoveCompleted]);

  return (
    <section style={{ width: "70vw" }} className="mx-auto">
      <TaskModal />
      <div className="feed">
        <div>
          <h2>🔔Feed</h2>
        </div>
        <table style={{ width: "60vw" }} className="mx-auto">
          <div className="card">
            <div className="card-header">
              📔Wiki
              <div
                className="d-grid gap-2 d-md-flex justify-content-md-end"
                onClick={() => {
                  DeleteClick();
                }}
              >
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">제목입니다</h5>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link href="/wiki/detail/{id}">
                  <a className="btn btn-warning">상세보기로 이동</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              task
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => {
                    DeleteClick();
                  }}
                ></button>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">협업툴 만들기1</h5>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link href="/board">
                  <a
                    href="#"
                    onClick={() => {
                      showModal();
                    }}
                    className="btn btn-warning"
                  >
                    상세보기로 이동
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </table>
      </div>
    </section>
  );
};

export default Feed;
