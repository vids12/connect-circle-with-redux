import { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ChangePhoto, Modal, ModalList } from "../../components";
import "./profile.css";

export const Profile = () => {
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="profile__header">
        <div className="profile__images">
          <div className="profile__user-cover-photo">&nbsp;</div>
          <img
            src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="profile-pic-user"
            className="profile__user-photo"
            onClick={() => setShowProfileModal(true)}
          />
        </div>
        <section className="profile__data">
          <h1 className="profile__username">
            username
            <span className="profile__edit" onClick={() => navigate("/edit")}>
              <RiPencilFill />
            </span>
          </h1>
          <p className="profile__name">Name</p>
          <p className="profile__email">Email</p>
          <p className="profile__address">Address</p>
          <p className="profile__designation">Designation</p>
        </section>
        <section className="profile__follow-btns">
          <button className="profile__btn btn">6 post</button>
          <button
            className="profile__btn btn"
            onClick={() => setShowFollowersModal(true)}
          >
            {" "}
            2 followers
          </button>
          <button
            className="profile__btn btn"
            onClick={() => setShowFollowingModal(true)}
          >
            0 following
          </button>
        </section>
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
