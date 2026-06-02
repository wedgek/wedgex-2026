import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/chuangman-tech.svg";

export default {
  title: "创漫科技",
  theme: "dark",
  tags: ["aigc", "vue", "node"],
  description:
    "聚焦 AIGC 与内容生产的科技公司。业务涵盖 AI 短剧、AI 真人剧、信息流创作与投流优化。<br/><br/>连接创意、技术与商业转化。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "创漫科技",
        caption: "AIGC 内容与商业化",
      },
    },
  ],
} as const satisfies ProjectContent;
