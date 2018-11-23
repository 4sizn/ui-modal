import React from 'react';
import './Modal.scss';

const Modal = ({onClose}) => {
  return (
    <div className='overlay'>
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
        <h3>모달입니다.</h3>
        </div>
        <div className='modal-body'>
        <p>내용입니다.</p>
        </div>
        <div className='modal-footer'>
        <button onClick={onClose}></button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Modal;