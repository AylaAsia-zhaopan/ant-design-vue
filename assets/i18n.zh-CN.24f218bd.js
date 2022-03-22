import{a as t,o as n,bu as a}from"./vendor.1a48ca2a.js";import{_ as s}from"./index.7ca4d79d.js";const d={pageData:{title:"\u56FD\u9645\u5316",description:"",frontmatter:{},headers:[{level:2,title:"",slug:"",content:"ConfigProvider"},{level:2,title:"ConfigProvider",slug:"ConfigProvider",content:"ant-design-vue \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 [ConfigProvider](/components/config-provider-cn) \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002 ConfigProvider \u4E0D\u5305\u542B\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5F15\u5165\u65F6\u95F4\u5E93(dayjs\u3001momentjs\u3001date-fns \u7B49)\u7684\u56FD\u9645\u5316\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u5DF2 dayjs \u4E3A\u4F8B\u3002"}],relativePath:"site/src/vueDocs/i18n.zh-CN.md",content:`# \u56FD\u9645\u5316

\`ant-design-vue\` \u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002

##

## ConfigProvider

ant-design-vue \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 [ConfigProvider](/components/config-provider-cn) \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002 ConfigProvider \u4E0D\u5305\u542B\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5F15\u5165\u65F6\u95F4\u5E93(dayjs\u3001momentjs\u3001date-fns \u7B49)\u7684\u56FD\u9645\u5316\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u5DF2 dayjs \u4E3A\u4F8B\u3002

\`\`\`html
&lt;template&gt;
  &lt;a-config-provider :locale=&quot;locale&quot;&gt;
    &lt;App /&gt;
  &lt;/a-config-provider&gt;
&lt;/template&gt;

&lt;script&gt;
  import zhCN from &#39;ant-design-vue/es/locale/zh_CN&#39;;
  import dayjs from &#39;dayjs&#39;;
  import &#39;dayjs/locale/zh-cn&#39;;
  dayjs.locale(&#39;zh-cn&#39;);

  export default {
    data() {
      return {
        locale: zhCN,
      };
    },
  };
&lt;/script&gt;
\`\`\`

\u6CE8\u610F\uFF1A\`zh_CN\` \u662F\u6587\u4EF6\u540D\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002

\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A

| \u8BED\u8A00                 | \u6587\u4EF6\u540D |
| -------------------- | ------ |
| \u963F\u62C9\u4F2F\u8BED             | ar_EG  |
| \u963F\u585E\u62DC\u7586\u8BED           | az_AZ  |
| \u4FDD\u52A0\u5229\u4E9A\u8BED           | bg_BG  |
| \u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09 | bn_BD  |
| \u767D\u4FC4\u7F57\u65AF\u8BED           | by_BY  |
| \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED         | ca_ES  |
| \u6377\u514B\u8BED               | cs_CZ  |
| \u4E39\u9EA6\u8BED               | da_DK  |
| \u5FB7\u8BED                 | de_DE  |
| \u5E0C\u814A\u8BED               | el_GR  |
| \u82F1\u8BED                 | en_GB  |
| \u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09         | en_US  |
| \u897F\u73ED\u7259\u8BED             | es_ES  |
| \u7231\u6C99\u5C3C\u4E9A\u8BED           | et_EE  |
| \u6CE2\u65AF\u8BED               | fa_IR  |
| \u82AC\u5170\u8BED               | fi_FI  |
| \u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09       | fr_BE  |
| \u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09       | fr_CA  |
| \u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09         | fr_FR  |
| \u7231\u5C14\u5170\u8BED             | ga_IE  |
| \u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09 | gl_ES  |
| \u5E0C\u4F2F\u6765\u8BED             | he_IL  |
| \u5370\u5730\u8BED               | hi_IN  |
| \u514B\u7F57\u5730\u4E9A\u8BED           | hr_HR  |
| \u5308\u7259\u5229\u8BED             | hu_HU  |
| \u4E9A\u7F8E\u5C3C\u4E9A             | hy_AM  |
| \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED         | id_ID  |
| \u610F\u5927\u5229\u8BED             | it_IT  |
| \u51B0\u5C9B\u8BED               | is_IS  |
| \u65E5\u8BED                 | ja_JP  |
| \u683C\u9C81\u5409\u4E9A\u8BED           | ka_GE  |
| \u9AD8\u68C9\u8BED               | km_KH  |
| \u5317\u5E93\u5C14\u5FB7\u8BED           | kmr_IQ |
| \u5361\u7EB3\u8FBE\u8BED             | kn_IN  |
| \u54C8\u8428\u514B\u8BED             | kk_KZ  |
| \u97E9\u8BED/\u671D\u9C9C\u8BED          | ko_KR  |
| \u7ACB\u9676\u5B9B\u8BED             | lt_LT  |
| \u62C9\u8131\u7EF4\u4E9A\u8BED           | lv_LV  |
| \u9A6C\u5176\u987F\u8BED             | mk_MK  |
| \u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED         | ml_IN  |
| \u8499\u53E4\u8BED               | mn_MN  |
| \u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)    | ms_MY  |
| \u632A\u5A01\u8BED               | nb_NO  |
| \u5C3C\u6CCA\u5C14\u8BED             | ne_NP  |
| \u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09     | nl_BE  |
| \u8377\u5170\u8BED               | nl_NL  |
| \u6CE2\u5170\u8BED               | pl_PL  |
| \u8461\u8404\u7259\u8BED(\u5DF4\u897F)       | pt_BR  |
| \u8461\u8404\u7259\u8BED             | pt_PT  |
| \u7F57\u9A6C\u5C3C\u4E9A\u8BED           | ro_RO  |
| \u4FC4\u7F57\u65AF\u8BED             | ru_RU  |
| \u65AF\u6D1B\u4F10\u514B\u8BED           | sk_SK  |
| \u585E\u5C14\u7EF4\u4E9A\u8BED           | sr_RS  |
| \u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED         | sl_SI  |
| \u745E\u5178\u8BED               | sv_SE  |
| \u6CF0\u7C73\u5C14\u8BED             | ta_IN  |
| \u6CF0\u8BED                 | th_TH  |
| \u571F\u8033\u5176\u8BED             | tr_TR  |
| \u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)  | ur_PK  |
| \u4E4C\u514B\u5170\u8BED             | uk_UA  |
| \u8D8A\u5357\u8BED               | vi_VN  |
| \u7B80\u4F53\u4E2D\u6587             | zh_CN  |
| \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09 | zh_HK  |
| \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09 | zh_TW  |

\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 [ConfigProvider \u6587\u6863](/components/config-provider-cn)\u3002
`,html:`<h1 id="\u56FD\u9645\u5316">\u56FD\u9645\u5316 <a class="header-anchor" href="#\u56FD\u9645\u5316">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h1>
<p><code>ant-design-vue</code> \u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002</p>
<h2 id=""> <a class="header-anchor" href="#">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h2 id="ConfigProvider">ConfigProvider <a class="header-anchor" href="#ConfigProvider">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>ant-design-vue \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 <a href="/components/config-provider-cn.html">ConfigProvider</a> \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002 ConfigProvider \u4E0D\u5305\u542B\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5F15\u5165\u65F6\u95F4\u5E93(dayjs\u3001momentjs\u3001date-fns \u7B49)\u7684\u56FD\u9645\u5316\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u5DF2 dayjs \u4E3A\u4F8B\u3002</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>locale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'ant-design-vue/es/locale/zh_CN'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">'dayjs/locale/zh-cn'</span><span class="token punctuation">;</span>
  dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCN<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<p>\u6CE8\u610F\uFF1A<code>zh_CN</code> \u662F\u6587\u4EF6\u540D\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002</p>
<p>\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A</p>
<table>
<thead>
<tr>
<th>\u8BED\u8A00</th>
<th>\u6587\u4EF6\u540D</th>
</tr>
</thead>
<tbody>
<tr>
<td>\u963F\u62C9\u4F2F\u8BED</td>
<td>ar_EG</td>
</tr>
<tr>
<td>\u963F\u585E\u62DC\u7586\u8BED</td>
<td>az_AZ</td>
</tr>
<tr>
<td>\u4FDD\u52A0\u5229\u4E9A\u8BED</td>
<td>bg_BG</td>
</tr>
<tr>
<td>\u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09</td>
<td>bn_BD</td>
</tr>
<tr>
<td>\u767D\u4FC4\u7F57\u65AF\u8BED</td>
<td>by_BY</td>
</tr>
<tr>
<td>\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED</td>
<td>ca_ES</td>
</tr>
<tr>
<td>\u6377\u514B\u8BED</td>
<td>cs_CZ</td>
</tr>
<tr>
<td>\u4E39\u9EA6\u8BED</td>
<td>da_DK</td>
</tr>
<tr>
<td>\u5FB7\u8BED</td>
<td>de_DE</td>
</tr>
<tr>
<td>\u5E0C\u814A\u8BED</td>
<td>el_GR</td>
</tr>
<tr>
<td>\u82F1\u8BED</td>
<td>en_GB</td>
</tr>
<tr>
<td>\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09</td>
<td>en_US</td>
</tr>
<tr>
<td>\u897F\u73ED\u7259\u8BED</td>
<td>es_ES</td>
</tr>
<tr>
<td>\u7231\u6C99\u5C3C\u4E9A\u8BED</td>
<td>et_EE</td>
</tr>
<tr>
<td>\u6CE2\u65AF\u8BED</td>
<td>fa_IR</td>
</tr>
<tr>
<td>\u82AC\u5170\u8BED</td>
<td>fi_FI</td>
</tr>
<tr>
<td>\u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09</td>
<td>fr_BE</td>
</tr>
<tr>
<td>\u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09</td>
<td>fr_CA</td>
</tr>
<tr>
<td>\u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09</td>
<td>fr_FR</td>
</tr>
<tr>
<td>\u7231\u5C14\u5170\u8BED</td>
<td>ga_IE</td>
</tr>
<tr>
<td>\u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09</td>
<td>gl_ES</td>
</tr>
<tr>
<td>\u5E0C\u4F2F\u6765\u8BED</td>
<td>he_IL</td>
</tr>
<tr>
<td>\u5370\u5730\u8BED</td>
<td>hi_IN</td>
</tr>
<tr>
<td>\u514B\u7F57\u5730\u4E9A\u8BED</td>
<td>hr_HR</td>
</tr>
<tr>
<td>\u5308\u7259\u5229\u8BED</td>
<td>hu_HU</td>
</tr>
<tr>
<td>\u4E9A\u7F8E\u5C3C\u4E9A</td>
<td>hy_AM</td>
</tr>
<tr>
<td>\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED</td>
<td>id_ID</td>
</tr>
<tr>
<td>\u610F\u5927\u5229\u8BED</td>
<td>it_IT</td>
</tr>
<tr>
<td>\u51B0\u5C9B\u8BED</td>
<td>is_IS</td>
</tr>
<tr>
<td>\u65E5\u8BED</td>
<td>ja_JP</td>
</tr>
<tr>
<td>\u683C\u9C81\u5409\u4E9A\u8BED</td>
<td>ka_GE</td>
</tr>
<tr>
<td>\u9AD8\u68C9\u8BED</td>
<td>km_KH</td>
</tr>
<tr>
<td>\u5317\u5E93\u5C14\u5FB7\u8BED</td>
<td>kmr_IQ</td>
</tr>
<tr>
<td>\u5361\u7EB3\u8FBE\u8BED</td>
<td>kn_IN</td>
</tr>
<tr>
<td>\u54C8\u8428\u514B\u8BED</td>
<td>kk_KZ</td>
</tr>
<tr>
<td>\u97E9\u8BED/\u671D\u9C9C\u8BED</td>
<td>ko_KR</td>
</tr>
<tr>
<td>\u7ACB\u9676\u5B9B\u8BED</td>
<td>lt_LT</td>
</tr>
<tr>
<td>\u62C9\u8131\u7EF4\u4E9A\u8BED</td>
<td>lv_LV</td>
</tr>
<tr>
<td>\u9A6C\u5176\u987F\u8BED</td>
<td>mk_MK</td>
</tr>
<tr>
<td>\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED</td>
<td>ml_IN</td>
</tr>
<tr>
<td>\u8499\u53E4\u8BED</td>
<td>mn_MN</td>
</tr>
<tr>
<td>\u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)</td>
<td>ms_MY</td>
</tr>
<tr>
<td>\u632A\u5A01\u8BED</td>
<td>nb_NO</td>
</tr>
<tr>
<td>\u5C3C\u6CCA\u5C14\u8BED</td>
<td>ne_NP</td>
</tr>
<tr>
<td>\u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09</td>
<td>nl_BE</td>
</tr>
<tr>
<td>\u8377\u5170\u8BED</td>
<td>nl_NL</td>
</tr>
<tr>
<td>\u6CE2\u5170\u8BED</td>
<td>pl_PL</td>
</tr>
<tr>
<td>\u8461\u8404\u7259\u8BED(\u5DF4\u897F)</td>
<td>pt_BR</td>
</tr>
<tr>
<td>\u8461\u8404\u7259\u8BED</td>
<td>pt_PT</td>
</tr>
<tr>
<td>\u7F57\u9A6C\u5C3C\u4E9A\u8BED</td>
<td>ro_RO</td>
</tr>
<tr>
<td>\u4FC4\u7F57\u65AF\u8BED</td>
<td>ru_RU</td>
</tr>
<tr>
<td>\u65AF\u6D1B\u4F10\u514B\u8BED</td>
<td>sk_SK</td>
</tr>
<tr>
<td>\u585E\u5C14\u7EF4\u4E9A\u8BED</td>
<td>sr_RS</td>
</tr>
<tr>
<td>\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED</td>
<td>sl_SI</td>
</tr>
<tr>
<td>\u745E\u5178\u8BED</td>
<td>sv_SE</td>
</tr>
<tr>
<td>\u6CF0\u7C73\u5C14\u8BED</td>
<td>ta_IN</td>
</tr>
<tr>
<td>\u6CF0\u8BED</td>
<td>th_TH</td>
</tr>
<tr>
<td>\u571F\u8033\u5176\u8BED</td>
<td>tr_TR</td>
</tr>
<tr>
<td>\u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)</td>
<td>ur_PK</td>
</tr>
<tr>
<td>\u4E4C\u514B\u5170\u8BED</td>
<td>uk_UA</td>
</tr>
<tr>
<td>\u8D8A\u5357\u8BED</td>
<td>vi_VN</td>
</tr>
<tr>
<td>\u7B80\u4F53\u4E2D\u6587</td>
<td>zh_CN</td>
</tr>
<tr>
<td>\u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09</td>
<td>zh_HK</td>
</tr>
<tr>
<td>\u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09</td>
<td>zh_TW</td>
</tr>
</tbody>
</table>
<p>\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="/components/config-provider-cn.html">ConfigProvider \u6587\u6863</a>\u3002</p>
`,lastUpdated:1647939648582}},r={class:"markdown"},p=a(`<h1 id="\u56FD\u9645\u5316">\u56FD\u9645\u5316 <a class="header-anchor" href="#\u56FD\u9645\u5316"><span aria-hidden="true" class="anchor">#</span></a></h1><p><code>ant-design-vue</code> \u76EE\u524D\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002</p><h2 id=""><a class="header-anchor" href="#"><span aria-hidden="true" class="anchor">#</span></a></h2><h2 id="ConfigProvider">ConfigProvider <a class="header-anchor" href="#ConfigProvider"><span aria-hidden="true" class="anchor">#</span></a></h2><p>ant-design-vue \u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 <a href="/components/config-provider-cn.html">ConfigProvider</a> \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002 ConfigProvider \u4E0D\u5305\u542B\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5F15\u5165\u65F6\u95F4\u5E93(dayjs\u3001momentjs\u3001date-fns \u7B49)\u7684\u56FD\u9645\u5316\u6587\u4EF6\uFF0C\u4EE5\u4E0B\u6211\u4EEC\u5DF2 dayjs \u4E3A\u4F8B\u3002</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/locale/zh_CN&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&#39;dayjs&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">&#39;dayjs/locale/zh-cn&#39;</span><span class="token punctuation">;</span>
  dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCN<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>\u6CE8\u610F\uFF1A<code>zh_CN</code> \u662F\u6587\u4EF6\u540D\uFF0C\u4EE5\u4E0B\u8868\u683C\u4E5F\u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\u3002</p><p>\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A</p><table><thead><tr><th>\u8BED\u8A00</th><th>\u6587\u4EF6\u540D</th></tr></thead><tbody><tr><td>\u963F\u62C9\u4F2F\u8BED</td><td>ar_EG</td></tr><tr><td>\u963F\u585E\u62DC\u7586\u8BED</td><td>az_AZ</td></tr><tr><td>\u4FDD\u52A0\u5229\u4E9A\u8BED</td><td>bg_BG</td></tr><tr><td>\u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09</td><td>bn_BD</td></tr><tr><td>\u767D\u4FC4\u7F57\u65AF\u8BED</td><td>by_BY</td></tr><tr><td>\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED</td><td>ca_ES</td></tr><tr><td>\u6377\u514B\u8BED</td><td>cs_CZ</td></tr><tr><td>\u4E39\u9EA6\u8BED</td><td>da_DK</td></tr><tr><td>\u5FB7\u8BED</td><td>de_DE</td></tr><tr><td>\u5E0C\u814A\u8BED</td><td>el_GR</td></tr><tr><td>\u82F1\u8BED</td><td>en_GB</td></tr><tr><td>\u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09</td><td>en_US</td></tr><tr><td>\u897F\u73ED\u7259\u8BED</td><td>es_ES</td></tr><tr><td>\u7231\u6C99\u5C3C\u4E9A\u8BED</td><td>et_EE</td></tr><tr><td>\u6CE2\u65AF\u8BED</td><td>fa_IR</td></tr><tr><td>\u82AC\u5170\u8BED</td><td>fi_FI</td></tr><tr><td>\u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09</td><td>fr_BE</td></tr><tr><td>\u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09</td><td>fr_CA</td></tr><tr><td>\u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09</td><td>fr_FR</td></tr><tr><td>\u7231\u5C14\u5170\u8BED</td><td>ga_IE</td></tr><tr><td>\u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09</td><td>gl_ES</td></tr><tr><td>\u5E0C\u4F2F\u6765\u8BED</td><td>he_IL</td></tr><tr><td>\u5370\u5730\u8BED</td><td>hi_IN</td></tr><tr><td>\u514B\u7F57\u5730\u4E9A\u8BED</td><td>hr_HR</td></tr><tr><td>\u5308\u7259\u5229\u8BED</td><td>hu_HU</td></tr><tr><td>\u4E9A\u7F8E\u5C3C\u4E9A</td><td>hy_AM</td></tr><tr><td>\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED</td><td>id_ID</td></tr><tr><td>\u610F\u5927\u5229\u8BED</td><td>it_IT</td></tr><tr><td>\u51B0\u5C9B\u8BED</td><td>is_IS</td></tr><tr><td>\u65E5\u8BED</td><td>ja_JP</td></tr><tr><td>\u683C\u9C81\u5409\u4E9A\u8BED</td><td>ka_GE</td></tr><tr><td>\u9AD8\u68C9\u8BED</td><td>km_KH</td></tr><tr><td>\u5317\u5E93\u5C14\u5FB7\u8BED</td><td>kmr_IQ</td></tr><tr><td>\u5361\u7EB3\u8FBE\u8BED</td><td>kn_IN</td></tr><tr><td>\u54C8\u8428\u514B\u8BED</td><td>kk_KZ</td></tr><tr><td>\u97E9\u8BED/\u671D\u9C9C\u8BED</td><td>ko_KR</td></tr><tr><td>\u7ACB\u9676\u5B9B\u8BED</td><td>lt_LT</td></tr><tr><td>\u62C9\u8131\u7EF4\u4E9A\u8BED</td><td>lv_LV</td></tr><tr><td>\u9A6C\u5176\u987F\u8BED</td><td>mk_MK</td></tr><tr><td>\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED</td><td>ml_IN</td></tr><tr><td>\u8499\u53E4\u8BED</td><td>mn_MN</td></tr><tr><td>\u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)</td><td>ms_MY</td></tr><tr><td>\u632A\u5A01\u8BED</td><td>nb_NO</td></tr><tr><td>\u5C3C\u6CCA\u5C14\u8BED</td><td>ne_NP</td></tr><tr><td>\u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09</td><td>nl_BE</td></tr><tr><td>\u8377\u5170\u8BED</td><td>nl_NL</td></tr><tr><td>\u6CE2\u5170\u8BED</td><td>pl_PL</td></tr><tr><td>\u8461\u8404\u7259\u8BED(\u5DF4\u897F)</td><td>pt_BR</td></tr><tr><td>\u8461\u8404\u7259\u8BED</td><td>pt_PT</td></tr><tr><td>\u7F57\u9A6C\u5C3C\u4E9A\u8BED</td><td>ro_RO</td></tr><tr><td>\u4FC4\u7F57\u65AF\u8BED</td><td>ru_RU</td></tr><tr><td>\u65AF\u6D1B\u4F10\u514B\u8BED</td><td>sk_SK</td></tr><tr><td>\u585E\u5C14\u7EF4\u4E9A\u8BED</td><td>sr_RS</td></tr><tr><td>\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED</td><td>sl_SI</td></tr><tr><td>\u745E\u5178\u8BED</td><td>sv_SE</td></tr><tr><td>\u6CF0\u7C73\u5C14\u8BED</td><td>ta_IN</td></tr><tr><td>\u6CF0\u8BED</td><td>th_TH</td></tr><tr><td>\u571F\u8033\u5176\u8BED</td><td>tr_TR</td></tr><tr><td>\u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)</td><td>ur_PK</td></tr><tr><td>\u4E4C\u514B\u5170\u8BED</td><td>uk_UA</td></tr><tr><td>\u8D8A\u5357\u8BED</td><td>vi_VN</td></tr><tr><td>\u7B80\u4F53\u4E2D\u6587</td><td>zh_CN</td></tr><tr><td>\u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09</td><td>zh_HK</td></tr><tr><td>\u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09</td><td>zh_TW</td></tr></tbody></table><p>\u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="/components/config-provider-cn.html">ConfigProvider \u6587\u6863</a>\u3002</p>`,10),o=[p];function e(c,l,i,_,u,k){return n(),t("article",r,o)}var f=s(d,[["render",e]]);export{f as default};
