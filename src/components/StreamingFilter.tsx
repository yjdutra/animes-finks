import React from "react";
import { View, TouchableOpacity, Image, Alert } from "react-native";
import styled from "styled-components/native";
import { getAnimesByStreamingService, getSeasonalAnimes } from "../server/kitsuApi";

const StreamingFilter: React.FC<{
  season: string;
  year: string;
  setAnimes: (animes: any[]) => void;
}> = ({ season, year, setAnimes }) => {
  const handlePress = async (streamer: string) => {
    try {
      const data = await getAnimesByStreamingService(streamer, season, year);
      setAnimes(data.data);
    } catch (error) {
      Alert.alert("Erro ao carregar animes", error.message);
    }
  };

  const handlePressHome = async () => {
    try {
      const data = await getSeasonalAnimes("summer", "2024");
      setAnimes(data.data);
    } catch (error) {
      Alert.alert("Erro ao carregar animes", error.message);
    }
  };

  return (
    <Container>
      <StreamingButton onPress={() => handlePressHome()}>
        <StreamingImage
          source={{
            uri: "https://i.pinimg.com/564x/cf/5a/c9/cf5ac9b979b57bff8791502aa5cb7d15.jpg",
          }}
          style={{ width: 40, height: 40 }}
        />
      </StreamingButton>
      <StreamingButton onPress={() => handlePress("Crunchyroll")}>
        <StreamingImage
          source={{
            uri: "https://static.crunchyroll.com/cxweb/assets/img/og-image.png",
          }}
          style={{ width: 40, height: 40 }}
        />
      </StreamingButton>
      <StreamingButton onPress={() => handlePress("Amazon")}>
        <Image
          source={{
            uri: "https://seeklogo.com/images/A/amazon-prime-video-logo-6BB6062D90-seeklogo.com.png",
          }}
          style={{ width: 40, height: 40 }}
        />
      </StreamingButton>
      <StreamingButton onPress={() => handlePress("Hulu")}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTloWnw4feYitxIRiN9q0e48qF8qzCgQZdQ&s",
          }}
          style={{ width: 40, height: 40 }}
        />
      </StreamingButton>
      <StreamingButton onPress={() => handlePress("Disney")}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/e6/e9/d7/e6e9d7e1c6be02f5627fd88c5cef720a.jpg",
          }}
          style={{ width: 40, height: 40 }}
        />
      </StreamingButton>
      <StreamingButton onPress={() => handlePress("Netflix")}>
        <StreamingImage
          source={{
            uri: "https://i.pinimg.com/736x/9e/a0/1d/9ea01d1a050f773d5f43c0d9362def36.jpg",
          }}
          style={{ width: 40, height: 40 }}
        />
      </StreamingButton>
    </Container>
  );
};

export default StreamingFilter;

const Container = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const StreamingButton = styled(TouchableOpacity)`
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
`;

const StreamingImage = styled.Image`
  width: 100%;
  height: 100%;
`;
