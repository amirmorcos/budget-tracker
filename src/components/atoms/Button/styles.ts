import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import appFonts from "theme/fonts";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.VIOLET[20],
      borderRadius: 40,
      paddingHorizontal: s(14),
      paddingVertical: vs(10),
    },
    normal: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      borderRadius: 16,
      backgroundColor: colors.VIOLET[100],
    },
    normalText: {
      color: colors.LIGHT[80],
      ...appFonts.title3,
    },
    title: {
      color: colors.VIOLET[100],
    },
    borderedButton: {
      borderColor: colors.LIGHT[20],
      borderWidth: 1,
      backgroundColor: undefined,
    },
    borderedTitle: {
      color: colors.DARK[100],
    },
    disabled: {
      backgroundColor: colors.LIGHT[20],
    },
  });
