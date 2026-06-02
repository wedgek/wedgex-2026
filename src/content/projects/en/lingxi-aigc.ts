import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/lingxi-aigc.svg";

export default {
  title: "Lingxi AIGC",
  theme: "dark",
  tags: ["aigc", "video", "vue"],
  description:
    "A 320K-follower AIGC account focused on short-form and performance content — from topics and AI generation to editing and publishing.<br/><br/>Exploring efficient industrialized AIGC production workflows.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Lingxi AIGC",
        caption: "AIGC short video creation",
      },
    },
  ],
} as const satisfies ProjectContent;
