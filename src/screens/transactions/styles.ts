import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    filter: {
      alignSelf: "flex-end",
      borderColor: colors.LIGHT[20],
      padding: s(6),
      borderWidth: 1,
      borderRadius: 8,
    },
    list: {
      paddingTop: vs(20),
    },
    listContent: {
      paddingBottom: vs(50),
    },
    seperator: {
      marginTop: vs(10),
    },
  });
