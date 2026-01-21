/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

function App() {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <AppContent />
    </SafeAreaProvider>
  );
}

import React, { useState } from "react";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomString(length = 8) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [buttonColor, setButtonColor] = useState("#2196F3");
  const [button2Count, setButton2Count] = useState(1);
  const [header, setHeader] = useState("Welcome!");
  const [showSubheader, setShowSubheader] = useState(false);

  const resetAll = () => {
    setButtonColor("#2196F3");
    setButton2Count(1);
    setHeader("Welcome!");
    setShowSubheader(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} testID="header">
        {header}
      </Text>
      {showSubheader && (
        <Text style={styles.subheader} testID="subheader">
          This is a subheader
        </Text>
      )}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: buttonColor }]}
          onPress={() => setButtonColor(getRandomColor())}
          testID="button-1"
          accessibilityLabel={`Button 1 color: ${buttonColor}`}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: "#2196F3" }]}
          onPress={() => setButton2Count(button2Count + 1)}
          testID="button-2"
        >
          <Text style={styles.buttonText}>{`Button 2 (${button2Count})`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: "#2196F3" }]}
          onPress={() => setHeader(getRandomString(10))}
          testID="button-3"
        >
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: "#2196F3" }]}
          onPress={() => setShowSubheader((prev) => !prev)}
          testID="button-4"
        >
          <Text style={styles.buttonText}>Button 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.customButton, { backgroundColor: "#2196F3" }]}
          onPress={resetAll}
          testID="button-5"
        >
          <Text style={styles.buttonText}>Button 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#222",
  },
  subheader: {
    fontSize: 18,
    color: "#666",
    marginBottom: 16,
  },
  buttonWrapper: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  customButton: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
