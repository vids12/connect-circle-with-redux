import { useDispatch } from "react-redux";
import {
  TOGGLE_FOLLOWER_MODAL,
  TOGGLE_FOLLOWING_MODAL,
} from "../../../features/profile/profileSlice";
import "./ProfileBtns.css";

export function ProfileBtns() {
  const dispatch = useDispatch();
  return (
    <section className="profile__follow-btns">
      <button className="profile__btn btn">6 post</button>
      <button
        className="profile__btn btn"
        onClick={() => dispatch(TOGGLE_FOLLOWER_MODAL())}
      >
        {" "}
        2 followers
      </button>
      <button
        className="profile__btn btn"
        onClick={() => dispatch(TOGGLE_FOLLOWING_MODAL())}
      >
        0 following
      </button>
    </section>
  );
}
