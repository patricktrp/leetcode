import { Theme as EmotionTheme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {
    colors: {
      primary: string;
      background: string;
      backgroundLight: string;
      backgroundHighlight: string;
      problemEasy: string;
      problemMedium: string;
      problemHard: string;
  }
}
}