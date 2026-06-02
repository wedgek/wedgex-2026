import type { ProjectContent } from "../../types";

const image0 = "/thumbnails/projects/ai-short-drama.svg";

export default {
  title: "AI Short Drama",
  theme: "dark",
  tags: ["aigc", "video", "node"],
  description:
    "An industrial AI short drama pipeline — scripting, storyboarding, generation, and editing in one flow.<br/><br/>Covers both AI live-action and AI short drama to shorten idea-to-final-cut cycles.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "AI Short Drama",
        caption: "Script to final cut",
      },
    },
  ],
} as const satisfies ProjectContent;
