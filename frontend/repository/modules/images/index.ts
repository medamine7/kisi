import { AxiosInstance } from "axios";
import { GetAllResponse, CreateResponse, CreateRequest } from "./types";

const resource = "/images";

export default (client: AxiosInstance) => ({
  getAll: () => {
    return client.get<GetAllResponse>(resource).then((response) => {
      return response.data;
    });
  },
  create: ({ title, description, image }: CreateRequest) => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    return client
      .post<CreateResponse>(`${resource}/upload`, formData)
      .then((response) => {
        return response.data;
      });
  },
});
