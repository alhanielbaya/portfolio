import React from 'react';
import styles from './Demo.module.scss';

const Demo: React.FC<{
  isOpen: boolean;
  setOpen: any;
  name: string;
  demoLink: string;
  demoGif: string;
}> = props => {
  const { isOpen, setOpen, demoLink, demoGif, name } = props;

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <div className={`modal ${isOpen ? 'active' : ''}`} id='modal-id'>
        <div className='modal-overlay' aria-label='Close'></div>
        <div className='modal-container'>
          <div className='modal-header'>
            {/* <a
              href='#close'
              className='btn btn-clear float-right'
              aria-label='Close'
              onClick={closeModal}
            ></a> */}
            <div className='modal-title h5'>{name}</div>
          </div>
          <div className='modal-body'>
            <div className='content'>
              <img src={demoGif} alt='Demo Tweeter' className={styles.gif} />
            </div>
          </div>
          <div className={`modal-footer ${styles.demofooter}`}>
            <button
              className={`btn btn-secondary btn-lg mx-2`}
              onClick={closeModal}
            >
              Close
            </button>
            <a
              href={demoLink}
              className={`btn btn-primary btn-lg mx-2`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Visit Site <i className='icon icon-forward'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
