import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, FlatList, Alert, Modal, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { getSeasonalAnimes, loadToken } from "./src/server/kitsuApi";
import AnimeCard from "./src/components/AnimeCard";
import KitsuLogin from "./src/components/KitsuLogin";
import StreamingFilter from "./src/components/StreamingFilter";
import { season, year } from "./src/configs";
import SearchInput from "./src/components/SearchInput";
import AnimeDetailsModal from "./src/components/AnimeDetailsModal";

export default function App() {
  const [animes, setAnimes] = useState([]);
  const [kitsuLogin, setKitsuLogin] = useState<boolean>(true);
  const [selectedAnime, setSelectedAnime] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
        const data = await getSeasonalAnimes(season, year);
        setAnimes(data.data);
      } catch (error) {
        Alert.alert("Erro ao carregar animes", error.message);
      }
    };

    fetchAnimes();
  }, []);

  const handleAnimePress = (anime: any) => {
    console.log("Prees handleAnimePress");
    setSelectedAnime(anime);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedAnime(null);
  };

  return (
    <Container>
      <Header>
        <HeaderImage
          source={{
            uri: "https://as1.ftcdn.net/v2/jpg/05/91/97/64/1000_F_591976463_KMZyV6obpsrN2bJJJkYW0bzoH2XxLTlA.jpg",
          }}
        />
      </Header>
      <SearchInput setAnimes={setAnimes} />
      <StreamingFilter season={season} year={year} setAnimes={setAnimes} />
      {kitsuLogin ? (
        <KitsuLogin />
      ) : (
        <FlatList
          data={animes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPressIn={() => handleAnimePress(item)}>
              <AnimeCard anime={item} />
            </TouchableOpacity>
          )}
        />
      )}
      {selectedAnime && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <AnimeDetailsModal anime={selectedAnime} onClose={closeModal} />
        </Modal>
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
  border-radius: 8px;
`;
