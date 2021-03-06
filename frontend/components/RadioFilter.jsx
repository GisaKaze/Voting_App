import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-radio-buttons-group";

const RadioFilter = ({ options = [], changeSelected }) => {
  const [selected, setselected] = useState(null);

  useEffect(() => {
    changeSelected && changeSelected(selected);
  }, [selected]);

  return (
    <View style={{ alignItems: "flex-start" }}>
      {options.map((option) => {
        return (
          <View
            key={option}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <RadioButton
              color={option === selected ? "#3330E4" : ""}
              selected={selected === option}
              onPress={() => {
                setselected(option);
              }}
            />
            <Text
              onPress={() => {
                setselected(option);
              }}
            >
              {option}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default RadioFilter;
