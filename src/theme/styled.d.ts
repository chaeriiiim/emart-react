import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    color: {
      mainYellow: string;
      blue: string;
      black: string;
      secondary: string;
      white: string;
      gray100: string;
      gray150: string;
      gray200: string;
      gray300: string;
      gray350: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
    };
  }
}
