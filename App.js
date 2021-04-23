import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      console.log("response : ", response);
      const location = await Location.getCurrentPositionAsync();
      console.log("location : ", location);
    } catch (error) {
      Alert("Cna't find you.", "So sad", error);
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
