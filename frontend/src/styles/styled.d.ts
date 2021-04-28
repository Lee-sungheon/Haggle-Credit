import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      text: string;
      background: string;
      grey_text: string;
      input_text: string;
    };
  }
}