import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const AnimeCard: React.FC<{ anime: any }> = ({ anime }) => {

  return (
    <CardContainer onPress={() => {}}>
      <Poster source={{ uri: anime.attributes.posterImage.medium }} />
      <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
    </CardContainer>
  );
};

export default AnimeCard;

const CardContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const Poster = styled.Image`
  width: 80px;
  height: 120px;
  margin-right: 16px;
`;

const AnimeTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
