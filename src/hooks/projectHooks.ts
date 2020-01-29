import { useSelector } from 'react-redux';
import { IRootState } from '..';
import { IProject } from '../store/projectReducer/projectTypes';

export const useProjects = (): IProject[] => {
  const projects = useSelector((state: IRootState) => state.projects.projects);

  return projects;
};
