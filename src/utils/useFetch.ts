import { ref } from 'vue';

export const useFetch = <Response>(url: string) => {
  const data = ref<null | Response>(null);
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
    reset();
    isLoading.value = true;
    try {
      const res = await fetch(url, init);
      const json = await res.json();
      data.value = json;
      isSuccess.value = true;
    } catch (err) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return { data, isLoading, isError, isSuccess, trigger };
};
