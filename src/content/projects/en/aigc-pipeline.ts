import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/aigc-pipeline.svg";

export default {
  title: "AIGC Pipeline",
  theme: "light",
  tags: ["aigc", "vue", "node", "react"],
  description:
    "Full-stack AIGC toolchain integration — batch generation, asset management, editing collaboration, and media handoff.<br/><br/>Connecting fragmented AI tools into a reusable production pipeline.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "AIGC Pipeline",
        caption: "Toolchain and collaboration",
      },
    },
  ],
} as const satisfies ProjectContent;
