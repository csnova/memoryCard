import { useEffect, useState } from "react";

const Modal = ({ modalText }) => {
  const modal = document.getElementById("myModal");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <p>{modalText}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
