import{o as m,a as y,bu as V,d as h,D as v,r as o,h as A,w as a,j as s,b as n,a7 as W,e as t,bL as S,p as D,f as L,k as Z,bo as Y,F as f,t as X,m as x}from"./vendor.1a48ca2a.js";import{_ as b}from"./index.456f4492.js";const H={pageData:{title:"Dropdown",description:"",frontmatter:{category:"Components",type:"Navigation",title:"Dropdown",cover:"https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"When there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action."},{level:2,title:"API",slug:"API",content:"Dropdown"},{level:3,title:"Dropdown",slug:"Dropdown",content:""},{level:3,title:"events",slug:"events",content:""},{level:3,title:"Dropdown.Button",slug:"Dropdown-Button",content:""},{level:3,title:"Dropdown.Button events",slug:"Dropdown-Button-events",content:""}],relativePath:"components/dropdown/index.en-US.md",content:"\nA dropdown list.\n\n## When To Use\n\nWhen there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.\n\n## API\n\n### Dropdown\n\n| Property | Description | Type | Default |  |\n| --- | --- | --- | --- | --- |\n| destroyPopupOnHide | Whether destroy dropdown when hidden | boolean | false |  |\n| disabled | whether the dropdown menu is disabled | boolean | - |  |\n| getPopupContainer | to set the container of the dropdown menu. The default is to create a `div` element in `body`, you can reset it to the scrolling area and make a relative reposition. [example](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode) | `() =&gt; document.body` |  |\n| overlay(v-slot) | the dropdown menu | [Menu](/components/menu) | - |  |\n| overlayClassName | Class name of the dropdown root element | string | - |  |\n| overlayStyle | Style of the dropdown root element | object | - |  |\n| placement | placement of pop menu: `bottomLeft` `bottom` `bottomRight` `topLeft` `top` `topRight` | String | `bottomLeft` |  |\n| trigger | the trigger mode which executes the drop-down action, hover doesn&#39;t work on mobile device | Array&amp;lt;`click`\\|`hover`\\|`contextmenu`&gt; | `[&#39;hover&#39;]` |  |\n| visible(v-model) | whether the dropdown menu is visible | boolean | - |  |\n\n### events\n\n| Events Name | Description | Arguments |\n| --- | --- | --- |\n| visibleChange | a callback function takes an argument: `visible`, is executed when the visible state is changed. Not trigger when hidden by click item | function(visible) |\n\nYou should use [Menu](/components/menu/) as `overlay`. The menu items and dividers are also available by using `Menu.Item` and `Menu.Divider`.\n\n&gt; Warning: You must set a unique `key` for `Menu.Item`.\n&gt;\n&gt; Menu of Dropdown is unselectable by default, you can make it selectable via `&lt;Menu selectable&gt;`.\n\n### Dropdown.Button\n\n| Property | Description | Type | Default | Version |\n| --- | --- | --- | --- | --- |\n| disabled | whether the dropdown menu is disabled | boolean | - |  |\n| icon | Icon (appears on the right) | vNode \\| slot | - | 1.5.0 |\n| loading | Set the loading status of button | boolean \\| { delay: number } | false | 3.0 |\n| overlay(v-slot) | the dropdown menu | [Menu](/components/menu) | - |  |\n| placement | placement of pop menu: `bottomLeft` `bottom` `bottomRight` `topLeft` `top` `topRight` | String | `bottomLeft` |  |\n| size | size of the button, the same as [Button](/components/button) | string | `default` |  |\n| trigger | the trigger mode which executes the drop-down action | Array&amp;lt;`click`\\|`hover`\\|`contextmenu`&gt; | `[&#39;hover&#39;]` |  |\n| type | type of the button, the same as [Button](/components/button) | string | `default` |  |\n| visible(v-model) | whether the dropdown menu is visible | boolean | - |  |\n\n### Dropdown.Button events\n\n| Events Name | Description | Arguments |\n| --- | --- | --- |\n| click | a callback function, the same as [Button](/components/button), which will be executed when you click the button on the left | Function |\n| visibleChange | a callback function takes an argument: `visible`, is executed when the visible state is changed. Not trigger when hidden by click item | Function |\n",html:`<p>A dropdown list.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>When there are more than a few options to choose from, you can wrap them in a <code>Dropdown</code>. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Dropdown">Dropdown <a class="header-anchor" href="#Dropdown">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>destroyPopupOnHide</td>
<td>Whether destroy dropdown when hidden</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>whether the dropdown menu is disabled</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>to set the container of the dropdown menu. The default is to create a <code>div</code> element in <code>body</code>, you can reset it to the scrolling area and make a relative reposition. <a href="https://codepen.io/afc163/pen/zEjNOy?editors=0010" target="_blank" rel="noopener noreferrer">example</a></td>
<td>Function(triggerNode)</td>
<td><code>() =&gt; document.body</code></td>
<td></td>
</tr>
<tr>
<td>overlay(v-slot)</td>
<td>the dropdown menu</td>
<td><a href="/components/menu.html">Menu</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>Class name of the dropdown root element</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayStyle</td>
<td>Style of the dropdown root element</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>placement of pop menu: <code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td>
<td>String</td>
<td><code>bottomLeft</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>the trigger mode which executes the drop-down action, hover doesn't work on mobile device</td>
<td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td>
<td><code>['hover']</code></td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>whether the dropdown menu is visible</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="events">events <a class="header-anchor" href="#events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Events Name</th>
<th>Description</th>
<th>Arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td>visibleChange</td>
<td>a callback function takes an argument: <code>visible</code>, is executed when the visible state is changed. Not trigger when hidden by click item</td>
<td>function(visible)</td>
</tr>
</tbody>
</table>
<p>You should use <a href="/components/menu/">Menu</a> as <code>overlay</code>. The menu items and dividers are also available by using <code>Menu.Item</code> and <code>Menu.Divider</code>.</p>
<blockquote>
<p>Warning: You must set a unique <code>key</code> for <code>Menu.Item</code>.</p>
<p>Menu of Dropdown is unselectable by default, you can make it selectable via <code>&lt;Menu selectable&gt;</code>.</p>
</blockquote>
<h3 id="Dropdown-Button">Dropdown.Button <a class="header-anchor" href="#Dropdown-Button">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>disabled</td>
<td>whether the dropdown menu is disabled</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>Icon (appears on the right)</td>
<td>vNode | slot</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>loading</td>
<td>Set the loading status of button</td>
<td>boolean | { delay: number }</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>overlay(v-slot)</td>
<td>the dropdown menu</td>
<td><a href="/components/menu.html">Menu</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>placement of pop menu: <code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td>
<td>String</td>
<td><code>bottomLeft</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>size of the button, the same as <a href="/components/button.html">Button</a></td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>the trigger mode which executes the drop-down action</td>
<td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td>
<td><code>['hover']</code></td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>type of the button, the same as <a href="/components/button.html">Button</a></td>
<td>string</td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>whether the dropdown menu is visible</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Dropdown-Button-events">Dropdown.Button events <a class="header-anchor" href="#Dropdown-Button-events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Events Name</th>
<th>Description</th>
<th>Arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>a callback function, the same as <a href="/components/button.html">Button</a>, which will be executed when you click the button on the left</td>
<td>Function</td>
</tr>
<tr>
<td>visibleChange</td>
<td>a callback function takes an argument: <code>visible</code>, is executed when the visible state is changed. Not trigger when hidden by click item</td>
<td>Function</td>
</tr>
</tbody>
</table>
`,lastUpdated:1648105839663}},U={class:"markdown"},E=V('<p>A dropdown list.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>When there are more than a few options to choose from, you can wrap them in a <code>Dropdown</code>. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Dropdown">Dropdown <a class="header-anchor" href="#Dropdown"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th></th></tr></thead><tbody><tr><td>destroyPopupOnHide</td><td>Whether destroy dropdown when hidden</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>whether the dropdown menu is disabled</td><td>boolean</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>to set the container of the dropdown menu. The default is to create a <code>div</code> element in <code>body</code>, you can reset it to the scrolling area and make a relative reposition. <a href="https://codepen.io/afc163/pen/zEjNOy?editors=0010" target="_blank" rel="noopener noreferrer">example</a></td><td>Function(triggerNode)</td><td><code>() =&gt; document.body</code></td><td></td></tr><tr><td>overlay(v-slot)</td><td>the dropdown menu</td><td><a href="/components/menu.html">Menu</a></td><td>-</td><td></td></tr><tr><td>overlayClassName</td><td>Class name of the dropdown root element</td><td>string</td><td>-</td><td></td></tr><tr><td>overlayStyle</td><td>Style of the dropdown root element</td><td>object</td><td>-</td><td></td></tr><tr><td>placement</td><td>placement of pop menu: <code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td><td>String</td><td><code>bottomLeft</code></td><td></td></tr><tr><td>trigger</td><td>the trigger mode which executes the drop-down action, hover doesn&#39;t work on mobile device</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>visible(v-model)</td><td>whether the dropdown menu is visible</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>visibleChange</td><td>a callback function takes an argument: <code>visible</code>, is executed when the visible state is changed. Not trigger when hidden by click item</td><td>function(visible)</td></tr></tbody></table><p>You should use <a href="/components/menu/">Menu</a> as <code>overlay</code>. The menu items and dividers are also available by using <code>Menu.Item</code> and <code>Menu.Divider</code>.</p><blockquote><p>Warning: You must set a unique <code>key</code> for <code>Menu.Item</code>.</p><p>Menu of Dropdown is unselectable by default, you can make it selectable via <code>&lt;Menu selectable&gt;</code>.</p></blockquote><h3 id="Dropdown-Button">Dropdown.Button <a class="header-anchor" href="#Dropdown-Button"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>disabled</td><td>whether the dropdown menu is disabled</td><td>boolean</td><td>-</td><td></td></tr><tr><td>icon</td><td>Icon (appears on the right)</td><td>vNode | slot</td><td>-</td><td>1.5.0</td></tr><tr><td>loading</td><td>Set the loading status of button</td><td>boolean | { delay: number }</td><td>false</td><td>3.0</td></tr><tr><td>overlay(v-slot)</td><td>the dropdown menu</td><td><a href="/components/menu.html">Menu</a></td><td>-</td><td></td></tr><tr><td>placement</td><td>placement of pop menu: <code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td><td>String</td><td><code>bottomLeft</code></td><td></td></tr><tr><td>size</td><td>size of the button, the same as <a href="/components/button.html">Button</a></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>trigger</td><td>the trigger mode which executes the drop-down action</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>type</td><td>type of the button, the same as <a href="/components/button.html">Button</a></td><td>string</td><td><code>default</code></td><td></td></tr><tr><td>visible(v-model)</td><td>whether the dropdown menu is visible</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3 id="Dropdown-Button-events">Dropdown.Button events <a class="header-anchor" href="#Dropdown-Button-events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>a callback function, the same as <a href="/components/button.html">Button</a>, which will be executed when you click the button on the left</td><td>Function</td></tr><tr><td>visibleChange</td><td>a callback function takes an argument: <code>visible</code>, is executed when the visible state is changed. Not trigger when hidden by click item</td><td>Function</td></tr></tbody></table>',14),j=[E];function N(c,l,k,r,C,I){return m(),y("article",U,j)}var J=b(H,[["render",N]]);const K={pageData:{title:"Dropdown",description:"",frontmatter:{category:"Components",subtitle:"\u4E0B\u62C9\u83DC\u5355",type:"\u5BFC\u822A",title:"Dropdown",cover:"https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002"},{level:2,title:"API",slug:"API",content:"\u5C5E\u6027\u5982\u4E0B"},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"Dropdown.Button",slug:"Dropdown-Button",content:""},{level:3,title:"Dropdown.Button \u4E8B\u4EF6",slug:"Dropdown-Button-\u4E8B\u4EF6",content:""}],relativePath:"components/dropdown/index.zh-CN.md",content:`
\u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002

- \u7528\u4E8E\u6536\u7F57\u4E00\u7EC4\u547D\u4EE4\u64CD\u4F5C\u3002
- Select \u7528\u4E8E\u9009\u62E9\uFF0C\u800C Dropdown \u662F\u547D\u4EE4\u96C6\u5408\u3002

## API

\u5C5E\u6027\u5982\u4E0B

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |  |
| --- | --- | --- | --- | --- |
| destroyPopupOnHide | \u5173\u95ED\u540E\u662F\u5426\u9500\u6BC1 Dropdown | boolean | false | 3.0 |
| disabled | \u83DC\u5355\u662F\u5426\u7981\u7528 | boolean | - |  |
| getPopupContainer | \u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002 | Function(triggerNode) | \`() =&gt; document.body\` |  |
| overlay(v-slot) | \u83DC\u5355 | [Menu](/components/menu-cn) | - |  |
| overlayClassName | \u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0 | string | - |  |
| overlayStyle | \u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F | object | - |  |
| placement | \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A\`bottomLeft\` \`bottom\` \`bottomRight\` \`topLeft\` \`top\` \`topRight\` | String | \`bottomLeft\` |  |
| trigger | \u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A, \u79FB\u52A8\u7AEF\u4E0D\u652F\u6301 hover | Array&amp;lt;\`click\`\\|\`hover\`\\|\`contextmenu\`&gt; | \`[&#39;hover&#39;]\` |  |
| visible(v-model) | \u83DC\u5355\u662F\u5426\u663E\u793A | boolean | - |  |

\`overlay\` \u83DC\u5355\u4F7F\u7528 [Menu](/components/menu-cn/)\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 \`Menu.Item\`\uFF0C\u5206\u5272\u7EBF \`Menu.Divider\`\u3002

&gt; \u6CE8\u610F\uFF1A Menu.Item \u5FC5\u987B\u8BBE\u7F6E\u552F\u4E00\u7684 key \u5C5E\u6027\u3002
&gt;
&gt; Dropdown \u4E0B\u7684 Menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A \`&lt;Menu selectable&gt;\`.

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| visibleChange | \u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1 | function(visible) |

### Dropdown.Button

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| disabled | \u83DC\u5355\u662F\u5426\u7981\u7528 | boolean | - |  |
| icon | \u53F3\u4FA7\u7684 icon | VNode \\| slot | - | 1.5.0 |
| loading | \u8BBE\u7F6E\u6309\u94AE\u8F7D\u5165\u72B6\u6001 | boolean \\| { delay: number } | false | 3.0 |
| overlay(v-slot) | \u83DC\u5355 | [Menu](/components/menu-cn/) | - |  |
| placement | \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A\`bottomLeft\` \`bottom\` \`bottomRight\` \`topLeft\` \`top\` \`topRight\` | String | \`bottomLeft\` |  |
| size | \u6309\u94AE\u5927\u5C0F\uFF0C\u548C [Button](/components/button-cn/) \u4E00\u81F4 | string | &#39;default&#39; |  |
| trigger | \u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A | Array&amp;lt;\`click\`\\|\`hover\`\\|\`contextmenu\`&gt; | \`[&#39;hover&#39;]\` |  |
| type | \u6309\u94AE\u7C7B\u578B\uFF0C\u548C [Button](/components/button-cn/) \u4E00\u81F4 | string | &#39;default&#39; |  |
| visible(v-model) | \u83DC\u5355\u662F\u5426\u663E\u793A | boolean | - |  |

### Dropdown.Button \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| click | \u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u548C [Button](/components/button-cn/) \u4E00\u81F4 | Function |
| visibleChange | \u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1 | function(visible) |
`,html:`<p>\u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002</p>
<ul>
<li>\u7528\u4E8E\u6536\u7F57\u4E00\u7EC4\u547D\u4EE4\u64CD\u4F5C\u3002</li>
<li>Select \u7528\u4E8E\u9009\u62E9\uFF0C\u800C Dropdown \u662F\u547D\u4EE4\u96C6\u5408\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5C5E\u6027\u5982\u4E0B</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>destroyPopupOnHide</td>
<td>\u5173\u95ED\u540E\u662F\u5426\u9500\u6BC1 Dropdown</td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>disabled</td>
<td>\u83DC\u5355\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td>
<td>Function(triggerNode)</td>
<td><code>() =&gt; document.body</code></td>
<td></td>
</tr>
<tr>
<td>overlay(v-slot)</td>
<td>\u83DC\u5355</td>
<td><a href="/components/menu-cn.html">Menu</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayClassName</td>
<td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlayStyle</td>
<td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td>
<td>String</td>
<td><code>bottomLeft</code></td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A, \u79FB\u52A8\u7AEF\u4E0D\u652F\u6301 hover</td>
<td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td>
<td><code>['hover']</code></td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>\u83DC\u5355\u662F\u5426\u663E\u793A</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<p><code>overlay</code> \u83DC\u5355\u4F7F\u7528 <a href="/components/menu-cn/">Menu</a>\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 <code>Menu.Item</code>\uFF0C\u5206\u5272\u7EBF <code>Menu.Divider</code>\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF1A Menu.Item \u5FC5\u987B\u8BBE\u7F6E\u552F\u4E00\u7684 key \u5C5E\u6027\u3002</p>
<p>Dropdown \u4E0B\u7684 Menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A <code>&lt;Menu selectable&gt;</code>.</p>
</blockquote>
<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>visibleChange</td>
<td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1</td>
<td>function(visible)</td>
</tr>
</tbody>
</table>
<h3 id="Dropdown-Button">Dropdown.Button <a class="header-anchor" href="#Dropdown-Button">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>disabled</td>
<td>\u83DC\u5355\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>\u53F3\u4FA7\u7684 icon</td>
<td>VNode | slot</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>loading</td>
<td>\u8BBE\u7F6E\u6309\u94AE\u8F7D\u5165\u72B6\u6001</td>
<td>boolean | { delay: number }</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>overlay(v-slot)</td>
<td>\u83DC\u5355</td>
<td><a href="/components/menu-cn/">Menu</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td>
<td>String</td>
<td><code>bottomLeft</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>\u6309\u94AE\u5927\u5C0F\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td>
<td>string</td>
<td>'default'</td>
<td></td>
</tr>
<tr>
<td>trigger</td>
<td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A</td>
<td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td>
<td><code>['hover']</code></td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>\u6309\u94AE\u7C7B\u578B\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td>
<td>string</td>
<td>'default'</td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>\u83DC\u5355\u662F\u5426\u663E\u793A</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Dropdown-Button-\u4E8B\u4EF6">Dropdown.Button \u4E8B\u4EF6 <a class="header-anchor" href="#Dropdown-Button-\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td>
<td>Function</td>
</tr>
<tr>
<td>visibleChange</td>
<td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1</td>
<td>function(visible)</td>
</tr>
</tbody>
</table>
`,lastUpdated:1648105839663}},F={class:"markdown"},T=V('<p>\u5411\u4E0B\u5F39\u51FA\u7684\u5217\u8868\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002</p><ul><li>\u7528\u4E8E\u6536\u7F57\u4E00\u7EC4\u547D\u4EE4\u64CD\u4F5C\u3002</li><li>Select \u7528\u4E8E\u9009\u62E9\uFF0C\u800C Dropdown \u662F\u547D\u4EE4\u96C6\u5408\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5C5E\u6027\u5982\u4E0B</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th></th></tr></thead><tbody><tr><td>destroyPopupOnHide</td><td>\u5173\u95ED\u540E\u662F\u5426\u9500\u6BC1 Dropdown</td><td>boolean</td><td>false</td><td>3.0</td></tr><tr><td>disabled</td><td>\u83DC\u5355\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002</td><td>Function(triggerNode)</td><td><code>() =&gt; document.body</code></td><td></td></tr><tr><td>overlay(v-slot)</td><td>\u83DC\u5355</td><td><a href="/components/menu-cn.html">Menu</a></td><td>-</td><td></td></tr><tr><td>overlayClassName</td><td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0</td><td>string</td><td>-</td><td></td></tr><tr><td>overlayStyle</td><td>\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>placement</td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td><td>String</td><td><code>bottomLeft</code></td><td></td></tr><tr><td>trigger</td><td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A, \u79FB\u52A8\u7AEF\u4E0D\u652F\u6301 hover</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>visible(v-model)</td><td>\u83DC\u5355\u662F\u5426\u663E\u793A</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><p><code>overlay</code> \u83DC\u5355\u4F7F\u7528 <a href="/components/menu-cn/">Menu</a>\uFF0C\u8FD8\u5305\u62EC\u83DC\u5355\u9879 <code>Menu.Item</code>\uFF0C\u5206\u5272\u7EBF <code>Menu.Divider</code>\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A Menu.Item \u5FC5\u987B\u8BBE\u7F6E\u552F\u4E00\u7684 key \u5C5E\u6027\u3002</p><p>Dropdown \u4E0B\u7684 Menu \u9ED8\u8BA4\u4E0D\u53EF\u9009\u4E2D\u3002\u5982\u679C\u9700\u8981\u83DC\u5355\u53EF\u9009\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A <code>&lt;Menu selectable&gt;</code>.</p></blockquote><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>visibleChange</td><td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1</td><td>function(visible)</td></tr></tbody></table><h3 id="Dropdown-Button">Dropdown.Button <a class="header-anchor" href="#Dropdown-Button"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>disabled</td><td>\u83DC\u5355\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td></td></tr><tr><td>icon</td><td>\u53F3\u4FA7\u7684 icon</td><td>VNode | slot</td><td>-</td><td>1.5.0</td></tr><tr><td>loading</td><td>\u8BBE\u7F6E\u6309\u94AE\u8F7D\u5165\u72B6\u6001</td><td>boolean | { delay: number }</td><td>false</td><td>3.0</td></tr><tr><td>overlay(v-slot)</td><td>\u83DC\u5355</td><td><a href="/components/menu-cn/">Menu</a></td><td>-</td><td></td></tr><tr><td>placement</td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\uFF1A<code>bottomLeft</code> <code>bottom</code> <code>bottomRight</code> <code>topLeft</code> <code>top</code> <code>topRight</code></td><td>String</td><td><code>bottomLeft</code></td><td></td></tr><tr><td>size</td><td>\u6309\u94AE\u5927\u5C0F\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>string</td><td>&#39;default&#39;</td><td></td></tr><tr><td>trigger</td><td>\u89E6\u53D1\u4E0B\u62C9\u7684\u884C\u4E3A</td><td>Array&lt;<code>click</code>|<code>hover</code>|<code>contextmenu</code>&gt;</td><td><code>[&#39;hover&#39;]</code></td><td></td></tr><tr><td>type</td><td>\u6309\u94AE\u7C7B\u578B\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>string</td><td>&#39;default&#39;</td><td></td></tr><tr><td>visible(v-model)</td><td>\u83DC\u5355\u662F\u5426\u663E\u793A</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3 id="Dropdown-Button-\u4E8B\u4EF6">Dropdown.Button \u4E8B\u4EF6 <a class="header-anchor" href="#Dropdown-Button-\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u548C <a href="/components/button-cn/">Button</a> \u4E00\u81F4</td><td>Function</td></tr><tr><td>visibleChange</td><td>\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A visible\u3002\u3002\u70B9\u51FB\u83DC\u5355\u6309\u94AE\u5BFC\u81F4\u7684\u6D88\u5931\u4E0D\u4F1A\u89E6\u53D1</td><td>function(visible)</td></tr></tbody></table>',15),z=[T];function Q(c,l,k,r,C,I){return m(),y("article",F,z)}var q=b(K,[["render",Q]]);const M=h({components:{DownOutlined:v}}),O=t(" Hover me "),$=n("a",{href:"javascript:;"},"1st menu item",-1),nn=n("a",{href:"javascript:;"},"2nd menu item",-1),tn=n("a",{href:"javascript:;"},"3rd menu item",-1),an=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function on(c,l,k,r,C,I){const p=o("DownOutlined"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown"),g=o("demo-box");return m(),A(g,{jsfiddle:{us:"The most basic dropdown menu.",cn:"\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The most basic dropdown menu.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic Usage"},relativePath:"components/dropdown/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUKICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgPC9hPgogICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICA8YS1tZW51PgogICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6OyI+MXN0IG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6OyI+Mm5kIG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6OyI+M3JkIG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICA8L2EtbWVudT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWRyb3Bkb3duPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgRG93bk91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgRG93bk91dGxpbmVkLAogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUKICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgPC9hPgogICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICA8YS1tZW51PgogICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6OyI+MXN0IG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6OyI+Mm5kIG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6OyI+M3JkIG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICA8L2EtbWVudT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWRyb3Bkb3duPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIERvd25PdXRsaW5lZCwKICB9LAp9KTsKPC9zY3JpcHQ+"}},{default:a(()=>[s(i,null,{overlay:a(()=>[s(u,null,{default:a(()=>[s(e,null,{default:a(()=>[$]),_:1}),s(e,null,{default:a(()=>[nn]),_:1}),s(e,null,{default:a(()=>[tn]),_:1})]),_:1})]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:l[0]||(l[0]=W(()=>{},["prevent"]))},[O,s(p)])]),_:1})]),htmlCode:a(()=>[an]),jsVersionHtml:a(()=>[sn]),_:1},8,["jsfiddle"])}var en=b(M,[["render",on]]);const cn={},pn=n("div",{style:{textAlign:"center",background:"#f7f7f7",height:"200px",lineHeight:"200px",color:"#777"}}," Right Click on here ",-1),ln=t("1st menu item"),un=t("2nd menu item"),kn=t("3rd menu item"),gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("contextmenu"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
      `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
        textAlign: `),n("span",{class:"token punctuation"},"'"),t("center"),n("span",{class:"token punctuation"},"'"),t(`,
        background: `),n("span",{class:"token punctuation"},"'"),t("#f7f7f7"),n("span",{class:"token punctuation"},"'"),t(`,
        height: `),n("span",{class:"token punctuation"},"'"),t("200px"),n("span",{class:"token punctuation"},"'"),t(`,
        lineHeight: `),n("span",{class:"token punctuation"},"'"),t("200px"),n("span",{class:"token punctuation"},"'"),t(`,
        color: `),n("span",{class:"token punctuation"},"'"),t("#777"),n("span",{class:"token punctuation"},"'"),t(`,
      }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Right Click on here
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("contextmenu"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
      `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
        textAlign: `),n("span",{class:"token punctuation"},"'"),t("center"),n("span",{class:"token punctuation"},"'"),t(`,
        background: `),n("span",{class:"token punctuation"},"'"),t("#f7f7f7"),n("span",{class:"token punctuation"},"'"),t(`,
        height: `),n("span",{class:"token punctuation"},"'"),t("200px"),n("span",{class:"token punctuation"},"'"),t(`,
        lineHeight: `),n("span",{class:"token punctuation"},"'"),t("200px"),n("span",{class:"token punctuation"},"'"),t(`,
        color: `),n("span",{class:"token punctuation"},"'"),t("#777"),n("span",{class:"token punctuation"},"'"),t(`,
      }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      Right Click on here
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function rn(c,l){const k=o("a-menu-item"),r=o("a-menu"),C=o("a-dropdown"),I=o("demo-box");return m(),A(I,{jsfiddle:{us:"The default trigger mode is `hover`, you can change it to `contextMenu`.",cn:"\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u89E6\u53D1\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u89E6\u53D1\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The default trigger mode is <code>hover</code>, you can change it to <code>contextMenu</code>.</p>
`,order:8,title:{"zh-CN":"\u53F3\u952E\u83DC\u5355","en-US":"Context Menu"},relativePath:"components/dropdown/demo/context-menu.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIDp0cmlnZ2VyPSJbJ2NvbnRleHRtZW51J10iPgogICAgPGRpdgogICAgICA6c3R5bGU9InsKICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLAogICAgICAgIGJhY2tncm91bmQ6ICcjZjdmN2Y3JywKICAgICAgICBoZWlnaHQ6ICcyMDBweCcsCiAgICAgICAgbGluZUhlaWdodDogJzIwMHB4JywKICAgICAgICBjb2xvcjogJyM3NzcnLAogICAgICB9IgogICAgPgogICAgICBSaWdodCBDbGljayBvbiBoZXJlCiAgICA8L2Rpdj4KICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgPGEtbWVudT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4xc3QgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIzIj4zcmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4KCgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIDp0cmlnZ2VyPSJbJ2NvbnRleHRtZW51J10iPgogICAgPGRpdgogICAgICA6c3R5bGU9InsKICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLAogICAgICAgIGJhY2tncm91bmQ6ICcjZjdmN2Y3JywKICAgICAgICBoZWlnaHQ6ICcyMDBweCcsCiAgICAgICAgbGluZUhlaWdodDogJzIwMHB4JywKICAgICAgICBjb2xvcjogJyM3NzcnLAogICAgICB9IgogICAgPgogICAgICBSaWdodCBDbGljayBvbiBoZXJlCiAgICA8L2Rpdj4KICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgPGEtbWVudT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4xc3QgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIzIj4zcmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4="}},{default:a(()=>[s(C,{trigger:["contextmenu"]},{overlay:a(()=>[s(r,null,{default:a(()=>[s(k,{key:"1"},{default:a(()=>[ln]),_:1}),s(k,{key:"2"},{default:a(()=>[un]),_:1}),s(k,{key:"3"},{default:a(()=>[kn]),_:1})]),_:1})]),default:a(()=>[pn]),_:1})]),htmlCode:a(()=>[gn]),jsVersionHtml:a(()=>[dn]),_:1},8,["jsfiddle"])}var mn=b(cn,[["render",rn]]);const Cn=h({components:{UserOutlined:S,DownOutlined:v},setup(){return{handleButtonClick:k=>{console.log("click left button",k)},handleMenuClick:k=>{console.log("click",k)}}}}),P=c=>(D("data-v-3968713c"),c=c(),L(),c),In={class:"demo-dropdown-wrap"},bn=t(" Dropdown "),An=t(" 1st menu item "),hn=t(" 2nd menu item "),vn=t(" 3rd item "),Wn=t(" Dropdown "),wn=t(" 1st menu item "),yn=t(" 2nd menu item "),Gn=t(" 3rd item "),Zn=t(" Dropdown "),fn=t(" 1st menu item "),Vn=t(" 2nd menu item "),Pn=t(" 3rd item "),Bn=t(" 1st menu item "),_n=t(" 2nd menu item "),Rn=t(" 3rd item "),Sn=t(" Button "),Dn=P(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-dropdown-wrap"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleButtonClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleButtonClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        Button
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" UserOutlined"),n("span",{class:"token punctuation"},","),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" MenuProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    UserOutlined`),n("span",{class:"token punctuation"},","),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleButtonClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" Event")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click left button'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"handleMenuClick"),n("span",{class:"token operator"},":"),t(" MenuProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onClick'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleButtonClick`),n("span",{class:"token punctuation"},","),t(`
      handleMenuClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".demo-dropdown-wrap :deep(.ant-dropdown-button)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)),Ln=P(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-dropdown-wrap"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleButtonClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleButtonClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Dropdown
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("UserOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
            3rd item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        Button
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" UserOutlined"),n("span",{class:"token punctuation"},","),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    UserOutlined`),n("span",{class:"token punctuation"},","),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleButtonClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click left button'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleMenuClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleButtonClick`),n("span",{class:"token punctuation"},","),t(`
      handleMenuClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".demo-dropdown-wrap :deep(.ant-dropdown-button)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1));function Yn(c,l,k,r,C,I){const p=o("UserOutlined"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown-button"),g=o("DownOutlined"),d=o("a-button"),w=o("a-dropdown"),G=o("demo-box");return m(),A(G,{jsfiddle:{us:"A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.",cn:"\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002\u53EF\u8BBE\u7F6E `icon` \u5C5E\u6027\u6765\u4FEE\u6539\u53F3\u8FB9\u7684\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002\u53EF\u8BBE\u7F6E <code>icon</code> \u5C5E\u6027\u6765\u4FEE\u6539\u53F3\u8FB9\u7684\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.</p>
`,order:5,title:{"zh-CN":"\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE","en-US":"Button with dropdown menu"},relativePath:"components/dropdown/demo/dropdown-button.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8tZHJvcGRvd24td3JhcCI+CiAgICA8YS1kcm9wZG93bi1idXR0b24gQGNsaWNrPSJoYW5kbGVCdXR0b25DbGljayI+CiAgICAgIERyb3Bkb3duCiAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICA8YS1tZW51IEBjbGljaz0iaGFuZGxlTWVudUNsaWNrIj4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPgogICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+CiAgICAgICAgICAgIDFzdCBtZW51IGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4KICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPgogICAgICAgICAgICAybmQgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+CiAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4KICAgICAgICAgICAgM3JkIGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLW1lbnU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uPgogICAgICBEcm9wZG93bgogICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4KICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPgogICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+CiAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+CiAgICAgICAgICAgIDNyZCBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI2ljb24+PFVzZXJPdXRsaW5lZCAvPjwvdGVtcGxhdGU+CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uIGRpc2FibGVkIEBjbGljaz0iaGFuZGxlQnV0dG9uQ2xpY2siPgogICAgICBEcm9wZG93bgogICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4KICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPgogICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+CiAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+CiAgICAgICAgICAgIDNyZCBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWRyb3Bkb3duLWJ1dHRvbj4KICAgIDxhLWRyb3Bkb3duPgogICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4KICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPgogICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+CiAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+CiAgICAgICAgICAgIDNyZCBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8YS1idXR0b24+CiAgICAgICAgQnV0dG9uCiAgICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLWRyb3Bkb3duPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgVXNlck91dGxpbmVkLCBEb3duT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXNlck91dGxpbmVkLAogICAgRG93bk91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IChlOiBFdmVudCkgPT4gewogICAgICBjb25zb2xlLmxvZygnY2xpY2sgbGVmdCBidXR0b24nLCBlKTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVNZW51Q2xpY2s6IE1lbnVQcm9wc1snb25DbGljayddID0gZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdjbGljaycsIGUpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGhhbmRsZUJ1dHRvbkNsaWNrLAogICAgICBoYW5kbGVNZW51Q2xpY2ssCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlIGxhbmc9Imxlc3MiIHNjb3BlZD4KLmRlbW8tZHJvcGRvd24td3JhcCA6ZGVlcCguYW50LWRyb3Bkb3duLWJ1dHRvbikgewogIG1hcmdpbi1yaWdodDogOHB4OwogIG1hcmdpbi1ib3R0b206IDhweDsKfQo8L3N0eWxlPgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8tZHJvcGRvd24td3JhcCI+CiAgICA8YS1kcm9wZG93bi1idXR0b24gQGNsaWNrPSJoYW5kbGVCdXR0b25DbGljayI+CiAgICAgIERyb3Bkb3duCiAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICA8YS1tZW51IEBjbGljaz0iaGFuZGxlTWVudUNsaWNrIj4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPgogICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+CiAgICAgICAgICAgIDFzdCBtZW51IGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4KICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPgogICAgICAgICAgICAybmQgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMyI+CiAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4KICAgICAgICAgICAgM3JkIGl0ZW0KICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLW1lbnU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uPgogICAgICBEcm9wZG93bgogICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4KICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPgogICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+CiAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+CiAgICAgICAgICAgIDNyZCBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI2ljb24+PFVzZXJPdXRsaW5lZCAvPjwvdGVtcGxhdGU+CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uIGRpc2FibGVkIEBjbGljaz0iaGFuZGxlQnV0dG9uQ2xpY2siPgogICAgICBEcm9wZG93bgogICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4KICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPgogICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+CiAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+CiAgICAgICAgICAgIDNyZCBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWRyb3Bkb3duLWJ1dHRvbj4KICAgIDxhLWRyb3Bkb3duPgogICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgPGEtbWVudSBAY2xpY2s9ImhhbmRsZU1lbnVDbGljayI+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4KICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPgogICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+CiAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz4KICAgICAgICAgICAgMm5kIG1lbnUgaXRlbQogICAgICAgICAgPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPgogICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+CiAgICAgICAgICAgIDNyZCBpdGVtCiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8YS1idXR0b24+CiAgICAgICAgQnV0dG9uCiAgICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLWRyb3Bkb3duPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBVc2VyT3V0bGluZWQsIERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXNlck91dGxpbmVkLAogICAgRG93bk91dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSBlID0+IHsKICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGxlZnQgYnV0dG9uJywgZSk7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9IGUgPT4gewogICAgICBjb25zb2xlLmxvZygnY2xpY2snLCBlKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgaGFuZGxlQnV0dG9uQ2xpY2ssCiAgICAgIGhhbmRsZU1lbnVDbGljaywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4KPHN0eWxlIGxhbmc9Imxlc3MiIHNjb3BlZD4KLmRlbW8tZHJvcGRvd24td3JhcCA6ZGVlcCguYW50LWRyb3Bkb3duLWJ1dHRvbikgewogIG1hcmdpbi1yaWdodDogOHB4OwogIG1hcmdpbi1ib3R0b206IDhweDsKfQo8L3N0eWxlPg=="}},{default:a(()=>[n("div",In,[s(i,{onClick:c.handleButtonClick},{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[s(p),An]),_:1}),s(e,{key:"2"},{default:a(()=>[s(p),hn]),_:1}),s(e,{key:"3"},{default:a(()=>[s(p),vn]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[bn]),_:1},8,["onClick"]),s(i,null,{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[s(p),wn]),_:1}),s(e,{key:"2"},{default:a(()=>[s(p),yn]),_:1}),s(e,{key:"3"},{default:a(()=>[s(p),Gn]),_:1})]),_:1},8,["onClick"])]),icon:a(()=>[s(p)]),default:a(()=>[Wn]),_:1}),s(i,{disabled:"",onClick:c.handleButtonClick},{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[s(p),fn]),_:1}),s(e,{key:"2"},{default:a(()=>[s(p),Vn]),_:1}),s(e,{key:"3"},{default:a(()=>[s(p),Pn]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[Zn]),_:1},8,["onClick"]),s(w,null,{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[s(p),Bn]),_:1}),s(e,{key:"2"},{default:a(()=>[s(p),_n]),_:1}),s(e,{key:"3"},{default:a(()=>[s(p),Rn]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[s(d,null,{default:a(()=>[Sn,s(g)]),_:1})]),_:1})])]),htmlCode:a(()=>[Dn]),jsVersionHtml:a(()=>[Ln]),_:1},8,["jsfiddle"])}var Xn=b(Cn,[["render",Yn],["__scopeId","data-v-3968713c"]]);const xn=h({components:{DownOutlined:v},setup(){return{onClick:({key:l})=>{console.log(`Click on item ${l}`)}}}}),Hn=t(" Hover me, Click menu item "),Un=t("1st menu item"),En=t("2nd menu item"),jn=t("3rd menu item"),Nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me, Click menu item
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" MenuProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"onClick"),n("span",{class:"token operator"},":"),t(" MenuProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onClick'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" key "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Click on item "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      onClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me, Click menu item
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
      key`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Click on item "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      onClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Kn(c,l,k,r,C,I){const p=o("DownOutlined"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown"),g=o("demo-box");return m(),A(g,{jsfiddle:{us:"An event will be triggered when you click menu items, in which you can make different operations according to item's key.",cn:"\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879 key \u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879 key \u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>An event will be triggered when you click menu items, in which you can make different operations according to item's key.</p>
`,order:4,title:{"zh-CN":"\u89E6\u53D1\u4E8B\u4EF6","en-US":"Click event"},relativePath:"components/dropdown/demo/event.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUsIENsaWNrIG1lbnUgaXRlbQogICAgICA8RG93bk91dGxpbmVkIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnUgQGNsaWNrPSJvbkNsaWNrIj4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4xc3QgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIzIj4zcmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB0eXBlIHsgTWVudVByb3BzIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBEb3duT3V0bGluZWQsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9uQ2xpY2s6IE1lbnVQcm9wc1snb25DbGljayddID0gKHsga2V5IH0pID0+IHsKICAgICAgY29uc29sZS5sb2coYENsaWNrIG9uIGl0ZW0gJHtrZXl9YCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgb25DbGljaywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUsIENsaWNrIG1lbnUgaXRlbQogICAgICA8RG93bk91dGxpbmVkIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnUgQGNsaWNrPSJvbkNsaWNrIj4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj4xc3QgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIyIj4ybmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIzIj4zcmQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgPC9hLW1lbnU+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1kcm9wZG93bj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgRG93bk91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBEb3duT3V0bGluZWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBvbkNsaWNrID0gKHsKICAgICAga2V5LAogICAgfSkgPT4gewogICAgICBjb25zb2xlLmxvZyhgQ2xpY2sgb24gaXRlbSAke2tleX1gKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgb25DbGljaywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:a(()=>[s(i,null,{overlay:a(()=>[s(u,{onClick:c.onClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[Un]),_:1}),s(e,{key:"2"},{default:a(()=>[En]),_:1}),s(e,{key:"3"},{default:a(()=>[jn]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:l[0]||(l[0]=W(()=>{},["prevent"]))},[Hn,s(p)])]),_:1})]),htmlCode:a(()=>[Nn]),jsVersionHtml:a(()=>[Jn]),_:1},8,["jsfiddle"])}var Fn=b(xn,[["render",Kn]]);const Tn=h({components:{DownOutlined:v}}),zn=t(" Hover me "),Qn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}," 1st menu item ",-1),qn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}," 2nd menu item ",-1),Mn=t("3rd menu item\uFF08disabled\uFF09"),On=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-divider")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t("3rd menu item\uFF08disabled\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),$n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            1st menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            2nd menu item
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-divider")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t("3rd menu item\uFF08disabled\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function nt(c,l,k,r,C,I){const p=o("DownOutlined"),e=o("a-menu-item"),u=o("a-menu-divider"),i=o("a-menu"),g=o("a-dropdown"),d=o("demo-box");return m(),A(d,{jsfiddle:{us:"Divider and disabled menu item.",cn:"\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Divider and disabled menu item.</p>
`,order:2,title:{"zh-CN":"\u5176\u4ED6\u5143\u7D20","en-US":"Other elements"},relativePath:"components/dropdown/demo/item.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUKICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgPC9hPgogICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICA8YS1tZW51PgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjAiPgogICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+CiAgICAgICAgICAgIDFzdCBtZW51IGl0ZW0KICAgICAgICAgIDwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPgogICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+CiAgICAgICAgICAgIDJuZCBtZW51IGl0ZW0KICAgICAgICAgIDwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtZGl2aWRlciAvPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiIGRpc2FibGVkPjNyZCBtZW51IGl0ZW3vvIhkaXNhYmxlZO+8iTwvYS1tZW51LWl0ZW0+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFudD0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIERvd25PdXRsaW5lZCwKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgSG92ZXIgbWUKICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgPC9hPgogICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICA8YS1tZW51PgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjAiPgogICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+CiAgICAgICAgICAgIDFzdCBtZW51IGl0ZW0KICAgICAgICAgIDwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPgogICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+CiAgICAgICAgICAgIDJuZCBtZW51IGl0ZW0KICAgICAgICAgIDwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtZGl2aWRlciAvPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiIGRpc2FibGVkPjNyZCBtZW51IGl0ZW3vvIhkaXNhYmxlZO+8iTwvYS1tZW51LWl0ZW0+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgRG93bk91dGxpbmVkLAogIH0sCn0pOwo8L3NjcmlwdD4="}},{default:a(()=>[s(g,null,{overlay:a(()=>[s(i,null,{default:a(()=>[s(e,{key:"0"},{default:a(()=>[Qn]),_:1}),s(e,{key:"1"},{default:a(()=>[qn]),_:1}),s(u),s(e,{key:"3",disabled:""},{default:a(()=>[Mn]),_:1})]),_:1})]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:l[0]||(l[0]=W(()=>{},["prevent"]))},[zn,s(p)])]),_:1})]),htmlCode:a(()=>[On]),jsVersionHtml:a(()=>[$n]),_:1},8,["jsfiddle"])}var tt=b(Tn,[["render",nt]]);const at=h({components:{DownOutlined:v},setup(){const c=Z(!1);return{visible:c,handleMenuClick:k=>{k.key==="3"&&(c.value=!1)}}}}),st=t(" Hover me "),ot=t("Clicking me will not close the menu."),et=t("Clicking me will not close the menu also."),ct=t("Clicking me will close the menu"),pt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will not close the menu."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will not close the menu also."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will close the menu"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" MenuProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"handleMenuClick"),n("span",{class:"token operator"},":"),t(" MenuProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onClick'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      handleMenuClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),lt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Hover me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleMenuClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will not close the menu."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will not close the menu also."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Clicking me will close the menu"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleMenuClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      handleMenuClick`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function ut(c,l,k,r,C,I){const p=o("DownOutlined"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown"),g=o("demo-box");return m(),A(g,{jsfiddle:{us:"The default is to close the menu when you click on menu items, this feature can be turned off.",cn:"\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The default is to close the menu when you click on menu items, this feature can be turned off.</p>
`,order:7,title:{"zh-CN":"\u83DC\u5355\u9690\u85CF\u65B9\u5F0F","en-US":"The way of hiding menu."},relativePath:"components/dropdown/demo/overlay-visible.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIHYtbW9kZWw6dmlzaWJsZT0idmlzaWJsZSI+CiAgICA8YSBjbGFzcz0iYW50LWRyb3Bkb3duLWxpbmsiIEBjbGljay5wcmV2ZW50PgogICAgICBIb3ZlciBtZQogICAgICA8RG93bk91dGxpbmVkIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnUgQGNsaWNrPSJoYW5kbGVNZW51Q2xpY2siPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPkNsaWNraW5nIG1lIHdpbGwgbm90IGNsb3NlIHRoZSBtZW51LjwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+Q2xpY2tpbmcgbWUgd2lsbCBub3QgY2xvc2UgdGhlIG1lbnUgYWxzby48L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPkNsaWNraW5nIG1lIHdpbGwgY2xvc2UgdGhlIG1lbnU8L2EtbWVudS1pdGVtPgogICAgICA8L2EtbWVudT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWRyb3Bkb3duPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgRG93bk91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCB2aXNpYmxlID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IGhhbmRsZU1lbnVDbGljazogTWVudVByb3BzWydvbkNsaWNrJ10gPSBlID0+IHsKICAgICAgaWYgKGUua2V5ID09PSAnMycpIHsKICAgICAgICB2aXNpYmxlLnZhbHVlID0gZmFsc2U7CiAgICAgIH0KICAgIH07CiAgICByZXR1cm4gewogICAgICB2aXNpYmxlLAogICAgICBoYW5kbGVNZW51Q2xpY2ssCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIHYtbW9kZWw6dmlzaWJsZT0idmlzaWJsZSI+CiAgICA8YSBjbGFzcz0iYW50LWRyb3Bkb3duLWxpbmsiIEBjbGljay5wcmV2ZW50PgogICAgICBIb3ZlciBtZQogICAgICA8RG93bk91dGxpbmVkIC8+CiAgICA8L2E+CiAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgIDxhLW1lbnUgQGNsaWNrPSJoYW5kbGVNZW51Q2xpY2siPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPkNsaWNraW5nIG1lIHdpbGwgbm90IGNsb3NlIHRoZSBtZW51LjwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMiI+Q2xpY2tpbmcgbWUgd2lsbCBub3QgY2xvc2UgdGhlIG1lbnUgYWxzby48L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPkNsaWNraW5nIG1lIHdpbGwgY2xvc2UgdGhlIG1lbnU8L2EtbWVudS1pdGVtPgogICAgICA8L2EtbWVudT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWRyb3Bkb3duPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgRG93bk91dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgdmlzaWJsZSA9IHJlZihmYWxzZSk7CgogICAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gZSA9PiB7CiAgICAgIGlmIChlLmtleSA9PT0gJzMnKSB7CiAgICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgICB9CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZpc2libGUsCiAgICAgIGhhbmRsZU1lbnVDbGljaywKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:a(()=>[s(i,{visible:c.visible,"onUpdate:visible":l[1]||(l[1]=d=>c.visible=d)},{overlay:a(()=>[s(u,{onClick:c.handleMenuClick},{default:a(()=>[s(e,{key:"1"},{default:a(()=>[ot]),_:1}),s(e,{key:"2"},{default:a(()=>[et]),_:1}),s(e,{key:"3"},{default:a(()=>[ct]),_:1})]),_:1},8,["onClick"])]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:l[0]||(l[0]=W(()=>{},["prevent"]))},[st,s(p)])]),_:1},8,["visible"])]),htmlCode:a(()=>[pt]),jsVersionHtml:a(()=>[lt]),_:1},8,["jsfiddle"])}var kt=b(at,[["render",ut]]);const it=h({setup(){return{placements:["bottomLeft","bottom","bottomRight","topLeft","top","topRight"]}}}),gt={id:"components-dropdown-demo-placement"},dt=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}," 1st menu item ",-1),rt=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}," 2nd menu item ",-1),mt=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"}," 3rd menu item ",-1),Ct={key:0},It=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("components-dropdown-demo-placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(placement, index) in placements"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("{{ placement }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                1st menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                2nd menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.tmall.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                3rd menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index === 2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" DropdownProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"placements"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token string"},"'bottomLeft'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'bottomRight'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'topLeft'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'topRight'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token keyword"},"as"),t(" DropdownProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'placement'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},"#components-dropdown-demo-placement .ant-btn"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),bt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("components-dropdown-demo-placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(placement, index) in placements"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("placement"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t("{{ placement }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                1st menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                2nd menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.tmall.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                3rd menu item
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index === 2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"placements"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'bottomLeft'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'bottomRight'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'topLeft'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'topRight'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},"#components-dropdown-demo-placement .ant-btn"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function At(c,l,k,r,C,I){const p=o("a-button"),e=o("a-menu-item"),u=o("a-menu"),i=o("a-dropdown"),g=o("demo-box");return m(),A(g,{jsfiddle:{us:"Support 6 placements.",cn:"\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Support 6 placements.</p>
`,order:1,title:{"zh-CN":"\u5F39\u51FA\u4F4D\u7F6E","en-US":"Placement"},relativePath:"components/dropdown/demo/placement.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgaWQ9ImNvbXBvbmVudHMtZHJvcGRvd24tZGVtby1wbGFjZW1lbnQiPgogICAgPHRlbXBsYXRlIHYtZm9yPSIocGxhY2VtZW50LCBpbmRleCkgaW4gcGxhY2VtZW50cyIgOmtleT0icGxhY2VtZW50Ij4KICAgICAgPGEtZHJvcGRvd24gOnBsYWNlbWVudD0icGxhY2VtZW50Ij4KICAgICAgICA8YS1idXR0b24+e3sgcGxhY2VtZW50IH19PC9hLWJ1dHRvbj4KICAgICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgICA8YS1tZW51PgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+CiAgICAgICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+CiAgICAgICAgICAgICAgICAybmQgbWVudSBpdGVtCiAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50bWFsbC5jb20vIj4KICAgICAgICAgICAgICAgIDNyZCBtZW51IGl0ZW0KICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8L2EtbWVudT4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtZHJvcGRvd24+CiAgICAgIDxiciB2LWlmPSJpbmRleCA9PT0gMiIgLz4KICAgIDwvdGVtcGxhdGU+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IERyb3Bkb3duUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBwbGFjZW1lbnRzOiBbCiAgICAgICAgJ2JvdHRvbUxlZnQnLAogICAgICAgICdib3R0b20nLAogICAgICAgICdib3R0b21SaWdodCcsCiAgICAgICAgJ3RvcExlZnQnLAogICAgICAgICd0b3AnLAogICAgICAgICd0b3BSaWdodCcsCiAgICAgIF0gYXMgRHJvcGRvd25Qcm9wc1sncGxhY2VtZW50J11bXSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+CiNjb21wb25lbnRzLWRyb3Bkb3duLWRlbW8tcGxhY2VtZW50IC5hbnQtYnRuIHsKICBtYXJnaW4tcmlnaHQ6IDhweDsKICBtYXJnaW4tYm90dG9tOiA4cHg7Cn0KPC9zdHlsZT4K",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgaWQ9ImNvbXBvbmVudHMtZHJvcGRvd24tZGVtby1wbGFjZW1lbnQiPgogICAgPHRlbXBsYXRlIHYtZm9yPSIocGxhY2VtZW50LCBpbmRleCkgaW4gcGxhY2VtZW50cyIgOmtleT0icGxhY2VtZW50Ij4KICAgICAgPGEtZHJvcGRvd24gOnBsYWNlbWVudD0icGxhY2VtZW50Ij4KICAgICAgICA8YS1idXR0b24+e3sgcGxhY2VtZW50IH19PC9hLWJ1dHRvbj4KICAgICAgICA8dGVtcGxhdGUgI292ZXJsYXk+CiAgICAgICAgICA8YS1tZW51PgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+CiAgICAgICAgICAgICAgICAxc3QgbWVudSBpdGVtCiAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+CiAgICAgICAgICAgICAgICAybmQgbWVudSBpdGVtCiAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50bWFsbC5jb20vIj4KICAgICAgICAgICAgICAgIDNyZCBtZW51IGl0ZW0KICAgICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIDwvYS1tZW51LWl0ZW0+CiAgICAgICAgICA8L2EtbWVudT4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtZHJvcGRvd24+CiAgICAgIDxiciB2LWlmPSJpbmRleCA9PT0gMiIgLz4KICAgIDwvdGVtcGxhdGU+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBwbGFjZW1lbnRzOiBbJ2JvdHRvbUxlZnQnLCAnYm90dG9tJywgJ2JvdHRvbVJpZ2h0JywgJ3RvcExlZnQnLCAndG9wJywgJ3RvcFJpZ2h0J10sCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+CjxzdHlsZT4KI2NvbXBvbmVudHMtZHJvcGRvd24tZGVtby1wbGFjZW1lbnQgLmFudC1idG4gewogIG1hcmdpbi1yaWdodDogOHB4OwogIG1hcmdpbi1ib3R0b206IDhweDsKfQo8L3N0eWxlPg=="}},{default:a(()=>[n("div",gt,[(m(!0),y(f,null,Y(c.placements,(d,w)=>(m(),y(f,{key:d},[s(i,{placement:d},{overlay:a(()=>[s(u,null,{default:a(()=>[s(e,null,{default:a(()=>[dt]),_:1}),s(e,null,{default:a(()=>[rt]),_:1}),s(e,null,{default:a(()=>[mt]),_:1})]),_:1})]),default:a(()=>[s(p,null,{default:a(()=>[t(X(d),1)]),_:2},1024)]),_:2},1032,["placement"]),w===2?(m(),y("br",Ct)):x("",!0)],64))),128))])]),htmlCode:a(()=>[It]),jsVersionHtml:a(()=>[bt]),_:1},8,["jsfiddle"])}var ht=b(it,[["render",At]]);const vt=h({components:{DownOutlined:v}}),Wt=t(" Cascading menu "),wt=t("1st menu item"),yt=t("2nd menu item"),Gt=t("3rd menu item"),Zt=t("4th menu item"),ft=t("5d menu item"),Vt=t("6th menu item"),Pt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Cascading menu
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-sub-menu")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("4th menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-sub-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-sub-menu")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled sub menu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("5d menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("6th menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-sub-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Bt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Cascading menu
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-sub-menu")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("4th menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-sub-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-sub-menu")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sub2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled sub menu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("5d menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t("6th menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-sub-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function _t(c,l,k,r,C,I){const p=o("DownOutlined"),e=o("a-menu-item"),u=o("a-sub-menu"),i=o("a-menu"),g=o("a-dropdown"),d=o("demo-box");return m(),A(d,{jsfiddle:{us:"The menu has multiple levels.",cn:"\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The menu has multiple levels.</p>
`,order:6,title:{"zh-CN":"\u591A\u7EA7\u83DC\u5355","en-US":"Cascading menu"},relativePath:"components/dropdown/demo/sub-menu.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgQ2FzY2FkaW5nIG1lbnUKICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgPC9hPgogICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICA8YS1tZW51PgogICAgICAgIDxhLW1lbnUtaXRlbT4xc3QgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0+Mm5kIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtc3ViLW1lbnUga2V5PSJzdWIxIiB0aXRsZT0ic3ViIG1lbnUiPgogICAgICAgICAgPGEtbWVudS1pdGVtPjNyZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPjR0aCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1zdWItbWVudT4KICAgICAgICA8YS1zdWItbWVudSBrZXk9InN1YjIiIHRpdGxlPSJkaXNhYmxlZCBzdWIgbWVudSIgZGlzYWJsZWQ+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+NWQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbT42dGggbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2Etc3ViLW1lbnU+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIERvd25PdXRsaW5lZCwKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgQ2FzY2FkaW5nIG1lbnUKICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgPC9hPgogICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICA8YS1tZW51PgogICAgICAgIDxhLW1lbnUtaXRlbT4xc3QgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8YS1tZW51LWl0ZW0+Mm5kIG1lbnUgaXRlbTwvYS1tZW51LWl0ZW0+CiAgICAgICAgPGEtc3ViLW1lbnUga2V5PSJzdWIxIiB0aXRsZT0ic3ViIG1lbnUiPgogICAgICAgICAgPGEtbWVudS1pdGVtPjNyZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPjR0aCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1zdWItbWVudT4KICAgICAgICA8YS1zdWItbWVudSBrZXk9InN1YjIiIHRpdGxlPSJkaXNhYmxlZCBzdWIgbWVudSIgZGlzYWJsZWQ+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+NWQgbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICAgIDxhLW1lbnUtaXRlbT42dGggbWVudSBpdGVtPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2Etc3ViLW1lbnU+CiAgICAgIDwvYS1tZW51PgogICAgPC90ZW1wbGF0ZT4KICA8L2EtZHJvcGRvd24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgRG93bk91dGxpbmVkLAogIH0sCn0pOwo8L3NjcmlwdD4="}},{default:a(()=>[s(g,null,{overlay:a(()=>[s(i,null,{default:a(()=>[s(e,null,{default:a(()=>[wt]),_:1}),s(e,null,{default:a(()=>[yt]),_:1}),s(u,{key:"sub1",title:"sub menu"},{default:a(()=>[s(e,null,{default:a(()=>[Gt]),_:1}),s(e,null,{default:a(()=>[Zt]),_:1})]),_:1}),s(u,{key:"sub2",title:"disabled sub menu",disabled:""},{default:a(()=>[s(e,null,{default:a(()=>[ft]),_:1}),s(e,null,{default:a(()=>[Vt]),_:1})]),_:1})]),_:1})]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:l[0]||(l[0]=W(()=>{},["prevent"]))},[Wt,s(p)])]),_:1})]),htmlCode:a(()=>[Pt]),jsVersionHtml:a(()=>[Bt]),_:1},8,["jsfiddle"])}var Rt=b(vt,[["render",_t]]);const St=h({components:{DownOutlined:v}}),Dt=t(" Click me "),Lt=n("a",{href:"http://www.alipay.com/"},"1st menu item",-1),Yt=n("a",{href:"http://www.taobao.com/"},"2nd menu item",-1),Xt=t("3rd menu item"),xt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("click"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Click me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-divider")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Ht=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown")]),t(),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("click"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-dropdown-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.prevent"),n("span",{class:"token punctuation"},">")]),t(`
      Click me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1st menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("2nd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-divider")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("3rd menu item"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Ut(c,l,k,r,C,I){const p=o("DownOutlined"),e=o("a-menu-item"),u=o("a-menu-divider"),i=o("a-menu"),g=o("a-dropdown"),d=o("demo-box");return m(),A(d,{jsfiddle:{us:"The default trigger mode is `hover`, you can change it to `click`.",cn:"\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The default trigger mode is <code>hover</code>, you can change it to <code>click</code>.</p>
`,order:3,title:{"zh-CN":"\u89E6\u53D1\u65B9\u5F0F","en-US":"Trigger mode"},relativePath:"components/dropdown/demo/trigger.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIDp0cmlnZ2VyPSJbJ2NsaWNrJ10iPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgQ2xpY2sgbWUKICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgPC9hPgogICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICA8YS1tZW51PgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjAiPgogICAgICAgICAgPGEgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+MXN0IG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPgogICAgICAgICAgPGEgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+Mm5kIG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtZGl2aWRlciAvPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPjNyZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICA8L2EtbWVudT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWRyb3Bkb3duPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgRG93bk91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBEb3duT3V0bGluZWQsCiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWRyb3Bkb3duIDp0cmlnZ2VyPSJbJ2NsaWNrJ10iPgogICAgPGEgY2xhc3M9ImFudC1kcm9wZG93bi1saW5rIiBAY2xpY2sucHJldmVudD4KICAgICAgQ2xpY2sgbWUKICAgICAgPERvd25PdXRsaW5lZCAvPgogICAgPC9hPgogICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICA8YS1tZW51PgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjAiPgogICAgICAgICAgPGEgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+MXN0IG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjEiPgogICAgICAgICAgPGEgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+Mm5kIG1lbnUgaXRlbTwvYT4KICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDxhLW1lbnUtZGl2aWRlciAvPgogICAgICAgIDxhLW1lbnUtaXRlbSBrZXk9IjMiPjNyZCBtZW51IGl0ZW08L2EtbWVudS1pdGVtPgogICAgICA8L2EtbWVudT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLWRyb3Bkb3duPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIERvd25PdXRsaW5lZCwKICB9LAp9KTsKPC9zY3JpcHQ+"}},{default:a(()=>[s(g,{trigger:["click"]},{overlay:a(()=>[s(i,null,{default:a(()=>[s(e,{key:"0"},{default:a(()=>[Lt]),_:1}),s(e,{key:"1"},{default:a(()=>[Yt]),_:1}),s(u),s(e,{key:"3"},{default:a(()=>[Xt]),_:1})]),_:1})]),default:a(()=>[n("a",{class:"ant-dropdown-link",onClick:l[0]||(l[0]=W(()=>{},["prevent"]))},[Dt,s(p)])]),_:1})]),htmlCode:a(()=>[xt]),jsVersionHtml:a(()=>[Ht]),_:1},8,["jsfiddle"])}var Et=b(St,[["render",Ut]]);const jt=h({components:{DownOutlined:v},setup(){const c=Z(!1),l=Z(!1),k=r=>{r.value=!0,setTimeout(()=>{r.value=!1},6e3)};return{loading1:c,loading2:l,enterLoading1(){k(c)},enterLoading2(){k(l)}}}}),Nt=t("Submit and continue"),Jt=t(" Submit "),Kt=t("Submit and continue"),Ft=t(" Submit "),Tt=t("Submit and continue"),zt=t(" Submit "),Qt=t(" Submit "),qt=t("Submit and continue"),Mt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"loading"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit and continue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      Submit
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"loading"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit and continue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      Submit
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enterLoading1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit and continue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      Submit
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enterLoading2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Submit
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit and continue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" Ref"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"enterLoading"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"loading"),n("span",{class:"token operator"},":"),t(" Ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"6000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading1`),n("span",{class:"token punctuation"},","),t(`
      loading2`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"enterLoading1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"enterLoading"),n("span",{class:"token punctuation"},"("),t("loading1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"enterLoading2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"enterLoading"),n("span",{class:"token punctuation"},"("),t("loading2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Ot=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"loading"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit and continue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      Submit
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"loading"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit and continue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      Submit
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enterLoading1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit and continue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      Submit
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-dropdown-button")]),t(),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enterLoading2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Submit
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-menu-item")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit and continue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu-item")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-menu")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DownOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-dropdown-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DownOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    DownOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"enterLoading"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"loading"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"6000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading1`),n("span",{class:"token punctuation"},","),t(`
      loading2`),n("span",{class:"token punctuation"},","),t(`

      `),n("span",{class:"token function"},"enterLoading1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"enterLoading"),n("span",{class:"token punctuation"},"("),t("loading1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

      `),n("span",{class:"token function"},"enterLoading2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"enterLoading"),n("span",{class:"token punctuation"},"("),t("loading2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function $t(c,l,k,r,C,I){const p=o("a-menu-item"),e=o("a-menu"),u=o("a-dropdown-button"),i=o("DownOutlined"),g=o("a-space"),d=o("demo-box");return m(),A(d,{jsfiddle:{us:"A loading indicator can be added to a button by setting the `loading` property on the `a-dropdown-button`.",cn:"\u6DFB\u52A0 `loading` \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u6700\u540E\u4E24\u4E2A\u6309\u94AE\u6F14\u793A\u70B9\u51FB\u540E\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6DFB\u52A0 <code>loading</code> \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u6700\u540E\u4E24\u4E2A\u6309\u94AE\u6F14\u793A\u70B9\u51FB\u540E\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A loading indicator can be added to a button by setting the <code>loading</code> property on the <code>a-dropdown-button</code>.</p>
`,order:9,title:{"zh-CN":"\u52A0\u8F7D\u4E2D\u72B6\u6001","en-US":"Loading"},relativePath:"components/dropdown/demo/loading.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZHJvcGRvd24tYnV0dG9uIHR5cGU9InByaW1hcnkiIGxvYWRpbmc+CiAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICA8YS1tZW51PgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+U3VibWl0IGFuZCBjb250aW51ZTwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLW1lbnU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIFN1Ym1pdAogICAgPC9hLWRyb3Bkb3duLWJ1dHRvbj4KICAgIDxhLWRyb3Bkb3duLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBzaXplPSJzbWFsbCIgbG9hZGluZz4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnU+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj5TdWJtaXQgYW5kIGNvbnRpbnVlPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2EtbWVudT4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgU3VibWl0CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uIHR5cGU9InByaW1hcnkiIDpsb2FkaW5nPSJsb2FkaW5nMSIgQGNsaWNrPSJlbnRlckxvYWRpbmcxIj4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnU+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj5TdWJtaXQgYW5kIGNvbnRpbnVlPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2EtbWVudT4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgU3VibWl0CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uIDpsb2FkaW5nPSJsb2FkaW5nMiIgQGNsaWNrPSJlbnRlckxvYWRpbmcyIj4KICAgICAgU3VibWl0CiAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICA8YS1tZW51PgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+U3VibWl0IGFuZCBjb250aW51ZTwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLW1lbnU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSAjaWNvbj48RG93bk91dGxpbmVkIC8+PC90ZW1wbGF0ZT4KICAgIDwvYS1kcm9wZG93bi1idXR0b24+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBSZWYsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIERvd25PdXRsaW5lZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgbG9hZGluZzEgPSByZWYoZmFsc2UpOwogICAgY29uc3QgbG9hZGluZzIgPSByZWYoZmFsc2UpOwogICAgY29uc3QgZW50ZXJMb2FkaW5nID0gKGxvYWRpbmc6IFJlZjxib29sZWFuPikgPT4gewogICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICB9LCA2MDAwKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBsb2FkaW5nMSwKICAgICAgbG9hZGluZzIsCiAgICAgIGVudGVyTG9hZGluZzEoKSB7CiAgICAgICAgZW50ZXJMb2FkaW5nKGxvYWRpbmcxKTsKICAgICAgfSwKICAgICAgZW50ZXJMb2FkaW5nMigpIHsKICAgICAgICBlbnRlckxvYWRpbmcobG9hZGluZzIpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZHJvcGRvd24tYnV0dG9uIHR5cGU9InByaW1hcnkiIGxvYWRpbmc+CiAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICA8YS1tZW51PgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+U3VibWl0IGFuZCBjb250aW51ZTwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLW1lbnU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIFN1Ym1pdAogICAgPC9hLWRyb3Bkb3duLWJ1dHRvbj4KICAgIDxhLWRyb3Bkb3duLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBzaXplPSJzbWFsbCIgbG9hZGluZz4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnU+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj5TdWJtaXQgYW5kIGNvbnRpbnVlPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2EtbWVudT4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgU3VibWl0CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uIHR5cGU9InByaW1hcnkiIDpsb2FkaW5nPSJsb2FkaW5nMSIgQGNsaWNrPSJlbnRlckxvYWRpbmcxIj4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnU+CiAgICAgICAgICA8YS1tZW51LWl0ZW0ga2V5PSIxIj5TdWJtaXQgYW5kIGNvbnRpbnVlPC9hLW1lbnUtaXRlbT4KICAgICAgICA8L2EtbWVudT4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgU3VibWl0CiAgICA8L2EtZHJvcGRvd24tYnV0dG9uPgogICAgPGEtZHJvcGRvd24tYnV0dG9uIDpsb2FkaW5nPSJsb2FkaW5nMiIgQGNsaWNrPSJlbnRlckxvYWRpbmcyIj4KICAgICAgU3VibWl0CiAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICA8YS1tZW51PgogICAgICAgICAgPGEtbWVudS1pdGVtIGtleT0iMSI+U3VibWl0IGFuZCBjb250aW51ZTwvYS1tZW51LWl0ZW0+CiAgICAgICAgPC9hLW1lbnU+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSAjaWNvbj48RG93bk91dGxpbmVkIC8+PC90ZW1wbGF0ZT4KICAgIDwvYS1kcm9wZG93bi1idXR0b24+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgRG93bk91dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgbG9hZGluZzEgPSByZWYoZmFsc2UpOwogICAgY29uc3QgbG9hZGluZzIgPSByZWYoZmFsc2UpOwoKICAgIGNvbnN0IGVudGVyTG9hZGluZyA9IGxvYWRpbmcgPT4gewogICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICB9LCA2MDAwKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgbG9hZGluZzEsCiAgICAgIGxvYWRpbmcyLAoKICAgICAgZW50ZXJMb2FkaW5nMSgpIHsKICAgICAgICBlbnRlckxvYWRpbmcobG9hZGluZzEpOwogICAgICB9LAoKICAgICAgZW50ZXJMb2FkaW5nMigpIHsKICAgICAgICBlbnRlckxvYWRpbmcobG9hZGluZzIpOwogICAgICB9LAoKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:a(()=>[s(g,{direction:"vertical"},{default:a(()=>[s(u,{type:"primary",loading:""},{overlay:a(()=>[s(e,null,{default:a(()=>[s(p,{key:"1"},{default:a(()=>[Nt]),_:1})]),_:1})]),default:a(()=>[Jt]),_:1}),s(u,{type:"primary",size:"small",loading:""},{overlay:a(()=>[s(e,null,{default:a(()=>[s(p,{key:"1"},{default:a(()=>[Kt]),_:1})]),_:1})]),default:a(()=>[Ft]),_:1}),s(u,{type:"primary",loading:c.loading1,onClick:c.enterLoading1},{overlay:a(()=>[s(e,null,{default:a(()=>[s(p,{key:"1"},{default:a(()=>[Tt]),_:1})]),_:1})]),default:a(()=>[zt]),_:1},8,["loading","onClick"]),s(u,{loading:c.loading2,onClick:c.enterLoading2},{overlay:a(()=>[s(e,null,{default:a(()=>[s(p,{key:"1"},{default:a(()=>[qt]),_:1})]),_:1})]),icon:a(()=>[s(i)]),default:a(()=>[Qt]),_:1},8,["loading","onClick"])]),_:1})]),htmlCode:a(()=>[Mt]),jsVersionHtml:a(()=>[Ot]),_:1},8,["jsfiddle"])}var na=b(jt,[["render",$t]]);const ta=h({CN:q,US:J,components:{loadingVue:na,Basic:en,ContextMenu:mn,DropdownButton:Xn,Event:Fn,Item:tt,OverlayVisible:kt,Placement:ht,SubMenu:Rt,Trigger:Et}});function aa(c,l,k,r,C,I){const p=o("basic"),e=o("context-menu"),u=o("dropdown-button"),i=o("event"),g=o("item"),d=o("overlay-visible"),w=o("placement"),G=o("sub-menu"),B=o("trigger"),_=o("loadingVue"),R=o("demo-sort");return m(),A(R,null,{default:a(()=>[s(p),s(e),s(u),s(i),s(g),s(d),s(w),s(G),s(B),s(_)]),_:1})}var ea=b(ta,[["render",aa]]);export{ea as default};
