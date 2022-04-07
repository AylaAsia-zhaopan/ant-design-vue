import{_ as n,b as s,k as a,s as t}from"./index.3aed76d1.js";const e={pageData:{title:"Getting Started",description:"",frontmatter:{},headers:[{level:2,title:"Playground",slug:"Playground",content:"The following CodeSandbox demo is the simplest use case, and it's also a good habit to fork this demo to provide a re-producible demo while reporting a bug."},{level:2,title:"Import ant-design-vue",slug:"Import-ant-design-vue",content:"1. Installation"},{level:3,title:"1. Installation",slug:"_1-Installation",content:"[vue-cli](https://github.com/vuejs/vue-cli)"},{level:3,title:"2. Create a New Project",slug:"_2-Create-a-New-Project",content:"A new project can be created using CLI tools."},{level:3,title:"3. Use antd's Components",slug:"_3-Use-antd-s-Components",content:"Install"},{level:3,title:"4. Component list",slug:"_4-Component-list",content:"[Component list](https://github.com/vueComponent/ant-design-vue/blob/next/components/components.ts)"},{level:2,title:"Compatibility",slug:"Compatibility",content:"Ant Design Vue 2.x supports all the modern browsers. If you want to use IE9+, you can use Ant Design Vue 1.x & Vue 2.x."},{level:2,title:"Import on Demand",slug:"Import-on-Demand",content:"we can import individual components on demand:"},{level:2,title:"Customization",slug:"Customization",content:""}],relativePath:"site/src/vueDocs/getting-started.en-US.md",content:`# Getting Started

Ant Design Vue is dedicated to providing a **good development experience** for programmers. Make sure that you had installed [Node.js](https://nodejs.org/)(&gt; v8.9) correctly.

&gt; Before delving into Ant Design Vue, a good knowledge base of [Vue](https://www.vuejs.org/) and [JavaScript ES2015](http://babeljs.io/docs/learn-es2015/) is needed.

## Playground

The following CodeSandbox demo is the simplest use case, and it&#39;s also a good habit to fork this demo to provide a re-producible demo while reporting a bug.

- [![Vue Antd Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/agitated-franklin-1w72v)

## Import ant-design-vue

### 1. Installation

[vue-cli](https://github.com/vuejs/vue-cli)

\`\`\`bash
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
\`\`\`

### 2. Create a New Project

A new project can be created using CLI tools.

\`\`\`bash
$ vue create antd-demo
\`\`\`

And, setup your vue project configuration.

### 3. Use antd&#39;s Components

#### Install

\`\`\`bash
$ npm i --save ant-design-vue@next
\`\`\`

#### Component Registration

If you use Vue&#39;s default template syntax, you need to register components before you can use them. There are three ways to register components:

**Global Registration All Components**

\`\`\`jsx
import { createApp } from &#39;vue&#39;;
import Antd from &#39;ant-design-vue&#39;;
import App from &#39;./App&#39;;
import &#39;ant-design-vue/dist/antd.css&#39;;

const app = createApp(App);

app.use(Antd).mount(&#39;#app&#39;);
\`\`\`

The above imports Antd entirely. Note that CSS file needs to be imported separately.

**Global Registration Some Components**

\`\`\`jsx
import { createApp } from &#39;vue&#39;;
import { Button, message } from &#39;ant-design-vue&#39;;
import App from &#39;./App&#39;;

const app = createApp(App);

/* Automatically register components under Button, such as Button.Group */
app.use(Button).mount(&#39;#app&#39;);

app.config.globalProperties.$message = message;
\`\`\`

**Local Registration**

In this way, component sub-components, such as Button and ButtonGroup, need to be registered separately, and they are only valid in the current component after registration. Therefore, we recommend using the above two methods.

\`\`\`html
&lt;template&gt;
  &lt;a-button&gt;Add&lt;/a-button&gt;
&lt;/template&gt;
&lt;script&gt;
  import { Button } from &#39;ant-design-vue&#39;;
  const ButtonGroup = Button.Group;

  export default {
    components: {
      AButton: Button,
      AButtonGroup: ButtonGroup,
    },
  };
&lt;/script&gt;
\`\`\`

### 4. Component list

[Component list](https://github.com/vueComponent/ant-design-vue/blob/next/components/components.ts)

## Compatibility

Ant Design Vue 2.x supports all the modern browsers. If you want to use IE9+, you can use Ant Design Vue 1.x &amp; Vue 2.x.

## Import on Demand

we can import individual components on demand:

\`\`\`jsx
import Button from &#39;ant-design-vue/lib/button&#39;;
import &#39;ant-design-vue/lib/button/style&#39;; // or ant-design-vue/lib/button/style/css for css format file
\`\`\`

We strongly recommend using [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), which can convert the following code to the &#39;ant-design-vue/lib/xxx&#39; way:

\`\`\`jsx
import { Button } from &#39;ant-design-vue&#39;;
\`\`\`

And this plugin can load styles too, read [usage](https://github.com/ant-design/babel-plugin-import#usage) for more details.

&gt; FYI, babel-plugin-import&#39;s \`style\` option will importing some global reset styles, don&#39;t use it if you don&#39;t need those styles. You can import styles manually via \`import &#39;ant-design-vue/dist/antd.css&#39;\` and override the global reset styles.

If you use Vite, you can use [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) to load on demand. However, this plugin can only deal with components. Others such as message should be loaded manually:

\`\`\`ts
import { message } from &#39;ant-design-vue&#39;;
import &#39;ant-design-vue/es/message/style/css&#39;; //use ant-design-vue/es instead of ant-design-vue/lib
\`\`\`

## Customization

- [Customize Theme](/docs/vue/customize-theme)
`,html:`<h1 id="Getting-Started">Getting Started <a class="header-anchor" href="#Getting-Started">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h1>
<p>Ant Design Vue is dedicated to providing a <strong>good development experience</strong> for programmers. Make sure that you had installed <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a>(&gt; v8.9) correctly.</p>
<blockquote>
<p>Before delving into Ant Design Vue, a good knowledge base of <a href="https://www.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a> and <a href="http://babeljs.io/docs/learn-es2015/" target="_blank" rel="noopener noreferrer">JavaScript ES2015</a> is needed.</p>
</blockquote>
<h2 id="Playground">Playground <a class="header-anchor" href="#Playground">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The following CodeSandbox demo is the simplest use case, and it's also a good habit to fork this demo to provide a re-producible demo while reporting a bug.</p>
<ul>
<li><a href="https://codesandbox.io/s/agitated-franklin-1w72v" target="_blank" rel="noopener noreferrer"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Vue Antd Template"></a></li>
</ul>
<h2 id="Import-ant-design-vue">Import ant-design-vue <a class="header-anchor" href="#Import-ant-design-vue">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="_1-Installation">1. Installation <a class="header-anchor" href="#_1-Installation">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer">vue-cli</a></p>
<pre class="language-bash" v-pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
<span class="token comment"># OR</span>
$ <span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli
</code></pre>
<h3 id="_2-Create-a-New-Project">2. Create a New Project <a class="header-anchor" href="#_2-Create-a-New-Project">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>A new project can be created using CLI tools.</p>
<pre class="language-bash" v-pre><code>$ vue create antd-demo
</code></pre>
<p>And, setup your vue project configuration.</p>
<h3 id="_3-Use-antd-s-Components">3. Use antd's Components <a class="header-anchor" href="#_3-Use-antd-s-Components">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<h4 id="Install">Install <a class="header-anchor" href="#Install">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-bash" v-pre><code>$ <span class="token function">npm</span> i --save ant-design-vue@next
</code></pre>
<h4 id="Component-Registration">Component Registration <a class="header-anchor" href="#Component-Registration">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<p>If you use Vue's default template syntax, you need to register components before you can use them. There are three ways to register components:</p>
<p><strong>Global Registration All Components</strong></p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'ant-design-vue/dist/antd.css'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above imports Antd entirely. Note that CSS file needs to be imported separately.</p>
<p><strong>Global Registration Some Components</strong></p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* Automatically register components under Button, such as Button.Group */</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$message <span class="token operator">=</span> message<span class="token punctuation">;</span>
</code></pre>
<p><strong>Local Registration</strong></p>
<p>In this way, component sub-components, such as Button and ButtonGroup, need to be registered separately, and they are only valid in the current component after registration. Therefore, we recommend using the above two methods.</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span><span class="token punctuation">></span></span>Add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ButtonGroup <span class="token operator">=</span> Button<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">AButton</span><span class="token operator">:</span> Button<span class="token punctuation">,</span>
      <span class="token literal-property property">AButtonGroup</span><span class="token operator">:</span> ButtonGroup<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<h3 id="_4-Component-list">4. Component list <a class="header-anchor" href="#_4-Component-list">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><a href="https://github.com/vueComponent/ant-design-vue/blob/next/components/components.ts" target="_blank" rel="noopener noreferrer">Component list</a></p>
<h2 id="Compatibility">Compatibility <a class="header-anchor" href="#Compatibility">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Ant Design Vue 2.x supports all the modern browsers. If you want to use IE9+, you can use Ant Design Vue 1.x &amp; Vue 2.x.</p>
<h2 id="Import-on-Demand">Import on Demand <a class="header-anchor" href="#Import-on-Demand">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>we can import individual components on demand:</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'ant-design-vue/lib/button'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'ant-design-vue/lib/button/style'</span><span class="token punctuation">;</span> <span class="token comment">// or ant-design-vue/lib/button/style/css for css format file</span>
</code></pre>
<p>We strongly recommend using <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noopener noreferrer">babel-plugin-import</a>, which can convert the following code to the 'ant-design-vue/lib/xxx' way:</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
</code></pre>
<p>And this plugin can load styles too, read <a href="https://github.com/ant-design/babel-plugin-import#usage" target="_blank" rel="noopener noreferrer">usage</a> for more details.</p>
<blockquote>
<p>FYI, babel-plugin-import's <code>style</code> option will importing some global reset styles, don't use it if you don't need those styles. You can import styles manually via <code>import 'ant-design-vue/dist/antd.css'</code> and override the global reset styles.</p>
</blockquote>
<p>If you use Vite, you can use <a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a> to load on demand. However, this plugin can only deal with components. Others such as message should be loaded manually:</p>
<pre class="language-ts" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'ant-design-vue/es/message/style/css'</span><span class="token punctuation">;</span> <span class="token comment">//use ant-design-vue/es instead of ant-design-vue/lib</span>
</code></pre>
<h2 id="Customization">Customization <a class="header-anchor" href="#Customization">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li><a href="/docs/vue/customize-theme.html">Customize Theme</a></li>
</ul>
`,lastUpdated:1649295833262}},o={class:"markdown"},p=t(`<h1 id="Getting-Started">Getting Started <a class="header-anchor" href="#Getting-Started"><span aria-hidden="true" class="anchor">#</span></a></h1><p>Ant Design Vue is dedicated to providing a <strong>good development experience</strong> for programmers. Make sure that you had installed <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a>(&gt; v8.9) correctly.</p><blockquote><p>Before delving into Ant Design Vue, a good knowledge base of <a href="https://www.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a> and <a href="http://babeljs.io/docs/learn-es2015/" target="_blank" rel="noopener noreferrer">JavaScript ES2015</a> is needed.</p></blockquote><h2 id="Playground">Playground <a class="header-anchor" href="#Playground"><span aria-hidden="true" class="anchor">#</span></a></h2><p>The following CodeSandbox demo is the simplest use case, and it&#39;s also a good habit to fork this demo to provide a re-producible demo while reporting a bug.</p><ul><li><a href="https://codesandbox.io/s/agitated-franklin-1w72v" target="_blank" rel="noopener noreferrer"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Vue Antd Template"></a></li></ul><h2 id="Import-ant-design-vue">Import ant-design-vue <a class="header-anchor" href="#Import-ant-design-vue"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="_1-Installation">1. Installation <a class="header-anchor" href="#_1-Installation"><span aria-hidden="true" class="anchor">#</span></a></h3><p><a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer">vue-cli</a></p><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
<span class="token comment"># OR</span>
$ <span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli
</code></pre><h3 id="_2-Create-a-New-Project">2. Create a New Project <a class="header-anchor" href="#_2-Create-a-New-Project"><span aria-hidden="true" class="anchor">#</span></a></h3><p>A new project can be created using CLI tools.</p><pre class="language-bash"><code>$ vue create antd-demo
</code></pre><p>And, setup your vue project configuration.</p><h3 id="_3-Use-antd-s-Components">3. Use antd&#39;s Components <a class="header-anchor" href="#_3-Use-antd-s-Components"><span aria-hidden="true" class="anchor">#</span></a></h3><h4 id="Install">Install <a class="header-anchor" href="#Install"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-bash"><code>$ <span class="token function">npm</span> i --save ant-design-vue@next
</code></pre><h4 id="Component-Registration">Component Registration <a class="header-anchor" href="#Component-Registration"><span aria-hidden="true" class="anchor">#</span></a></h4><p>If you use Vue&#39;s default template syntax, you need to register components before you can use them. There are three ways to register components:</p><p><strong>Global Registration All Components</strong></p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>The above imports Antd entirely. Note that CSS file needs to be imported separately.</p><p><strong>Global Registration Some Components</strong></p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* Automatically register components under Button, such as Button.Group */</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$message <span class="token operator">=</span> message<span class="token punctuation">;</span>
</code></pre><p><strong>Local Registration</strong></p><p>In this way, component sub-components, such as Button and ButtonGroup, need to be registered separately, and they are only valid in the current component after registration. Therefore, we recommend using the above two methods.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span><span class="token punctuation">&gt;</span></span>Add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ButtonGroup <span class="token operator">=</span> Button<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">AButton</span><span class="token operator">:</span> Button<span class="token punctuation">,</span>
      <span class="token literal-property property">AButtonGroup</span><span class="token operator">:</span> ButtonGroup<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="_4-Component-list">4. Component list <a class="header-anchor" href="#_4-Component-list"><span aria-hidden="true" class="anchor">#</span></a></h3><p><a href="https://github.com/vueComponent/ant-design-vue/blob/next/components/components.ts" target="_blank" rel="noopener noreferrer">Component list</a></p><h2 id="Compatibility">Compatibility <a class="header-anchor" href="#Compatibility"><span aria-hidden="true" class="anchor">#</span></a></h2><p>Ant Design Vue 2.x supports all the modern browsers. If you want to use IE9+, you can use Ant Design Vue 1.x &amp; Vue 2.x.</p><h2 id="Import-on-Demand">Import on Demand <a class="header-anchor" href="#Import-on-Demand"><span aria-hidden="true" class="anchor">#</span></a></h2><p>we can import individual components on demand:</p><pre class="language-jsx"><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/lib/button&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/lib/button/style&#39;</span><span class="token punctuation">;</span> <span class="token comment">// or ant-design-vue/lib/button/style/css for css format file</span>
</code></pre><p>We strongly recommend using <a href="https://github.com/ant-design/babel-plugin-import" target="_blank" rel="noopener noreferrer">babel-plugin-import</a>, which can convert the following code to the &#39;ant-design-vue/lib/xxx&#39; way:</p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
</code></pre><p>And this plugin can load styles too, read <a href="https://github.com/ant-design/babel-plugin-import#usage" target="_blank" rel="noopener noreferrer">usage</a> for more details.</p><blockquote><p>FYI, babel-plugin-import&#39;s <code>style</code> option will importing some global reset styles, don&#39;t use it if you don&#39;t need those styles. You can import styles manually via <code>import &#39;ant-design-vue/dist/antd.css&#39;</code> and override the global reset styles.</p></blockquote><p>If you use Vite, you can use <a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a> to load on demand. However, this plugin can only deal with components. Others such as message should be loaded manually:</p><pre class="language-ts"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/es/message/style/css&#39;</span><span class="token punctuation">;</span> <span class="token comment">//use ant-design-vue/es instead of ant-design-vue/lib</span>
</code></pre><h2 id="Customization">Customization <a class="header-anchor" href="#Customization"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li><a href="/docs/vue/customize-theme.html">Customize Theme</a></li></ul>`,42),r=[p];function c(l,i,u,d,g,m){return a(),s("article",o,r)}var h=n(e,[["render",c]]);export{h as default};
