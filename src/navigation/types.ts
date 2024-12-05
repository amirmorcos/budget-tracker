import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProfileStackParams = {
  Profile: undefined;
  Settings: undefined;
  Theme: undefined;
};

export type ProfileScreenProps = NativeStackNavigationProp<ProfileStackParams>;
