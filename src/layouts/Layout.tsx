import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { Divider } from "@/components/Divider";
import { usePodcastDetailsStore, usePodcastsStore } from "@/store/podcasts";
import { ONE_DAY_MS } from "@/utils/constants";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { podcasts, setPodcasts, reset } = usePodcastsStore();

  const { pathname } = useLocation();

  useEffect(() => {
    setPodcasts();
  }, []);

  const podcastDetailsStore = usePodcastDetailsStore();

  useEffect(() => {
    const intervalId = setInterval(() => {
      reset();
      podcastDetailsStore.reset();
    }, ONE_DAY_MS); // Reset localStorage every 24 hours

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-full max-w-[80vw] mx-auto h-screen flex flex-col py-2">
      <header className="w-[100%] flex flex-col justify-between items-start px-6">
        <Link className="w-full flex justify-between items-center" to="/">
          <h1 className="text-blue text-2xl font-bold">Podcaster</h1>
          {pathname === "/" && (
            <div className="h-4 w-4 bg-blue rounded-full animate-pulse"></div>
          )}
        </Link>
        <Divider />
      </header>
      <main className="flex-1 p-6">{children} </main>
      <footer className="w-full h-20 flex justify-center items-center pt-20 pb-5">
        <p className="flex justify-center items-center">
          <BiCodeAlt className="mx-1" />
          with
          <AiFillHeart className="mx-1" /> by
          <a
            href="https://github.com/lucasbara"
            className="mx-1"
            target="_blank"
          >
            Lucas Barallobre
          </a>
          using
          <DiReact className="mx-1" />
        </p>
      </footer>
    </div>
  );
}
