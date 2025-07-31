import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./navigation/tabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
}