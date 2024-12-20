import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import appFonts from "theme/fonts";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    filterContainer: {
      flexDirection: "row",
      marginVertical: vs(12),
      gap: s(6),
      flexWrap: "wrap",
    },
    applyButton: {
      marginTop: vs(10),
    },
    applyButtonText: {
      color: colors.LIGHT[80],
      ...appFonts.title3,
    },
  });
