import Axios from 'axios';
import { CharacterEntityApi, GetCharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];
const url = 'https://rickandmortyapi.com/api/character';


export const getCharacterCollection = async (): Promise<GetCharacterEntityApi> => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json()
  } else {
    throw Error(response.statusText);

  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`,{
    method: 'DELETE'
  });
  console.log(response)
  return response.ok
};
