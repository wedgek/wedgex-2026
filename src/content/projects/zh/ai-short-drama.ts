import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/ai-short-drama.svg";

export default {
  title: "AI 短剧",
  theme: "dark",
  tags: ["aigc", "video", "node"],
  description:
    "AI 短剧工业化流程：脚本、分镜、生成、剪辑一体化。<br/><br/>兼顾 AI 真人剧与 AI 短剧两种形态，缩短从创意到成片的周期。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "AI 短剧",
        caption: "脚本到成片",
      },
    },
  ],
} as const satisfies ProjectContent;
