export interface IFormValues {
  name: string;
  email: string;
  message: string;
}

export interface IFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface IProjectItem {
  id?: string;
  img: string;
  name: string;
  techList: string[];
  liveLink: string;
  gitRepo: string;
}

export interface ISkillItem {
  id: string;
  title: string;
}
