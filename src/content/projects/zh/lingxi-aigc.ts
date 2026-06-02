import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/lingxi-aigc.svg";

export default {
  title: "灵犀 AIGC",
  theme: "dark",
  tags: ["aigc", "video", "vue"],
  description:
    "32 万粉 AIGC 自媒体账号，专注短视频与信息流内容。覆盖选题、AI 生成、剪辑与发布运营。<br/><br/>持续探索 AIGC 在内容工业化场景中的高效产出方式。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "灵犀 AIGC",
        caption: "AIGC 短视频创作",
      },
    },
  ],
} as const satisfies ProjectContent;
