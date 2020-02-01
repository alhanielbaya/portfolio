import React, { useState } from 'react';
import styles from './Card.module.scss';
import { IProject } from '../../store/projectReducer/projectTypes';
import Icon from './Icon';
import Demo from './Demo';

const Card: React.FC<{ project: IProject }> = props => {
  const {
    name,
    pic: { url: picUrl, alt: picAlt },
    technologies,
    shortDesc,
    githubLink,
    demoGif,
    demoLink
  } = props.project;

  const [isOpen, setOpen] = useState<boolean>(false);

  function openModal() {
    setOpen(true);
  }

  return (
    <div className={`${styles.root} `}>
      <img src={picUrl} alt={picAlt} onClick={openModal} />

      <h1 className='h1' onClick={openModal}>
        {name}
      </h1>

      <p>{shortDesc}</p>

      <div className={`${styles.icons}`}>
        {technologies.map((item: string, index: number) => {
          return <Icon name={item} key={index} />;
        })}
      </div>

      <div className={`container`}>
        <div className='columns'>
          <div
            className={`${styles.buttons} col-6 col-xl-10 col-md-12 col-mx-auto`}
          >
            <a
              href={githubLink}
              className={`btn btn-primary btn-lg col-mx-auto`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Source Code
            </a>
            <button
              className={`btn btn-primary btn-lg col-mx-auto`}
              onClick={openModal}
            >
              Demo
            </button>
          </div>
        </div>
      </div>

      <Demo
        name={name}
        isOpen={isOpen}
        setOpen={setOpen}
        demoGif={demoGif}
        demoLink={demoLink}
      ></Demo>
    </div>
  );
};

export default Card;
