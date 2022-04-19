<docs>
---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.
</docs>

<template>
  <a-button type="primary">Primary</a-button>
  <a-button type="primary" disabled>Primary(disabled)</a-button>
  <br />
  <a-button>Secondary</a-button>
  <a-button disabled>Secondary(disabled)</a-button>
  <br />
  <a-button type="text">Text</a-button>
  <a-button type="text" disabled>Text(disabled)</a-button>
  <br />
  <a-button type="danger">Danger Default</a-button>
  <a-button type="danger" disabled>Danger Default(disabled)</a-button>
  <br />
  <a-button type="text-danger">Danger Text</a-button>
  <a-button type="text-danger" disabled>Danger Text(disabled)</a-button>
  <br />
</template>
