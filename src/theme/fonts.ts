import { ms, vs } from "react-native-size-matters/extend";
import { AppFonts, FontFamily } from "./types";

export const fonts: FontFamily = {
  black: "Inter-Black",
  blackItalic: "Inter-BlackItalic",
  bold: "Inter-Bold",
  boldItalic: "Inter-BoldItalic",
  regular: "Inter-Regular",
  semiBold: "Inter-SemiBold",
  medium: "Inter-medium",
};

const appFonts: AppFonts = {
  titleX: {
    fontSize: ms(64),
    lineHeight: vs(80),
  },
  title1: {
    fontSize: ms(32),
    lineHeight: vs(34),
  },
  title2: {
    fontSize: ms(24),
    lineHeight: vs(22),
  },
  title3: {
    fontSize: ms(18),
    lineHeight: vs(22),
  },
  regular1: {
    fontSize: ms(16),
    lineHeight: vs(19),
  },
  regular2: {
    fontSize: ms(16),
    lineHeight: vs(19),
  },
  regular3: {
    fontSize: ms(14),
    lineHeight: vs(18),
  },
  small: {
    fontSize: ms(13),
    lineHeight: vs(16),
  },
  tiny: {
    fontSize: ms(12),
    lineHeight: vs(12),
  },
};

export default appFonts;
