import { ArrowDown } from "assets/images/svg";
import { useThemeContext } from "contexts/Theme";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";
import { DropdownProps } from "./types";
import { View } from "react-native";
import AppText from "atoms/AppText";

const Dropdown = ({
  placeholder,
  overrideContainerStyle,
  items,
  onBlur,
  onChangeValue,
  errorMessage,
}: DropdownProps) => {
  const { currentTheme } = useThemeContext();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const themedStyles = styles(currentTheme);

  return (
    <View>
      <DropDownPicker
        onClose={() => {
          onBlur?.();
        }}
        open={open}
        value={value}
        ArrowDownIconComponent={() => <ArrowDown />}
        ArrowUpIconComponent={() => (
          <ArrowDown
            style={{
              transform: [{ rotate: open ? "180deg" : "0deg" }],
            }}
          />
        )}
        items={items}
        setOpen={setOpen}
        onChangeValue={(value) => {
          onChangeValue(value ?? "");
        }}
        setValue={(value) => {
          setValue(value);
        }}
        placeholder={placeholder}
        placeholderStyle={themedStyles.placeholder}
        dropDownContainerStyle={themedStyles.dropdownContainer}
        style={[themedStyles.container, overrideContainerStyle]}
      />
      {errorMessage && (
        <AppText
          text={errorMessage}
          fontSize="small"
          overrideTextStyle={{
            color: currentTheme.RED[100],
            marginTop: 4,
          }}
        />
      )}
    </View>
  );
};

export default Dropdown;
