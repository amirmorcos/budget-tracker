import { AppText, Card } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { ActionListProps } from "./types";

const ActionList = ({ items, overrideContainerStyle }: ActionListProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  return (
    <Card overrideContainerStyle={overrideContainerStyle}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={`action-list${index}`}
          onPress={item.onPress}
          style={themedStyles.listItemContainer}
        >
          <View style={themedStyles.listItem}>{item.icon}</View>
          <AppText text={item.title} />
        </TouchableOpacity>
      ))}
    </Card>
  );
};

export default ActionList;
