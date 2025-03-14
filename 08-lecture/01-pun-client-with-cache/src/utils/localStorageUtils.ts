export const saveToLocalStorage = (
  name: string, 
  data: unknown, 
  expirationTime: number = Date.now() + 1000 * 60 // 5 seconds
) => {
  const cachedData = {
    puns: data,
    expiration: expirationTime
  };
  localStorage.setItem(name, JSON.stringify(cachedData));
};

export const getFromLocalStorage = (name: string) => {
  const cachedData = JSON.parse(localStorage.getItem(name) as string);

  if (!cachedData) return null;

  const currentTime = Date.now();
  if (currentTime > cachedData.expiration) {
    // Cache has expired, remove it
    localStorage.removeItem(name);
    return null;
  }

  return cachedData[name]; // Return the cached data
};