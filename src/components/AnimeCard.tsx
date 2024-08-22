import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { getAnimeGenres, getAnimeProductions } from '../server/kitsuApi'; // Funções para buscar gêneros e produções

const AnimeCard: React.FC<{ anime: any }> = ({ anime }) => {

  return (
    <CardContainer onPress={() => {}}>
      <Poster source={{ uri: anime.attributes.posterImage.medium }} />
      <View>
        <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
        <Text>🇺🇸 {anime.attributes.titles.en}</Text>
        <Text>🇯🇵 {anime.attributes.titles.ja_jp}</Text>
      </View>
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
  margin-bottom: 8px;
`;
