<docs>
---
order: 7
title:
  zh-CN: 卡片式页签
  en-US: Card type tab
---

## zh-CN

另一种样式的页签，不提供对应的垂直样式。

## en-US

Another type Tabs, which doesn't support vertical mode.

</docs>

<template>
  <a-tabs v-model:activeKey="activeKey" type="card">
    <a-tab-pane key="1" tab="选中标签">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="可选标签">Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="失效标签" disabled>Content of Tab Pane 3</a-tab-pane>
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
