<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

默认选中第一项。

## en-US
Default activate first tab.

</docs>

<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="标签一">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="标签二" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="标签三">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
</script>
