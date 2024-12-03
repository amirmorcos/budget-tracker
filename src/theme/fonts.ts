import { ms } from "react-native-size-matters/extend";
import { AppFonts } from "./types";

export const fonts = {
  black: "Inter-Black",
  blackItalic: "Inter-BlackItalic",
  bold: "Inter-Bold",
  boldItalic: "Inter-BoldItalic",
  regular: "Inter-Regular",
  semiBold: "Inter-SemiBold",
};

const appFonts: AppFonts = {
  titleX: {
    fontSize: ms(64),
    lineHeight: ms(80),
  },
  title1: {
    fontSize: ms(32),
    lineHeight: ms(34),
  },
  title2: {
    fontSize: ms(24),
    lineHeight: ms(22),
  },
  title3: {
    fontSize: ms(18),
    lineHeight: ms(22),
  },
  regular1: {
    fontSize: ms(16),
    lineHeight: ms(19),
  },
  regular2: {
    fontSize: ms(16),
    lineHeight: ms(19),
  },
  regular3: {
    fontSize: ms(14),
    lineHeight: ms(18),
  },
  small: {
    fontSize: ms(13),
    lineHeight: ms(16),
  },
  tiny: {
    fontSize: ms(12),
    lineHeight: ms(12),
  },
};

export default appFonts;
