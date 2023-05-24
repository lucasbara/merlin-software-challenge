import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EpisodeDetail } from "@/pages/EpisodeDetail";
import { Home } from "@/pages/Home";
import { PodcastDetail } from "@/pages/PodcastDetail";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/podcast/:id">
        <PodcastDetail />
      </Route>
      <Route path="/podcast/:id/episode/:episodeId">
        <EpisodeDetail />
      </Route>
    </Switch>
  </BrowserRouter>
);
