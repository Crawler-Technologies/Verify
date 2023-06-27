import { TextStyle } from "react-native";


const size = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
  default: 14,
};

const weight:{[key:string]:TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export  {size, weight};
