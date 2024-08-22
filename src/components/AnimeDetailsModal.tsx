import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const AnimeDetailsModal: React.FC<{ anime: any; onClose: () => void }> = ({
  anime,
  onClose,
}) => {
  console.log('Prees modal')
  return (
    <ModalContainer>
      <CloseButton onPress={onClose}>
        <CloseButtonText>❌</CloseButtonText>
      </CloseButton>
      <ScrollView>
        <PosterImage source={{ uri: anime.attributes.posterImage.large }} />
        <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
        <AnimeInfo>
          <Label>🇺🇸 {anime.attributes.titles.en}</Label>
          <Label>🇯🇵 {anime.attributes.titles.ja_jp}</Label>
          <Label>Início: {anime.attributes.startDate}</Label>
          <Label>Status: {anime.attributes.status}</Label>
          <Label>Tipo: {anime.attributes.subtype}</Label>
          <Label>Episódios: {anime.attributes.episodeCount}</Label>
          <Label>Duração: {anime.attributes.episodeLength} min</Label>
        </AnimeInfo>
        <Description>{anime.attributes.synopsis}</Description>
      </ScrollView>
    </ModalContainer>
  );
};

export default AnimeDetailsModal;

const ModalContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const CloseButton = styled(TouchableOpacity)`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`;

const CloseButtonText = styled(Text)`
  font-size: 24px;
  color: #000;
`;

const PosterImage = styled(Image)`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const AnimeTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const AnimeInfo = styled(View)`
  margin-bottom: 16px;
`;

const Label = styled(Text)`
  font-size: 16px;
  margin-bottom: 4px;
`;

const Description = styled(Text)`
  font-size: 16px;
  line-height: 24px;
`;
