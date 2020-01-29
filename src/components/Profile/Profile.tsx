import React from 'react';
import styles from './Profile.module.scss';
import { useProfile } from '../../hooks/profileHook';
import Icon from '../Projects/Icon';

const Profile: React.FC = () => {
  const { name, pic, email, location, shortDesc, socialMedia } = useProfile();

  return (
    <div className={`${styles.root}`}>
      <img src={pic} alt='Profile' className={`${styles.profile}`} />
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{shortDesc}</h3>
      <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
        {email}
      </a>
      <div className={`${styles.icons} `}>
        {socialMedia.map((item: { name: string; link: string }) => {
          const { name, link } = item;
          return (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <Icon name={name}></Icon>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
