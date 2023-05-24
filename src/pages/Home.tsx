import { useEffect, useState } from "react";
import { PodcastCard } from "@/components/PodcastCard";
import { TextField } from "@/components/TextField";
import { Layout } from "@/layouts/Layout";
import { usePodcastsStore } from "@/store/podcasts";
import { Podcast } from "@/types/podcasts";
import { LoadingSpinner } from "@/components/LoadingSpinner";

let searchTimeout: NodeJS.Timeout;

export function Home() {
  const { isLoading, podcasts, setFilter, getFilteredPodcasts } =
    usePodcastsStore();

  const filteredPodcasts: Array<Podcast> = getFilteredPodcasts();

  const [search, setSearch] = useState("");
  const [totalPodcasts, setTotalPodcasts] = useState(podcasts.length);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      setFilter(event.target.value);
      setSearch(event.target.value);
    }, 250);
  };

  useEffect(() => {
    setTotalPodcasts(filteredPodcasts.length);
  }, [filteredPodcasts]);

  return (
    <Layout>
      <section className="relative min-h-[80vh] h-full w-full flex-col justify-between items-start">
        <div className="w-full flex justify-end items-center gap-5">
          <p className="bg-blue  text-white font-bold rounded-lg py-[1px] px-[6px]">
            {totalPodcasts}
          </p>
          <TextField
            name="filter"
            onChange={onChange}
            placeholder="Filter podcasts..."
            value={search}
          />
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : !filteredPodcasts.length ? (
          <p className="h-full w-full text-center">No podcasts found 😥 </p>
        ) : (
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5 ">
            {filteredPodcasts?.map((podcast, index) => (
              <PodcastCard key={index} info={podcast} />
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}
