import { ref } from 'vue';

export interface ErrorResponse {
  status: number;
  message: string;
}

export const useFetch = <Response>(url: string, header?: HeadersInit) => {
  const data = ref<null | Response>(null);
  const error = ref<null | ErrorResponse>(null);
  const isLoading = ref(false);
  const isError = ref(false);
  const isSuccess = ref(false);

  const reset = () => {
    data.value = null;
    isLoading.value = false;
    isError.value = false;
    isSuccess.value = false;
  };

  const trigger = async (init: RequestInit | undefined = undefined) => {
    isLoading.value = true;
    try {
      const res = await fetch(url, {
        ...init,
        headers: header ?? init?.headers
      });
      if (!res.ok) {
        // throw status and message from response
        const errorResponse: ErrorResponse = {
          status: res.status,
          message: await res.text()
        };
        throw errorResponse;
      }
      const json = await res.json();
      data.value = json;
      isSuccess.value = true;
    } catch (err) {
      isError.value = true;
      // check if error is type of ErrorResponse
      if ((err as ErrorResponse).status && (err as ErrorResponse).message)
        error.value = err as ErrorResponse;
      else {
        error.value = {
          status: 500,
          message: 'Unknown error'
        };
      }
    } finally {
      isLoading.value = false;
    }
  };

  return { data, isLoading, isError, error, isSuccess, trigger, reset };
};
