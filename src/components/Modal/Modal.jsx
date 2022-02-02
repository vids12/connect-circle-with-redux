import { ImCross } from "react-icons/im";
import "./Modal.css";

export function Modal({ children }) {
  return (
    <div className="modal__bg">
      <article className="modal">
        <div className="box">
          <span>
            <ImCross className="modal__close-btn" />
          </span>
          {children}
        </div>
      </article>
    </div>
  );
}
