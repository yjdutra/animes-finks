import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import axios from "axios";
import { saveToken } from "../server/kitsuApi";

const KitsuLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://kitsu.io/api/oauth/token", {
        grant_type: "password",
        username: email, // Aqui, "username" representa o email
        password: password,
      });

      setToken(response.data.access_token);
      Alert.alert(
        "Login realizado com sucesso!",
        `Token: ${response.data.access_token}`
      );

      saveToken(response.data.access_token);
    } catch (error) {
      console.error("Erro ao obter o token:", error);
      Alert.alert(
        "Erro ao realizar login",
        "Verifique suas credenciais e tente novamente."
      );
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>
        Este login é necessário porque a Kitsu API requer autenticação para
        acessar informações personalizadas do usuário, como listas de animes e
        mangás.
      </Text>
      <Text>
        O login garante que as requisições à API sejam feitas de forma segura e
        específica para cada usuário.
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Login Kitsu
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
      {token ? <Text style={{ marginTop: 20 }}>Token: {token}</Text> : null}
    </View>
  );
};

export default KitsuLogin;
