import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  TOGGLE_CHANGE_PHOTO_MODAL,
  TOGGLE_FOLLOWER_MODAL,
  TOGGLE_FOLLOWING_MODAL,
} from "../../features/profile/profileSlice";
import "./Modal.css";

export function Modal({ children }) {
  const dispatch = useDispatch();
  return (
    <div className="modal__bg">
      <article className="modal">
        <div className="box">
          <span>
            <ImCross
              className="modal__close-btn"
              onClick={() => {
                if (children.props.heading === "followers") {
                  dispatch(TOGGLE_FOLLOWER_MODAL());
                } else if (children.props.heading === "following") {
                  dispatch(TOGGLE_FOLLOWING_MODAL());
                } else {
                  dispatch(TOGGLE_CHANGE_PHOTO_MODAL());
                }
              }}
            />
          </span>
          {children}
        </div>
      </article>
    </div>
  );
}
