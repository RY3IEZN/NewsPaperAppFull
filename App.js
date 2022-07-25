/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Article from "./compnents/Article";
import TabNavigators from "./navigators/TabNavigators";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return <TabNavigators />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
