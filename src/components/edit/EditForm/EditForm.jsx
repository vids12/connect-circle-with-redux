import { useNavigate } from "react-router";
import "./EditForm.css";

export function EditForm() {
  const navigate = useNavigate();
  return (
    <form className="edit__form">
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="name"
          placeholder="Name"
        />
        <label htmlFor="name" className="form__label">
          Name
        </label>
      </div>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="username"
          placeholder="Username"
        />
        <label htmlFor="username" className="form__label">
          Username
        </label>
      </div>
      <div className="form__group">
        <input
          type="email"
          className="form__input"
          id="email"
          placeholder="Email Address"
        />
        <label htmlFor="email" className="form__label">
          Email
        </label>
      </div>
      <div className="form__group">
        <input
          type="phone"
          className="form__input"
          id="phone"
          placeholder="Phone Number"
        />
        <label htmlFor="phone" className="form__label">
          Phone Number
        </label>
      </div>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="designation"
          placeholder="Designation"
        />
        <label htmlFor="designation" className="form__label">
          Designation
        </label>
      </div>
      <div className="btn-group">
        <button className="primary-btn btn">Edit</button>
        <button
          className="secondary-btn btn"
          onClick={() => navigate("/profile")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
