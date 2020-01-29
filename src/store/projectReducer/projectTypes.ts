export interface IProjectState {
  projects: Array<IProject>;
}

export interface IProject {
  name: string;
  pic: {
    url: string;
    alt: string;
  };
  technologies: Array<string>;
  shortDesc: string;
  githubLink: string;
  demoLink: string;
  demoGif: string;
}
