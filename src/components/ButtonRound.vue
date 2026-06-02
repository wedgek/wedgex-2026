<script setup lang="ts">
import { computed } from "vue";
import ButtonWrapper from "./ButtonWrapper.vue";

const props = defineProps<{
  size?: "sm" | "md" | "lg";
}>();

const classes = computed(() => ["button-round", `button-round-size-${props.size ?? "md"}`, "children-unclickable"]);
</script>

<template>
  <ButtonWrapper v-bind="props" rounded :class="classes">
    <slot></slot>
  </ButtonWrapper>
</template>

<style scoped lang="scss">
.button-round {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border-radius: 50%;
  color: var(--icon-color, currentColor);

  :deep(svg) {
    width: 100%;
    height: 100%;
    display: block;
    flex-shrink: 0;
  }

  &-size {
    &-sm {
      width: 32px;
      padding: 6px;
    }

    &-md {
      width: 44px;
      padding: 10px;
    }

    &-lg {
      width: 52px;
      padding: 14px;
    }
  }
}
</style>
