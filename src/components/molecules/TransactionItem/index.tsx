import { AppText } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  FilterOption,
  formatTransactionAmount,
  formatTransactionDate,
  getTransactionInfo,
} from "utils/transaction";
import styles from "./styles";
import { TransactionItemProps } from "./types";

const TransactionItem = ({
  overrideContainerStyle,
  onPress,
  item,
  disabled,
}: TransactionItemProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);

  const TransactionInfo = getTransactionInfo(item.category, currentTheme);

  return (
    <TouchableOpacity
      disabled={disabled}
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
          <AppText text={TransactionInfo.text} />
          <AppText
            numberOfLines={1}
            text={item.description}
            fontSize="regular3"
            overrideTextStyle={themedStyles.description}
          />
        </View>
      </View>

      <View style={themedStyles.gap}>
        <AppText
          fontFamily="semiBold"
          text={`${
            item.type === FilterOption.EXPENSES ? "-" : "+"
          }${formatTransactionAmount(item.amount)}`}
          overrideTextStyle={[
            themedStyles.amount,
            {
              color:
                item.type === FilterOption.EXPENSES
                  ? currentTheme.RED[100]
                  : currentTheme.GREEN[100],
            },
          ]}
        />
        <AppText
          text={formatTransactionDate(item.createdAt)}
          fontSize="regular3"
          overrideTextStyle={themedStyles.time}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
