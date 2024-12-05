import { Platform, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: colors.LIGHT[100],
      borderRadius: 16,
      paddingVertical: vs(12),
      paddingHorizontal: s(14),
    },
  });
