import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export let userToken: string | null = null;

const KITSU_BASE_URL = 'https://kitsu.io/api/edge';
const TOKEN_KEY = '@userToken';

// Função para salvar o token no dispositivo
export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
    userToken = token;
  } catch (error) {
    console.error('Erro ao salvar o token:', error);
  }
};

// Função para carregar o token do dispositivo
export const loadToken = async (): Promise<boolean> => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token) {
      userToken = token;
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Erro ao carregar o token:', error);
    return false;
  }
};


// Função para realizar requisições
const makeRequest = async (endpoint: string, params = {}) => {
  try {
    const response = await axios.get(`${KITSU_BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      params,
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      console.error('Token possivelmente expirado');
    } else {
      console.error('Erro na requisição:', error);
    }
    throw error;
  }
};

// Função para obter animes da temporada atual
export const getSeasonalAnimes = async (season: string, year: string) => {
  return await makeRequest('anime', {
    'filter[season]': season,
    'filter[seasonYear]': year,
  });
};

// Função para buscar anime por nome
export const searchAnimeByName = async (name: string) => {
  return await makeRequest('anime', {
    'filter[text]': name,
  });
};

// Função para obter detalhes de um anime específico
export const getAnimeDetails = async (animeId: string) => {
  return await makeRequest(`anime/${animeId}`);
};

// Outras funções que podem ser úteis
// Função para obter gêneros de um anime
export const getAnimeGenres = async (animeId: string) => {
  return await makeRequest(`anime/${animeId}/genres`);
};

// Função para obter episódios de um anime
export const getAnimeEpisodes = async (animeId: string) => {
  return await makeRequest(`anime/${animeId}/episodes`);
};

// Carrega o token do dispositivo ao iniciar o app
loadToken();
