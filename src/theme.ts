import {DefaultTheme} from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeColorKey = 'white' | 'textMain' | 'textNavy';

  export interface DefaultTheme {
    colors: {
      [key in DefaultThemeColorKey]: string;
    };
  }
}

const colors = {
  white: '#ffffff',
  textMain: '#F9FCFB',
  textNavy: '#2B2A4C',
};
const theme: DefaultTheme = {
  colors,
};
export default theme;
