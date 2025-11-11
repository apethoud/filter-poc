import { IColor } from '../models/color';

export const colorNameAlphabeticSorter = (a: IColor, b: IColor) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};
