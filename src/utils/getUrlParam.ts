// get url param key
export const getUrlParam = (key: string) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(key)
}
