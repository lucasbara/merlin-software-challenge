export type Podcast = {
  "im:name": {
    label: string;
  };
  "im:image": Array<{
    label: string;
    attributes: {
      height: string;
    };
  }>;
  summary: {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
    attributes: {
      href: string;
    };
  };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
};

export type PodcastState = {
  podcasts: Array<Podcast>;
  isLoading: boolean;
  keyword: string;
  setPodcasts: () => Promise<void>;
  setFilter: (keyword: string) => void;
  getFilteredPodcasts: () => Array<Podcast>;
};

export type PodcastDetailsState = {
  podcast: Array<PodcastDetails | PodcastEpisode> | null;
  isLoading: boolean;
  setPodcastDetails: (id: string) => Promise<void>;
  clearPodcastDetails: () => void;
};

export type PodcastStore = any;

export type PodcastDetails = {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: Array<string>;
};

export type PodcastEpisode = {
  country: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  artistIds: Array<number>;
  artistViewUrl: string;
  artworkUrl60: string;
  trackViewUrl: string;
  releaseDate: string;
  description: string;
  feedUrl: string;
  shortDescription: string;
  contentAdvisoryRating: string;
  trackId: number;
  trackName: string;
  kind: string;
  wrapperType: string;
  episodeUrl: string;
  previewUrl: string;
  episodeFileExtension: string;
  episodeContentType: string;
  artworkUrl160: string;
  collectionViewUrl: string;
  artworkUrl600: string;
  trackTimeMillis: number;
  genres: Array<{
    name: string;
    id: string;
  }>;
  episodeGuid: string;
};
