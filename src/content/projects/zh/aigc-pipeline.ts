import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/aigc-pipeline.svg";

export default {
  title: "AIGC 工作流",
  theme: "light",
  tags: ["aigc", "vue", "node", "react"],
  description:
    "全栈 + AIGC 工具链整合：批量生成、素材管理、剪辑协同与投放对接。<br/><br/>把分散的 AI 工具串联成可复用的生产流水线。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "AIGC 工作流",
        caption: "工具链与协同",
      },
    },
  ],
} as const satisfies ProjectContent;
