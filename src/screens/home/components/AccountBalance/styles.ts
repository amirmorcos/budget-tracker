import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    account: {
      textAlign: "center",
      color: colors.LIGHT[20],
    },
    balance: {
      textAlign: "center",
      marginTop: vs(10),
      fontSize: ms(40),
      lineHeight: ms(40),
    },
    incomeCard: {
      backgroundColor: colors.GREEN[100],
      width: s(160),
      borderRadius: 30,
    },
    expensesCard: {
      backgroundColor: colors.RED[100],
      width: s(160),
      borderRadius: 30,
    },
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: vs(30),
    },
    title: {
      color: colors.LIGHT[100],
    },
    amount: {
      color: colors.LIGHT[100],
      fontSize: ms(22),
      lineHeight: ms(22),
      width: s(80),
    },
    gapContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: s(10),
    },
    amountContainer: {
      gap: s(6),
    },
    iconContainer: {
      borderRadius: 16,
      height: s(48),
      width: s(48),
      backgroundColor: colors.LIGHT[100],
      justifyContent: "center",
      alignItems: "center",
    },
  });
