import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/guren-bside.svg";

export default {
  title: "The Untold Side of Ancients",
  theme: "light",
  tags: ["aigc", "video"],
  description:
    "A 17K-follower culture channel revealing overlooked stories through history and humanities.<br/><br/>Combining AIGC with narrative editing for differentiated vertical content.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "The Untold Side of Ancients",
        caption: "Culture and history content",
      },
    },
  ],
} as const satisfies ProjectContent;
