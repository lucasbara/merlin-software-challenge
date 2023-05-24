import { useEffect } from "react";
import { usePodcastDetailsStore, usePodcastsStore } from "@/store/podcasts";
import { Podcast } from "@/types/podcasts";

export function usePodcastDetails(id: string) {
  const { isLoading, podcast, setPodcastDetails } = usePodcastDetailsStore();
  const { podcasts: allPodcasts } = usePodcastsStore();

  const podcastDescription = allPodcasts?.find(
    (podcast: Podcast) => podcast?.id?.attributes["im:id"] === id
  )?.summary?.label;

  useEffect(() => {
    setPodcastDetails(id);
  }, [id]);

  return { allPodcasts, isLoading, podcast, podcastDescription };
}
