<script setup lang="ts">
import Github from "./icons/Github.vue";
import Wechat from "./icons/Wechat.vue";
import Mail from "./icons/Mail.vue";
import X from "./icons/X.vue";
import Link from "./Link.vue";
import { t } from "../i18n/utils/translate";
import ButtonRound from "./ButtonRound.vue";
import { social, isWechatItem, isSocialLink } from "../content/social";
import { useWechatModal } from "../composables/useWechatModal";

import type { SocialItem } from "../content/social";

const props = defineProps<{
  variant?: "theme" | "background";
}>();

const { openWechat } = useWechatModal();

const icons = {
  mail: Mail,
  github: Github,
  wechat: Wechat,
  x: X,
} as const;

const getAriaLabel = (name: string) => `${t("go-to")} ${name.charAt(0).toUpperCase() + name.slice(1)}`;

const isDisabled = (item: SocialItem) => "disabled" in item && item.disabled;
</script>

<template>
  <div class="social">
    <template v-for="item in social" :key="item.name">
      <button
        v-if="isWechatItem(item)"
        type="button"
        class="social-link social-link-button"
        :aria-label="getAriaLabel(item.name)"
        data-cursor="circle-white"
        @click="openWechat"
      >
        <ButtonRound
          renderAs="div"
          :variant="props.variant ?? 'theme'"
          class="children-unclickable"
          data-hoversound="hover"
        >
          <Wechat />
        </ButtonRound>
      </button>

      <Link
        v-else-if="isSocialLink(item) && !isDisabled(item)"
        external
        :href="item.url"
        :aria-label="getAriaLabel(item.name)"
        class="social-link"
        data-cursor="circle-white"
      >
        <ButtonRound
          renderAs="div"
          :variant="props.variant ?? 'theme'"
          class="children-unclickable"
          data-hoversound="hover"
        >
          <component :is="icons[item.name]" />
        </ButtonRound>
      </Link>

      <button
        v-else
        type="button"
        class="social-link social-link-button social-link-disabled"
        :aria-label="getAriaLabel(item.name)"
        disabled
      >
        <ButtonRound renderAs="div" :variant="props.variant ?? 'theme'" class="children-unclickable">
          <component :is="icons[item.name]" />
        </ButtonRound>
      </button>
    </template>
  </div>
</template>

<style scoped lang="scss">
.social {
  display: flex;
  gap: var(--space-md);

  &-link {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;

    &-button {
      appearance: none;
    }

    &-disabled {
      cursor: default;
      opacity: 0.45;
    }
  }
}
</style>
