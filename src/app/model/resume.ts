export interface Resume {
  main: MainContent;
  resume: ResumeContent;
}

export interface MainContent {
  website: string;
  resumedownload: string;
}
export interface ResumeContent {
  skillmessage: string;
}
