import { IProfileState } from './profileTypes';

const initialState: IProfileState = {
  name: 'Al Haniel Baya',
  pic: 'https://avatars2.githubusercontent.com/u/43535014?v=4',
  email: 'alstrom201@gmail.com',
  location: 'San Fernando Valley, CA',
  shortDesc: 'Full Stack Web Developer',
  socialMedia: [
    {
      name: 'github',
      link: 'https://github.com/alhanielbaya'
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/al-haniel-baya-5a346b188/'
    }
  ]
};

export const profileReducer = (
  state = initialState,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
