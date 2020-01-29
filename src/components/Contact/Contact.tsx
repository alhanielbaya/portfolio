import React from 'react';
import styles from './Contact.module.scss';
import { useProfile } from '../../hooks/profileHook';
import { useScrolledBottom } from '../../hooks/windowHooks';

const Contact: React.FC = () => {
  const { email } = useProfile();
  const scrolledBottom = useScrolledBottom();

  return (
    <>
      <div className={`${styles.contact} `}>
        <h1>
          I'm available for work,
          <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
            {' '}
            get in touch.
          </a>
        </h1>
      </div>

      <div className={`${styles.root}  ${scrolledBottom ? styles.open : ''}`}>
        <a
          className={`btn btn-primary`}
          target='_blank'
          rel='noopener noreferrer'
          href={`mailto:${email}`}
        >
          Get in touch
        </a>
      </div>
    </>
  );
};

export default Contact;
