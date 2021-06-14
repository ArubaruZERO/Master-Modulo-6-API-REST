import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  name: character.name,
  picture: character.image,
 description:
    character.name +
    ' is ' +
    character.status +
    ' and belongs to ' +
    character.species +
    ' specie. ' +
    'Original from ' +
    character.origin.name,
  rating: character.episode.length / 5,
  species: character.species,
});

