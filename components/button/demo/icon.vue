<docs>
---
order: 1
title:
  zh-CN: 图标按钮
  en-US: Icon
---

## zh-CN

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

## en-US

`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`.

If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.
</docs>

<template>
  <a-button type="primary">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <br />
  <a-button>
    <template #icon><CalendarOutlined /></template>
    Calendar
  </a-button>
  <a-button shape="round">
    <template #icon><CalendarOutlined /></template>
    Calendar
  </a-button>
  <br />
  <a-button type="text">
    <template #icon><EditOutlined /></template>
    Edit
  </a-button>
  <a-button type="text" disabled>
    <template #icon><EditOutlined /></template>
    Edit
  </a-button>
  <br />
  <a-button type="danger">
    <template #icon><DeleteOutlined /></template>
    Delete
  </a-button>
  <a-button type="danger" disabled>
    <template #icon><DeleteOutlined /></template>
    Delete
  </a-button>
  <a-button type="text-danger">
    <template #icon><DeleteOutlined /></template>
    Delete
  </a-button>
  <a-button type="text-danger" loading>
    <template #icon><DeleteOutlined /></template>
    Delete
  </a-button>
</template>
<script>
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
    CalendarOutlined,
  },
};
</script>
