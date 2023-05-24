import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import PodcastInformation from "@/components/PodcastInformation";
import { Layout } from "@/layouts/Layout";
import { usePodcastDetailsStore, usePodcastsStore } from "@/store/podcasts";
import { EpisodeRoute } from "@/types/routes";
import {
  Podcast,
  PodcastEpisode,
  PodcastDetails as PodcastDetailType,
} from "@/types/podcasts";
import { usePodcastDetails } from "@/hooks/usePodcastDetails";
import { clear } from "console";

export function EpisodeDetail() {
  const { episodeId, id } = useParams<EpisodeRoute>();
  const { clearPodcastDetails } = usePodcastDetailsStore();
  const { isLoading, podcast, podcastDescription } = usePodcastDetails(id);

  const episode = podcast?.find(
    (episode) => episode.trackId === Number(episodeId)
  ) as PodcastEpisode;

  useEffect(() => {
    return () => {
      clearPodcastDetails();
    };
  }, [id]);

  const info = podcast?.[0] as PodcastDetailType;

  if (!info) return;

  return (
    <Layout>
      <section className="h-full w-full flex-row justify-between items-start">
        {isLoading && !info ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full flex flex-row justify-start items-start gap-10">
            <PodcastInformation
              author={info.artistName}
              description={podcastDescription}
              image={info.artworkUrl600}
              podcastId={id}
              name={info.collectionName}
            />
            <div className="shadow-lg w-2/3 flex flex-col justify-evenly items-start mt-[10px] p-4">
              <h3 className="text-xl font-bold pb-4">{episode.trackName}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: episode.description }}
                className="text-sm italic"
              />
              <audio className="w-full mt-10" controls>
                <source src={episode.previewUrl} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
