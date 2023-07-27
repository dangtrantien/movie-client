import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

// ==================================================

const Modal = (props) => {
  return (
    // Tạo modal container và render vào trong 1 root khác
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles['modal-container']}>
          <div className={styles['modal-content']}>
            <p className={styles.button} onClick={props.onClose}>
              x
            </p>

            {props.children}
          </div>
        </div>,
        document.getElementById('overlays')
      )}
    </React.Fragment>
  );
};

export default Modal;
