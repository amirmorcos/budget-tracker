import { ArrowDown } from "assets/images/svg";
import { useThemeContext } from "contexts/Theme";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";
import { DropdownProps } from "./types";

const Dropdown = ({
  placeholder,
  overrideContainerStyle,
  items,
}: DropdownProps) => {
  const { currentTheme } = useThemeContext();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const themedStyles = styles(currentTheme);

  return (
    <DropDownPicker
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
      setValue={setValue}
      placeholder={placeholder}
      placeholderStyle={themedStyles.placeholder}
      dropDownContainerStyle={themedStyles.dropdownContainer}
      style={[themedStyles.container, overrideContainerStyle]}
    />
  );
};

export default Dropdown;
