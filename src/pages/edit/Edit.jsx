import "./edit.css";

export function Edit() {
  return (
    <section className="edit">
      <div className="edit__box">
        <form>
          {/* <div>
            <img
              src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="profile-pic-user"
              className="profile__user-photo"
                onClick={() => setShowProfileModal(true)}
            />
          </div> */}
          <div>
            <label htmlFor="name">Name</label>
            <input className="name" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input className="username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input className="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input className="phone" />
          </div>
          <div>
            <label htmlFor="designation">Designation</label>
            <input className="designation" />
          </div>
        </form>
      </div>
    </section>
  );
}
