import React from "react";

function Modal({ isOpen, closeModal, content }) {

    const handleBookNow = () => {
        alert("Your scooter is booked!");
        closeModal(); 
      };
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <h3>Address</h3>
          
          <div class="modal-add">{content}</div>

          <button className="close book-btn" onClick={handleBookNow}>
            Book now
          </button>
        </div>
      </div>
    )
  );
}

export default Modal;
