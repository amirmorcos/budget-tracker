import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.RED[100],
    },
    centeredContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    amount: {
      fontSize: ms(48),
      lineHeight: ms(48),
      color: colors.LIGHT[100],
    },
    time: {
      marginTop: vs(10),
    },
    infoTitle: {
      color: colors.LIGHT[20],
    },
    gap: {
      gap: s(8),
    },
    card: {
      marginTop: vs(20),
      flexDirection: "row",
      justifyContent: "space-around",
    },
    descriptionTitle: {
      marginTop: s(20),
      marginBottom: s(10),
    },
    description: {
      color: colors.DARK[100],
    },
    descriptionValue: {
      color: colors.LIGHT[80],
    },
  });
