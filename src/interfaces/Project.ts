import * as Common from './Common';

export interface Payload extends Common.Payload {
  list: Item[];
}

export interface Item {
  name: string;
  startedAt: string;
  endedAt?: string;
  position: string;
  description: string;
  keynotes: string[];
  links?: Links;
  skills?: Common.Skill[];
  images?: ProjectImage[];
}

export interface Links {
  site?: string;
  git?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}
