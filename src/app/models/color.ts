type hueType = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';

type temperatureType = 'warm' | 'cool';

type brightnessType = 'light' | 'medium' | 'dark';

export interface IColor {
  id: number;
  hue: hueType;
  temperature: temperatureType;
  brightness: brightnessType;
  value: string;
  name: string;
  isNamedAfterAFlower: boolean;
  isNamedAfterAFood: boolean;
}
