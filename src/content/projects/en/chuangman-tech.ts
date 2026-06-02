import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/chuangman-tech.svg";

export default {
  title: "Chuangman Tech",
  theme: "dark",
  tags: ["aigc", "vue", "node"],
  description:
    "An AIGC and content production company spanning AI short drama, AI live-action, performance creative, and paid media.<br/><br/>Connecting creativity, technology, and commercial outcomes.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Chuangman Tech",
        caption: "AIGC content and growth",
      },
    },
  ],
} as const satisfies ProjectContent;
