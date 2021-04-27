import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#373b44", "#4286f4"],
  },
  Drizzle: { iconName: "weather-rainy", gradient: ["#89f7fe", "#66a6ff"] },
  Rain: { iconName: "weather-pouring", gradient: ["#00c6fb", "#005bea"] },
  Snow: { iconName: "weather-snowy", gradient: ["#4da0b0", "#d39d38"] },
  Mist: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Smoke: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Haze: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Dust: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Fog: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Sand: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Dust: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Ash: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Squall: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Tornado: { iconName: "weather-hail", gradient: ["#4da0b0", "#d39d38"] },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff7300", "#fef253"],
    title: "",
    subtitle: "",
  },
  Clouds: { iconName: "weather-cloudy", gradient: ["#d7d2cc", "#304352"] },
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
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
