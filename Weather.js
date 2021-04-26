import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: { iconName: "weather-lightning-rainy", gradient: [] },
  Drizzle: { iconName: "", gradient: [] },
  Rain: { iconName: "weather-rainy" },
  Snow: { iconName: "weather-snowy" },
  Atmosphere: { iconName: "", gradient: [] },
  Mist: { iconName: "", gradient: [] },
  Smoke: { iconName: "", gradient: [] },
  Haze: { iconName: "", gradient: [] },
  Dust: { iconName: "", gradient: [] },
  Fog: { iconName: "", gradient: [] },
  Sand: { iconName: "", gradient: [] },
  Dust: { iconName: "", gradient: [] },
  Ash: { iconName: "", gradient: [] },
  Squall: { iconName: "", gradient: [] },
  Tornado: { iconName: "", gradient: [] },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
  },
  Clouds: { iconName: "weather-cloudy", gradient: [] },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName || "alert-circle-outline"}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
