import "./ChangePhoto.css";

export function ChangePhoto() {
  return (
    <div className="change-photo">
      <heading className="modal-list__heading">
        <h1>Change Profile photo</h1>
      </heading>
      <section>
        <button className="profile_upload-btn profile-photo__btn">
          Upload Photo
        </button>
        <button className="profile_remove-btn profile-photo__btn">
          Remove Current Photo
        </button>
      </section>
    </div>
  );
}
