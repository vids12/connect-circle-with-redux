import "./ProfileData.css";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function ProfileData() {
  const navigate = useNavigate();
  return (
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
  );
}
