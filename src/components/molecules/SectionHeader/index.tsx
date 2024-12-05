import AppText from "atoms/AppText";
import { Button } from "atoms/index";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { SectionHeaderProps } from "./types";

const SectionHeader = ({
  title,
  buttonTitle,
  onPress,
  overrideContainerStyle,
  overrideTextStyle,
}: SectionHeaderProps) => {
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <AppText text={title} overrideTextStyle={overrideTextStyle} />
      {buttonTitle && onPress && (
        <Button title={buttonTitle} onPress={onPress} />
      )}
    </View>
  );
};

export default SectionHeader;
