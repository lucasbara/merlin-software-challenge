import { API_BASE_URL } from "@/utils/constants";
import { Podcast, PodcastDetails, PodcastEpisode } from "@/types/podcasts";

export async function getPodcasts(): Promise<Array<Podcast>> {
  const url = `${API_BASE_URL}us/rss/toppodcasts/limit=100/genre=1310/json`;

  const response = await fetch(url);
  const data = await response.json();

  return data.feed.entry as Array<Podcast>;
}

export async function getPodcastDetail(
  id: string
): Promise<Array<PodcastDetails | PodcastEpisode>> {
  const url = `
  https://cors-anywhere.herokuapp.com/${API_BASE_URL}lookup?id=${id}&entity=podcastEpisode&limit=5000`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}
