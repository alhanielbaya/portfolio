import React from 'react';
import styles from './Profile.module.scss';
import { useProfile } from '../../hooks/profileHook';
import Icon from '../Projects/Icon';

const Profile: React.FC = () => {
  const {
    name,
    pic,
    email,
    location,
    shortDesc,
    socialMedia
    // resumeLink
  } = useProfile();

  return (
    <div className={`${styles.root}`}>
      <img
        src={pic}
        alt='Profile'
        width='200'
        className={`${styles.profile}`}
      />
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{shortDesc}</h3>

      <div className={`${styles.contactLinks} `}>
        <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
          {email}
        </a>
        {/* <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
          Resume
        </a> */}
      </div>

      <div className={`${styles.icons} `}>
        {socialMedia.map(
          (item: { name: string; link: string }, index: number) => {
            const { name, link } = item;
            return (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                key={index}
              >
                <Icon name={name}></Icon>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Profile;
