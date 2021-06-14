import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const CharacterListUrl = `${process.env.API_REST_JSON_SERVER_URL}/characters`;

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await Axios.get<Promise<CharacterEntityApi[]>>(CharacterListUrl);
  return response.data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(
    `${process.env.API_REST_JSON_SERVER_URL}${CharacterListUrl}/${id}`
  );
  return true;
};
