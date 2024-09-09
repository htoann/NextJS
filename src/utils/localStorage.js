const isClient = typeof window !== 'undefined';

const getLocalStorage = (key) => {
  if (!isClient) return null;

  const data = localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};

const setLocalStorage = (key, value) => {
  if (!isClient) return;

  const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
  localStorage.setItem(key, stringify);
};

const removeLocalStorage = (key) => {
  if (!isClient) return;

  localStorage.removeItem(key);
};

export { getLocalStorage, removeLocalStorage, setLocalStorage };
