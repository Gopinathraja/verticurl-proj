import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '360px',
    height: '350px',
  },
};


Modal.setAppElement('body');

function ModalData(props) {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    props.toggle(false);
  }
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >  
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add/Modify Jobs</h2>
        <button class= "closeIcon" onClick={closeModal}>X</button>
        {props.children}
      </Modal>
    </div>
  );
}

export  default ModalData;
