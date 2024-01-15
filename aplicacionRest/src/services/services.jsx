import axios from 'axios';

const instance = axios.create({ baseURL: 'https://swapi.dev/api' });

export const getPeople = (page = 1) => instance.get(`/people/?page=${page}`);

export const getCharacterById = (id) => instance.get(`/people/${id}/`);

export const getPlanetFromId = (id) => instance.get(`/planets/${id}/`);

export const getFilmFromId = (id) => instance.get(`/films/${id}/`);

export const getSpeciesFromId = (id) => instance.get(`/species/${id}/`);