import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Text,
} from "react-native";
import styled from "styled-components/native";
import { searchAnimeByName } from "../server/kitsuApi";

const SearchInput: React.FC<{ setAnimes: (animes: any[]) => void }> = ({
  setAnimes,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) {
      Alert.alert("Erro", "Por favor, insira o nome de um anime para buscar.");
      return;
    }

    try {
      const data = await searchAnimeByName(query);
      setAnimes(data.data); // Atualiza a lista de animes com os resultados da busca
    } catch (error) {
      Alert.alert("Erro ao buscar anime", error.message);
    }
  };

  return (
    <SearchContainer>
      <StyledTextInput
        placeholder="Pesquisar qualquer Anime..."
        value={query}
        onChangeText={setQuery}
      />
      <SearchButton onPress={handleSearch}>
        <SearchIcon>🔎</SearchIcon>
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchInput;

const SearchContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  height: 40px;
  border-width: 1px;
  border-color: #ddd;
  padding: 8px;
  border-radius: 4px;
`;

const SearchButton = styled(TouchableOpacity)`
  margin-left: 8px;
  padding: 8px;
  background-color: #ddd;
  border-radius: 4px;
`;

const SearchIcon = styled(Text)`
  width: 24px;
  height: 24px;
  tint-color: #fff;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
