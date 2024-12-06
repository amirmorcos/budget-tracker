import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      paddingVertical: vs(16),
      borderRadius: 16,
      borderColor: colors.LIGHT[40],
      marginTop: vs(10),
      marginBottom: vs(4),
      paddingHorizontal: s(12),
    },
  });
