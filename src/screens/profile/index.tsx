import { useNavigation } from "@react-navigation/native";
import { SettingsIcon, UserIcon } from "assets/images/svg";
import AppText from "atoms/AppText";
import { useThemeContext } from "contexts/Theme";
import ActionList from "molecules/ActionList";
import { ProfileScreenProps, ProfileStackParams } from "navigation/types";
import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import { View } from "react-native";
import styles from "./styles";

const ProfileScreen = () => {
  const { currentTheme } = useThemeContext();

  const { navigate } = useNavigation<ProfileScreenProps>();
  const themedStyles = styles(currentTheme);

  const onSettingsPress = () => {
    navigate("Settings");
  };

  return (
    <ScreenLayout>
      <View style={themedStyles.userInfoContainer}>
        <View style={themedStyles.imageContainer}>
          <UserIcon />
        </View>
        <View style={themedStyles.usernameContainer}>
          <AppText
            text="Username"
            fontSize="regular3"
            overrideTextStyle={themedStyles.username}
          />

          <AppText
            text="Foodics"
            fontSize="title2"
            fontFamily="semiBold"
            overrideTextStyle={themedStyles.name}
          />
        </View>
      </View>

      <ActionList
        overrideContainerStyle={{ marginTop: 30 }}
        items={[
          {
            icon: <SettingsIcon />,
            title: "Settings",
            onPress: onSettingsPress,
          },
        ]}
      />
    </ScreenLayout>
  );
};

export default ProfileScreen;
