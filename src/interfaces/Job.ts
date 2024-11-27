import * as Common from './Common';

export interface Payload extends Common.Payload {
  list: Item[];
}

export interface Item {
  company: string;
  location: string;
  position: string;
  startedAt: string;
  endedAt?: string;
  works: Work[];
}

export interface Work {
  title: string;
  description: string;
  keynotes?: string[];
  startedAt: string;
  endedAt?: string;
  skills?: Common.Skill[];
}
