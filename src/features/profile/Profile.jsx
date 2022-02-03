import { useSelector } from "react-redux";
import {
  ChangePhoto,
  Modal,
  ModalList,
  ProfileBtns,
  ProfileData,
  ProfileImages,
} from "../../components";
import "./profile.css";

export const Profile = () => {
  const { showFollowersModal, showFollowingModal, showProfileModal } =
    useSelector((state) => state.profileReducer);

  return (
    <>
      <header className="profile__header">
        <ProfileImages />
        <ProfileData />
        <ProfileBtns />
      </header>
      <main className="profile__main">
        <h4 className="post__heading">Posts</h4>
        {/* {posts?  */}
        <ul className="profile__list">
          <li className="post__link">Post 1</li>
          <li className="post__link">Post 2</li>
        </ul>
        {/* :<p>No posts </p> */}
        {/* } */}
      </main>
      {showProfileModal && (
        <Modal>
          <ChangePhoto />
        </Modal>
      )}
      {showFollowersModal && (
        <Modal>
          <ModalList heading={"followers"} />
        </Modal>
      )}
      {showFollowingModal && (
        <Modal>
          <ModalList heading={"following"} />
        </Modal>
      )}
    </>
  );
};
