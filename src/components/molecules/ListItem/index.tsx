import { ArrowRightIcon } from "assets/images/svg";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ListItemProps } from "./types";
import AppText from "atoms/AppText";
import styles from "./styles";
import { useThemeContext } from "contexts/Theme";

const ListItem = ({ title, value, onPress }: ListItemProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);

  return (
    <TouchableOpacity onPress={onPress} style={themedStyles.container}>
      <AppText text={title} />
      <View style={themedStyles.titleContainer}>
        <AppText
          text={value}
          fontSize="regular3"
          overrideTextStyle={themedStyles.right}
        />
        <ArrowRightIcon fill={currentTheme.VIOLET[100]} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
