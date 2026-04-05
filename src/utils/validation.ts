export const isValidUrl = (url: string): boolean => {
  if (!url || url === "https://") return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
