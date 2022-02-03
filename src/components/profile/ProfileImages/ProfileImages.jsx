import { useDispatch } from "react-redux";
import { TOGGLE_CHANGE_PHOTO_MODAL } from "../../../features/profile/profileSlice";
import "./ProfileImages.css";

export function ProfileImages() {
  const dispatch = useDispatch();
  return (
    <div className="profile__images">
      <div className="profile__user-cover-photo">&nbsp;</div>
      <img
        src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="profile-pic-user"
        className="profile__user-photo"
        onClick={() => dispatch(TOGGLE_CHANGE_PHOTO_MODAL())}
      />
    </div>
  );
}
