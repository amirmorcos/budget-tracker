import { useThemeContext } from "contexts/Theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { AppText } from "atoms/index";
import { TransactionItemProps } from "./types";
import { getTransactionIcon } from "utils/transaction";
import { TransactionType } from "models/Transaction";

const TransactionItem = ({
  overrideContainerStyle,
  onPress,
}: TransactionItemProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);

  const TransactionInfo = getTransactionIcon(
    TransactionType.SHOPPING,
    currentTheme
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[themedStyles.container, overrideContainerStyle]}
    >
      <View style={themedStyles.infoContainer}>
        <View
          style={[
            themedStyles.iconContainer,
            { backgroundColor: TransactionInfo.color },
          ]}
        >
          <TransactionInfo.icon />
        </View>
        <View style={themedStyles.gap}>
          <AppText text="Shopping" />
          <AppText
            numberOfLines={1}
            text="Buy text"
            fontSize="regular3"
            overrideTextStyle={themedStyles.description}
          />
        </View>
      </View>

      <View style={themedStyles.gap}>
        <AppText
          fontFamily="semiBold"
          text="-$125"
          overrideTextStyle={themedStyles.amount}
        />
        <AppText
          text="10:00 AM"
          fontSize="regular3"
          overrideTextStyle={themedStyles.time}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
