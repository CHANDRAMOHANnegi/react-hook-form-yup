import React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const {
    formState: { errors },
    control
  } = useForm({
    mode: "all",
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required("Name is Required")
      })
    )
  });

  return (
    <View style={styles.app}>
      <Text>Hello</Text>
      <Controller
        name={"name"}
        control={control}
        rules={{ required: false }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Name (Optional)"
            style={{
              backgroundColor: "#ffffff",
              flex: 1
            }}
            placeholder="Enter name"
            value={value}
            error={errors.name}
            onChangeText={(text) => onChange(text.toUpperCase())}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
