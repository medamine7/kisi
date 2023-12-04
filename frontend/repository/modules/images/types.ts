import { Article } from "~/types";

export interface CreateResponse extends Article {
  //
}

export type CreateRequest = Omit<Article, "image" | "id"> & {
  image: File;
};

export interface GetAllResponse extends Array<Article> { }
