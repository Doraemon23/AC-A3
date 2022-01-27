import React from "react";
import { Button } from "react-native";

export default function CButton(props) {
  return <Button onPress={props.action} title={props.title} />;
}