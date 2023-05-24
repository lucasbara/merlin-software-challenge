import { Link } from "react-router-dom";
import { Divider } from "@/components/Divider";

type PodcastInfoTypes = {
  author: string;
  description: string;
  image: string;
  podcastId: string;
  name: string;
};

export function PodcastInformation({
  author,
  description,
  image,
  podcastId,
  name,
}: PodcastInfoTypes) {
  return (
    <aside className="shadow-lg w-1/3 flex flex-col justify-start items-start p-4">
      <Link className="mx-auto" to={`/podcast/${podcastId}`}>
        <img className="max-w-[200px]" src={image} alt="Artwork" />
      </Link>
      <Divider />
      <Link to={`/podcast/${podcastId}`}>
        <h2 className="font-bold hover:underline">{name}</h2>
      </Link>
      <p className="italic text-xs text-left">by {author}</p>
      <Divider />
      <h4 className="text-sm font-bold pb-2">Description:</h4>
      <p className="text-xs italic">{description}</p>
    </aside>
  );
}

export default PodcastInformation;
