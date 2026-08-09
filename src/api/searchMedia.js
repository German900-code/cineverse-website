import { BASE_URL, options } from "./api";

export const searchMedia = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/multi?query=${encodeURIComponent(query)}`,
    options,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch media. Status: ${response.status}`);
  }

  return response.json();
};
