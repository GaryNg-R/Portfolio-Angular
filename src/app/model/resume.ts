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
  adddress: Address;
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
}
