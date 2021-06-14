import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  name: character.name,
  description: character.description ,
  rating: character.episode.length / 5,
  species: character.species,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    shortDescription: character.description,
    characterRating: character.rating,
    species: character.species,
    gender: character.gender,
  } as unknown as apiModel.Character);
