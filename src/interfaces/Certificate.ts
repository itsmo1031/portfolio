import * as Common from './Common';

export interface Payload extends Common.Payload {
  list: Item[];
}

export interface Item {
  name: string;
  validFrom: string;
  validThru: string;
  issuer: string;
}
