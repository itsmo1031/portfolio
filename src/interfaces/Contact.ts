import * as Common from './Common';

export interface Payload extends Common.Payload {
  list: Item[];
}

export type Social = "Email" | "Blog" | "LinkedIn" | "GitHub" | "Twitter";

export interface Item {
  name: Social;
  href: string;
}
