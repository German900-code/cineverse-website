import { BASE_URL, options } from "./api.js";

export const getPopularTVShows = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/popular?language=en-US&page=1`,
      options,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching popular TV shows:", error);
    throw error;
  }
};

export const getTrendingTVShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/tv/day`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trending TV shows:", error);
    throw error;
  }
};

export const getTVShowDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tv/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching TV show details:", error);
    throw error;
  }
};
