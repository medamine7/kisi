import { RuntimeConfig } from "nuxt/schema";
import axios, { AxiosInstance } from "axios";
import ImagesRepository from "./modules/images";

const getClient = ({ apiBase }: RuntimeConfig["public"]): AxiosInstance => {
  const timeout = 15 * 1000;

  const client = axios.create({
    baseURL: apiBase,
    timeout,
  });

  return client;
};

export const createRepository = (config: RuntimeConfig) => {
  const client = getClient(config.public);

  return {
    images: ImagesRepository(client),
  };
};
