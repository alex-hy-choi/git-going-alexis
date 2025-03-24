import { useState } from "react";

function Modal(content) {

    return (
        <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick={closeModal()}>&times;</span>
            <h1 id="modal-title">{content.title}</h1>
            <img id="modal-image" src={content.img} alt=""/>
        </div>

        </div>
    );
};
  
  export default Modal;