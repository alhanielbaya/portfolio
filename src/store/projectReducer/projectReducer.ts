import { IProjectState } from './projectTypes';
import projects from './projects';

const initialState: IProjectState = {
  projects
};

export const projectReducer = (
  state = initialState,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
