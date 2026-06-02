import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/guren-bside.svg";

export default {
  title: "古人的 B 面",
  theme: "light",
  tags: ["aigc", "video"],
  description:
    "1.7 万粉文化向账号，以历史与人文视角呈现「被忽略的另一面」。<br/><br/>结合 AIGC 与叙事剪辑，在垂直领域建立差异化表达。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "古人的 B 面",
        caption: "文化历史内容",
      },
    },
  ],
} as const satisfies ProjectContent;
