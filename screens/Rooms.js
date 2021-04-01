import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Text, FlatList } from "react-native";
import { ROOM_FRAGMENT } from "../fragments";
import styled from "styled-components/native";
import ScreenLayout from "../components/ScreenLayout";

const SEE_ROOMS_QUERY = gql`
  query seeRooms {
    seeRooms {
      ...RoomParts
    }
  }
  ${ROOM_FRAGMENT}
`;

const RooomContainer = styled.View`
  background-color: black;
`;

const RoomText = styled.Text`
  color: white;
`;

export default function Rooms() {
  const { data, loading } = useQuery(SEE_ROOMS_QUERY);
  const renderItem = ({ item: room }) => (
    <RooomContainer>
      <RoomText>
        {room.unreadTotal === "0"
          ? "Name of the other person"
          : `${room.unreadTotal} messages.`}
      </RoomText>
    </RooomContainer>
  );
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeRooms}
        keyExtractor={(room) => "" + room.id}
        renderItem={renderItem}
      />
    </ScreenLayout>
  );
}
