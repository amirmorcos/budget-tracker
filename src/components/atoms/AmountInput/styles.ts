import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: vs(8),
      gap: s(2),
    },
    prefix: {
      fontSize: ms(64),
      lineHeight: ms(64),
      color: colors.LIGHT[100],
    },
    input: {
      fontSize: ms(64),
      color: colors.LIGHT[100],
    },
    inputContainer: {
      borderWidth: 0,
      marginTop: 0,
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
  });
