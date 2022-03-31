import{_ as s,b as n,k as e,s as a}from"./index.a5f0f51e.js";const t={pageData:{title:"Customize Theme",description:"",frontmatter:{},headers:[{level:2,title:"Ant Design Vue Less variables",slug:"Ant-Design-Vue-Less-variables",content:"We are using [Less](http://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs."},{level:2,title:"How to do it",slug:"How-to-do-it",content:"We will use [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) provided by less.js to override the default values of the variables. We now introduce some popular way to do it depends on different workflow."},{level:3,title:"Customize in webpack",slug:"Customize-in-webpack",content:"We take a typical `webpack.config.js` file as example to customize it's [less-loader](https://github.com/webpack-contrib/less-loader) options."},{level:3,title:"Customize in vue cli 2",slug:"Customize-in-vue-cli-2",content:"Modify the `build/utils.js` file"},{level:3,title:"Customize in vue cli 3",slug:"Customize-in-vue-cli-3",content:"Create a new file `vue.config.js` in the project directory."},{level:3,title:"Customize in less file",slug:"Customize-in-less-file",content:"Another approach to customize theme is creating a `less` file within variables to override `antd.less`."},{level:3,title:"Dynamic theme",slug:"Dynamic-theme",content:"Runtime update theme color please [ref this doc](/docs/react/customize-theme-variable)."},{level:2,title:"How to avoid modifying global styles?",slug:"How-to-avoid-modifying-global-styles",content:"Currently ant-design-vue is designed as a whole experience and modify global styles (eg `body` etc). If you need to integrate ant-design-vue as a part of an existing website, it's likely you want to prevent ant-design-vue to override global styles."},{level:3,title:"Configure webpack to load an alternale less file and scope global styles",slug:"Configure-webpack-to-load-an-alternale-less-file-and-scope-global-styles",content:"It's possible to configure webpack to load an alternate less file:"},{level:3,title:"Use a postcss processor to scope all styles",slug:"Use-a-postcss-processor-to-scope-all-styles",content:"See an example of usage with gulp and [postcss-prefixwrap](https://github.com/dbtedman/postcss-prefixwrap) : https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa"},{level:2,title:"Not working?",slug:"Not-working",content:"You must import styles as less format. A common mistake would be importing multiple copied of styles that some of them are css format to override the less styles."},{level:2,title:"Use dark theme",slug:"Use-dark-theme",content:"Method 1: Import [antd.dark.less](https://unpkg.com/browse/ant-design-vue@2.0.0/dist/antd.dark.less) in the style file:"},{level:2,title:"Related Articles",slug:"Related-Articles",content:""}],relativePath:"site/src/vueDocs/customize-theme.en-US.md",content:`# Customize Theme

The structure and styles of ant-design-vue are exactly the same as those of Antd. You can refer to the Antd React customization mode for configuration.

Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

![](https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png)

## Ant Design Vue Less variables

We are using [Less](http://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.

There are some major variables below, all less variables could be found in [Default Variables](https://github.com/vueComponent/ant-design-vue/blob/next/components/style/themes/default.less).

\`\`\`less
@primary-color: #1890ff; // primary color for all components
@link-color: #1890ff; // link color
@success-color: #52c41a; // success state color
@warning-color: #faad14; // warning state color
@error-color: #f5222d; // error state color
@font-size-base: 14px; // major text font size
@heading-color: rgba(0, 0, 0, 0.85); // heading text color
@text-color: rgba(0, 0, 0, 0.85); // major text color
@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
@disabled-color: rgba(0, 0, 0, 0.25); // disable state color
@border-radius-base: 4px; // major border radius
@border-color-base: #d9d9d9; // major border color
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // major shadow for layers
\`\`\`

Please report an issue if the existing list of variables is not enough for you.

## How to do it

We will use [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) provided by less.js to override the default values of the variables. We now introduce some popular way to do it depends on different workflow.

### Customize in webpack

We take a typical \`webpack.config.js\` file as example to customize it&#39;s [less-loader](https://github.com/webpack-contrib/less-loader) options.

\`\`\`diff
// webpack.config.js
module.exports = {
  rules: [{
    test: /\\.less$/,
    use: [{
      loader: &#39;style-loader&#39;,
    }, {
      loader: &#39;css-loader&#39;, // translates CSS into CommonJS
    }, {
      loader: &#39;less-loader&#39;, // compiles Less to CSS
+     options: {
+       lessOptions: {
+         modifyVars: {
+           &#39;primary-color&#39;: &#39;#1DA57A&#39;,
+           &#39;link-color&#39;: &#39;#1DA57A&#39;,
+           &#39;border-radius-base&#39;: &#39;2px&#39;,
+         },
+         javascriptEnabled: true,
+       }
+     },
    }],
    // ...other rules
  }],
  // ...other config
}
\`\`\`

Note that do not exclude antd package in node_modules when using less-loader.

### Customize in vue cli 2

Modify the \`build/utils.js\` file

\`\`\`diff
// build/utils.js
- less: generateLoaders(&#39;less&#39;),
+ less: generateLoaders(&#39;less&#39;, {
+   modifyVars: {
+     &#39;primary-color&#39;: &#39;#1DA57A&#39;,
+     &#39;link-color&#39;: &#39;#1DA57A&#39;,
+     &#39;border-radius-base&#39;: &#39;2px&#39;,
+   },
+   javascriptEnabled: true,
+ }),

\`\`\`

### Customize in vue cli 3

Create a new file \`vue.config.js\` in the project directory.

\`\`\`js
// vue.config.js for less-loader@6.0.0
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            &#39;primary-color&#39;: &#39;#1DA57A&#39;,
            &#39;link-color&#39;: &#39;#1DA57A&#39;,
            &#39;border-radius-base&#39;: &#39;2px&#39;,
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
\`\`\`

### Customize in less file

Another approach to customize theme is creating a \`less\` file within variables to override \`antd.less\`.

\`\`\`css
@import &#39;~ant-design-vue/dist/antd.less&#39;; // Import Ant Design Vue styles by less entry
@import &#39;your-theme-file.less&#39;; // variables to override above
\`\`\`

Note: This way will load the styles of all components, regardless of your demand, which cause \`style\` option of \`babel-plugin-import\` not working.

### Dynamic theme

Runtime update theme color please [ref this doc](/docs/react/customize-theme-variable).

## How to avoid modifying global styles?

Currently ant-design-vue is designed as a whole experience and modify global styles (eg \`body\` etc). If you need to integrate ant-design-vue as a part of an existing website, it&#39;s likely you want to prevent ant-design-vue to override global styles.

While there&#39;s no canonical way to do it, you can take one of the following paths :

### Configure webpack to load an alternale less file and scope global styles

It&#39;s possible to configure webpack to load an alternate less file:

\`\`\`js
new webpack.NormalModuleReplacementPlugin( /node_modules\\/ant-design-vue\\/lib\\/style\\/index\\.less/, path.resolve(rootDir, &#39;src/myStylesReplacement.less&#39;) )

#antd { @import &#39;~ant-design-vue/lib/style/core/index.less&#39;; @import &#39;~ant-design-vue/lib/style/themes/default.less&#39;; }
\`\`\`

Where the src/myStylesReplacement.less file loads the same files as the index.less file, but loads them within the scope of a top-level selector : the result is that all of the &quot;global&quot; styles are being applied with the #antd scope.

### Use a postcss processor to scope all styles

See an example of usage with gulp and [postcss-prefixwrap](https://github.com/dbtedman/postcss-prefixwrap) : https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa

## Not working?

You must import styles as less format. A common mistake would be importing multiple copied of styles that some of them are css format to override the less styles.

- If you import styles by specifying the \`style\` option of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), change it from \`&#39;css&#39;\` to \`true\`, which will import the \`less\` version of antd.
- If you import styles from \`&#39;ant-design-vue/dist/antd.css&#39;\`, change it to \`ant-design-vue/dist/antd.less\`.

## Use dark theme

Method 1: Import [antd.dark.less](https://unpkg.com/browse/ant-design-vue@2.0.0/dist/antd.dark.less) in the style file:

\`\`\`less
@import &#39;~ant-design-vue/dist/antd.dark.less&#39;; // Introduce the official dark less style entry file
\`\`\`

If the project does not use Less, you can import [antd.dark.css](https://unpkg.com/browse/ant-design-vue@2.0.0/dist/antd.dark.css) in the CSS file:

\`\`\`css
@import &#39;~ant-design-vue/dist/antd.dark.css&#39;;
\`\`\`

&gt; Note that you don&#39;t need to import \`ant-design-vue/dist/antd.less\` or \`ant-design-vue/dist/antd.css\` anymore, please remove it, and remove babel-plugin-import \`style\` config too. You can&#39;t enable two or more theme at the same time by this method.

Method 3: using [less-loader](https://github.com/webpack-contrib/less-loader) in \`webpack.config.js\` to introduce as needed:

\`\`\`diff
const { getThemeVariables } = require(&#39;ant-design-vue/dist/theme&#39;);

// webpack.config.js
module.exports = {
  rules: [{
    test: /\\.less$/,
    use: [{
      loader: &#39;style-loader&#39;,
    }, {
      loader: &#39;css-loader&#39;, // translates CSS into CommonJS
    }, {
      loader: &#39;less-loader&#39;, // compiles Less to CSS
+     options: {
+       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
+         modifyVars: getThemeVariables({
+           dark: true, // Enable dark mode
+         }),
+         javascriptEnabled: true,
+       },
+     },
    }],
  }],
};
\`\`\`

## Related Articles

- [How to Customize Ant Design with React &amp; Webpack\u2026 the Missing Guide](https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f)
- [Theming Ant Design with Sass and Webpack](https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7)
`,html:`<h1 id="Customize-Theme">Customize Theme <a class="header-anchor" href="#Customize-Theme">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h1>
<p>The structure and styles of ant-design-vue are exactly the same as those of Antd. You can refer to the Antd React customization mode for configuration.</p>
<p>Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.</p>
<p><img src="https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png" alt=""></p>
<h2 id="Ant-Design-Vue-Less-variables">Ant Design Vue Less variables <a class="header-anchor" href="#Ant-Design-Vue-Less-variables">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>We are using <a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer">Less</a> as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.</p>
<p>There are some major variables below, all less variables could be found in <a href="https://github.com/vueComponent/ant-design-vue/blob/next/components/style/themes/default.less" target="_blank" rel="noopener noreferrer">Default Variables</a>.</p>
<pre class="language-less" v-pre><code><span class="token variable">@primary-color<span class="token punctuation">:</span></span> #1890ff<span class="token punctuation">;</span> <span class="token comment">// primary color for all components</span>
<span class="token variable">@link-color<span class="token punctuation">:</span></span> #1890ff<span class="token punctuation">;</span> <span class="token comment">// link color</span>
<span class="token variable">@success-color<span class="token punctuation">:</span></span> #52c41a<span class="token punctuation">;</span> <span class="token comment">// success state color</span>
<span class="token variable">@warning-color<span class="token punctuation">:</span></span> #faad14<span class="token punctuation">;</span> <span class="token comment">// warning state color</span>
<span class="token variable">@error-color<span class="token punctuation">:</span></span> #f5222d<span class="token punctuation">;</span> <span class="token comment">// error state color</span>
<span class="token variable">@font-size-base<span class="token punctuation">:</span></span> 14px<span class="token punctuation">;</span> <span class="token comment">// major text font size</span>
<span class="token variable">@heading-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.85<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// heading text color</span>
<span class="token variable">@text-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.85<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// major text color</span>
<span class="token variable">@text-color-secondary<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.45<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// secondary text color</span>
<span class="token variable">@disabled-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// disable state color</span>
<span class="token variable">@border-radius-base<span class="token punctuation">:</span></span> 4px<span class="token punctuation">;</span> <span class="token comment">// major border radius</span>
<span class="token variable">@border-color-base<span class="token punctuation">:</span></span> #d9d9d9<span class="token punctuation">;</span> <span class="token comment">// major border color</span>
<span class="token variable">@box-shadow-base<span class="token punctuation">:</span></span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// major shadow for layers</span>
</code></pre>
<p>Please report an issue if the existing list of variables is not enough for you.</p>
<h2 id="How-to-do-it">How to do it <a class="header-anchor" href="#How-to-do-it">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>We will use <a href="http://lesscss.org/usage/#using-less-in-the-browser-modify-variables" target="_blank" rel="noopener noreferrer">modifyVars</a> provided by less.js to override the default values of the variables. We now introduce some popular way to do it depends on different workflow.</p>
<h3 id="Customize-in-webpack">Customize in webpack <a class="header-anchor" href="#Customize-in-webpack">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>We take a typical <code>webpack.config.js</code> file as example to customize it's <a href="https://github.com/webpack-contrib/less-loader" target="_blank" rel="noopener noreferrer">less-loader</a> options.</p>
<pre class="language-diff" v-pre><code>// webpack.config.js
module.exports = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> rules: [{
</span><span class="token prefix unchanged"> </span><span class="token line">   test: /\\.less$/,
</span><span class="token prefix unchanged"> </span><span class="token line">   use: [{
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: 'style-loader',
</span><span class="token prefix unchanged"> </span><span class="token line">   }, {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: 'css-loader', // translates CSS into CommonJS
</span><span class="token prefix unchanged"> </span><span class="token line">   }, {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: 'less-loader', // compiles Less to CSS
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     options: {
</span><span class="token prefix inserted">+</span><span class="token line">       lessOptions: {
</span><span class="token prefix inserted">+</span><span class="token line">         modifyVars: {
</span><span class="token prefix inserted">+</span><span class="token line">           'primary-color': '#1DA57A',
</span><span class="token prefix inserted">+</span><span class="token line">           'link-color': '#1DA57A',
</span><span class="token prefix inserted">+</span><span class="token line">           'border-radius-base': '2px',
</span><span class="token prefix inserted">+</span><span class="token line">         },
</span><span class="token prefix inserted">+</span><span class="token line">         javascriptEnabled: true,
</span><span class="token prefix inserted">+</span><span class="token line">       }
</span><span class="token prefix inserted">+</span><span class="token line">     },
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   }],
</span><span class="token prefix unchanged"> </span><span class="token line">   // ...other rules
</span><span class="token prefix unchanged"> </span><span class="token line"> }],
</span><span class="token prefix unchanged"> </span><span class="token line"> // ...other config
</span></span>}
</code></pre>
<p>Note that do not exclude antd package in node_modules when using less-loader.</p>
<h3 id="Customize-in-vue-cli-2">Customize in vue cli 2 <a class="header-anchor" href="#Customize-in-vue-cli-2">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Modify the <code>build/utils.js</code> file</p>
<pre class="language-diff" v-pre><code>// build/utils.js
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> less: generateLoaders('less'),
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> less: generateLoaders('less', {
</span><span class="token prefix inserted">+</span><span class="token line">   modifyVars: {
</span><span class="token prefix inserted">+</span><span class="token line">     'primary-color': '#1DA57A',
</span><span class="token prefix inserted">+</span><span class="token line">     'link-color': '#1DA57A',
</span><span class="token prefix inserted">+</span><span class="token line">     'border-radius-base': '2px',
</span><span class="token prefix inserted">+</span><span class="token line">   },
</span><span class="token prefix inserted">+</span><span class="token line">   javascriptEnabled: true,
</span><span class="token prefix inserted">+</span><span class="token line"> }),
</span></span>
</code></pre>
<h3 id="Customize-in-vue-cli-3">Customize in vue cli 3 <a class="header-anchor" href="#Customize-in-vue-cli-3">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Create a new file <code>vue.config.js</code> in the project directory.</p>
<pre class="language-js" v-pre><code><span class="token comment">// vue.config.js for less-loader@6.0.0</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'primary-color'</span><span class="token operator">:</span> <span class="token string">'#1DA57A'</span><span class="token punctuation">,</span>
            <span class="token string-property property">'link-color'</span><span class="token operator">:</span> <span class="token string">'#1DA57A'</span><span class="token punctuation">,</span>
            <span class="token string-property property">'border-radius-base'</span><span class="token operator">:</span> <span class="token string">'2px'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h3 id="Customize-in-less-file">Customize in less file <a class="header-anchor" href="#Customize-in-less-file">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Another approach to customize theme is creating a <code>less</code> file within variables to override <code>antd.less</code>.</p>
<pre class="language-css" v-pre><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~ant-design-vue/dist/antd.less'</span><span class="token punctuation">;</span></span> // Import Ant Design Vue styles by less entry
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'your-theme-file.less'</span><span class="token punctuation">;</span></span> // variables to override above
</code></pre>
<p>Note: This way will load the styles of all components, regardless of your demand, which cause <code>style</code> option of <code>babel-plugin-import</code> not working.</p>
<h3 id="Dynamic-theme">Dynamic theme <a class="header-anchor" href="#Dynamic-theme">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Runtime update theme color please <a href="/docs/react/customize-theme-variable.html">ref this doc</a>.</p>
<h2 id="How-to-avoid-modifying-global-styles">How to avoid modifying global styles? <a class="header-anchor" href="#How-to-avoid-modifying-global-styles">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Currently ant-design-vue is designed as a whole experience and modify global styles (eg <code>body</code> etc). If you need to integrate ant-design-vue as a part of an existing website, it's likely you want to prevent ant-design-vue to override global styles.</p>
<p>While there's no canonical way to do it, you can take one of the following paths :</p>
<h3 id="Configure-webpack-to-load-an-alternale-less-file-and-scope-global-styles">Configure webpack to load an alternale less file and scope global styles <a class="header-anchor" href="#Configure-webpack-to-load-an-alternale-less-file-and-scope-global-styles">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>It's possible to configure webpack to load an alternate less file:</p>
<pre class="language-js" v-pre><code><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NormalModuleReplacementPlugin</span><span class="token punctuation">(</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules\\/ant-design-vue\\/lib\\/style\\/index\\.less</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>rootDir<span class="token punctuation">,</span> <span class="token string">'src/myStylesReplacement.less'</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

#antd <span class="token punctuation">{</span> @<span class="token keyword">import</span> <span class="token string">'~ant-design-vue/lib/style/core/index.less'</span><span class="token punctuation">;</span> @<span class="token keyword">import</span> <span class="token string">'~ant-design-vue/lib/style/themes/default.less'</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre>
<p>Where the src/myStylesReplacement.less file loads the same files as the index.less file, but loads them within the scope of a top-level selector : the result is that all of the &quot;global&quot; styles are being applied with the #antd scope.</p>
<h3 id="Use-a-postcss-processor-to-scope-all-styles">Use a postcss processor to scope all styles <a class="header-anchor" href="#Use-a-postcss-processor-to-scope-all-styles">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>See an example of usage with gulp and <a href="https://github.com/dbtedman/postcss-prefixwrap" target="_blank" rel="noopener noreferrer">postcss-prefixwrap</a> : <a href="https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa" target="_blank" rel="noopener noreferrer">https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa</a></p>
<h2 id="Not-working">Not working? <a class="header-anchor" href="#Not-working">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You must import styles as less format. A common mistake would be importing multiple copied of styles that some of them are css format to override the less styles.</p>
<ul>
<li>If you import styles by specifying the <code>style</code> option of <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noopener noreferrer">babel-plugin-import</a>, change it from <code>'css'</code> to <code>true</code>, which will import the <code>less</code> version of antd.</li>
<li>If you import styles from <code>'ant-design-vue/dist/antd.css'</code>, change it to <code>ant-design-vue/dist/antd.less</code>.</li>
</ul>
<h2 id="Use-dark-theme">Use dark theme <a class="header-anchor" href="#Use-dark-theme">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Method 1: Import <a href="https://unpkg.com/browse/ant-design-vue@2.0.0/dist/antd.dark.less" target="_blank" rel="noopener noreferrer">antd.dark.less</a> in the style file:</p>
<pre class="language-less" v-pre><code><span class="token variable">@import</span> <span class="token string">'~ant-design-vue/dist/antd.dark.less'</span><span class="token punctuation">;</span> <span class="token comment">// Introduce the official dark less style entry file</span>
</code></pre>
<p>If the project does not use Less, you can import <a href="https://unpkg.com/browse/ant-design-vue@2.0.0/dist/antd.dark.css" target="_blank" rel="noopener noreferrer">antd.dark.css</a> in the CSS file:</p>
<pre class="language-css" v-pre><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~ant-design-vue/dist/antd.dark.css'</span><span class="token punctuation">;</span></span>
</code></pre>
<blockquote>
<p>Note that you don't need to import <code>ant-design-vue/dist/antd.less</code> or <code>ant-design-vue/dist/antd.css</code> anymore, please remove it, and remove babel-plugin-import <code>style</code> config too. You can't enable two or more theme at the same time by this method.</p>
</blockquote>
<p>Method 3: using <a href="https://github.com/webpack-contrib/less-loader" target="_blank" rel="noopener noreferrer">less-loader</a> in <code>webpack.config.js</code> to introduce as needed:</p>
<pre class="language-diff" v-pre><code>const { getThemeVariables } = require('ant-design-vue/dist/theme');

// webpack.config.js
module.exports = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> rules: [{
</span><span class="token prefix unchanged"> </span><span class="token line">   test: /\\.less$/,
</span><span class="token prefix unchanged"> </span><span class="token line">   use: [{
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: 'style-loader',
</span><span class="token prefix unchanged"> </span><span class="token line">   }, {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: 'css-loader', // translates CSS into CommonJS
</span><span class="token prefix unchanged"> </span><span class="token line">   }, {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: 'less-loader', // compiles Less to CSS
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     options: {
</span><span class="token prefix inserted">+</span><span class="token line">       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
</span><span class="token prefix inserted">+</span><span class="token line">         modifyVars: getThemeVariables({
</span><span class="token prefix inserted">+</span><span class="token line">           dark: true, // Enable dark mode
</span><span class="token prefix inserted">+</span><span class="token line">         }),
</span><span class="token prefix inserted">+</span><span class="token line">         javascriptEnabled: true,
</span><span class="token prefix inserted">+</span><span class="token line">       },
</span><span class="token prefix inserted">+</span><span class="token line">     },
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   }],
</span><span class="token prefix unchanged"> </span><span class="token line"> }],
</span></span>};
</code></pre>
<h2 id="Related-Articles">Related Articles <a class="header-anchor" href="#Related-Articles">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li><a href="https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f" target="_blank" rel="noopener noreferrer">How to Customize Ant Design with React &amp; Webpack\u2026 the Missing Guide</a></li>
<li><a href="https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7" target="_blank" rel="noopener noreferrer">Theming Ant Design with Sass and Webpack</a></li>
</ul>
`,lastUpdated:1648719817708}},o={class:"markdown"},p=a(`<h1 id="Customize-Theme">Customize Theme <a class="header-anchor" href="#Customize-Theme"><span aria-hidden="true" class="anchor">#</span></a></h1><p>The structure and styles of ant-design-vue are exactly the same as those of Antd. You can refer to the Antd React customization mode for configuration.</p><p>Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.</p><p><img src="https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png" alt=""></p><h2 id="Ant-Design-Vue-Less-variables">Ant Design Vue Less variables <a class="header-anchor" href="#Ant-Design-Vue-Less-variables"><span aria-hidden="true" class="anchor">#</span></a></h2><p>We are using <a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer">Less</a> as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.</p><p>There are some major variables below, all less variables could be found in <a href="https://github.com/vueComponent/ant-design-vue/blob/next/components/style/themes/default.less" target="_blank" rel="noopener noreferrer">Default Variables</a>.</p><pre class="language-less"><code><span class="token variable">@primary-color<span class="token punctuation">:</span></span> #1890ff<span class="token punctuation">;</span> <span class="token comment">// primary color for all components</span>
<span class="token variable">@link-color<span class="token punctuation">:</span></span> #1890ff<span class="token punctuation">;</span> <span class="token comment">// link color</span>
<span class="token variable">@success-color<span class="token punctuation">:</span></span> #52c41a<span class="token punctuation">;</span> <span class="token comment">// success state color</span>
<span class="token variable">@warning-color<span class="token punctuation">:</span></span> #faad14<span class="token punctuation">;</span> <span class="token comment">// warning state color</span>
<span class="token variable">@error-color<span class="token punctuation">:</span></span> #f5222d<span class="token punctuation">;</span> <span class="token comment">// error state color</span>
<span class="token variable">@font-size-base<span class="token punctuation">:</span></span> 14px<span class="token punctuation">;</span> <span class="token comment">// major text font size</span>
<span class="token variable">@heading-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.85<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// heading text color</span>
<span class="token variable">@text-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.85<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// major text color</span>
<span class="token variable">@text-color-secondary<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.45<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// secondary text color</span>
<span class="token variable">@disabled-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// disable state color</span>
<span class="token variable">@border-radius-base<span class="token punctuation">:</span></span> 4px<span class="token punctuation">;</span> <span class="token comment">// major border radius</span>
<span class="token variable">@border-color-base<span class="token punctuation">:</span></span> #d9d9d9<span class="token punctuation">;</span> <span class="token comment">// major border color</span>
<span class="token variable">@box-shadow-base<span class="token punctuation">:</span></span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// major shadow for layers</span>
</code></pre><p>Please report an issue if the existing list of variables is not enough for you.</p><h2 id="How-to-do-it">How to do it <a class="header-anchor" href="#How-to-do-it"><span aria-hidden="true" class="anchor">#</span></a></h2><p>We will use <a href="http://lesscss.org/usage/#using-less-in-the-browser-modify-variables" target="_blank" rel="noopener noreferrer">modifyVars</a> provided by less.js to override the default values of the variables. We now introduce some popular way to do it depends on different workflow.</p><h3 id="Customize-in-webpack">Customize in webpack <a class="header-anchor" href="#Customize-in-webpack"><span aria-hidden="true" class="anchor">#</span></a></h3><p>We take a typical <code>webpack.config.js</code> file as example to customize it&#39;s <a href="https://github.com/webpack-contrib/less-loader" target="_blank" rel="noopener noreferrer">less-loader</a> options.</p><pre class="language-diff"><code>// webpack.config.js
module.exports = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> rules: [{
</span><span class="token prefix unchanged"> </span><span class="token line">   test: /\\.less$/,
</span><span class="token prefix unchanged"> </span><span class="token line">   use: [{
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: &#39;style-loader&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">   }, {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: &#39;css-loader&#39;, // translates CSS into CommonJS
</span><span class="token prefix unchanged"> </span><span class="token line">   }, {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: &#39;less-loader&#39;, // compiles Less to CSS
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     options: {
</span><span class="token prefix inserted">+</span><span class="token line">       lessOptions: {
</span><span class="token prefix inserted">+</span><span class="token line">         modifyVars: {
</span><span class="token prefix inserted">+</span><span class="token line">           &#39;primary-color&#39;: &#39;#1DA57A&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">           &#39;link-color&#39;: &#39;#1DA57A&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">           &#39;border-radius-base&#39;: &#39;2px&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">         },
</span><span class="token prefix inserted">+</span><span class="token line">         javascriptEnabled: true,
</span><span class="token prefix inserted">+</span><span class="token line">       }
</span><span class="token prefix inserted">+</span><span class="token line">     },
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   }],
</span><span class="token prefix unchanged"> </span><span class="token line">   // ...other rules
</span><span class="token prefix unchanged"> </span><span class="token line"> }],
</span><span class="token prefix unchanged"> </span><span class="token line"> // ...other config
</span></span>}
</code></pre><p>Note that do not exclude antd package in node_modules when using less-loader.</p><h3 id="Customize-in-vue-cli-2">Customize in vue cli 2 <a class="header-anchor" href="#Customize-in-vue-cli-2"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Modify the <code>build/utils.js</code> file</p><pre class="language-diff"><code>// build/utils.js
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> less: generateLoaders(&#39;less&#39;),
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> less: generateLoaders(&#39;less&#39;, {
</span><span class="token prefix inserted">+</span><span class="token line">   modifyVars: {
</span><span class="token prefix inserted">+</span><span class="token line">     &#39;primary-color&#39;: &#39;#1DA57A&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">     &#39;link-color&#39;: &#39;#1DA57A&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">     &#39;border-radius-base&#39;: &#39;2px&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">   },
</span><span class="token prefix inserted">+</span><span class="token line">   javascriptEnabled: true,
</span><span class="token prefix inserted">+</span><span class="token line"> }),
</span></span>
</code></pre><h3 id="Customize-in-vue-cli-3">Customize in vue cli 3 <a class="header-anchor" href="#Customize-in-vue-cli-3"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Create a new file <code>vue.config.js</code> in the project directory.</p><pre class="language-js"><code><span class="token comment">// vue.config.js for less-loader@6.0.0</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;primary-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#1DA57A&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;link-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#1DA57A&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;border-radius-base&#39;</span><span class="token operator">:</span> <span class="token string">&#39;2px&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="Customize-in-less-file">Customize in less file <a class="header-anchor" href="#Customize-in-less-file"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Another approach to customize theme is creating a <code>less</code> file within variables to override <code>antd.less</code>.</p><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;~ant-design-vue/dist/antd.less&#39;</span><span class="token punctuation">;</span></span> // Import Ant Design Vue styles by less entry
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;your-theme-file.less&#39;</span><span class="token punctuation">;</span></span> // variables to override above
</code></pre><p>Note: This way will load the styles of all components, regardless of your demand, which cause <code>style</code> option of <code>babel-plugin-import</code> not working.</p><h3 id="Dynamic-theme">Dynamic theme <a class="header-anchor" href="#Dynamic-theme"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Runtime update theme color please <a href="/docs/react/customize-theme-variable.html">ref this doc</a>.</p><h2 id="How-to-avoid-modifying-global-styles">How to avoid modifying global styles? <a class="header-anchor" href="#How-to-avoid-modifying-global-styles"><span aria-hidden="true" class="anchor">#</span></a></h2><p>Currently ant-design-vue is designed as a whole experience and modify global styles (eg <code>body</code> etc). If you need to integrate ant-design-vue as a part of an existing website, it&#39;s likely you want to prevent ant-design-vue to override global styles.</p><p>While there&#39;s no canonical way to do it, you can take one of the following paths :</p><h3 id="Configure-webpack-to-load-an-alternale-less-file-and-scope-global-styles">Configure webpack to load an alternale less file and scope global styles <a class="header-anchor" href="#Configure-webpack-to-load-an-alternale-less-file-and-scope-global-styles"><span aria-hidden="true" class="anchor">#</span></a></h3><p>It&#39;s possible to configure webpack to load an alternate less file:</p><pre class="language-js"><code><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NormalModuleReplacementPlugin</span><span class="token punctuation">(</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules\\/ant-design-vue\\/lib\\/style\\/index\\.less</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>rootDir<span class="token punctuation">,</span> <span class="token string">&#39;src/myStylesReplacement.less&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

#antd <span class="token punctuation">{</span> @<span class="token keyword">import</span> <span class="token string">&#39;~ant-design-vue/lib/style/core/index.less&#39;</span><span class="token punctuation">;</span> @<span class="token keyword">import</span> <span class="token string">&#39;~ant-design-vue/lib/style/themes/default.less&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><p>Where the src/myStylesReplacement.less file loads the same files as the index.less file, but loads them within the scope of a top-level selector : the result is that all of the &quot;global&quot; styles are being applied with the #antd scope.</p><h3 id="Use-a-postcss-processor-to-scope-all-styles">Use a postcss processor to scope all styles <a class="header-anchor" href="#Use-a-postcss-processor-to-scope-all-styles"><span aria-hidden="true" class="anchor">#</span></a></h3><p>See an example of usage with gulp and <a href="https://github.com/dbtedman/postcss-prefixwrap" target="_blank" rel="noopener noreferrer">postcss-prefixwrap</a> : <a href="https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa" target="_blank" rel="noopener noreferrer">https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa</a></p><h2 id="Not-working">Not working? <a class="header-anchor" href="#Not-working"><span aria-hidden="true" class="anchor">#</span></a></h2><p>You must import styles as less format. A common mistake would be importing multiple copied of styles that some of them are css format to override the less styles.</p><ul><li>If you import styles by specifying the <code>style</code> option of <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noopener noreferrer">babel-plugin-import</a>, change it from <code>&#39;css&#39;</code> to <code>true</code>, which will import the <code>less</code> version of antd.</li><li>If you import styles from <code>&#39;ant-design-vue/dist/antd.css&#39;</code>, change it to <code>ant-design-vue/dist/antd.less</code>.</li></ul><h2 id="Use-dark-theme">Use dark theme <a class="header-anchor" href="#Use-dark-theme"><span aria-hidden="true" class="anchor">#</span></a></h2><p>Method 1: Import <a href="https://unpkg.com/browse/ant-design-vue@2.0.0/dist/antd.dark.less" target="_blank" rel="noopener noreferrer">antd.dark.less</a> in the style file:</p><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&#39;~ant-design-vue/dist/antd.dark.less&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Introduce the official dark less style entry file</span>
</code></pre><p>If the project does not use Less, you can import <a href="https://unpkg.com/browse/ant-design-vue@2.0.0/dist/antd.dark.css" target="_blank" rel="noopener noreferrer">antd.dark.css</a> in the CSS file:</p><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;~ant-design-vue/dist/antd.dark.css&#39;</span><span class="token punctuation">;</span></span>
</code></pre><blockquote><p>Note that you don&#39;t need to import <code>ant-design-vue/dist/antd.less</code> or <code>ant-design-vue/dist/antd.css</code> anymore, please remove it, and remove babel-plugin-import <code>style</code> config too. You can&#39;t enable two or more theme at the same time by this method.</p></blockquote><p>Method 3: using <a href="https://github.com/webpack-contrib/less-loader" target="_blank" rel="noopener noreferrer">less-loader</a> in <code>webpack.config.js</code> to introduce as needed:</p><pre class="language-diff"><code>const { getThemeVariables } = require(&#39;ant-design-vue/dist/theme&#39;);

// webpack.config.js
module.exports = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> rules: [{
</span><span class="token prefix unchanged"> </span><span class="token line">   test: /\\.less$/,
</span><span class="token prefix unchanged"> </span><span class="token line">   use: [{
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: &#39;style-loader&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">   }, {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: &#39;css-loader&#39;, // translates CSS into CommonJS
</span><span class="token prefix unchanged"> </span><span class="token line">   }, {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: &#39;less-loader&#39;, // compiles Less to CSS
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     options: {
</span><span class="token prefix inserted">+</span><span class="token line">       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
</span><span class="token prefix inserted">+</span><span class="token line">         modifyVars: getThemeVariables({
</span><span class="token prefix inserted">+</span><span class="token line">           dark: true, // Enable dark mode
</span><span class="token prefix inserted">+</span><span class="token line">         }),
</span><span class="token prefix inserted">+</span><span class="token line">         javascriptEnabled: true,
</span><span class="token prefix inserted">+</span><span class="token line">       },
</span><span class="token prefix inserted">+</span><span class="token line">     },
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   }],
</span><span class="token prefix unchanged"> </span><span class="token line"> }],
</span></span>};
</code></pre><h2 id="Related-Articles">Related Articles <a class="header-anchor" href="#Related-Articles"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li><a href="https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f" target="_blank" rel="noopener noreferrer">How to Customize Ant Design with React &amp; Webpack\u2026 the Missing Guide</a></li><li><a href="https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7" target="_blank" rel="noopener noreferrer">Theming Ant Design with Sass and Webpack</a></li></ul>`,49),l=[p];function i(r,c,d,u,k,h){return e(),n("article",o,l)}var m=s(t,[["render",i]]);export{m as default};
