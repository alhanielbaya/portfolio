import React from 'react';
import styles from './Projects.module.scss';
import Card from './Card';
import { useProjects } from '../../hooks/projectHooks';
import { IProject } from '../../store/projectReducer/projectTypes';

const Projects: React.FC = () => {
  const projects = useProjects();

  return (
    <div className={`${styles.root} `}>
      {projects.map((item: IProject, index: number) => {
        return <Card project={item} key={index}></Card>;
      })}
    </div>
  );
};

export default Projects;
