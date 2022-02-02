import "./ModalList.css";

export function ModalList({ heading }) {
  return (
    <div className="modal-list">
      <heading className="modal-list__heading">
        <h1>{heading}</h1>
      </heading>
      <section>
        <ul className="modal-list__list">
          {Array(20)
            .fill("")
            .map((data) => {
              return (
                <li className="modal-list__item">
                  <img
                    src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    alt="user-pic"
                    className="followers__img "
                  />
                  <span>
                    <h4>Username</h4>
                    <p>Name</p>
                  </span>
                  <button className="modal-list__btn btn">
                    {heading === "following" ? "following" : "remove"}
                  </button>
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
}
