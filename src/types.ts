export type TypeSkillDataItem = {
  id: string;
  title: string;
};

export type TypeProjectItem = {
  id: string;
  img: string;
  name: string;
  techList: string[];
  liveLink: string;
  gitRepo: string;
};

export type TypeFormValues = {
  name: string;
  email: string;
  message: string;
};

export type TypeFormErrors = {
  name?: string;
  email?: string;
  message?: string;
};
