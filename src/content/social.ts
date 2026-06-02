export type SocialName = "mail" | "github" | "wechat" | "x";

type SocialLink = {
  name: SocialName;
  url: string;
  disabled?: boolean;
};

type SocialWechat = {
  name: "wechat";
  qr: string;
};

export type SocialItem = SocialLink | SocialWechat;

export const social: SocialItem[] = [
  { name: "mail", url: "mailto:tanzl_code@163.com" },
  { name: "github", url: "https://github.com/wedgek" },
  { name: "wechat", qr: "/images/wechat-qr.png" },
  { name: "x", url: "#", disabled: true },
];

export const isWechatItem = (item: SocialItem): item is SocialWechat => item.name === "wechat";

export const isSocialLink = (item: SocialItem): item is SocialLink => "url" in item;

export const getSocialUrl = (name: SocialName): string | undefined => {
  const item = social.find((entry) => entry.name === name);
  return item && isSocialLink(item) ? item.url : undefined;
};
