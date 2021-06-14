import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockGender} from './character.mock-data';
import Axios from 'axios';

const characterUrl = `${process.env.API_REST_JSON_SERVER_URL}/characters`;

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await Axios.get<Promise<Character>>(`${characterUrl}/${id}`);
  return response.data;
};

export const getGender = async (): Promise<Lookup[]> => {
  return mockGender;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(`${characterUrl}/${character.id}`, character);
  } else {
    await Axios.post<Character>(characterUrl, character);
  }
  return true;
};
