import type { ProjectPreview } from "../../types";

export default [
  {
    title: "灵犀 AIGC",
    slug: "lingxi-aigc",
    thumbnail: "/thumbnails/projects/lingxi-aigc.svg",
    description: "32 万粉 · AIGC 短视频创作",
  },
  {
    title: "古人的 B 面",
    slug: "guren-bside",
    thumbnail: "/thumbnails/projects/guren-bside.svg",
    description: "1.7 万粉 · 文化历史内容",
  },
  {
    title: "AI 短剧",
    slug: "ai-short-drama",
    thumbnail: "/thumbnails/projects/ai-short-drama.svg",
    description: "脚本到成片 · 工业化生产",
  },
  {
    title: "创漫科技",
    slug: "chuangman-tech",
    thumbnail: "/thumbnails/projects/chuangman-tech.svg",
    description: "AIGC 内容 · 投流 · 商业化",
  },
  {
    title: "AIGC 工作流",
    slug: "aigc-pipeline",
    thumbnail: "/thumbnails/projects/aigc-pipeline.svg",
    description: "工具链 · 批处理 · 团队协同",
  },
] as const satisfies ProjectPreview[];
