import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import dynamic from "next/dynamic";


export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "5qAfSpCgKFvh8uHYgLNVXA",
      token: "TWkOxBqdnzeGARnP1Dyc6z1kPA2HnoW3k50jStOKZoy7MtenxODLJS94Yd5n1pluDgERKGxs5qA1PhkRSGvw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

import Markdown from "./components/react-markdown"
import { useEffect, useMemo, useState } from "react";
import { GraphQLGlobalContext } from "./components/graphql-context";


PLASMIC.registerComponent(Markdown, {
  name: "Markdown",
  props: {
    markdown: "string",
    className: "string",
  }
});

PLASMIC.registerGlobalContext(GraphQLGlobalContext, {
  name: "GraphQL Settings",
  props: {
    baseUrl: {
      type: 'choice',
      options: ["http://localhost:3000/api/graphql", 'https://revine-dev.aaho.cc/api/graphql', 'https://revine-stable.aaho.cc/api/graphql']
    }
  },
});
