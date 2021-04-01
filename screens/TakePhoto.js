import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Actions = styled.View`
  flex: 0.35;
  padding: 0 50px;
  align-items: center;
  justify-content: space-around;
`;

const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TakePhotoBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.8);
`;

const SliderContainer = styled.View``;

export default function TakePhoto() {
  const [ok, setOk] = useState(false);
  const [zoom, setZoom] = useState(0);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
  const getPermissions = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    setOk(granted);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  const onCameraSwitch = () => {
    if (cameraType === Camera.Constants.Type.front) {
      setCameraType(Camera.Constants.Type.back);
    } else {
      setCameraType(Camera.Constants.Type.front);
    }
  };
  const onZoomValueChange = (e) => {
    console.log(e);
    setZoom(e);
  };
  const onFlashChange = () => {};
  return (
    <Container>
      <Camera type={cameraType} style={{ flex: 1 }} zoom={zoom} />
      <Actions>
        <SliderContainer>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#ffffff"
            maximumTrackTintColor="rgba(255, 255, 255, 0.5)"
            onValueChange={onZoomValueChange}
          />
        </SliderContainer>
        <ButtonsContainer>
          <TakePhotoBtn />

          <TouchableOpacity onPress={onCameraSwitch}>
            <Ionicons
              color="white"
              size={39}
              name={
                cameraType === Camera.Constants.Type.front
                  ? "camera-reverse"
                  : "camera"
              }
            />
          </TouchableOpacity>
        </ButtonsContainer>
      </Actions>
    </Container>
  );
}
