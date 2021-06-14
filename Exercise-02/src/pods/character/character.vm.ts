export interface Character {
  id: string;
  name: string;
  description: string;
  rating: number;
  species: string;
  gender: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  description: '',
  rating: 3,
  species: '',
  gender: '',
});
