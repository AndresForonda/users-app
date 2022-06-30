import axios from "axios";

const axiosInstance = axios.create();

interface HttpParams {
  url: string;
}

interface HttpClientInterface {
  get<T>(parameters: HttpParams): Promise<T>;
}

export const HttpClient = (): HttpClientInterface => ({
  get: async (parameters: HttpParams) => {
    const { url } = parameters;
    const { data } = await axiosInstance.get(url);
    return data;
  },
});
