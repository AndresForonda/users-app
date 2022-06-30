import axios from 'axios'

const axiosInstance = axios.create()

interface HttpParams {
  url: string
}

interface HttpClientInterface {
  get<T>(parameters: HttpParams): Promise<T>
}

/**
 * Generic client to wrap basic http functionality, it avoids having a deep dependency
 * with a specific http client, if the team switch from axios to fetch, only this file must
 * be updated.
 */

export const HttpClient = (): HttpClientInterface => ({
  get: async (parameters: HttpParams) => {
    const { url } = parameters
    const { data } = await axiosInstance.get(url)
    return data
  },
})
