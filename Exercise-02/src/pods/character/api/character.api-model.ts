import { Lookup } from "common/models";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  description: string;
  origin: {
    name: string;
    url: string
  },

  location: {
    name: string;
    url: string;
  };
  image: string;
  episode:string[];
  url: string;
  created: string;

}

export const mockGender: Lookup[] = [
  {
    id: 'Female',
    name: 'Female',
  },
  {
    id: 'Male',
    name: 'Male',
  },
  {
    id: 'unknown',
    name: 'unknown',
  },
];
