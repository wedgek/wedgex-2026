import { ref } from "vue";

const wechatOpen = ref(false);

export const useWechatModal = () => {
  const openWechat = () => {
    wechatOpen.value = true;
  };

  const closeWechat = () => {
    wechatOpen.value = false;
  };

  const handleWechatKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") closeWechat();
  };

  return { wechatOpen, openWechat, closeWechat, handleWechatKeydown };
};
