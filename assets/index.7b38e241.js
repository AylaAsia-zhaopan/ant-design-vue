import{ci as N,j as s,d as f,r as o,a0 as F,$ as U,o as g,a as y,h as A,bx as B,b as n,w as p,e as t,t as R,bj as V,bt as M,c0 as x,cj as Q,bZ as q,ck as H,P as X,bn as K,p as D,f as j,cl as J,cm as $,cn as nn,co as tn,bu as L,F as sn}from"./vendor.7a9c323d.js";import{B as an,_ as h,b as on,R as b}from"./index.30edbad6.js";const en=Object.keys(N).map(a=>a.replace(/(Outlined|Filled|TwoTone)$/,"")).filter((a,e,c)=>c.indexOf(a)===e),z=["StepBackward","StepForward","FastBackward","FastForward","Shrink","ArrowsAlt","Down","Up","Left","Right","CaretUp","CaretDown","CaretLeft","CaretRight","UpCircle","DownCircle","LeftCircle","RightCircle","DoubleRight","DoubleLeft","VerticalLeft","VerticalRight","VerticalAlignTop","VerticalAlignMiddle","VerticalAlignBottom","Forward","Backward","Rollback","Enter","Retweet","Swap","SwapLeft","SwapRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PlayCircle","UpSquare","DownSquare","LeftSquare","RightSquare","Login","Logout","MenuFold","MenuUnfold","BorderBottom","BorderHorizontal","BorderInner","BorderOuter","BorderLeft","BorderRight","BorderTop","BorderVerticle","PicCenter","PicLeft","PicRight","RadiusBottomleft","RadiusBottomright","RadiusUpleft","RadiusUpright","Fullscreen","FullscreenExit"],E=["Question","QuestionCircle","Plus","PlusCircle","Pause","PauseCircle","Minus","MinusCircle","PlusSquare","MinusSquare","Info","InfoCircle","Exclamation","ExclamationCircle","Close","CloseCircle","CloseSquare","Check","CheckCircle","CheckSquare","ClockCircle","Warning","IssuesClose","Stop"],G=["Edit","Form","Copy","Scissor","Delete","Snippets","Diff","Highlight","AlignCenter","AlignLeft","AlignRight","BgColors","Bold","Italic","Underline","Strikethrough","Redo","Undo","ZoomIn","ZoomOut","FontColors","FontSize","LineHeight","Dash","SmallDash","SortAscending","SortDescending","Drag","OrderedList","UnorderedList","RadiusSetting","ColumnWidth","ColumnHeight"],Y=["AreaChart","PieChart","BarChart","DotChart","LineChart","RadarChart","HeatMap","Fall","Rise","Stock","BoxPlot","Fund","Sliders"],O=["Android","Apple","Windows","Ie","Chrome","Github","Aliwangwang","Dingding","WeiboSquare","WeiboCircle","TaobaoCircle","Html5","Weibo","Twitter","Wechat","Youtube","AlipayCircle","Taobao","Skype","Qq","MediumWorkmark","Gitlab","Medium","Linkedin","GooglePlus","Dropbox","Facebook","Codepen","CodeSandbox","CodeSandboxCircle","Amazon","Google","CodepenCircle","Alipay","AntDesign","AntCloud","Aliyun","Zhihu","Slack","SlackSquare","Behance","BehanceSquare","Dribbble","DribbbleSquare","Instagram","Yuque","Alibaba","Yahoo","Reddit","Sketch"],pn=[...z,...E,...G,...Y,...O],cn=en.filter(a=>!pn.includes(a)),T={direction:z,suggestion:E,editor:G,data:Y,logo:O,other:cn},ln={render(){return s("svg",{viewBox:"0 0 1024 1024"},[s("path",{d:"M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z"},null)])}},un={render(){return s("svg",{viewBox:"0 0 1024 1024"},[s("path",{d:"M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z"},null)])}},rn={render(){return s("svg",{viewBox:"0 0 1024 1024"},[s("path",{d:"M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z"},null)])}},kn=N,S=function(e){return e.split(/(?=[A-Z])/).join("-").toLowerCase()},dn=f({components:{"a-badge":an},props:["name","type","isNew","theme","justCopied"],data(){const a=S(this.name),e=S(this.type);return this.allIcons=kn,{text:`<${a} />`,kebabCasedType:e}},methods:{onCopied(){this.$emit("copied",this.type,this.text)}}}),gn={class:"anticon-class"};function mn(a,e,c,u,m,r){const l=o("a-badge"),i=F("clipboard");return U((g(),y("li",{class:V(a.justCopied===a.type?"copied":"")},[(g(),A(B(a.allIcons[a.name]))),n("span",gn,[s(l,{dot:a.isNew},{default:p(()=>[t(R(a.kebabCasedType),1)]),_:1},8,["dot"])])],2)),[[i,a.text,"copy"],[i,a.onCopied,"success"]])}var hn=h(dn,[["render",mn]]);const In=f({props:["icons","title","newIcons","theme"],data(){return{justCopied:null}},methods:{onCopied(a,e){on.success(s("span",null,[s("code",{class:"copied-code"},[e]),t(" copied \u{1F389}")])),this.justCopied=a,setTimeout(()=>{this.justCopied=null},2e3)}},render(){const{icons:a,title:e,theme:c,newIcons:u}=this.$props,m=a.map(r=>s(hn,{key:r,name:r,type:r,theme:c,isNew:u.indexOf(r)>=0,justCopied:this.justCopied,onCopied:this.onCopied},null));return s("div",null,[s("h3",{style:"margin: 1.6em 0 .6em;"},[this.$t(`app.docs.components.icon.category.${e}`)]),s("ul",{class:"anticons-list"},[m])])}}),v={Filled:"Filled",Outlined:"Outlined",TwoTone:"TwoTone"},Cn=N,_=f({cagetories:T,components:{ARadio:b,ARadioGroup:b.Group,ARadioButton:b.Button},newIconNames:[],data(){return{theme:v.Outlined}},methods:{handleChangeTheme(a){this.theme=a.target.value},renderCategories(){const{theme:a}=this;return Object.keys(T).map(e=>{let c=T[e];return{category:e,icons:c.map(u=>u+a).filter(u=>Cn[u])}}).filter(({icons:e})=>!!e.length).map(({category:e,icons:c})=>s(In,{key:e,title:e,theme:a,icons:c,newIcons:_.newIconNames},null))}},render(){return s("div",null,[s("h3",{style:"margin: 1.6em 0 .6em;"},[this.$t("app.docs.components.icon.pick-theme")]),s(o("a-radio-group"),{value:this.theme,onChange:this.handleChangeTheme},{default:()=>[s(o("a-radio-button"),{value:v.Outlined},{default:()=>[s(M,{component:un},null),t(" "),this.$t("app.docs.components.icon.outlined")]}),s(o("a-radio-button"),{value:v.Filled},{default:()=>[s(M,{component:ln},null),t(" "),this.$t("app.docs.components.icon.filled")]}),s(o("a-radio-button"),{value:v.TwoTone},{default:()=>[s(M,{component:rn},null),t(" "),this.$t("app.docs.components.icon.two-tone")]})]}),this.renderCategories()])}}),fn=f({components:{HomeOutlined:x,SettingFilled:Q,SmileOutlined:q,SyncOutlined:H,LoadingOutlined:X}}),yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("home-outlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("setting-filled")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("smile-outlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("sync-outlined")]),t(),n("span",{class:"token attr-name"},"spin"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("smile-outlined")]),t(),n("span",{class:"token attr-name"},":rotate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("180"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("loading-outlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(`
  HomeOutlined`),n("span",{class:"token punctuation"},","),t(`
  SettingFilled`),n("span",{class:"token punctuation"},","),t(`
  SmileOutlined`),n("span",{class:"token punctuation"},","),t(`
  SyncOutlined`),n("span",{class:"token punctuation"},","),t(`
  LoadingOutlined`),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    HomeOutlined`),n("span",{class:"token punctuation"},","),t(`
    SettingFilled`),n("span",{class:"token punctuation"},","),t(`
    SmileOutlined`),n("span",{class:"token punctuation"},","),t(`
    SyncOutlined`),n("span",{class:"token punctuation"},","),t(`
    LoadingOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),An=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("home-outlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("setting-filled")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("smile-outlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("sync-outlined")]),t(),n("span",{class:"token attr-name"},"spin"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("smile-outlined")]),t(),n("span",{class:"token attr-name"},":rotate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("180"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("loading-outlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" HomeOutlined"),n("span",{class:"token punctuation"},","),t(" SettingFilled"),n("span",{class:"token punctuation"},","),t(" SmileOutlined"),n("span",{class:"token punctuation"},","),t(" SyncOutlined"),n("span",{class:"token punctuation"},","),t(" LoadingOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    HomeOutlined`),n("span",{class:"token punctuation"},","),t(`
    SettingFilled`),n("span",{class:"token punctuation"},","),t(`
    SmileOutlined`),n("span",{class:"token punctuation"},","),t(`
    SyncOutlined`),n("span",{class:"token punctuation"},","),t(`
    LoadingOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function vn(a,e,c,u,m,r){const l=o("home-outlined"),i=o("setting-filled"),d=o("smile-outlined"),I=o("sync-outlined"),C=o("loading-outlined"),w=o("a-space"),W=o("demo-box");return g(),A(W,{jsfiddle:{us:"Import icons from `@ant-design/icons-vue`, component name of icons with different theme is the icon name suffixed by the theme name. Specific the `spin` property to show spinning animation.",cn:"\u901A\u8FC7 `@ant-design/icons-vue` \u5F15\u7528 Icon \u7EC4\u4EF6\uFF0C\u4E0D\u540C\u4E3B\u9898\u7684 Icon \u7EC4\u4EF6\u540D\u4E3A\u56FE\u6807\u540D\u52A0\u4E3B\u9898\u505A\u4E3A\u540E\u7F00\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E `spin` \u5C5E\u6027\u6765\u5B9E\u73B0\u52A8\u753B\u65CB\u8F6C\u6548\u679C\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>@ant-design/icons-vue</code> \u5F15\u7528 Icon \u7EC4\u4EF6\uFF0C\u4E0D\u540C\u4E3B\u9898\u7684 Icon \u7EC4\u4EF6\u540D\u4E3A\u56FE\u6807\u540D\u52A0\u4E3B\u9898\u505A\u4E3A\u540E\u7F00\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>spin</code> \u5C5E\u6027\u6765\u5B9E\u73B0\u52A8\u753B\u65CB\u8F6C\u6548\u679C\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Import icons from <code>@ant-design/icons-vue</code>, component name of icons with different theme is the icon name suffixed by the theme name. Specific the <code>spin</code> property to show spinning animation.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic"},relativePath:"components/icon/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGhvbWUtb3V0bGluZWQgLz4KICAgIDxzZXR0aW5nLWZpbGxlZCAvPgogICAgPHNtaWxlLW91dGxpbmVkIC8+CiAgICA8c3luYy1vdXRsaW5lZCBzcGluIC8+CiAgICA8c21pbGUtb3V0bGluZWQgOnJvdGF0ZT0iMTgwIiAvPgogICAgPGxvYWRpbmctb3V0bGluZWQgLz4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgewogIEhvbWVPdXRsaW5lZCwKICBTZXR0aW5nRmlsbGVkLAogIFNtaWxlT3V0bGluZWQsCiAgU3luY091dGxpbmVkLAogIExvYWRpbmdPdXRsaW5lZCwKfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEhvbWVPdXRsaW5lZCwKICAgIFNldHRpbmdGaWxsZWQsCiAgICBTbWlsZU91dGxpbmVkLAogICAgU3luY091dGxpbmVkLAogICAgTG9hZGluZ091dGxpbmVkLAogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGhvbWUtb3V0bGluZWQgLz4KICAgIDxzZXR0aW5nLWZpbGxlZCAvPgogICAgPHNtaWxlLW91dGxpbmVkIC8+CiAgICA8c3luYy1vdXRsaW5lZCBzcGluIC8+CiAgICA8c21pbGUtb3V0bGluZWQgOnJvdGF0ZT0iMTgwIiAvPgogICAgPGxvYWRpbmctb3V0bGluZWQgLz4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IEhvbWVPdXRsaW5lZCwgU2V0dGluZ0ZpbGxlZCwgU21pbGVPdXRsaW5lZCwgU3luY091dGxpbmVkLCBMb2FkaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEhvbWVPdXRsaW5lZCwKICAgIFNldHRpbmdGaWxsZWQsCiAgICBTbWlsZU91dGxpbmVkLAogICAgU3luY091dGxpbmVkLAogICAgTG9hZGluZ091dGxpbmVkLAogIH0sCn0pOwo8L3NjcmlwdD4="}},{default:p(()=>[s(w,null,{default:p(()=>[s(l),s(i),s(d),s(I,{spin:""}),s(d,{rotate:180}),s(C)]),_:1})]),htmlCode:p(()=>[yn]),jsVersionHtml:p(()=>[An]),_:1},8,["jsfiddle"])}var Mn=h(fn,[["render",vn]]);const wn=f({components:{Icon:M,HomeOutlined:x}}),k=a=>(D("data-v-49cffe32"),a=a(),j(),a),bn=k(()=>n("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},[n("path",{d:"M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"})],-1)),Tn=k(()=>n("path",{d:"M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z",fill:"#6B676E","p-id":"1143"},null,-1)),Nn=k(()=>n("path",{d:"M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z",fill:"#FFEBD2","p-id":"1144"},null,-1)),Dn=k(()=>n("path",{d:"M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z",fill:"#E9D7C3","p-id":"1145"},null,-1)),jn=k(()=>n("path",{d:"M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z",fill:"#FFFFFF","p-id":"1146"},null,-1)),Sn=k(()=>n("path",{d:"M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z",fill:"#6B676E","p-id":"1147"},null,-1)),xn=k(()=>n("path",{d:"M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z",fill:"#464655","p-id":"1148"},null,-1)),Ln=k(()=>n("path",{d:"M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z",fill:"#464655","p-id":"1149"},null,-1)),zn=k(()=>n("path",{d:"M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z",fill:"#464655","p-id":"1150"},null,-1)),En=[Tn,Nn,Dn,jn,Sn,xn,Ln,zn],Gn=k(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: "),n("span",{class:"token punctuation"},"'"),t("hotpink"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#component"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("svg")]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1em"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1em"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("currentColor"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0 0 1024 1024"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("svg")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("icon")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ fontSize: "),n("span",{class:"token punctuation"},"'"),t("32px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#component"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("svgProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("svg")]),t(),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0 0 1024 1024"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1em"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1em"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("currentColor"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-bind"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("svgProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#6B676E"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1143"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#FFEBD2"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1144"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#E9D7C3"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1145"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#FFFFFF"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1146"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#6B676E"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1147"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#464655"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1148"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#464655"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1149"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#464655"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1150"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("svg")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("icon")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#component"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("HomeOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("icon")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("HomeOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" Icon"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" HomeOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    Icon`),n("span",{class:"token punctuation"},","),t(`
    HomeOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".custom-icons-list :deep(.anticon)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)),Yn=k(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: "),n("span",{class:"token punctuation"},"'"),t("hotpink"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#component"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("svg")]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1em"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1em"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("currentColor"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0 0 1024 1024"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("svg")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("icon")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ fontSize: "),n("span",{class:"token punctuation"},"'"),t("32px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#component"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("svgProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("svg")]),t(),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("0 0 1024 1024"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1em"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1em"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("currentColor"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-bind"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("svgProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#6B676E"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1143"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#FFEBD2"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1144"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#E9D7C3"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1145"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#FFFFFF"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1146"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#6B676E"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1147"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#464655"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1148"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#464655"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1149"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("path")]),t(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#464655"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"p-id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1150"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("svg")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("icon")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#component"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("HomeOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("icon")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("HomeOutlined")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" Icon"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" HomeOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    Icon`),n("span",{class:"token punctuation"},","),t(`
    HomeOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".custom-icons-list :deep(.anticon)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1));function On(a,e,c,u,m,r){const l=o("icon"),i=o("HomeOutlined"),d=o("a-space"),I=o("demo-box");return g(),A(I,{jsfiddle:{us:"Create a reusable Vue component by using `Icon`. The property / slot `component` takes a Vue component that renders to `svg` element.",cn:"\u5229\u7528 `Icon` \u7EC4\u4EF6\u5C01\u88C5\u4E00\u4E2A\u53EF\u590D\u7528\u7684\u81EA\u5B9A\u4E49\u56FE\u6807\u3002\u53EF\u4EE5\u901A\u8FC7 `component` \u5C5E\u6027\u6216\u63D2\u69FD\u4F20\u5165\u4E00\u4E2A `svg` \u7EC4\u4EF6\u6765\u6E32\u67D3\u6700\u7EC8\u7684\u56FE\u6807\uFF0C\u4EE5\u6EE1\u8DB3\u7279\u5B9A\u7684\u9700\u6C42\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5229\u7528 <code>Icon</code> \u7EC4\u4EF6\u5C01\u88C5\u4E00\u4E2A\u53EF\u590D\u7528\u7684\u81EA\u5B9A\u4E49\u56FE\u6807\u3002\u53EF\u4EE5\u901A\u8FC7 <code>component</code> \u5C5E\u6027\u6216\u63D2\u69FD\u4F20\u5165\u4E00\u4E2A <code>svg</code> \u7EC4\u4EF6\u6765\u6E32\u67D3\u6700\u7EC8\u7684\u56FE\u6807\uFF0C\u4EE5\u6EE1\u8DB3\u7279\u5B9A\u7684\u9700\u6C42\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Create a reusable Vue component by using <code>Icon</code>. The property / slot <code>component</code> takes a Vue component that renders to <code>svg</code> element.</p>
`,order:1,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Custom Icon"},relativePath:"components/icon/demo/custom.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGljb24gOnN0eWxlPSJ7IGNvbG9yOiAnaG90cGluaycgfSI+CiAgICAgIDx0ZW1wbGF0ZSAjY29tcG9uZW50PgogICAgICAgIDxzdmcgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNOTIzIDI4My42Yy0xMy40LTMxLjEtMzIuNi01OC45LTU2LjktODIuOC0yNC4zLTIzLjgtNTIuNS00Mi40LTg0LTU1LjUtMzIuNS0xMy41LTY2LjktMjAuMy0xMDIuNC0yMC4zLTQ5LjMgMC05Ny40IDEzLjUtMTM5LjIgMzktMTAgNi4xLTE5LjUgMTIuOC0yOC41IDIwLjEtOS03LjMtMTguNS0xNC0yOC41LTIwLjEtNDEuOC0yNS41LTg5LjktMzktMTM5LjItMzktMzUuNSAwLTY5LjkgNi44LTEwMi40IDIwLjMtMzEuNCAxMy01OS43IDMxLjctODQgNTUuNS0yNC40IDIzLjktNDMuNSA1MS43LTU2LjkgODIuOC0xMy45IDMyLjMtMjEgNjYuNi0yMSAxMDEuOSAwIDMzLjMgNi44IDY4IDIwLjMgMTAzLjMgMTEuMyAyOS41IDI3LjUgNjAuMSA0OC4yIDkxIDMyLjggNDguOSA3Ny45IDk5LjkgMTMzLjkgMTUxLjYgOTIuOCA4NS43IDE4NC43IDE0NC45IDE4OC42IDE0Ny4zbDIzLjcgMTUuMmMxMC41IDYuNyAyNCA2LjcgMzQuNSAwbDIzLjctMTUuMmMzLjktMi41IDk1LjctNjEuNiAxODguNi0xNDcuMyA1Ni01MS43IDEwMS4xLTEwMi43IDEzMy45LTE1MS42IDIwLjctMzAuOSAzNy02MS41IDQ4LjItOTEgMTMuNS0zNS4zIDIwLjMtNzAgMjAuMy0xMDMuMyAwLjEtMzUuMy03LTY5LjYtMjAuOS0xMDEuOXoiCiAgICAgICAgICAvPgogICAgICAgIDwvc3ZnPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9pY29uPgoKICAgIDxpY29uIDpzdHlsZT0ieyBmb250U2l6ZTogJzMycHgnIH0iPgogICAgICA8dGVtcGxhdGUgI2NvbXBvbmVudD0ic3ZnUHJvcHMiPgogICAgICAgIDxzdmcgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIGZpbGw9ImN1cnJlbnRDb2xvciIgdi1iaW5kPSJzdmdQcm9wcyI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNOTkuMDk2IDMxNS42MzRzLTgyLjU4LTY0LjAzMi04Mi41OC0xMzIuMTNjMC02Ni4wNjQgMzMuMDMyLTE2NS4xNjIgMTQ4LjY0Ni0xNDguNjQ2IDgzLjM3IDExLjkxIDk5LjA5NiAxNjUuMTYyIDk5LjA5NiAxNjUuMTYybC0xNjUuMTYyIDExNS42MTR6TTkyNC45MDYgMzE1LjYzNHM4Mi41OC02NC4wMzIgODIuNTgtMTMyLjEzYzAtNjYuMDY0LTMzLjAzMi0xNjUuMTYyLTE0OC42NDYtMTQ4LjY0Ni04My4zNyAxMS45MS05OS4wOTYgMTY1LjE2Mi05OS4wOTYgMTY1LjE2MmwxNjUuMTYyIDExNS42MTR6IgogICAgICAgICAgICBmaWxsPSIjNkI2NzZFIgogICAgICAgICAgICBwLWlkPSIxMTQzIgogICAgICAgICAgLz4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMDI0IDU2MS41NDhjMCAyNjQuNTI2LTIyOS4yMyA0MjkuNDItNTEyLjAwMiA0MjkuNDJTMCA4MjYuMDc2IDAgNTYxLjU0OCAyODMuOTYgNjYuMDY0IDUxMi4wMDIgNjYuMDY0IDEwMjQgMjk3LjAyMiAxMDI0IDU2MS41NDh6IgogICAgICAgICAgICBmaWxsPSIjRkZFQkQyIgogICAgICAgICAgICBwLWlkPSIxMTQ0IgogICAgICAgICAgLz4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0zMzAuMzI0IDg0Mi4xMjZjMCA4Mi4wOTYgODEuMzQgMTQ4LjY0NiAxODEuNjc4IDE0OC42NDZzMTgxLjY3OC02Ni41NSAxODEuNjc4LTE0OC42NDZIMzMwLjMyNHoiCiAgICAgICAgICAgIGZpbGw9IiNFOUQ3QzMiCiAgICAgICAgICAgIHAtaWQ9IjExNDUiCiAgICAgICAgICAvPgogICAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTY0NC4xMyA2MTEuMDk4QzU5NC41ODIgNTI4LjUxNiA1NjEuNTUgNTEyIDUxMi4wMDIgNTEyYy00OS41NDggMC04Mi41OCAxNi41MTYtMTMyLjEzIDk5LjA5Ni00Mi40ODggNzAuODE0LTc4LjczIDIxMS4yNjQtNDkuNTQ4IDI0Ny43NDIgNjYuMDY0IDgyLjU4IDE2NS4xNjIgMzMuMDMyIDE4MS42NzggMzMuMDMyIDE2LjUxNiAwIDExNS42MTQgNDkuNTQ4IDE4MS42NzgtMzMuMDMyIDI5LjE4LTM2LjQ3Ni03LjA2NC0xNzYuOTMtNDkuNTUtMjQ3Ljc0eiIKICAgICAgICAgICAgZmlsbD0iI0ZGRkZGRiIKICAgICAgICAgICAgcC1pZD0iMTE0NiIKICAgICAgICAgIC8+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNNjExLjA5OCA0OTUuNDg0YzAtNDUuNjA4IDM2Ljk3NC04Mi41OCA4Mi41OC04Mi41OCA0OS41NDggMCAxOTguMTk0IDk5LjA5OCAxOTguMTk0IDE2NS4xNjJzLTc5LjkzNCAxNDQuOTA0LTE0OC42NDYgOTkuMDk2Yy00OS41NDgtMzMuMDMyLTEzMi4xMjgtMTQ4LjY0Ni0xMzIuMTI4LTE4MS42Nzh6TTQxMi45MDQgNDk1LjQ4NGMwLTQ1LjYwOC0zNi45NzQtODIuNTgtODIuNTgtODIuNTgtNDkuNTQ4IDAtMTk4LjE5NCA5OS4wOTgtMTk4LjE5NCAxNjUuMTYyczc5LjkzNCAxNDQuOTA0IDE0OC42NDYgOTkuMDk2YzQ5LjU0OC0zMy4wMzIgMTMyLjEyOC0xNDguNjQ2IDEzMi4xMjgtMTgxLjY3OHoiCiAgICAgICAgICAgIGZpbGw9IiM2QjY3NkUiCiAgICAgICAgICAgIHAtaWQ9IjExNDciCiAgICAgICAgICAvPgogICAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTUxMi4wMDIgNzI2LjYyMmMtMzAuMDYgMC0xMTUuNjE0IDUuNjY4LTExNS42MTQgMzMuMDMyIDAgNDkuNjM4IDEwNS40ODQgODUuMjQgMTE1LjYxNCA4Mi41OCAxMC4xMjggMi42NiAxMTUuNjE0LTMyLjk0NCAxMTUuNjE0LTgyLjU4LTAuMDAyLTI3LjM2Ni04NS41NTYtMzMuMDMyLTExNS42MTQtMzMuMDMyeiIKICAgICAgICAgICAgZmlsbD0iIzQ2NDY1NSIKICAgICAgICAgICAgcC1pZD0iMTE0OCIKICAgICAgICAgIC8+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMzMwLjMyNCA0OTUuNDg0bS0zMy4wMzIgMGEzMy4wMzIgMzMuMDMyIDAgMSAwIDY2LjA2NCAwIDMzLjAzMiAzMy4wMzIgMCAxIDAtNjYuMDY0IDBaIgogICAgICAgICAgICBmaWxsPSIjNDY0NjU1IgogICAgICAgICAgICBwLWlkPSIxMTQ5IgogICAgICAgICAgLz4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik02OTMuNjc4IDQ5NS40ODRtLTMzLjAzMiAwYTMzLjAzMiAzMy4wMzIgMCAxIDAgNjYuMDY0IDAgMzMuMDMyIDMzLjAzMiAwIDEgMC02Ni4wNjQgMFoiCiAgICAgICAgICAgIGZpbGw9IiM0NjQ2NTUiCiAgICAgICAgICAgIHAtaWQ9IjExNTAiCiAgICAgICAgICAvPgogICAgICAgIDwvc3ZnPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9pY29uPgogICAgPGljb24+CiAgICAgIDx0ZW1wbGF0ZSAjY29tcG9uZW50PjxIb21lT3V0bGluZWQgLz48L3RlbXBsYXRlPgogICAgPC9pY29uPgogICAgPEhvbWVPdXRsaW5lZCAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uLCB7IEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbiwKICAgIEhvbWVPdXRsaW5lZCwKICB9LAp9KTsKPC9zY3JpcHQ+CjxzdHlsZSBzY29wZWQ+Ci5jdXN0b20taWNvbnMtbGlzdCA6ZGVlcCguYW50aWNvbikgewogIG1hcmdpbi1yaWdodDogNnB4Owp9Cjwvc3R5bGU+Cg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGljb24gOnN0eWxlPSJ7IGNvbG9yOiAnaG90cGluaycgfSI+CiAgICAgIDx0ZW1wbGF0ZSAjY29tcG9uZW50PgogICAgICAgIDxzdmcgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNOTIzIDI4My42Yy0xMy40LTMxLjEtMzIuNi01OC45LTU2LjktODIuOC0yNC4zLTIzLjgtNTIuNS00Mi40LTg0LTU1LjUtMzIuNS0xMy41LTY2LjktMjAuMy0xMDIuNC0yMC4zLTQ5LjMgMC05Ny40IDEzLjUtMTM5LjIgMzktMTAgNi4xLTE5LjUgMTIuOC0yOC41IDIwLjEtOS03LjMtMTguNS0xNC0yOC41LTIwLjEtNDEuOC0yNS41LTg5LjktMzktMTM5LjItMzktMzUuNSAwLTY5LjkgNi44LTEwMi40IDIwLjMtMzEuNCAxMy01OS43IDMxLjctODQgNTUuNS0yNC40IDIzLjktNDMuNSA1MS43LTU2LjkgODIuOC0xMy45IDMyLjMtMjEgNjYuNi0yMSAxMDEuOSAwIDMzLjMgNi44IDY4IDIwLjMgMTAzLjMgMTEuMyAyOS41IDI3LjUgNjAuMSA0OC4yIDkxIDMyLjggNDguOSA3Ny45IDk5LjkgMTMzLjkgMTUxLjYgOTIuOCA4NS43IDE4NC43IDE0NC45IDE4OC42IDE0Ny4zbDIzLjcgMTUuMmMxMC41IDYuNyAyNCA2LjcgMzQuNSAwbDIzLjctMTUuMmMzLjktMi41IDk1LjctNjEuNiAxODguNi0xNDcuMyA1Ni01MS43IDEwMS4xLTEwMi43IDEzMy45LTE1MS42IDIwLjctMzAuOSAzNy02MS41IDQ4LjItOTEgMTMuNS0zNS4zIDIwLjMtNzAgMjAuMy0xMDMuMyAwLjEtMzUuMy03LTY5LjYtMjAuOS0xMDEuOXoiCiAgICAgICAgICAvPgogICAgICAgIDwvc3ZnPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9pY29uPgoKICAgIDxpY29uIDpzdHlsZT0ieyBmb250U2l6ZTogJzMycHgnIH0iPgogICAgICA8dGVtcGxhdGUgI2NvbXBvbmVudD0ic3ZnUHJvcHMiPgogICAgICAgIDxzdmcgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIGZpbGw9ImN1cnJlbnRDb2xvciIgdi1iaW5kPSJzdmdQcm9wcyI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNOTkuMDk2IDMxNS42MzRzLTgyLjU4LTY0LjAzMi04Mi41OC0xMzIuMTNjMC02Ni4wNjQgMzMuMDMyLTE2NS4xNjIgMTQ4LjY0Ni0xNDguNjQ2IDgzLjM3IDExLjkxIDk5LjA5NiAxNjUuMTYyIDk5LjA5NiAxNjUuMTYybC0xNjUuMTYyIDExNS42MTR6TTkyNC45MDYgMzE1LjYzNHM4Mi41OC02NC4wMzIgODIuNTgtMTMyLjEzYzAtNjYuMDY0LTMzLjAzMi0xNjUuMTYyLTE0OC42NDYtMTQ4LjY0Ni04My4zNyAxMS45MS05OS4wOTYgMTY1LjE2Mi05OS4wOTYgMTY1LjE2MmwxNjUuMTYyIDExNS42MTR6IgogICAgICAgICAgICBmaWxsPSIjNkI2NzZFIgogICAgICAgICAgICBwLWlkPSIxMTQzIgogICAgICAgICAgLz4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMDI0IDU2MS41NDhjMCAyNjQuNTI2LTIyOS4yMyA0MjkuNDItNTEyLjAwMiA0MjkuNDJTMCA4MjYuMDc2IDAgNTYxLjU0OCAyODMuOTYgNjYuMDY0IDUxMi4wMDIgNjYuMDY0IDEwMjQgMjk3LjAyMiAxMDI0IDU2MS41NDh6IgogICAgICAgICAgICBmaWxsPSIjRkZFQkQyIgogICAgICAgICAgICBwLWlkPSIxMTQ0IgogICAgICAgICAgLz4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0zMzAuMzI0IDg0Mi4xMjZjMCA4Mi4wOTYgODEuMzQgMTQ4LjY0NiAxODEuNjc4IDE0OC42NDZzMTgxLjY3OC02Ni41NSAxODEuNjc4LTE0OC42NDZIMzMwLjMyNHoiCiAgICAgICAgICAgIGZpbGw9IiNFOUQ3QzMiCiAgICAgICAgICAgIHAtaWQ9IjExNDUiCiAgICAgICAgICAvPgogICAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTY0NC4xMyA2MTEuMDk4QzU5NC41ODIgNTI4LjUxNiA1NjEuNTUgNTEyIDUxMi4wMDIgNTEyYy00OS41NDggMC04Mi41OCAxNi41MTYtMTMyLjEzIDk5LjA5Ni00Mi40ODggNzAuODE0LTc4LjczIDIxMS4yNjQtNDkuNTQ4IDI0Ny43NDIgNjYuMDY0IDgyLjU4IDE2NS4xNjIgMzMuMDMyIDE4MS42NzggMzMuMDMyIDE2LjUxNiAwIDExNS42MTQgNDkuNTQ4IDE4MS42NzgtMzMuMDMyIDI5LjE4LTM2LjQ3Ni03LjA2NC0xNzYuOTMtNDkuNTUtMjQ3Ljc0eiIKICAgICAgICAgICAgZmlsbD0iI0ZGRkZGRiIKICAgICAgICAgICAgcC1pZD0iMTE0NiIKICAgICAgICAgIC8+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNNjExLjA5OCA0OTUuNDg0YzAtNDUuNjA4IDM2Ljk3NC04Mi41OCA4Mi41OC04Mi41OCA0OS41NDggMCAxOTguMTk0IDk5LjA5OCAxOTguMTk0IDE2NS4xNjJzLTc5LjkzNCAxNDQuOTA0LTE0OC42NDYgOTkuMDk2Yy00OS41NDgtMzMuMDMyLTEzMi4xMjgtMTQ4LjY0Ni0xMzIuMTI4LTE4MS42Nzh6TTQxMi45MDQgNDk1LjQ4NGMwLTQ1LjYwOC0zNi45NzQtODIuNTgtODIuNTgtODIuNTgtNDkuNTQ4IDAtMTk4LjE5NCA5OS4wOTgtMTk4LjE5NCAxNjUuMTYyczc5LjkzNCAxNDQuOTA0IDE0OC42NDYgOTkuMDk2YzQ5LjU0OC0zMy4wMzIgMTMyLjEyOC0xNDguNjQ2IDEzMi4xMjgtMTgxLjY3OHoiCiAgICAgICAgICAgIGZpbGw9IiM2QjY3NkUiCiAgICAgICAgICAgIHAtaWQ9IjExNDciCiAgICAgICAgICAvPgogICAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTUxMi4wMDIgNzI2LjYyMmMtMzAuMDYgMC0xMTUuNjE0IDUuNjY4LTExNS42MTQgMzMuMDMyIDAgNDkuNjM4IDEwNS40ODQgODUuMjQgMTE1LjYxNCA4Mi41OCAxMC4xMjggMi42NiAxMTUuNjE0LTMyLjk0NCAxMTUuNjE0LTgyLjU4LTAuMDAyLTI3LjM2Ni04NS41NTYtMzMuMDMyLTExNS42MTQtMzMuMDMyeiIKICAgICAgICAgICAgZmlsbD0iIzQ2NDY1NSIKICAgICAgICAgICAgcC1pZD0iMTE0OCIKICAgICAgICAgIC8+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMzMwLjMyNCA0OTUuNDg0bS0zMy4wMzIgMGEzMy4wMzIgMzMuMDMyIDAgMSAwIDY2LjA2NCAwIDMzLjAzMiAzMy4wMzIgMCAxIDAtNjYuMDY0IDBaIgogICAgICAgICAgICBmaWxsPSIjNDY0NjU1IgogICAgICAgICAgICBwLWlkPSIxMTQ5IgogICAgICAgICAgLz4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik02OTMuNjc4IDQ5NS40ODRtLTMzLjAzMiAwYTMzLjAzMiAzMy4wMzIgMCAxIDAgNjYuMDY0IDAgMzMuMDMyIDMzLjAzMiAwIDEgMC02Ni4wNjQgMFoiCiAgICAgICAgICAgIGZpbGw9IiM0NjQ2NTUiCiAgICAgICAgICAgIHAtaWQ9IjExNTAiCiAgICAgICAgICAvPgogICAgICAgIDwvc3ZnPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9pY29uPgogICAgPGljb24+CiAgICAgIDx0ZW1wbGF0ZSAjY29tcG9uZW50PjxIb21lT3V0bGluZWQgLz48L3RlbXBsYXRlPgogICAgPC9pY29uPgogICAgPEhvbWVPdXRsaW5lZCAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb24sIHsgSG9tZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uLAogICAgSG9tZU91dGxpbmVkLAogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlIHNjb3BlZD4KLmN1c3RvbS1pY29ucy1saXN0IDpkZWVwKC5hbnRpY29uKSB7CiAgbWFyZ2luLXJpZ2h0OiA2cHg7Cn0KPC9zdHlsZT4="}},{default:p(()=>[s(d,null,{default:p(()=>[s(l,{style:{color:"hotpink"}},{component:p(()=>[bn]),_:1}),s(l,{style:{fontSize:"32px"}},{component:p(C=>[(g(),y("svg",K({viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},C),En,16))]),_:1}),s(l,null,{component:p(()=>[s(i)]),_:1}),s(i)]),_:1})]),htmlCode:p(()=>[Gn]),jsVersionHtml:p(()=>[Yn]),_:1},8,["jsfiddle"])}var _n=h(wn,[["render",On],["__scopeId","data-v-49cffe32"]]);const Zn=J({scriptUrl:"//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"}),Pn={components:{IconFont:Zn}},Z=a=>(D("data-v-3bdfb741"),a=a(),j(),a),Wn=Z(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon-font")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-tuichu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon-font")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-facebook"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon-font")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-twitter"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createFromIconfontCN "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" IconFont "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"createFromIconfontCN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"scriptUrl"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconFont`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".icons-list :deep(.anticon)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 24px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)),Fn=Z(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon-font")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-tuichu"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon-font")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-facebook"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon-font")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon-twitter"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createFromIconfontCN "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" IconFont "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"createFromIconfontCN"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"scriptUrl"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconFont`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".icons-list :deep(.anticon)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 24px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1));function Un(a,e,c,u,m,r){const l=o("icon-font"),i=o("a-space"),d=o("demo-box");return g(),A(d,{jsfiddle:{us:"If you are using [iconfont.cn](http://iconfont.cn/), you can use the icons in your project gracefully.",cn:"\u5BF9\u4E8E\u4F7F\u7528 [iconfont.cn](http://iconfont.cn/) \u7684\u7528\u6237\uFF0C\u901A\u8FC7\u8BBE\u7F6E `createFromIconfontCN` \u65B9\u6CD5\u53C2\u6570\u5BF9\u8C61\u4E2D\u7684 `scriptUrl` \u5B57\u6BB5\uFF0C \u5373\u53EF\u8F7B\u677E\u5730\u4F7F\u7528\u5DF2\u6709\u9879\u76EE\u4E2D\u7684\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5BF9\u4E8E\u4F7F\u7528 <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> \u7684\u7528\u6237\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>createFromIconfontCN</code> \u65B9\u6CD5\u53C2\u6570\u5BF9\u8C61\u4E2D\u7684 <code>scriptUrl</code> \u5B57\u6BB5\uFF0C \u5373\u53EF\u8F7B\u677E\u5730\u4F7F\u7528\u5DF2\u6709\u9879\u76EE\u4E2D\u7684\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>If you are using <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a>, you can use the icons in your project gracefully.</p>
`,order:2,title:{"zh-CN":"\u4F7F\u7528 iconfont.cn","en-US":"Use iconfont.cn"},relativePath:"components/icon/demo/iconfont.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGljb24tZm9udCB0eXBlPSJpY29uLXR1aWNodSIgLz4KICAgIDxpY29uLWZvbnQgdHlwZT0iaWNvbi1mYWNlYm9vayIgLz4KICAgIDxpY29uLWZvbnQgdHlwZT0iaWNvbi10d2l0dGVyIiAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgY3JlYXRlRnJvbUljb25mb250Q04gfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwoKY29uc3QgSWNvbkZvbnQgPSBjcmVhdGVGcm9tSWNvbmZvbnRDTih7CiAgc2NyaXB0VXJsOiAnLy9hdC5hbGljZG4uY29tL3QvZm9udF84ZDVsOGZ6azViODdpdWRpLmpzJywKfSk7CmV4cG9ydCBkZWZhdWx0IHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uRm9udCwKICB9LAp9Owo8L3NjcmlwdD4KPHN0eWxlIHNjb3BlZD4KLmljb25zLWxpc3QgOmRlZXAoLmFudGljb24pIHsKICBtYXJnaW4tcmlnaHQ6IDZweDsKICBmb250LXNpemU6IDI0cHg7Cn0KPC9zdHlsZT4K",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGljb24tZm9udCB0eXBlPSJpY29uLXR1aWNodSIgLz4KICAgIDxpY29uLWZvbnQgdHlwZT0iaWNvbi1mYWNlYm9vayIgLz4KICAgIDxpY29uLWZvbnQgdHlwZT0iaWNvbi10d2l0dGVyIiAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgY3JlYXRlRnJvbUljb25mb250Q04gfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpjb25zdCBJY29uRm9udCA9IGNyZWF0ZUZyb21JY29uZm9udENOKHsKICBzY3JpcHRVcmw6ICcvL2F0LmFsaWNkbi5jb20vdC9mb250XzhkNWw4ZnprNWI4N2l1ZGkuanMnLAp9KTsKZXhwb3J0IGRlZmF1bHQgewogIGNvbXBvbmVudHM6IHsKICAgIEljb25Gb250LAogIH0sCn07Cjwvc2NyaXB0Pgo8c3R5bGUgc2NvcGVkPgouaWNvbnMtbGlzdCA6ZGVlcCguYW50aWNvbikgewogIG1hcmdpbi1yaWdodDogNnB4OwogIGZvbnQtc2l6ZTogMjRweDsKfQo8L3N0eWxlPg=="}},{default:p(()=>[s(i,null,{default:p(()=>[s(l,{type:"icon-tuichu"}),s(l,{type:"icon-facebook"}),s(l,{type:"icon-twitter"})]),_:1})]),htmlCode:p(()=>[Wn]),jsVersionHtml:p(()=>[Fn]),_:1},8,["jsfiddle"])}var Bn=h(Pn,[["render",Un],["__scopeId","data-v-3bdfb741"]]);const Rn={components:{SmileTwoTone:$,HeartTwoTone:nn,CheckCircleTwoTone:tn}},P=a=>(D("data-v-7e368c42"),a=a(),j(),a),Vn=P(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("smile-two-tone")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("heart-two-tone")]),t(),n("span",{class:"token attr-name"},"two-tone-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#eb2f96"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("check-circle-two-tone")]),t(),n("span",{class:"token attr-name"},"two-tone-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#52c41a"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" SmileTwoTone"),n("span",{class:"token punctuation"},","),t(" HeartTwoTone"),n("span",{class:"token punctuation"},","),t(" CheckCircleTwoTone "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    SmileTwoTone`),n("span",{class:"token punctuation"},","),t(`
    HeartTwoTone`),n("span",{class:"token punctuation"},","),t(`
    CheckCircleTwoTone`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".icons-list :deep(.anticon)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 24px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)),Qn=P(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("smile-two-tone")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("heart-two-tone")]),t(),n("span",{class:"token attr-name"},"two-tone-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#eb2f96"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("check-circle-two-tone")]),t(),n("span",{class:"token attr-name"},"two-tone-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#52c41a"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" SmileTwoTone"),n("span",{class:"token punctuation"},","),t(" HeartTwoTone"),n("span",{class:"token punctuation"},","),t(" CheckCircleTwoTone "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    SmileTwoTone`),n("span",{class:"token punctuation"},","),t(`
    HeartTwoTone`),n("span",{class:"token punctuation"},","),t(`
    CheckCircleTwoTone`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".icons-list :deep(.anticon)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 24px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1));function qn(a,e,c,u,m,r){const l=o("smile-two-tone"),i=o("heart-two-tone"),d=o("check-circle-two-tone"),I=o("a-space"),C=o("demo-box");return g(),A(C,{jsfiddle:{us:"You can set `two-tone-color` prop to specific primary color for two-tone icons.",cn:"\u53CC\u8272\u56FE\u6807\u53EF\u4EE5\u901A\u8FC7 `two-tone-color` \u5C5E\u6027\u8BBE\u7F6E\u4E3B\u9898\u8272\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53CC\u8272\u56FE\u6807\u53EF\u4EE5\u901A\u8FC7 <code>two-tone-color</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3B\u9898\u8272\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can set <code>two-tone-color</code> prop to specific primary color for two-tone icons.</p>
`,order:3,title:{"zh-CN":"\u591A\u8272\u56FE\u6807","en-US":"Two-tone icon and colorful icon"},relativePath:"components/icon/demo/two-tone.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPHNtaWxlLXR3by10b25lIC8+CiAgICA8aGVhcnQtdHdvLXRvbmUgdHdvLXRvbmUtY29sb3I9IiNlYjJmOTYiIC8+CiAgICA8Y2hlY2stY2lyY2xlLXR3by10b25lIHR3by10b25lLWNvbG9yPSIjNTJjNDFhIiAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgU21pbGVUd29Ub25lLCBIZWFydFR3b1RvbmUsIENoZWNrQ2lyY2xlVHdvVG9uZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IHsKICBjb21wb25lbnRzOiB7CiAgICBTbWlsZVR3b1RvbmUsCiAgICBIZWFydFR3b1RvbmUsCiAgICBDaGVja0NpcmNsZVR3b1RvbmUsCiAgfSwKfTsKPC9zY3JpcHQ+CjxzdHlsZSBzY29wZWQ+Ci5pY29ucy1saXN0IDpkZWVwKC5hbnRpY29uKSB7CiAgbWFyZ2luLXJpZ2h0OiA2cHg7CiAgZm9udC1zaXplOiAyNHB4Owp9Cjwvc3R5bGU+Cg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPHNtaWxlLXR3by10b25lIC8+CiAgICA8aGVhcnQtdHdvLXRvbmUgdHdvLXRvbmUtY29sb3I9IiNlYjJmOTYiIC8+CiAgICA8Y2hlY2stY2lyY2xlLXR3by10b25lIHR3by10b25lLWNvbG9yPSIjNTJjNDFhIiAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgU21pbGVUd29Ub25lLCBIZWFydFR3b1RvbmUsIENoZWNrQ2lyY2xlVHdvVG9uZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IHsKICBjb21wb25lbnRzOiB7CiAgICBTbWlsZVR3b1RvbmUsCiAgICBIZWFydFR3b1RvbmUsCiAgICBDaGVja0NpcmNsZVR3b1RvbmUsCiAgfSwKfTsKPC9zY3JpcHQ+CjxzdHlsZSBzY29wZWQ+Ci5pY29ucy1saXN0IDpkZWVwKC5hbnRpY29uKSB7CiAgbWFyZ2luLXJpZ2h0OiA2cHg7CiAgZm9udC1zaXplOiAyNHB4Owp9Cjwvc3R5bGU+"}},{default:p(()=>[s(I,null,{default:p(()=>[s(l),s(i,{"two-tone-color":"#eb2f96"}),s(d,{"two-tone-color":"#52c41a"})]),_:1})]),htmlCode:p(()=>[Vn]),jsVersionHtml:p(()=>[Qn]),_:1},8,["jsfiddle"])}var Hn=h(Rn,[["render",qn],["__scopeId","data-v-7e368c42"]]);const Xn={pageData:{title:"Icon",description:"",frontmatter:{category:"Components",type:"\u901A\u7528",title:"Icon",subtitle:"\u56FE\u6807",cover:"https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg"},headers:[{level:2,title:"\u8BBE\u8BA1\u5E08\u4E13\u5C5E",slug:"\u8BBE\u8BA1\u5E08\u4E13\u5C5E",content:"\u5B89\u88C5 [Kitchen Sketch \u63D2\u4EF6 \u{1F48E}](https://kitchen.alipay.com)\uFF0C\u5C31\u53EF\u4EE5\u4E00\u952E\u62D6\u62FD\u4F7F\u7528 Ant Design \u548C Iconfont \u7684\u6D77\u91CF\u56FE\u6807\uFF0C\u8FD8\u53EF\u4EE5\u5173\u8054\u81EA\u6709\u9879\u76EE\u3002"},{level:2,title:"API",slug:"API",content:"\u901A\u7528\u56FE\u6807"},{level:3,title:"\u901A\u7528\u56FE\u6807",slug:"\u901A\u7528\u56FE\u6807",content:""},{level:3,title:"\u81EA\u5B9A\u4E49 Icon/Custom Icon",slug:"\u81EA\u5B9A\u4E49-Icon-Custom-Icon",content:""},{level:3,title:"SVG \u56FE\u6807",slug:"SVG-\u56FE\u6807",content:"\u5728 `1.2.0` \u4E4B\u540E\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 SVG \u56FE\u6807\u66FF\u6362\u4E86\u539F\u5148\u7684 font \u56FE\u6807\uFF0C\u4ECE\u800C\u5E26\u6765\u4E86\u4EE5\u4E0B\u4F18\u52BF\uFF1A"},{level:3,title:"\u53CC\u8272\u56FE\u6807\u4E3B\u8272",slug:"\u53CC\u8272\u56FE\u6807\u4E3B\u8272",content:"\u5BF9\u4E8E\u53CC\u8272\u56FE\u6807\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 `Icon.getTwoToneColor()` \u548C `Icon.setTwoToneColor(colorString)` \u6765\u5168\u5C40\u8BBE\u7F6E\u56FE\u6807\u4E3B\u8272\u3002"},{level:3,title:"\u81EA\u5B9A\u4E49 font \u56FE\u6807",slug:"\u81EA\u5B9A\u4E49-font-\u56FE\u6807",content:"\u5728 `1.2.0` \u4E4B\u540E\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A `createFromIconfontCN` \u65B9\u6CD5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u8C03\u7528\u5728 [iconfont.cn](http://iconfont.cn/) \u4E0A\u81EA\u884C\u7BA1\u7406\u7684\u56FE\u6807\u3002"},{level:3,title:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807",slug:"\u81EA\u5B9A\u4E49-SVG-\u56FE\u6807",content:"\u5982\u679C\u4F7F\u7528 `vue cli 3`\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E [vue-svg-loader](https://www.npmjs.com/package/vue-svg-loader) \u6765\u5C06 `svg` \u56FE\u6807\u4F5C\u4E3A `Vue` \u7EC4\u4EF6\u5BFC\u5165\u3002\u66F4\u591A`vue-svg-loader` \u7684\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u9605 [\u6587\u6863](https://github.com/visualfanatic/vue-svg-loader)\u3002"}],relativePath:"components/icon/index.zh-CN.md",content:`
\u8BED\u4E49\u5316\u7684\u77E2\u91CF\u56FE\u5F62\u3002\u4F7F\u7528\u56FE\u6807\u7EC4\u4EF6\uFF0C\u4F60\u9700\u8981\u5B89\u88C5 \`@ant-design/icons-vue\` \u56FE\u6807\u7EC4\u4EF6\u5305\uFF1A

\`\`\`bash
npm install --save @ant-design/icons-vue
\`\`\`

## \u8BBE\u8BA1\u5E08\u4E13\u5C5E

\u5B89\u88C5 [Kitchen Sketch \u63D2\u4EF6 \u{1F48E}](https://kitchen.alipay.com)\uFF0C\u5C31\u53EF\u4EE5\u4E00\u952E\u62D6\u62FD\u4F7F\u7528 Ant Design \u548C Iconfont \u7684\u6D77\u91CF\u56FE\u6807\uFF0C\u8FD8\u53EF\u4EE5\u5173\u8054\u81EA\u6709\u9879\u76EE\u3002

## API

### \u901A\u7528\u56FE\u6807

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| rotate | \u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6\uFF08IE9 \u65E0\u6548\uFF09 | number | - |  |
| spin | \u662F\u5426\u6709\u65CB\u8F6C\u52A8\u753B | boolean | false |  |
| style | \u8BBE\u7F6E\u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982 \`fontSize\` \u548C \`color\` | CSSProperties | - |  |
| twoToneColor | \u4EC5\u9002\u7528\u53CC\u8272\u56FE\u6807\u3002\u8BBE\u7F6E\u53CC\u8272\u56FE\u6807\u7684\u4E3B\u8981\u989C\u8272 | string (\u5341\u516D\u8FDB\u5236\u989C\u8272) | - |  |

\u5176\u4E2D\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u79CD\u4E3B\u9898\u7684\u56FE\u6807\uFF0C\u4E0D\u540C\u4E3B\u9898\u7684 Icon \u7EC4\u4EF6\u540D\u4E3A\u56FE\u6807\u540D\u52A0\u4E3B\u9898\u505A\u4E3A\u540E\u7F00\u3002

\`\`\`jsx
import { StarOutlined, StarFilled, StarTwoTone } from &#39;@ant-design/icons-vue&#39;;

&lt;star-outlined /&gt;
&lt;star-filled /&gt;
&lt;star-two-tone two-tone-color=&quot;#eb2f96&quot; /&gt;
\`\`\`

### \u81EA\u5B9A\u4E49 Icon/Custom Icon

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| component | \u63A7\u5236\u5982\u4F55\u6E32\u67D3\u56FE\u6807\uFF0C\u901A\u5E38\u662F\u4E00\u4E2A\u6E32\u67D3\u6839\u6807\u7B7E\u4E3A \`&lt;svg&gt;\` \u7684 \`Vue\` \u7EC4\u4EF6 | ComponentType&amp;lt;CustomIconComponentProps&gt; | - |  |
| rotate | \u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6\uFF08IE9 \u65E0\u6548\uFF09 | number | - |  |
| spin | \u662F\u5426\u6709\u65CB\u8F6C\u52A8\u753B | boolean | false |  |
| style | \u8BBE\u7F6E\u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982 \`fontSize\` \u548C \`color\` | CSSProperties | - |  |

### SVG \u56FE\u6807

\u5728 \`1.2.0\` \u4E4B\u540E\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 SVG \u56FE\u6807\u66FF\u6362\u4E86\u539F\u5148\u7684 font \u56FE\u6807\uFF0C\u4ECE\u800C\u5E26\u6765\u4E86\u4EE5\u4E0B\u4F18\u52BF\uFF1A

- \u5B8C\u5168\u79BB\u7EBF\u5316\u4F7F\u7528\uFF0C\u4E0D\u9700\u8981\u4ECE CDN \u4E0B\u8F7D\u5B57\u4F53\u6587\u4EF6\uFF0C\u56FE\u6807\u4E0D\u4F1A\u56E0\u4E3A\u7F51\u7EDC\u95EE\u9898\u5448\u73B0\u65B9\u5757\uFF0C\u4E5F\u65E0\u9700\u5B57\u4F53\u6587\u4EF6\u672C\u5730\u90E8\u7F72\u3002
- \u5728\u4F4E\u7AEF\u8BBE\u5907\u4E0A SVG \u6709\u66F4\u597D\u7684\u6E05\u6670\u5EA6\u3002
- \u652F\u6301\u591A\u8272\u56FE\u6807\u3002
- \u5BF9\u4E8E\u5185\u5EFA\u56FE\u6807\u7684\u66F4\u6362\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A API\uFF0C\u800C\u4E0D\u9700\u8981\u8FDB\u884C\u6837\u5F0F\u8986\u76D6\u3002

\u66F4\u591A\u8BA8\u8BBA\u53EF\u53C2\u8003\uFF1A[#10353](https://github.com/ant-design/ant-design/issues/10353)\u3002

\u6240\u6709\u7684\u56FE\u6807\u90FD\u4F1A\u4EE5 \`&lt;svg&gt;\` \u6807\u7B7E\u6E32\u67D3\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`style\` \u548C \`class\` \u8BBE\u7F6E\u56FE\u6807\u7684\u5927\u5C0F\u548C\u5355\u8272\u56FE\u6807\u7684\u989C\u8272\u3002\u4F8B\u5982\uFF1A

\`\`\`html
&lt;template&gt;
  &lt;message-outlined :style=&quot;{fontSize: &#39;16px&#39;, color: &#39;#08c&#39;}&quot; /&gt;
&lt;/template&gt;
&lt;script&gt;
  import { MessageOutlined } from &#39;@ant-design/icons-vue&#39;;
  import { defineComponent } from &#39;vue&#39;;
  export default defineComponent({
    components: {
      MessageOutlined,
    },
  });
&lt;/script&gt;
\`\`\`

### \u53CC\u8272\u56FE\u6807\u4E3B\u8272

\u5BF9\u4E8E\u53CC\u8272\u56FE\u6807\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 \`Icon.getTwoToneColor()\` \u548C \`Icon.setTwoToneColor(colorString)\` \u6765\u5168\u5C40\u8BBE\u7F6E\u56FE\u6807\u4E3B\u8272\u3002

\`\`\`jsx
import { getTwoToneColor, setTwoToneColor } from &#39;@ant-design/icons-vue&#39;;

setTwoToneColor(&#39;#eb2f96&#39;);
getTwoToneColor(); // #eb2f96
\`\`\`

### \u81EA\u5B9A\u4E49 font \u56FE\u6807

\u5728 \`1.2.0\` \u4E4B\u540E\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A \`createFromIconfontCN\` \u65B9\u6CD5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u8C03\u7528\u5728 [iconfont.cn](http://iconfont.cn/) \u4E0A\u81EA\u884C\u7BA1\u7406\u7684\u56FE\u6807\u3002

\`\`\`jsx
import { createFromIconfontCN } from &#39;@ant-design/icons-vue&#39;;
import { defineComponent } from &#39;vue&#39;;
const MyIcon = createFromIconfontCN({
  scriptUrl: &#39;//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js&#39;, // \u5728 iconfont.cn \u4E0A\u751F\u6210
});

export default defineComponent({
  setup() {
    return () =&gt; &lt;MyIcon type=&quot;icon-dianzan&quot; /&gt;;
  },
});
\`\`\`

\u5176\u672C\u8D28\u4E0A\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u4F7F\u7528 \`&lt;use&gt;\` \u6807\u7B7E\u6765\u6E32\u67D3\u56FE\u6807\u7684\u7EC4\u4EF6\u3002

\`options\` \u7684\u914D\u7F6E\u9879\u5982\u4E0B\uFF1A

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
| --- | --- | --- | --- |
| extraCommonProps | \u7ED9\u6240\u6709\u7684 \`svg\` \u56FE\u6807 \`&lt;Icon /&gt;\` \u7EC4\u4EF6\u8BBE\u7F6E\u989D\u5916\u7684\u5C5E\u6027 | \`{ class, attrs, props, on, style }\` | {} |
| scriptUrl | [iconfont.cn](http://iconfont.cn/) \u9879\u76EE\u5728\u7EBF\u751F\u6210\u7684 \`js\` \u5730\u5740 | string | - |

\u5728 \`scriptUrl\` \u90FD\u8BBE\u7F6E\u6709\u6548\u7684\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u5728\u6E32\u67D3\u524D\u4F1A\u81EA\u52A8\u5F15\u5165 [iconfont.cn](http://iconfont.cn/) \u9879\u76EE\u4E2D\u7684\u56FE\u6807\u7B26\u53F7\u96C6\uFF0C\u65E0\u9700\u624B\u52A8\u5F15\u5165\u3002

\u89C1 [iconfont.cn \u4F7F\u7528\u5E2E\u52A9](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&amp;helptype=code) \u67E5\u770B\u5982\u4F55\u751F\u6210 \`js\` \u5730\u5740\u3002

### \u81EA\u5B9A\u4E49 SVG \u56FE\u6807

\u5982\u679C\u4F7F\u7528 \`vue cli 3\`\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E [vue-svg-loader](https://www.npmjs.com/package/vue-svg-loader) \u6765\u5C06 \`svg\` \u56FE\u6807\u4F5C\u4E3A \`Vue\` \u7EC4\u4EF6\u5BFC\u5165\u3002\u66F4\u591A\`vue-svg-loader\` \u7684\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u9605 [\u6587\u6863](https://github.com/visualfanatic/vue-svg-loader)\u3002

\`\`\`js
// vue.config.js
module.exports = {
  chainWebpack: config =&gt; {
    const svgRule = config.module.rule(&#39;svg&#39;);

    svgRule.uses.clear();

    svgRule.use(&#39;vue-svg-loader&#39;).loader(&#39;vue-svg-loader&#39;);
  },
};
\`\`\`

\`\`\`jsx
import { defineComponent } from &#39;vue&#39;;
import Icon from &#39;@ant-design/icons-vue&#39;;
import MessageSvg from &#39;path/to/message.svg&#39;; // &#39;*.svg&#39; \u6587\u4EF6\u7684\u8DEF\u5F84

export default defineComponent({
  setup() {
    return () =&gt; &lt;Icon type={MessageSvg} /&gt;;
  },
});
\`\`\`

\`Icon\` \u4E2D\u7684 \`component\` \u7EC4\u4EF6\u7684\u63A5\u53D7\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A

| \u5B57\u6BB5   | \u8BF4\u660E                    | \u7C7B\u578B             | \u53EA\u8BFB\u503C         |
| ------ | ----------------------- | ---------------- | -------------- |
| class  | \u8BA1\u7B97\u540E\u7684 \`svg\` \u7C7B\u540D     | string           | -              |
| fill   | \`svg\` \u5143\u7D20\u586B\u5145\u7684\u989C\u8272    | string           | &#39;currentColor&#39; |
| height | \`svg\` \u5143\u7D20\u9AD8\u5EA6          | string \\| number | &#39;1em&#39;          |
| style  | \u8BA1\u7B97\u540E\u7684 \`svg\` \u5143\u7D20\u6837\u5F0F | CSSProperties    | -              |
| width  | \`svg\` \u5143\u7D20\u5BBD\u5EA6          | string \\| number | &#39;1em&#39;          |
`,html:`<p>\u8BED\u4E49\u5316\u7684\u77E2\u91CF\u56FE\u5F62\u3002\u4F7F\u7528\u56FE\u6807\u7EC4\u4EF6\uFF0C\u4F60\u9700\u8981\u5B89\u88C5 <code>@ant-design/icons-vue</code> \u56FE\u6807\u7EC4\u4EF6\u5305\uFF1A</p>
<pre class="language-bash" v-pre><code><span class="token function">npm</span> <span class="token function">install</span> --save @ant-design/icons-vue
</code></pre>
<h2 id="\u8BBE\u8BA1\u5E08\u4E13\u5C5E">\u8BBE\u8BA1\u5E08\u4E13\u5C5E <a class="header-anchor" href="#\u8BBE\u8BA1\u5E08\u4E13\u5C5E">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5B89\u88C5 <a href="https://kitchen.alipay.com" target="_blank" rel="noopener noreferrer">Kitchen Sketch \u63D2\u4EF6 \u{1F48E}</a>\uFF0C\u5C31\u53EF\u4EE5\u4E00\u952E\u62D6\u62FD\u4F7F\u7528 Ant Design \u548C Iconfont \u7684\u6D77\u91CF\u56FE\u6807\uFF0C\u8FD8\u53EF\u4EE5\u5173\u8054\u81EA\u6709\u9879\u76EE\u3002</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="\u901A\u7528\u56FE\u6807">\u901A\u7528\u56FE\u6807 <a class="header-anchor" href="#\u901A\u7528\u56FE\u6807">
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
<td>rotate</td>
<td>\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6\uFF08IE9 \u65E0\u6548\uFF09</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>spin</td>
<td>\u662F\u5426\u6709\u65CB\u8F6C\u52A8\u753B</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>\u8BBE\u7F6E\u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982 <code>fontSize</code> \u548C <code>color</code></td>
<td>CSSProperties</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>twoToneColor</td>
<td>\u4EC5\u9002\u7528\u53CC\u8272\u56FE\u6807\u3002\u8BBE\u7F6E\u53CC\u8272\u56FE\u6807\u7684\u4E3B\u8981\u989C\u8272</td>
<td>string (\u5341\u516D\u8FDB\u5236\u989C\u8272)</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<p>\u5176\u4E2D\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u79CD\u4E3B\u9898\u7684\u56FE\u6807\uFF0C\u4E0D\u540C\u4E3B\u9898\u7684 Icon \u7EC4\u4EF6\u540D\u4E3A\u56FE\u6807\u540D\u52A0\u4E3B\u9898\u505A\u4E3A\u540E\u7F00\u3002</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StarOutlined<span class="token punctuation">,</span> StarFilled<span class="token punctuation">,</span> StarTwoTone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-outlined</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-filled</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-two-tone</span> <span class="token attr-name">two-tone-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#eb2f96<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre>
<h3 id="\u81EA\u5B9A\u4E49-Icon-Custom-Icon">\u81EA\u5B9A\u4E49 Icon/Custom Icon <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-Icon-Custom-Icon">
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
<td>component</td>
<td>\u63A7\u5236\u5982\u4F55\u6E32\u67D3\u56FE\u6807\uFF0C\u901A\u5E38\u662F\u4E00\u4E2A\u6E32\u67D3\u6839\u6807\u7B7E\u4E3A <code>&lt;svg&gt;</code> \u7684 <code>Vue</code> \u7EC4\u4EF6</td>
<td>ComponentType&lt;CustomIconComponentProps&gt;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rotate</td>
<td>\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6\uFF08IE9 \u65E0\u6548\uFF09</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>spin</td>
<td>\u662F\u5426\u6709\u65CB\u8F6C\u52A8\u753B</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>\u8BBE\u7F6E\u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982 <code>fontSize</code> \u548C <code>color</code></td>
<td>CSSProperties</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="SVG-\u56FE\u6807">SVG \u56FE\u6807 <a class="header-anchor" href="#SVG-\u56FE\u6807">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5728 <code>1.2.0</code> \u4E4B\u540E\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 SVG \u56FE\u6807\u66FF\u6362\u4E86\u539F\u5148\u7684 font \u56FE\u6807\uFF0C\u4ECE\u800C\u5E26\u6765\u4E86\u4EE5\u4E0B\u4F18\u52BF\uFF1A</p>
<ul>
<li>\u5B8C\u5168\u79BB\u7EBF\u5316\u4F7F\u7528\uFF0C\u4E0D\u9700\u8981\u4ECE CDN \u4E0B\u8F7D\u5B57\u4F53\u6587\u4EF6\uFF0C\u56FE\u6807\u4E0D\u4F1A\u56E0\u4E3A\u7F51\u7EDC\u95EE\u9898\u5448\u73B0\u65B9\u5757\uFF0C\u4E5F\u65E0\u9700\u5B57\u4F53\u6587\u4EF6\u672C\u5730\u90E8\u7F72\u3002</li>
<li>\u5728\u4F4E\u7AEF\u8BBE\u5907\u4E0A SVG \u6709\u66F4\u597D\u7684\u6E05\u6670\u5EA6\u3002</li>
<li>\u652F\u6301\u591A\u8272\u56FE\u6807\u3002</li>
<li>\u5BF9\u4E8E\u5185\u5EFA\u56FE\u6807\u7684\u66F4\u6362\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A API\uFF0C\u800C\u4E0D\u9700\u8981\u8FDB\u884C\u6837\u5F0F\u8986\u76D6\u3002</li>
</ul>
<p>\u66F4\u591A\u8BA8\u8BBA\u53EF\u53C2\u8003\uFF1A<a href="https://github.com/ant-design/ant-design/issues/10353" target="_blank" rel="noopener noreferrer">#10353</a>\u3002</p>
<p>\u6240\u6709\u7684\u56FE\u6807\u90FD\u4F1A\u4EE5 <code>&lt;svg&gt;</code> \u6807\u7B7E\u6E32\u67D3\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>style</code> \u548C <code>class</code> \u8BBE\u7F6E\u56FE\u6807\u7684\u5927\u5C0F\u548C\u5355\u8272\u56FE\u6807\u7684\u989C\u8272\u3002\u4F8B\u5982\uFF1A</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message-outlined</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{fontSize: <span class="token punctuation">'</span>16px<span class="token punctuation">'</span>, color: <span class="token punctuation">'</span>#08c<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> MessageOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      MessageOutlined<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<h3 id="\u53CC\u8272\u56FE\u6807\u4E3B\u8272">\u53CC\u8272\u56FE\u6807\u4E3B\u8272 <a class="header-anchor" href="#\u53CC\u8272\u56FE\u6807\u4E3B\u8272">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5BF9\u4E8E\u53CC\u8272\u56FE\u6807\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 <code>Icon.getTwoToneColor()</code> \u548C <code>Icon.setTwoToneColor(colorString)</code> \u6765\u5168\u5C40\u8BBE\u7F6E\u56FE\u6807\u4E3B\u8272\u3002</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getTwoToneColor<span class="token punctuation">,</span> setTwoToneColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>

<span class="token function">setTwoToneColor</span><span class="token punctuation">(</span><span class="token string">'#eb2f96'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getTwoToneColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #eb2f96</span>
</code></pre>
<h3 id="\u81EA\u5B9A\u4E49-font-\u56FE\u6807">\u81EA\u5B9A\u4E49 font \u56FE\u6807 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-font-\u56FE\u6807">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5728 <code>1.2.0</code> \u4E4B\u540E\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>createFromIconfontCN</code> \u65B9\u6CD5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u8C03\u7528\u5728 <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> \u4E0A\u81EA\u884C\u7BA1\u7406\u7684\u56FE\u6807\u3002</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createFromIconfontCN <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MyIcon <span class="token operator">=</span> <span class="token function">createFromIconfontCN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">scriptUrl</span><span class="token operator">:</span> <span class="token string">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span><span class="token punctuation">,</span> <span class="token comment">// \u5728 iconfont.cn \u4E0A\u751F\u6210</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyIcon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-dianzan<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>\u5176\u672C\u8D28\u4E0A\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u4F7F\u7528 <code>&lt;use&gt;</code> \u6807\u7B7E\u6765\u6E32\u67D3\u56FE\u6807\u7684\u7EC4\u4EF6\u3002</p>
<p><code>options</code> \u7684\u914D\u7F6E\u9879\u5982\u4E0B\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>extraCommonProps</td>
<td>\u7ED9\u6240\u6709\u7684 <code>svg</code> \u56FE\u6807 <code>&lt;Icon /&gt;</code> \u7EC4\u4EF6\u8BBE\u7F6E\u989D\u5916\u7684\u5C5E\u6027</td>
<td><code>{ class, attrs, props, on, style }</code></td>
<td>{}</td>
</tr>
<tr>
<td>scriptUrl</td>
<td><a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> \u9879\u76EE\u5728\u7EBF\u751F\u6210\u7684 <code>js</code> \u5730\u5740</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<p>\u5728 <code>scriptUrl</code> \u90FD\u8BBE\u7F6E\u6709\u6548\u7684\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u5728\u6E32\u67D3\u524D\u4F1A\u81EA\u52A8\u5F15\u5165 <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> \u9879\u76EE\u4E2D\u7684\u56FE\u6807\u7B26\u53F7\u96C6\uFF0C\u65E0\u9700\u624B\u52A8\u5F15\u5165\u3002</p>
<p>\u89C1 <a href="http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&amp;helptype=code" target="_blank" rel="noopener noreferrer">iconfont.cn \u4F7F\u7528\u5E2E\u52A9</a> \u67E5\u770B\u5982\u4F55\u751F\u6210 <code>js</code> \u5730\u5740\u3002</p>
<h3 id="\u81EA\u5B9A\u4E49-SVG-\u56FE\u6807">\u81EA\u5B9A\u4E49 SVG \u56FE\u6807 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-SVG-\u56FE\u6807">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5982\u679C\u4F7F\u7528 <code>vue cli 3</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <a href="https://www.npmjs.com/package/vue-svg-loader" target="_blank" rel="noopener noreferrer">vue-svg-loader</a> \u6765\u5C06 <code>svg</code> \u56FE\u6807\u4F5C\u4E3A <code>Vue</code> \u7EC4\u4EF6\u5BFC\u5165\u3002\u66F4\u591A<code>vue-svg-loader</code> \u7684\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u9605 <a href="https://github.com/visualfanatic/vue-svg-loader" target="_blank" rel="noopener noreferrer">\u6587\u6863</a>\u3002</p>
<pre class="language-js" v-pre><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> svgRule <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    svgRule<span class="token punctuation">.</span>uses<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    svgRule<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'vue-svg-loader'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">'vue-svg-loader'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MessageSvg <span class="token keyword">from</span> <span class="token string">'path/to/message.svg'</span><span class="token punctuation">;</span> <span class="token comment">// '*.svg' \u6587\u4EF6\u7684\u8DEF\u5F84</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>MessageSvg<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><code>Icon</code> \u4E2D\u7684 <code>component</code> \u7EC4\u4EF6\u7684\u63A5\u53D7\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A</p>
<table>
<thead>
<tr>
<th>\u5B57\u6BB5</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u53EA\u8BFB\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>class</td>
<td>\u8BA1\u7B97\u540E\u7684 <code>svg</code> \u7C7B\u540D</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>fill</td>
<td><code>svg</code> \u5143\u7D20\u586B\u5145\u7684\u989C\u8272</td>
<td>string</td>
<td>'currentColor'</td>
</tr>
<tr>
<td>height</td>
<td><code>svg</code> \u5143\u7D20\u9AD8\u5EA6</td>
<td>string | number</td>
<td>'1em'</td>
</tr>
<tr>
<td>style</td>
<td>\u8BA1\u7B97\u540E\u7684 <code>svg</code> \u5143\u7D20\u6837\u5F0F</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td><code>svg</code> \u5143\u7D20\u5BBD\u5EA6</td>
<td>string | number</td>
<td>'1em'</td>
</tr>
</tbody>
</table>
`,lastUpdated:1647932912891}},Kn={class:"markdown"},Jn=L(`<p>\u8BED\u4E49\u5316\u7684\u77E2\u91CF\u56FE\u5F62\u3002\u4F7F\u7528\u56FE\u6807\u7EC4\u4EF6\uFF0C\u4F60\u9700\u8981\u5B89\u88C5 <code>@ant-design/icons-vue</code> \u56FE\u6807\u7EC4\u4EF6\u5305\uFF1A</p><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save @ant-design/icons-vue
</code></pre><h2 id="\u8BBE\u8BA1\u5E08\u4E13\u5C5E">\u8BBE\u8BA1\u5E08\u4E13\u5C5E <a class="header-anchor" href="#\u8BBE\u8BA1\u5E08\u4E13\u5C5E"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5B89\u88C5 <a href="https://kitchen.alipay.com" target="_blank" rel="noopener noreferrer">Kitchen Sketch \u63D2\u4EF6 \u{1F48E}</a>\uFF0C\u5C31\u53EF\u4EE5\u4E00\u952E\u62D6\u62FD\u4F7F\u7528 Ant Design \u548C Iconfont \u7684\u6D77\u91CF\u56FE\u6807\uFF0C\u8FD8\u53EF\u4EE5\u5173\u8054\u81EA\u6709\u9879\u76EE\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u901A\u7528\u56FE\u6807">\u901A\u7528\u56FE\u6807 <a class="header-anchor" href="#\u901A\u7528\u56FE\u6807"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>rotate</td><td>\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6\uFF08IE9 \u65E0\u6548\uFF09</td><td>number</td><td>-</td><td></td></tr><tr><td>spin</td><td>\u662F\u5426\u6709\u65CB\u8F6C\u52A8\u753B</td><td>boolean</td><td>false</td><td></td></tr><tr><td>style</td><td>\u8BBE\u7F6E\u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982 <code>fontSize</code> \u548C <code>color</code></td><td>CSSProperties</td><td>-</td><td></td></tr><tr><td>twoToneColor</td><td>\u4EC5\u9002\u7528\u53CC\u8272\u56FE\u6807\u3002\u8BBE\u7F6E\u53CC\u8272\u56FE\u6807\u7684\u4E3B\u8981\u989C\u8272</td><td>string (\u5341\u516D\u8FDB\u5236\u989C\u8272)</td><td>-</td><td></td></tr></tbody></table><p>\u5176\u4E2D\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u79CD\u4E3B\u9898\u7684\u56FE\u6807\uFF0C\u4E0D\u540C\u4E3B\u9898\u7684 Icon \u7EC4\u4EF6\u540D\u4E3A\u56FE\u6807\u540D\u52A0\u4E3B\u9898\u505A\u4E3A\u540E\u7F00\u3002</p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StarOutlined<span class="token punctuation">,</span> StarFilled<span class="token punctuation">,</span> StarTwoTone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-outlined</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-filled</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-two-tone</span> <span class="token attr-name">two-tone-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#eb2f96<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="\u81EA\u5B9A\u4E49-Icon-Custom-Icon">\u81EA\u5B9A\u4E49 Icon/Custom Icon <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-Icon-Custom-Icon"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>component</td><td>\u63A7\u5236\u5982\u4F55\u6E32\u67D3\u56FE\u6807\uFF0C\u901A\u5E38\u662F\u4E00\u4E2A\u6E32\u67D3\u6839\u6807\u7B7E\u4E3A <code>&lt;svg&gt;</code> \u7684 <code>Vue</code> \u7EC4\u4EF6</td><td>ComponentType&lt;CustomIconComponentProps&gt;</td><td>-</td><td></td></tr><tr><td>rotate</td><td>\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6\uFF08IE9 \u65E0\u6548\uFF09</td><td>number</td><td>-</td><td></td></tr><tr><td>spin</td><td>\u662F\u5426\u6709\u65CB\u8F6C\u52A8\u753B</td><td>boolean</td><td>false</td><td></td></tr><tr><td>style</td><td>\u8BBE\u7F6E\u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u4F8B\u5982 <code>fontSize</code> \u548C <code>color</code></td><td>CSSProperties</td><td>-</td><td></td></tr></tbody></table><h3 id="SVG-\u56FE\u6807">SVG \u56FE\u6807 <a class="header-anchor" href="#SVG-\u56FE\u6807"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5728 <code>1.2.0</code> \u4E4B\u540E\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 SVG \u56FE\u6807\u66FF\u6362\u4E86\u539F\u5148\u7684 font \u56FE\u6807\uFF0C\u4ECE\u800C\u5E26\u6765\u4E86\u4EE5\u4E0B\u4F18\u52BF\uFF1A</p><ul><li>\u5B8C\u5168\u79BB\u7EBF\u5316\u4F7F\u7528\uFF0C\u4E0D\u9700\u8981\u4ECE CDN \u4E0B\u8F7D\u5B57\u4F53\u6587\u4EF6\uFF0C\u56FE\u6807\u4E0D\u4F1A\u56E0\u4E3A\u7F51\u7EDC\u95EE\u9898\u5448\u73B0\u65B9\u5757\uFF0C\u4E5F\u65E0\u9700\u5B57\u4F53\u6587\u4EF6\u672C\u5730\u90E8\u7F72\u3002</li><li>\u5728\u4F4E\u7AEF\u8BBE\u5907\u4E0A SVG \u6709\u66F4\u597D\u7684\u6E05\u6670\u5EA6\u3002</li><li>\u652F\u6301\u591A\u8272\u56FE\u6807\u3002</li><li>\u5BF9\u4E8E\u5185\u5EFA\u56FE\u6807\u7684\u66F4\u6362\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A API\uFF0C\u800C\u4E0D\u9700\u8981\u8FDB\u884C\u6837\u5F0F\u8986\u76D6\u3002</li></ul><p>\u66F4\u591A\u8BA8\u8BBA\u53EF\u53C2\u8003\uFF1A<a href="https://github.com/ant-design/ant-design/issues/10353" target="_blank" rel="noopener noreferrer">#10353</a>\u3002</p><p>\u6240\u6709\u7684\u56FE\u6807\u90FD\u4F1A\u4EE5 <code>&lt;svg&gt;</code> \u6807\u7B7E\u6E32\u67D3\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>style</code> \u548C <code>class</code> \u8BBE\u7F6E\u56FE\u6807\u7684\u5927\u5C0F\u548C\u5355\u8272\u56FE\u6807\u7684\u989C\u8272\u3002\u4F8B\u5982\uFF1A</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message-outlined</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{fontSize: <span class="token punctuation">&#39;</span>16px<span class="token punctuation">&#39;</span>, color: <span class="token punctuation">&#39;</span>#08c<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> MessageOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      MessageOutlined<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="\u53CC\u8272\u56FE\u6807\u4E3B\u8272">\u53CC\u8272\u56FE\u6807\u4E3B\u8272 <a class="header-anchor" href="#\u53CC\u8272\u56FE\u6807\u4E3B\u8272"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5BF9\u4E8E\u53CC\u8272\u56FE\u6807\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 <code>Icon.getTwoToneColor()</code> \u548C <code>Icon.setTwoToneColor(colorString)</code> \u6765\u5168\u5C40\u8BBE\u7F6E\u56FE\u6807\u4E3B\u8272\u3002</p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getTwoToneColor<span class="token punctuation">,</span> setTwoToneColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>

<span class="token function">setTwoToneColor</span><span class="token punctuation">(</span><span class="token string">&#39;#eb2f96&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getTwoToneColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #eb2f96</span>
</code></pre><h3 id="\u81EA\u5B9A\u4E49-font-\u56FE\u6807">\u81EA\u5B9A\u4E49 font \u56FE\u6807 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-font-\u56FE\u6807"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5728 <code>1.2.0</code> \u4E4B\u540E\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>createFromIconfontCN</code> \u65B9\u6CD5\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u8C03\u7528\u5728 <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> \u4E0A\u81EA\u884C\u7BA1\u7406\u7684\u56FE\u6807\u3002</p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createFromIconfontCN <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MyIcon <span class="token operator">=</span> <span class="token function">createFromIconfontCN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">scriptUrl</span><span class="token operator">:</span> <span class="token string">&#39;//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5728 iconfont.cn \u4E0A\u751F\u6210</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyIcon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-dianzan<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>\u5176\u672C\u8D28\u4E0A\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u4F7F\u7528 <code>&lt;use&gt;</code> \u6807\u7B7E\u6765\u6E32\u67D3\u56FE\u6807\u7684\u7EC4\u4EF6\u3002</p><p><code>options</code> \u7684\u914D\u7F6E\u9879\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>extraCommonProps</td><td>\u7ED9\u6240\u6709\u7684 <code>svg</code> \u56FE\u6807 <code>&lt;Icon /&gt;</code> \u7EC4\u4EF6\u8BBE\u7F6E\u989D\u5916\u7684\u5C5E\u6027</td><td><code>{ class, attrs, props, on, style }</code></td><td>{}</td></tr><tr><td>scriptUrl</td><td><a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> \u9879\u76EE\u5728\u7EBF\u751F\u6210\u7684 <code>js</code> \u5730\u5740</td><td>string</td><td>-</td></tr></tbody></table><p>\u5728 <code>scriptUrl</code> \u90FD\u8BBE\u7F6E\u6709\u6548\u7684\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u5728\u6E32\u67D3\u524D\u4F1A\u81EA\u52A8\u5F15\u5165 <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> \u9879\u76EE\u4E2D\u7684\u56FE\u6807\u7B26\u53F7\u96C6\uFF0C\u65E0\u9700\u624B\u52A8\u5F15\u5165\u3002</p><p>\u89C1 <a href="http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&amp;helptype=code" target="_blank" rel="noopener noreferrer">iconfont.cn \u4F7F\u7528\u5E2E\u52A9</a> \u67E5\u770B\u5982\u4F55\u751F\u6210 <code>js</code> \u5730\u5740\u3002</p><h3 id="\u81EA\u5B9A\u4E49-SVG-\u56FE\u6807">\u81EA\u5B9A\u4E49 SVG \u56FE\u6807 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-SVG-\u56FE\u6807"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5982\u679C\u4F7F\u7528 <code>vue cli 3</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <a href="https://www.npmjs.com/package/vue-svg-loader" target="_blank" rel="noopener noreferrer">vue-svg-loader</a> \u6765\u5C06 <code>svg</code> \u56FE\u6807\u4F5C\u4E3A <code>Vue</code> \u7EC4\u4EF6\u5BFC\u5165\u3002\u66F4\u591A<code>vue-svg-loader</code> \u7684\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u9605 <a href="https://github.com/visualfanatic/vue-svg-loader" target="_blank" rel="noopener noreferrer">\u6587\u6863</a>\u3002</p><pre class="language-js"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> svgRule <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    svgRule<span class="token punctuation">.</span>uses<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    svgRule<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;vue-svg-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;vue-svg-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MessageSvg <span class="token keyword">from</span> <span class="token string">&#39;path/to/message.svg&#39;</span><span class="token punctuation">;</span> <span class="token comment">// &#39;*.svg&#39; \u6587\u4EF6\u7684\u8DEF\u5F84</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>MessageSvg<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p><code>Icon</code> \u4E2D\u7684 <code>component</code> \u7EC4\u4EF6\u7684\u63A5\u53D7\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EA\u8BFB\u503C</th></tr></thead><tbody><tr><td>class</td><td>\u8BA1\u7B97\u540E\u7684 <code>svg</code> \u7C7B\u540D</td><td>string</td><td>-</td></tr><tr><td>fill</td><td><code>svg</code> \u5143\u7D20\u586B\u5145\u7684\u989C\u8272</td><td>string</td><td>&#39;currentColor&#39;</td></tr><tr><td>height</td><td><code>svg</code> \u5143\u7D20\u9AD8\u5EA6</td><td>string | number</td><td>&#39;1em&#39;</td></tr><tr><td>style</td><td>\u8BA1\u7B97\u540E\u7684 <code>svg</code> \u5143\u7D20\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>width</td><td><code>svg</code> \u5143\u7D20\u5BBD\u5EA6</td><td>string | number</td><td>&#39;1em&#39;</td></tr></tbody></table>`,34),$n=[Jn];function nt(a,e,c,u,m,r){return g(),y("article",Kn,$n)}var tt=h(Xn,[["render",nt]]);const st={pageData:{title:"Icon",description:"",frontmatter:{category:"Components",type:"General",title:"Icon",cover:"https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg"},headers:[{level:2,title:"API",slug:"API",content:"Common Icon"},{level:3,title:"Common Icon",slug:"Common-Icon",content:""},{level:3,title:"Custom Icon",slug:"Custom-Icon",content:""},{level:3,title:"About SVG icons",slug:"About-SVG-icons",content:"We introduced SVG icons in version `1.2.0`, replacing font icons. This has the following benefits:"},{level:3,title:"Set TwoTone Color",slug:"Set-TwoTone-Color",content:"When using the two-tone icons, you can use the static methods `getTwoToneColor()` and `setTwoToneColor(colorString)` to spicify the primary color."},{level:3,title:"Custom Font Icon",slug:"Custom-Font-Icon",content:"We added a `createFromIconfontCN` function to help developer using their own icons deployed at [iconfont.cn](http://iconfont.cn/) in a convenient way."},{level:3,title:"Custom SVG Icon",slug:"Custom-SVG-Icon",content:"You can import SVG icon as an vue component by using `vue cli 3` and [`vue-svg-loader`](https://www.npmjs.com/package/vue-svg-loader). `vue-svg-loader`'s `options` [reference](https://github.com/visualfanatic/vue-svg-loader)."}],relativePath:"components/icon/index.en-US.md",content:`
Semantic vector graphics. Before use icons, you need to install \`@ant-design/icons-vue\` package:

\`\`\`bash
npm install --save @ant-design/icons-vue
\`\`\`

## API

### Common Icon

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| rotate | Rotate by n degrees (not working in IE9) | number | - |  |
| spin | Rotate icon with animation | boolean | false |  |
| style | Style properties of icon, like \`fontSize\` and \`color\` | CSSProperties | - |  |
| twoToneColor | Only supports the two-tone icon. Specify the primary color. | string (hex color) | - |  |

We still have three different themes for icons, icon component name is the icon name suffixed by the theme name.

\`\`\`jsx
import { StarOutlined, StarFilled, StarTwoTone } from &#39;@ant-design/icons-vue&#39;;

&lt;star-outlined /&gt;
&lt;star-filled /&gt;
&lt;star-two-tone two-tone-color=&quot;#eb2f96&quot; /&gt;
\`\`\`

### Custom Icon

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| component | The component used for the root node. | ComponentType&amp;lt;CustomIconComponentProps&gt; | - |  |
| rotate | Rotate degrees (not working in IE9) | number | - |  |
| spin | Rotate icon with animation | boolean | false |  |
| style | Style properties of icon, like \`fontSize\` and \`color\` | CSSProperties | - |  |

### About SVG icons

We introduced SVG icons in version \`1.2.0\`, replacing font icons. This has the following benefits:

- Complete offline usage of icons, without dependency on a CDN-hosted font icon file (No more empty square during downloading and no need to deploy icon font files locally either!)
- Much more display accuracy on lower-resolution screens
- The ability to choose icon color
- No need to change built-in icons with overriding styles by providing more props in component

More discussion of SVG icon reference at [#10353](https://github.com/ant-design/ant-design/issues/10353).

&gt; \u26A0\uFE0F Given the extra bundle size caused by all SVG icons imported in 1.2.0, we will provide a new API to allow developers to import icons as needed, you can track [#12011](https://github.com/ant-design/ant-design/issues/12011) for updates.
&gt;
&gt; While you wait, you can use [webpack plugin](https://github.com/Beven91/webpack-ant-icon-loader) from the community to chunk the icon file.

The properties \`theme\`, \`component\` and \`twoToneColor\` were added in \`1.2.0\`. The best practice is to pass the property \`theme\` to every \`&lt;Icon /&gt;\` component.

\`\`\`html
&lt;template&gt;
  &lt;message-outlined :style=&quot;{fontSize: &#39;16px&#39;, color: &#39;#08c&#39;}&quot; /&gt;
&lt;/template&gt;
&lt;script&gt;
  import { MessageOutlined } from &#39;@ant-design/icons-vue&#39;;
  import { defineComponent } from &#39;vue&#39;;
  export default defineComponent({
    components: {
      MessageOutlined,
    },
  });
&lt;/script&gt;
\`\`\`

All the icons will render to \`&lt;svg&gt;\`. You can still set \`style\` and \`class\` for size and color of icons.

### Set TwoTone Color

When using the two-tone icons, you can use the static methods \`getTwoToneColor()\` and \`setTwoToneColor(colorString)\` to spicify the primary color.

\`\`\`jsx
import { getTwoToneColor, setTwoToneColor } from &#39;@ant-design/icons&#39;;

setTwoToneColor(&#39;#eb2f96&#39;);
getTwoToneColor(); // #eb2f96
\`\`\`

### Custom Font Icon

We added a \`createFromIconfontCN\` function to help developer using their own icons deployed at [iconfont.cn](http://iconfont.cn/) in a convenient way.

&gt; This method is specified for [iconfont.cn](http://iconfont.cn/).

\`\`\`jsx
import { createFromIconfontCN } from &#39;@ant-design/icons-vue&#39;;
import { defineComponent } from &#39;vue&#39;;
const MyIcon = createFromIconfontCN({
  scriptUrl: &#39;//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js&#39;, // generated by iconfont.cn
});

export default defineComponent({
  setup() {
    return () =&gt; &lt;MyIcon type=&quot;icon-dianzan&quot; /&gt;;
  },
});
\`\`\`

It create a component that uses SVG sprites in essence.

The following options are available:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| extraCommonProps | Define extra properties to the component | \`{ class, attrs, props, on, style }\` | {} |
| scriptUrl | The URL generated by [iconfont.cn](http://iconfont.cn/) project. | string | - |

The property \`scriptUrl\` should be set to import the SVG sprite symbols.

See [iconfont.cn documents](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&amp;helptype=code) to learn about how to generate \`scriptUrl\`.

### Custom SVG Icon

You can import SVG icon as an vue component by using \`vue cli 3\` and [\`vue-svg-loader\`](https://www.npmjs.com/package/vue-svg-loader). \`vue-svg-loader\`&#39;s \`options\` [reference](https://github.com/visualfanatic/vue-svg-loader).

\`\`\`js
// vue.config.js
module.exports = {
  chainWebpack: config =&gt; {
    const svgRule = config.module.rule(&#39;svg&#39;);

    svgRule.uses.clear();

    svgRule.use(&#39;vue-svg-loader&#39;).loader(&#39;vue-svg-loader&#39;);
  },
};
\`\`\`

\`\`\`jsx
import { defineComponent } from &#39;vue&#39;;
import Icon from &#39;@ant-design/icons-vue&#39;;
import MessageSvg from &#39;path/to/message.svg&#39;; // path to your &#39;*.svg&#39; file.

export default defineComponent({
  setup() {
    return () =&gt; &lt;Icon type={MessageSvg} /&gt;;
  },
});
\`\`\`

The following properties are available for the component:

| Property | Description                                      | Type             | Default        |
| -------- | ------------------------------------------------ | ---------------- | -------------- |
| class    | The computed class name of the \`svg\` element     | string           | -              |
| fill     | Define the color used to paint the \`svg\` element | string           | &#39;currentColor&#39; |
| height   | The height of the \`svg\` element                  | string \\| number | &#39;1em&#39;          |
| style    | The computed style of the \`svg\` element          | CSSProperties    | -              |
| width    | The width of the \`svg\` element                   | string \\| number | &#39;1em&#39;          |
`,html:`<p>Semantic vector graphics. Before use icons, you need to install <code>@ant-design/icons-vue</code> package:</p>
<pre class="language-bash" v-pre><code><span class="token function">npm</span> <span class="token function">install</span> --save @ant-design/icons-vue
</code></pre>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Common-Icon">Common Icon <a class="header-anchor" href="#Common-Icon">
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
<td>rotate</td>
<td>Rotate by n degrees (not working in IE9)</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>spin</td>
<td>Rotate icon with animation</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>Style properties of icon, like <code>fontSize</code> and <code>color</code></td>
<td>CSSProperties</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>twoToneColor</td>
<td>Only supports the two-tone icon. Specify the primary color.</td>
<td>string (hex color)</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<p>We still have three different themes for icons, icon component name is the icon name suffixed by the theme name.</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StarOutlined<span class="token punctuation">,</span> StarFilled<span class="token punctuation">,</span> StarTwoTone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-outlined</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-filled</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-two-tone</span> <span class="token attr-name">two-tone-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#eb2f96<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre>
<h3 id="Custom-Icon">Custom Icon <a class="header-anchor" href="#Custom-Icon">
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
<td>component</td>
<td>The component used for the root node.</td>
<td>ComponentType&lt;CustomIconComponentProps&gt;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rotate</td>
<td>Rotate degrees (not working in IE9)</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>spin</td>
<td>Rotate icon with animation</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>Style properties of icon, like <code>fontSize</code> and <code>color</code></td>
<td>CSSProperties</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="About-SVG-icons">About SVG icons <a class="header-anchor" href="#About-SVG-icons">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>We introduced SVG icons in version <code>1.2.0</code>, replacing font icons. This has the following benefits:</p>
<ul>
<li>Complete offline usage of icons, without dependency on a CDN-hosted font icon file (No more empty square during downloading and no need to deploy icon font files locally either!)</li>
<li>Much more display accuracy on lower-resolution screens</li>
<li>The ability to choose icon color</li>
<li>No need to change built-in icons with overriding styles by providing more props in component</li>
</ul>
<p>More discussion of SVG icon reference at <a href="https://github.com/ant-design/ant-design/issues/10353" target="_blank" rel="noopener noreferrer">#10353</a>.</p>
<blockquote>
<p>\u26A0\uFE0F Given the extra bundle size caused by all SVG icons imported in 1.2.0, we will provide a new API to allow developers to import icons as needed, you can track <a href="https://github.com/ant-design/ant-design/issues/12011" target="_blank" rel="noopener noreferrer">#12011</a> for updates.</p>
<p>While you wait, you can use <a href="https://github.com/Beven91/webpack-ant-icon-loader" target="_blank" rel="noopener noreferrer">webpack plugin</a> from the community to chunk the icon file.</p>
</blockquote>
<p>The properties <code>theme</code>, <code>component</code> and <code>twoToneColor</code> were added in <code>1.2.0</code>. The best practice is to pass the property <code>theme</code> to every <code>&lt;Icon /&gt;</code> component.</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message-outlined</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{fontSize: <span class="token punctuation">'</span>16px<span class="token punctuation">'</span>, color: <span class="token punctuation">'</span>#08c<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> MessageOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      MessageOutlined<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<p>All the icons will render to <code>&lt;svg&gt;</code>. You can still set <code>style</code> and <code>class</code> for size and color of icons.</p>
<h3 id="Set-TwoTone-Color">Set TwoTone Color <a class="header-anchor" href="#Set-TwoTone-Color">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>When using the two-tone icons, you can use the static methods <code>getTwoToneColor()</code> and <code>setTwoToneColor(colorString)</code> to spicify the primary color.</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getTwoToneColor<span class="token punctuation">,</span> setTwoToneColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token function">setTwoToneColor</span><span class="token punctuation">(</span><span class="token string">'#eb2f96'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getTwoToneColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #eb2f96</span>
</code></pre>
<h3 id="Custom-Font-Icon">Custom Font Icon <a class="header-anchor" href="#Custom-Font-Icon">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>We added a <code>createFromIconfontCN</code> function to help developer using their own icons deployed at <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> in a convenient way.</p>
<blockquote>
<p>This method is specified for <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a>.</p>
</blockquote>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createFromIconfontCN <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MyIcon <span class="token operator">=</span> <span class="token function">createFromIconfontCN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">scriptUrl</span><span class="token operator">:</span> <span class="token string">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span><span class="token punctuation">,</span> <span class="token comment">// generated by iconfont.cn</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyIcon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-dianzan<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>It create a component that uses SVG sprites in essence.</p>
<p>The following options are available:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>extraCommonProps</td>
<td>Define extra properties to the component</td>
<td><code>{ class, attrs, props, on, style }</code></td>
<td>{}</td>
</tr>
<tr>
<td>scriptUrl</td>
<td>The URL generated by <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> project.</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<p>The property <code>scriptUrl</code> should be set to import the SVG sprite symbols.</p>
<p>See <a href="http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&amp;helptype=code" target="_blank" rel="noopener noreferrer">iconfont.cn documents</a> to learn about how to generate <code>scriptUrl</code>.</p>
<h3 id="Custom-SVG-Icon">Custom SVG Icon <a class="header-anchor" href="#Custom-SVG-Icon">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>You can import SVG icon as an vue component by using <code>vue cli 3</code> and <a href="https://www.npmjs.com/package/vue-svg-loader" target="_blank" rel="noopener noreferrer"><code>vue-svg-loader</code></a>. <code>vue-svg-loader</code>'s <code>options</code> <a href="https://github.com/visualfanatic/vue-svg-loader" target="_blank" rel="noopener noreferrer">reference</a>.</p>
<pre class="language-js" v-pre><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> svgRule <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    svgRule<span class="token punctuation">.</span>uses<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    svgRule<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'vue-svg-loader'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">'vue-svg-loader'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<pre class="language-jsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">'@ant-design/icons-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MessageSvg <span class="token keyword">from</span> <span class="token string">'path/to/message.svg'</span><span class="token punctuation">;</span> <span class="token comment">// path to your '*.svg' file.</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>MessageSvg<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The following properties are available for the component:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>class</td>
<td>The computed class name of the <code>svg</code> element</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>fill</td>
<td>Define the color used to paint the <code>svg</code> element</td>
<td>string</td>
<td>'currentColor'</td>
</tr>
<tr>
<td>height</td>
<td>The height of the <code>svg</code> element</td>
<td>string | number</td>
<td>'1em'</td>
</tr>
<tr>
<td>style</td>
<td>The computed style of the <code>svg</code> element</td>
<td>CSSProperties</td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td>The width of the <code>svg</code> element</td>
<td>string | number</td>
<td>'1em'</td>
</tr>
</tbody>
</table>
`,lastUpdated:1647932912891}},at={class:"markdown"},ot=L(`<p>Semantic vector graphics. Before use icons, you need to install <code>@ant-design/icons-vue</code> package:</p><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save @ant-design/icons-vue
</code></pre><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Common-Icon">Common Icon <a class="header-anchor" href="#Common-Icon"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>rotate</td><td>Rotate by n degrees (not working in IE9)</td><td>number</td><td>-</td><td></td></tr><tr><td>spin</td><td>Rotate icon with animation</td><td>boolean</td><td>false</td><td></td></tr><tr><td>style</td><td>Style properties of icon, like <code>fontSize</code> and <code>color</code></td><td>CSSProperties</td><td>-</td><td></td></tr><tr><td>twoToneColor</td><td>Only supports the two-tone icon. Specify the primary color.</td><td>string (hex color)</td><td>-</td><td></td></tr></tbody></table><p>We still have three different themes for icons, icon component name is the icon name suffixed by the theme name.</p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StarOutlined<span class="token punctuation">,</span> StarFilled<span class="token punctuation">,</span> StarTwoTone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-outlined</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-filled</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>star-two-tone</span> <span class="token attr-name">two-tone-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#eb2f96<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="Custom-Icon">Custom Icon <a class="header-anchor" href="#Custom-Icon"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>component</td><td>The component used for the root node.</td><td>ComponentType&lt;CustomIconComponentProps&gt;</td><td>-</td><td></td></tr><tr><td>rotate</td><td>Rotate degrees (not working in IE9)</td><td>number</td><td>-</td><td></td></tr><tr><td>spin</td><td>Rotate icon with animation</td><td>boolean</td><td>false</td><td></td></tr><tr><td>style</td><td>Style properties of icon, like <code>fontSize</code> and <code>color</code></td><td>CSSProperties</td><td>-</td><td></td></tr></tbody></table><h3 id="About-SVG-icons">About SVG icons <a class="header-anchor" href="#About-SVG-icons"><span aria-hidden="true" class="anchor">#</span></a></h3><p>We introduced SVG icons in version <code>1.2.0</code>, replacing font icons. This has the following benefits:</p><ul><li>Complete offline usage of icons, without dependency on a CDN-hosted font icon file (No more empty square during downloading and no need to deploy icon font files locally either!)</li><li>Much more display accuracy on lower-resolution screens</li><li>The ability to choose icon color</li><li>No need to change built-in icons with overriding styles by providing more props in component</li></ul><p>More discussion of SVG icon reference at <a href="https://github.com/ant-design/ant-design/issues/10353" target="_blank" rel="noopener noreferrer">#10353</a>.</p><blockquote><p>\u26A0\uFE0F Given the extra bundle size caused by all SVG icons imported in 1.2.0, we will provide a new API to allow developers to import icons as needed, you can track <a href="https://github.com/ant-design/ant-design/issues/12011" target="_blank" rel="noopener noreferrer">#12011</a> for updates.</p><p>While you wait, you can use <a href="https://github.com/Beven91/webpack-ant-icon-loader" target="_blank" rel="noopener noreferrer">webpack plugin</a> from the community to chunk the icon file.</p></blockquote><p>The properties <code>theme</code>, <code>component</code> and <code>twoToneColor</code> were added in <code>1.2.0</code>. The best practice is to pass the property <code>theme</code> to every <code>&lt;Icon /&gt;</code> component.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message-outlined</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{fontSize: <span class="token punctuation">&#39;</span>16px<span class="token punctuation">&#39;</span>, color: <span class="token punctuation">&#39;</span>#08c<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> MessageOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      MessageOutlined<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>All the icons will render to <code>&lt;svg&gt;</code>. You can still set <code>style</code> and <code>class</code> for size and color of icons.</p><h3 id="Set-TwoTone-Color">Set TwoTone Color <a class="header-anchor" href="#Set-TwoTone-Color"><span aria-hidden="true" class="anchor">#</span></a></h3><p>When using the two-tone icons, you can use the static methods <code>getTwoToneColor()</code> and <code>setTwoToneColor(colorString)</code> to spicify the primary color.</p><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getTwoToneColor<span class="token punctuation">,</span> setTwoToneColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons&#39;</span><span class="token punctuation">;</span>

<span class="token function">setTwoToneColor</span><span class="token punctuation">(</span><span class="token string">&#39;#eb2f96&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getTwoToneColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #eb2f96</span>
</code></pre><h3 id="Custom-Font-Icon">Custom Font Icon <a class="header-anchor" href="#Custom-Font-Icon"><span aria-hidden="true" class="anchor">#</span></a></h3><p>We added a <code>createFromIconfontCN</code> function to help developer using their own icons deployed at <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> in a convenient way.</p><blockquote><p>This method is specified for <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a>.</p></blockquote><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createFromIconfontCN <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MyIcon <span class="token operator">=</span> <span class="token function">createFromIconfontCN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">scriptUrl</span><span class="token operator">:</span> <span class="token string">&#39;//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// generated by iconfont.cn</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyIcon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-dianzan<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>It create a component that uses SVG sprites in essence.</p><p>The following options are available:</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>extraCommonProps</td><td>Define extra properties to the component</td><td><code>{ class, attrs, props, on, style }</code></td><td>{}</td></tr><tr><td>scriptUrl</td><td>The URL generated by <a href="http://iconfont.cn/" target="_blank" rel="noopener noreferrer">iconfont.cn</a> project.</td><td>string</td><td>-</td></tr></tbody></table><p>The property <code>scriptUrl</code> should be set to import the SVG sprite symbols.</p><p>See <a href="http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&amp;helptype=code" target="_blank" rel="noopener noreferrer">iconfont.cn documents</a> to learn about how to generate <code>scriptUrl</code>.</p><h3 id="Custom-SVG-Icon">Custom SVG Icon <a class="header-anchor" href="#Custom-SVG-Icon"><span aria-hidden="true" class="anchor">#</span></a></h3><p>You can import SVG icon as an vue component by using <code>vue cli 3</code> and <a href="https://www.npmjs.com/package/vue-svg-loader" target="_blank" rel="noopener noreferrer"><code>vue-svg-loader</code></a>. <code>vue-svg-loader</code>&#39;s <code>options</code> <a href="https://github.com/visualfanatic/vue-svg-loader" target="_blank" rel="noopener noreferrer">reference</a>.</p><pre class="language-js"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> svgRule <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    svgRule<span class="token punctuation">.</span>uses<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    svgRule<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;vue-svg-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;vue-svg-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MessageSvg <span class="token keyword">from</span> <span class="token string">&#39;path/to/message.svg&#39;</span><span class="token punctuation">;</span> <span class="token comment">// path to your &#39;*.svg&#39; file.</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>MessageSvg<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>The following properties are available for the component:</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>class</td><td>The computed class name of the <code>svg</code> element</td><td>string</td><td>-</td></tr><tr><td>fill</td><td>Define the color used to paint the <code>svg</code> element</td><td>string</td><td>&#39;currentColor&#39;</td></tr><tr><td>height</td><td>The height of the <code>svg</code> element</td><td>string | number</td><td>&#39;1em&#39;</td></tr><tr><td>style</td><td>The computed style of the <code>svg</code> element</td><td>CSSProperties</td><td>-</td></tr><tr><td>width</td><td>The width of the <code>svg</code> element</td><td>string | number</td><td>&#39;1em&#39;</td></tr></tbody></table>`,35),et=[ot];function pt(a,e,c,u,m,r){return g(),y("article",at,et)}var ct=h(st,[["render",pt]]);const lt=f({CN:tt,US:ct,components:{IconDisplay:_,Basic:Mn,Custom:_n,Iconfont:Bn,Twotone:Hn}});function ut(a,e,c,u,m,r){const l=o("icon-display"),i=o("basic"),d=o("twotone"),I=o("custom"),C=o("iconfont"),w=o("demo-sort");return g(),y(sn,null,[s(l),s(w,null,{default:p(()=>[s(i),s(d),s(I),s(C)]),_:1})],64)}var kt=h(lt,[["render",ut]]);export{kt as default};
