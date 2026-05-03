import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      text: {
        heading: string;
        prose: string;
      };
      background: string;
      blue: string;
      olive: string;
      yellow: string;
      red: string;
      maroon: string;
      grays: string[];
      white: string;
      blacks: string[];
    };
    breakpoints: string[];
    fonts: {
      system: string[];
      serif: string[];
    };
  }
}
