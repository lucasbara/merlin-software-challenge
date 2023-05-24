import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Podcast, PodcastStore } from "@/types/podcasts";
import { getPodcastDetail, getPodcasts } from "@/controllers/podcasts";

const defaultPodcastState = {
  podcasts: [],
  isLoading: true,
  keyword: "",
};

export const usePodcastsStore: PodcastStore = create(
  persist(
    (set) => ({
      ...defaultPodcastState,
      async setPodcasts() {
        try {
          const podcasts = await getPodcasts();
          set({ podcasts });
          set({ isLoading: false });
        } catch (error) {
          console.error(error);
          set({ isLoading: false });
        }
      },
      setFilter: (keyword: string) => set({ keyword }),
      getFilteredPodcasts: () => {
        const { podcasts, keyword } = usePodcastsStore.getState();

        if (!keyword) {
          return podcasts;
        }
        const normalizedKeyword = keyword.toLowerCase();
        return podcasts.filter((podcast: Podcast) => {
          const {
            "im:name": { label: title },
            "im:artist": { label: author },
          } = podcast;

          return (
            title.toLowerCase().includes(normalizedKeyword) ||
            author.toLowerCase().includes(normalizedKeyword)
          );
        });
      },
      reset: () => {
        usePodcastsStore.persist.clearStorage();
        set(defaultPodcastState);
      },
    }),
    {
      name: "podcasts-store",
      getStorage: () => localStorage,
    }
  )
);

const defaultPodcastDetailsState = {
  podcast: null,
  isLoading: true,
};

export const usePodcastDetailsStore: PodcastStore = create(
  persist(
    (set) => ({
      ...defaultPodcastDetailsState,
      async setPodcastDetails(id: string) {
        try {
          const podcast = await getPodcastDetail(id);
          set({ podcast });
          set({ isLoading: false });
        } catch (error) {
          console.error(error);
          set({ isLoading: false });
        }
      },
      clearPodcastDetails: () => set({ podcast: null }),
      reset: () => {
        usePodcastDetailsStore.persist.clearStorage();
        set(defaultPodcastDetailsState);
      },
    }),
    {
      name: "podcast-details-store",
      getStorage: () => localStorage,
    }
  )
);
