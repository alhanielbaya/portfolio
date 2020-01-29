export interface IProfileState {
  name: string;
  pic: string;
  email: string;
  location: string;
  shortDesc: string;
  socialMedia: Array<{
    name: string;
    link: string;
  }>;
}
