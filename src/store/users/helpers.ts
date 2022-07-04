export const persistData = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getPersistentData = (key: string) => {
  const item = localStorage.getItem(key)
  if (item) return JSON.parse(item)
  return null
}
