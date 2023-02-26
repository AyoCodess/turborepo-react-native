import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Text,
  ScrollView,
  View,
} from "react-native";

export interface ButtonTestProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Header({ text, onClick }: ButtonTestProps) {
  return (
    <>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}>
        <View style={styles.header}>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    maxWidth: 200,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: "15px",
    backgroundColor: "#7f80ed",
  },
  text: {
    color: "white",
  },
  header: {
    gap: 10,
    flexDirection: "row",
    padding: "10px",
    backgroundColor: "#7f80ed",
  },
});
