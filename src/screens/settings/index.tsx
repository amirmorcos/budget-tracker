import { useNavigation } from "@react-navigation/native";
import { useThemeContext } from "contexts/Theme";
import { ListItem } from "molecules/index";
import { ProfileScreenProps } from "navigation/types";
import ScreenLayout from "organisms/ScreenLayout";
import React from "react";

const SettingsScreen = () => {
  const { navigate } = useNavigation<ProfileScreenProps>();
  const { selectedTheme } = useThemeContext();

  const onPress = () => {
    navigate("Theme");
  };

  return (
    <ScreenLayout navigationTitle="Settings">
      <ListItem onPress={onPress} title="Theme" value={selectedTheme} />
    </ScreenLayout>
  );
};

export default SettingsScreen;
