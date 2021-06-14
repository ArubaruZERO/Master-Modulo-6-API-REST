import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockGender, mockCharacterCollection } from './character.mock-data';

const characterListUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${characterListUrl}/${id}`);
  if (response.ok) {
    return await response.json()
  } else {
    throw Error (response.statusText)
  }
};

export const getGender = async (): Promise<Lookup[]> => {
  return mockGender;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
