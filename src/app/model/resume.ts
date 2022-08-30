export interface Resume {
  main: MainContent;
  resume: ResumeContent;
}

export interface MainContent {
  name: string;
  occupation: string;
  description: string;
  image: string;
  bio: string;
  contactMessage: string;
  email: string;
  address: { [key: string]: string };
  website: string;
  resumedownload: string;
  social: Soical[];
}

export interface Address {
  city: string;
  state: string;
  zip: string;
}
export interface Soical {
  name: string;
  url: string;
  className: string;
}

export interface ResumeContent {
  skillmessage: string;
  education: Education;
  work: Work[];
  skills: SKill[];
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
}

export interface Work {
  company: string;
  title: string;
  years: string;
  descriptions: Descriptions[];
}

export interface Descriptions {
  description: string;
}

export interface SKill {
  name: string;
  level: string;
}
