<script setup lang="ts">
import { social, isWechatItem } from "../content/social";
import { useWechatModal } from "../composables/useWechatModal";

const { wechatOpen, closeWechat, handleWechatKeydown } = useWechatModal();

const qrSrc = social.find(isWechatItem)?.qr ?? "/images/wechat-qr.png";
</script>

<template>
  <Teleport to="body">
    <div
      v-if="wechatOpen"
      class="wechat-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="WeChat QR Code"
      @click.self="closeWechat"
      @keydown="handleWechatKeydown"
    >
      <div class="wechat-modal">
        <button type="button" class="wechat-modal-close" aria-label="Close" @click="closeWechat">×</button>
        <img :src="qrSrc" alt="WeChat QR Code" class="wechat-modal-qr" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.wechat-modal {
  &-overlay {
    position: fixed;
    inset: 0;
    z-index: calc(var(--z-index-preloader) + 1);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(45 42 36 / 0.55);
    padding: var(--space-outer);
  }

  position: relative;
  max-width: min(360px, 100%);
  background: #fff;
  border-radius: var(--radius-lg);
  padding: var(--space-sm);
  box-shadow: 0 24px 64px rgb(0 0 0 / 0.2);

  &-close {
    position: absolute;
    top: 8px;
    right: 12px;
    border: none;
    background: none;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
    color: var(--color-text-300);
  }

  &-qr {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius-md);
  }
}
</style>
