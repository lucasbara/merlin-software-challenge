import { Podcast } from "@/types/podcasts";
import { Link } from "react-router-dom";

type PodcastCardProps = {
  info: Podcast;
};

export function PodcastCard({ info }: PodcastCardProps) {
  const {
    id: {
      attributes: { "im:id": podcastId },
    },
    "im:name": { label: title },
    "im:artist": { label: author },
    "im:image": images,
  } = info;

  return (
    <Link className="shadow-lg" to={`/podcast/${podcastId}`}>
      <li className="min-h-[350px]  -mb-50 flex flex-col justify-center items-center p-2">
        <img alt={title} className="rounded-full" src={images?.at(-1)?.label} />
        <h3 className="w-full text-center font-bold uppercase">{title}</h3>
        <p className="text-center text-grey text-sm">
          Author: <span>{author}</span>
        </p>
      </li>
    </Link>
  );
}
