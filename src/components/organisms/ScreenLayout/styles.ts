import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.LIGHT[60],
    },
    content: {
      paddingVertical: vs(20),
      paddingHorizontal: s(16),
    },
  });
