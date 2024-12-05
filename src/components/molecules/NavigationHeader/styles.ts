import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    icon: {
      flex: 0.42,
      marginHorizontal: s(16),
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    divider: {
      borderBottomColor: colors.LIGHT[20],
      borderBottomWidth: 0.5,
      marginTop: vs(10),
    },
  });
