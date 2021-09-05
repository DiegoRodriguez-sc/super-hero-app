import { type } from "../types/type";

export const setNewHero = (hero) => ({
  type:type.herosAdd,
  payload: hero,
});

export const deleteHero = (heroID) => ({
  type:type.heroDelete,
  payload: heroID,
});
