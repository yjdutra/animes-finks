import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, FlatList, Alert } from "react-native";
import styled from "styled-components/native";
import { getSeasonalAnimes, loadToken } from "./src/server/kitsuApi";
import AnimeCard from "./src/components/AnimeCard";
import KitsuLogin from "./src/components/KitsuLogin";

export default function App() {
  const [animes, setAnimes] = useState([]);
  const [kitsuLogin, setKitsuLogin] = useState<boolean>(true);

  useEffect(() => {
    loadToken().then((response) => {
      if (response === false) {
        setKitsuLogin(true);
      } else {
        setKitsuLogin(false);
      }
    });

    const fetchAnimes = async () => {
      try {
        const data = await getSeasonalAnimes("summer", "2024");
        setAnimes(data.data);
      } catch (error) {
        Alert.alert("Erro ao carregar animes", error.message);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderImage
          source={{
            uri: "https://as1.ftcdn.net/v2/jpg/05/91/97/64/1000_F_591976463_KMZyV6obpsrN2bJJJkYW0bzoH2XxLTlA.jpg",
          }}
        />
      </Header>
      <SearchInput placeholder="Pesquisar Anime..." />
      {kitsuLogin ? (
        <KitsuLogin />
      ) : (
        <FlatList
          data={animes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <AnimeCard anime={item} />}
        />
      )}
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const Header = styled.View`
  height: 200px;
  margin-bottom: 16px;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const SearchInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
  border-color: #ddd;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
`;
