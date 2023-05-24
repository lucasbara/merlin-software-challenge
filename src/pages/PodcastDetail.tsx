import { useEffect } from "react";
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import PodcastInformation from "@/components/PodcastInformation";
import { Layout } from "@/layouts/Layout";
import { usePodcastDetails } from "@/hooks/usePodcastDetails";
import { usePodcastDetailsStore } from "@/store/podcasts";
import { convertMsToTime } from "@/utils/utils";
import { PodcastDetails as PodcastDetailType } from "@/types/podcasts";

export function PodcastDetail() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, podcast, podcastDescription } = usePodcastDetails(id);

  const { clearPodcastDetails } = usePodcastDetailsStore();

  useEffect(() => {
    return () => {
      clearPodcastDetails();
    };
  }, [id]);

  const info = podcast?.[0] as PodcastDetailType;

  return (
    <Layout>
      <section className="h-full w-full flex-row justify-between items-start">
        {isLoading && !info ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full flex flex-row justify-start items-start gap-10">
            <PodcastInformation
              author={info?.artistName}
              description={podcastDescription}
              image={info?.artworkUrl600}
              podcastId={id}
              name={info?.collectionName}
            />
            <div className="w-2/3 flex flex-col">
              <div className="w-full shadow-lg mb-10">
                <h3 className="text-xl font-bold p-4">
                  Episodes: {info?.trackCount}
                </h3>
              </div>
              <div className="w-full shadow-lg">
                <table className="min-w-full divide-y divide-light-grey">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-medium px-2">
                        Title
                      </th>
                      <th className="text-left text-sm font-medium p-2">
                        Date
                      </th>
                      <th className="text-left text-sm font-medium p-2 ">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm bg-white divide-y divide-light-grey">
                    {podcast?.slice(1)?.map((episode, index) => {
                      return (
                        <tr
                          className={index % 2 === 0 ? "bg-secondary-grey" : ""}
                        >
                          <td className="text-blue p-2 hover:underline">
                            <Link
                              to={`/podcast/${id}/episode/${episode.trackId}`}
                            >
                              {" "}
                              {episode.trackName}
                            </Link>
                          </td>
                          <td className="p-2">
                            {dayjs(episode.releaseDate).format("DD/MM/YYYY")}
                          </td>
                          <td className="p-2">
                            {convertMsToTime(episode.trackTimeMillis)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
