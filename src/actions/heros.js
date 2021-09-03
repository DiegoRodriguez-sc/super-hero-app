import { type } from "../types/type";

const setLocalStorage = (id, setName) => {
  let hero = localStorage.getItem(setName) || [];
  hero.length > 0 && (hero = JSON.parse(hero));
  hero.push(id);
  localStorage.setItem(setName, JSON.stringify(hero));
};

export const startAddHero = (alignment, id) => {
  return (dispatch, getState) => {
    if (alignment === "good") {
      const { good } = getState().heros;
      if (good.length < 3) {
        setLocalStorage(id, alignment);
        dispatch(heroAddedGood(id));
      };
    } else {
      const { bad } = getState().heros;
      if (bad.length < 3) {
        setLocalStorage(id, alignment);
        dispatch(heroAddedBad(id));
      };
    };
  };
};

export const renewHero = () =>{
  return (dispatch) =>{
    let goodHero = localStorage.getItem("good") || [];
    let badHero = localStorage.getItem("bad") || [];
    if (goodHero.length > 0){
      goodHero = JSON.parse(goodHero);
      goodHero.forEach(hero => {
        dispatch(heroAddedGood(hero));
      });
    }
    if (badHero.length > 0){
      badHero = JSON.parse(badHero);
      badHero.forEach(hero => {
        dispatch(heroAddedBad(hero));
      });
    }
  };
};

const heroAddedGood = (id) => ({
  type: type.herosAddGood,
  payload: id,
});

const heroAddedBad = (id) => ({
  type: type.herosAddBad,
  payload: id,
});

export const startDeleteHero = (alignment,id) => {
  return (dispatch) => {

    let hero = localStorage.getItem(alignment);
    hero = JSON.parse(hero);
    hero = hero.filter(h => h !== id );
    localStorage.setItem(alignment, JSON.stringify(hero));

    dispatch(deleteHero(id));

  };
};

const deleteHero = (id) => ({
  type:type.heroDelete,
  payload:id
});

