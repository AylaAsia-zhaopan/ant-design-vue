import{d as h,r as I,_ as A,b9 as y,a as e,k as C,l as b,w as o,h as p,f as s,e as n,aP as S,P as W,b as Z,x as j,B as P,C as N,bn as K,t as V,bo as D,z as Q,s as B}from"./index.d2642c4c.js";import{U as f}from"./UploadOutlined.4befef2d.js";import{I as O}from"./InboxOutlined.8e9bc4f8.js";import{S as E}from"./StarOutlined.459eab84.js";const T=h({components:{UploadOutlined:f},setup(){const a=c=>{c.file.status!=="uploading"&&console.log(c.file,c.fileList),c.file.status==="done"?y.success(`${c.file.name} file uploaded successfully`):c.file.status==="error"&&y.error(`${c.file.name} file upload failed.`)};return{fileList:I([]),headers:{authorization:"authorization-text"},handleChange:a}}}),M=s(" Click to Upload "),_=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("headers"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"info"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"authorization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("headers"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"info"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"authorization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function $(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"Classic mode. File selection dialog pops up when upload button is clicked.",cn:"\u7ECF\u5178\u6B3E\u5F0F\uFF0C\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7ECF\u5178\u6B3E\u5F0F\uFF0C\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Classic mode. File selection dialog pops up when upload button is clicked.</p>
`,order:0,title:{"zh-CN":"\u70B9\u51FB\u4E0A\u4F20","en-US":"Upload by clicking"},relativePath:"components/upload/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPGEtYnV0dG9uPgogICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICBDbGljayB0byBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IFVwbG9hZENoYW5nZVBhcmFtIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBVcGxvYWRPdXRsaW5lZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZm86IFVwbG9hZENoYW5nZVBhcmFtKSA9PiB7CiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7CiAgICAgIH0KICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdkb25lJykgewogICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlgKTsKICAgICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7CiAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWQgZmFpbGVkLmApOwogICAgICB9CiAgICB9OwoKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPGEtYnV0dG9uPgogICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICBDbGljayB0byBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXBsb2FkT3V0bGluZWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBpbmZvID0+IHsKICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTsKICAgICAgfQoKICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdkb25lJykgewogICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlgKTsKICAgICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7CiAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWQgZmFpbGVkLmApOwogICAgICB9CiAgICB9OwoKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:a.headers,onChange:a.handleChange},{default:o(()=>[p(i,null,{default:o(()=>[p(l),M]),_:1})]),_:1},8,["file-list","headers","onChange"])]),htmlCode:o(()=>[_]),jsVersionHtml:o(()=>[q]),_:1},8,["jsfiddle"])}var nn=A(T,[["render",$]]);function sn(a,t){const c=new FileReader;c.addEventListener("load",()=>t(c.result)),c.readAsDataURL(a)}const an=h({components:{LoadingOutlined:S,PlusOutlined:W},setup(){const a=I([]),t=I(!1),c=I("");return{fileList:a,loading:t,imageUrl:c,handleChange:k=>{if(k.file.status==="uploading"){t.value=!0;return}k.file.status==="done"&&sn(k.file.originFileObj,l=>{c.value=l,t.value=!1}),k.file.status==="error"&&(t.value=!1,y.error("upload error"))},beforeUpload:k=>{const l=k.type==="image/jpeg"||k.type==="image/png";l||y.error("You can only upload JPG file!");const i=k.size/1024/1024<2;return i||y.error("Image must smaller than 2MB!"),l&&i}}}}),tn=["src"],on={key:1},en=n("div",{class:"ant-upload-text"},"Upload",-1),pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("avatar"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture-card"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("avatar-uploader"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-upload-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imageUrl"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imageUrl"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("avatar"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("loading-outlined")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("loading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("loading-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plus-outlined")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("plus-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ant-upload-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" PlusOutlined"),n("span",{class:"token punctuation"},","),s(" LoadingOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam"),n("span",{class:"token punctuation"},","),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token operator"},":"),s(" Blob"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"base64Url"),n("span",{class:"token operator"},":"),s(" string")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" reader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'load'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("reader"),n("span",{class:"token punctuation"},"."),s("result "),n("span",{class:"token keyword"},"as"),s(" string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    LoadingOutlined`),n("span",{class:"token punctuation"},","),s(`
    PlusOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" loading "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" imageUrl "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"info"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Get this url from response in real world."),s(`
        `),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("originFileObj"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"base64Url"),n("span",{class:"token operator"},":"),s(" string")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          imageUrl`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" base64Url"),n("span",{class:"token punctuation"},";"),s(`
          loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload error'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" beforeUpload "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" isJpgOrPng "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'image/jpeg'"),s(),n("span",{class:"token operator"},"||"),s(" file"),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isJpgOrPng"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'You can only upload JPG file!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" isLt2M "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"1024"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"1024"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isLt2M"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Image must smaller than 2MB!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" isJpgOrPng "),n("span",{class:"token operator"},"&&"),s(" isLt2M"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      loading`),n("span",{class:"token punctuation"},","),s(`
      imageUrl`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".avatar-uploader > .ant-upload"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 128px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 128px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".ant-upload-select-picture-card i"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 32px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #999"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".ant-upload-select-picture-card .ant-upload-text"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #666"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("avatar"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture-card"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("avatar-uploader"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-upload-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("false"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imageUrl"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("imageUrl"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("avatar"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("loading-outlined")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("loading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("loading-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plus-outlined")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("plus-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ant-upload-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" PlusOutlined"),n("span",{class:"token punctuation"},","),s(" LoadingOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("img"),n("span",{class:"token punctuation"},","),s(" callback")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" reader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'load'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("reader"),n("span",{class:"token punctuation"},"."),s("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    LoadingOutlined`),n("span",{class:"token punctuation"},","),s(`
    PlusOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" loading "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" imageUrl "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"info"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Get this url from response in real world."),s(`
        `),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("originFileObj"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token parameter"},"base64Url"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          imageUrl`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" base64Url"),n("span",{class:"token punctuation"},";"),s(`
          loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        loading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload error'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" isJpgOrPng "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'image/jpeg'"),s(),n("span",{class:"token operator"},"||"),s(" file"),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isJpgOrPng"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'You can only upload JPG file!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"const"),s(" isLt2M "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"1024"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"1024"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isLt2M"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Image must smaller than 2MB!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"return"),s(" isJpgOrPng "),n("span",{class:"token operator"},"&&"),s(" isLt2M"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      loading`),n("span",{class:"token punctuation"},","),s(`
      imageUrl`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".avatar-uploader > .ant-upload"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 128px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 128px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".ant-upload-select-picture-card i"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 32px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #999"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".ant-upload-select-picture-card .ant-upload-text"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #666"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function ln(a,t,c,u,r,k){const l=e("loading-outlined"),i=e("plus-outlined"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"Click to upload user's avatar, and validate size and format of picture with `beforeUpload`.",cn:"\u70B9\u51FB\u4E0A\u4F20\u7528\u6237\u5934\u50CF\uFF0C\u5E76\u4F7F\u7528 `beforeUpload` \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB\u4E0A\u4F20\u7528\u6237\u5934\u50CF\uFF0C\u5E76\u4F7F\u7528 <code>beforeUpload</code> \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002</p>
<blockquote>
<p><code>beforeUpload</code> \u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A Promise \u4EE5\u652F\u6301\u5F02\u6B65\u5904\u7406\uFF0C\u5982\u670D\u52A1\u7AEF\u6821\u9A8C\u7B49\uFF1A\u53EF\u53C2\u8003react\u7248\u672C<a href="http://react-component.github.io/upload/examples/beforeUpload.html" target="_blank" rel="noopener noreferrer">\u793A\u4F8B</a>\u3002</p>
</blockquote>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Click to upload user's avatar, and validate size and format of picture with <code>beforeUpload</code>.</p>
<blockquote>
<p>The return value of function <code>beforeUpload</code> can be a Promise to check asynchronously. <a href="http://react-component.github.io/upload/examples/beforeUpload.html" target="_blank" rel="noopener noreferrer">demo</a></p>
</blockquote>
`,order:1,title:{"zh-CN":"\u7528\u6237\u5934\u50CF","en-US":"Avatar"},relativePath:"components/upload/demo/avatar.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iYXZhdGFyIgogICAgbGlzdC10eXBlPSJwaWN0dXJlLWNhcmQiCiAgICBjbGFzcz0iYXZhdGFyLXVwbG9hZGVyIgogICAgOnNob3ctdXBsb2FkLWxpc3Q9ImZhbHNlIgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6YmVmb3JlLXVwbG9hZD0iYmVmb3JlVXBsb2FkIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxpbWcgdi1pZj0iaW1hZ2VVcmwiIDpzcmM9ImltYWdlVXJsIiBhbHQ9ImF2YXRhciIgLz4KICAgIDxkaXYgdi1lbHNlPgogICAgICA8bG9hZGluZy1vdXRsaW5lZCB2LWlmPSJsb2FkaW5nIj48L2xvYWRpbmctb3V0bGluZWQ+CiAgICAgIDxwbHVzLW91dGxpbmVkIHYtZWxzZT48L3BsdXMtb3V0bGluZWQ+CiAgICAgIDxkaXYgY2xhc3M9ImFudC11cGxvYWQtdGV4dCI+VXBsb2FkPC9kaXY+CiAgICA8L2Rpdj4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgUGx1c091dGxpbmVkLCBMb2FkaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgVXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZFByb3BzIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwoKZnVuY3Rpb24gZ2V0QmFzZTY0KGltZzogQmxvYiwgY2FsbGJhY2s6IChiYXNlNjRVcmw6IHN0cmluZykgPT4gdm9pZCkgewogIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7CiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0IGFzIHN0cmluZykpOwogIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBMb2FkaW5nT3V0bGluZWQsCiAgICBQbHVzT3V0bGluZWQsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIGNvbnN0IGxvYWRpbmcgPSByZWY8Ym9vbGVhbj4oZmFsc2UpOwogICAgY29uc3QgaW1hZ2VVcmwgPSByZWY8c3RyaW5nPignJyk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZm86IFVwbG9hZENoYW5nZVBhcmFtKSA9PiB7CiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykgewogICAgICAgIGxvYWRpbmcudmFsdWUgPSB0cnVlOwogICAgICAgIHJldHVybjsKICAgICAgfQogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7CiAgICAgICAgLy8gR2V0IHRoaXMgdXJsIGZyb20gcmVzcG9uc2UgaW4gcmVhbCB3b3JsZC4KICAgICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIChiYXNlNjRVcmw6IHN0cmluZykgPT4gewogICAgICAgICAgaW1hZ2VVcmwudmFsdWUgPSBiYXNlNjRVcmw7CiAgICAgICAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2U7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHsKICAgICAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2U7CiAgICAgICAgbWVzc2FnZS5lcnJvcigndXBsb2FkIGVycm9yJyk7CiAgICAgIH0KICAgIH07CgogICAgY29uc3QgYmVmb3JlVXBsb2FkID0gKGZpbGU6IFVwbG9hZFByb3BzWydmaWxlTGlzdCddW251bWJlcl0pID0+IHsKICAgICAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZyc7CiAgICAgIGlmICghaXNKcGdPclBuZykgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1lvdSBjYW4gb25seSB1cGxvYWQgSlBHIGZpbGUhJyk7CiAgICAgIH0KICAgICAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyOwogICAgICBpZiAoIWlzTHQyTSkgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiEnKTsKICAgICAgfQogICAgICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBsb2FkaW5nLAogICAgICBpbWFnZVVybCwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBiZWZvcmVVcGxvYWQsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlPgouYXZhdGFyLXVwbG9hZGVyID4gLmFudC11cGxvYWQgewogIHdpZHRoOiAxMjhweDsKICBoZWlnaHQ6IDEyOHB4Owp9Ci5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQgaSB7CiAgZm9udC1zaXplOiAzMnB4OwogIGNvbG9yOiAjOTk5Owp9CgouYW50LXVwbG9hZC1zZWxlY3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLXRleHQgewogIG1hcmdpbi10b3A6IDhweDsKICBjb2xvcjogIzY2NjsKfQo8L3N0eWxlPgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iYXZhdGFyIgogICAgbGlzdC10eXBlPSJwaWN0dXJlLWNhcmQiCiAgICBjbGFzcz0iYXZhdGFyLXVwbG9hZGVyIgogICAgOnNob3ctdXBsb2FkLWxpc3Q9ImZhbHNlIgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6YmVmb3JlLXVwbG9hZD0iYmVmb3JlVXBsb2FkIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxpbWcgdi1pZj0iaW1hZ2VVcmwiIDpzcmM9ImltYWdlVXJsIiBhbHQ9ImF2YXRhciIgLz4KICAgIDxkaXYgdi1lbHNlPgogICAgICA8bG9hZGluZy1vdXRsaW5lZCB2LWlmPSJsb2FkaW5nIj48L2xvYWRpbmctb3V0bGluZWQ+CiAgICAgIDxwbHVzLW91dGxpbmVkIHYtZWxzZT48L3BsdXMtb3V0bGluZWQ+CiAgICAgIDxkaXYgY2xhc3M9ImFudC11cGxvYWQtdGV4dCI+VXBsb2FkPC9kaXY+CiAgICA8L2Rpdj4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBQbHVzT3V0bGluZWQsIExvYWRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7CiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsKICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpKTsKICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWcpOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIExvYWRpbmdPdXRsaW5lZCwKICAgIFBsdXNPdXRsaW5lZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIGNvbnN0IGxvYWRpbmcgPSByZWYoZmFsc2UpOwogICAgY29uc3QgaW1hZ2VVcmwgPSByZWYoJycpOwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGluZm8gPT4gewogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpIHsKICAgICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHsKICAgICAgICAvLyBHZXQgdGhpcyB1cmwgZnJvbSByZXNwb25zZSBpbiByZWFsIHdvcmxkLgogICAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiwgYmFzZTY0VXJsID0+IHsKICAgICAgICAgIGltYWdlVXJsLnZhbHVlID0gYmFzZTY0VXJsOwogICAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICAgIH0pOwogICAgICB9CgogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykgewogICAgICAgIGxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgICBtZXNzYWdlLmVycm9yKCd1cGxvYWQgZXJyb3InKTsKICAgICAgfQogICAgfTsKCiAgICBjb25zdCBiZWZvcmVVcGxvYWQgPSBmaWxlID0+IHsKICAgICAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZyc7CgogICAgICBpZiAoIWlzSnBnT3JQbmcpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKCdZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRyBmaWxlIScpOwogICAgICB9CgogICAgICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7CgogICAgICBpZiAoIWlzTHQyTSkgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiEnKTsKICAgICAgfQoKICAgICAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgbG9hZGluZywKICAgICAgaW1hZ2VVcmwsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgYmVmb3JlVXBsb2FkLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+Ci5hdmF0YXItdXBsb2FkZXIgPiAuYW50LXVwbG9hZCB7CiAgd2lkdGg6IDEyOHB4OwogIGhlaWdodDogMTI4cHg7Cn0KLmFudC11cGxvYWQtc2VsZWN0LXBpY3R1cmUtY2FyZCBpIHsKICBmb250LXNpemU6IDMycHg7CiAgY29sb3I6ICM5OTk7Cn0KCi5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtdGV4dCB7CiAgbWFyZ2luLXRvcDogOHB4OwogIGNvbG9yOiAjNjY2Owp9Cjwvc3R5bGU+"}},{default:o(()=>[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":a.beforeUpload,onChange:a.handleChange},{default:o(()=>[a.imageUrl?(C(),Z("img",{key:0,src:a.imageUrl,alt:"avatar"},null,8,tn)):(C(),Z("div",on,[a.loading?(C(),b(l,{key:0})):(C(),b(i,{key:1})),en]))]),_:1},8,["file-list","before-upload","onChange"])]),htmlCode:o(()=>[pn]),jsVersionHtml:o(()=>[cn]),_:1},8,["jsfiddle"])}var un=A(an,[["render",ln]]);const kn=h({components:{UploadOutlined:f},setup(){return{fileList:I([{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),handleChange:({file:c,fileList:u})=>{c.status!=="uploading"&&console.log(c,u)}}}}),rn=s(" Upload "),dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam"),n("span",{class:"token punctuation"},","),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// custom error message to show"),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// custom error message to show"),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" file"),n("span",{class:"token punctuation"},","),s(" fileList "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},","),s(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// custom error message to show"),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// custom error message to show"),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
      file`),n("span",{class:"token punctuation"},","),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},","),s(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function mn(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"Use `fileList` for uploaded files when page init.",cn:"\u4F7F\u7528 `fileList` \u8BBE\u7F6E\u5DF2\u4E0A\u4F20\u7684\u5185\u5BB9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>fileList</code> \u8BBE\u7F6E\u5DF2\u4E0A\u4F20\u7684\u5185\u5BB9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>fileList</code> for uploaded files when page init.</p>
`,order:2,title:{"zh-CN":"\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868","en-US":"Default Files"},relativePath:"components/upload/demo/defaultFileList.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZCB2LW1vZGVsOmZpbGUtbGlzdD0iZmlsZUxpc3QiIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2Ij4KICAgIDxhLWJ1dHRvbj4KICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgVXBsb2FkCiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oWwogICAgICB7CiAgICAgICAgdWlkOiAnMScsCiAgICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS94eHgucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzInLAogICAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS95eXkucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzMnLAogICAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgICB9LAogICAgXSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgZmlsZSwgZmlsZUxpc3QgfTogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgaWYgKGZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGZpbGUsIGZpbGVMaXN0KTsKICAgICAgfQogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZCB2LW1vZGVsOmZpbGUtbGlzdD0iZmlsZUxpc3QiIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2Ij4KICAgIDxhLWJ1dHRvbj4KICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgVXBsb2FkCiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWYoW3sKICAgICAgdWlkOiAnMScsCiAgICAgIG5hbWU6ICd4eHgucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsCiAgICAgIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20veHh4LnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJzInLAogICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS95eXkucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnMycsCiAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgc3RhdHVzOiAnZXJyb3InLAogICAgICByZXNwb25zZTogJ1NlcnZlciBFcnJvciA1MDAnLAogICAgICAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93CiAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgfV0pOwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7CiAgICAgIGZpbGUsCiAgICAgIGZpbGVMaXN0LAogICAgfSkgPT4gewogICAgICBpZiAoZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coZmlsZSwgZmlsZUxpc3QpOwogICAgICB9CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},{default:o(()=>[p(i,null,{default:o(()=>[p(l),rn]),_:1})]),_:1},8,["file-list"])]),htmlCode:o(()=>[dn]),jsVersionHtml:o(()=>[gn]),_:1},8,["jsfiddle"])}var Cn=A(kn,[["render",mn]]);function In(a){return new Promise((t,c)=>{const u=new FileReader;u.readAsDataURL(a),u.onload=()=>t(u.result),u.onerror=r=>c(r)})}const bn=h({components:{PlusOutlined:W},setup(){const a=I(!1),t=I(""),c=I(""),u=I([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-xxx",percent:50,name:"image.png",status:"uploading",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}]);return{previewVisible:a,previewImage:t,fileList:u,handleCancel:()=>{a.value=!1,c.value=""},handlePreview:async l=>{!l.url&&!l.preview&&(l.preview=await In(l.originFileObj)),t.value=l.url||l.preview,a.value=!0,c.value=l.name||l.url.substring(l.url.lastIndexOf("/")+1)},previewTitle:c}}}),An={class:"clearfix"},hn={key:0},yn=n("div",{style:{"margin-top":"8px"}},"Upload",-1),fn=["src"],wn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture-card"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@preview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handlePreview"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList.length < 8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plus-outlined")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal")]),s(),n("span",{class:"token attr-name"},":visible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("previewVisible"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("previewTitle"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("null"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleCancel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("example"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("previewImage"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" PlusOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"file"),n("span",{class:"token operator"},":"),s(" File")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s(" reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" reader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("reader"),n("span",{class:"token punctuation"},"."),s("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onerror"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"error"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    PlusOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" previewVisible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" previewImage "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" previewTitle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-4'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-xxx'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"percent"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-5'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleCancel"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      previewVisible`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
      previewTitle`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" handlePreview "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("file"),n("span",{class:"token punctuation"},"."),s("url "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("file"),n("span",{class:"token punctuation"},"."),s("preview"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        file`),n("span",{class:"token punctuation"},"."),s("preview "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("originFileObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      previewImage`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("url "),n("span",{class:"token operator"},"||"),s(" file"),n("span",{class:"token punctuation"},"."),s("preview"),n("span",{class:"token punctuation"},";"),s(`
      previewVisible`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
      previewTitle`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"||"),s(" file"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lastIndexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      previewVisible`),n("span",{class:"token punctuation"},","),s(`
      previewImage`),n("span",{class:"token punctuation"},","),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleCancel`),n("span",{class:"token punctuation"},","),s(`
      handlePreview`),n("span",{class:"token punctuation"},","),s(`
      previewTitle`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token comment"},"/* you can make up upload button and sample style by using stylesheets */"),s(`
`),n("span",{class:"token selector"},".ant-upload-select-picture-card i"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 32px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #999"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".ant-upload-select-picture-card .ant-upload-text"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #666"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture-card"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@preview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handlePreview"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList.length < 8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plus-outlined")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-modal")]),s(),n("span",{class:"token attr-name"},":visible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("previewVisible"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("previewTitle"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("null"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleCancel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("example"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("previewImage"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-modal")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" PlusOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s(" reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" reader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("reader"),n("span",{class:"token punctuation"},"."),s("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onerror"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"error"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    PlusOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" previewVisible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" previewImage "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" previewTitle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-3'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-4'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-xxx'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"percent"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-5'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleCancel"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      previewVisible`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
      previewTitle`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handlePreview"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("file"),n("span",{class:"token punctuation"},"."),s("url "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("file"),n("span",{class:"token punctuation"},"."),s("preview"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        file`),n("span",{class:"token punctuation"},"."),s("preview "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("originFileObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      previewImage`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("url "),n("span",{class:"token operator"},"||"),s(" file"),n("span",{class:"token punctuation"},"."),s("preview"),n("span",{class:"token punctuation"},";"),s(`
      previewVisible`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
      previewTitle`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"||"),s(" file"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lastIndexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      previewVisible`),n("span",{class:"token punctuation"},","),s(`
      previewImage`),n("span",{class:"token punctuation"},","),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleCancel`),n("span",{class:"token punctuation"},","),s(`
      handlePreview`),n("span",{class:"token punctuation"},","),s(`
      previewTitle`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token comment"},"/* you can make up upload button and sample style by using stylesheets */"),s(`
`),n("span",{class:"token selector"},".ant-upload-select-picture-card i"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 32px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #999"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".ant-upload-select-picture-card .ant-upload-text"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #666"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function vn(a,t,c,u,r,k){const l=e("plus-outlined"),i=e("a-upload"),d=e("a-modal"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.",cn:"\u7528\u6237\u53EF\u4EE5\u4E0A\u4F20\u56FE\u7247\u5E76\u5728\u5217\u8868\u4E2D\u663E\u793A\u7F29\u7565\u56FE\u3002\u5F53\u4E0A\u4F20\u7167\u7247\u6570\u5230\u8FBE\u9650\u5236\u540E\uFF0C\u4E0A\u4F20\u6309\u94AE\u6D88\u5931\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7528\u6237\u53EF\u4EE5\u4E0A\u4F20\u56FE\u7247\u5E76\u5728\u5217\u8868\u4E2D\u663E\u793A\u7F29\u7565\u56FE\u3002\u5F53\u4E0A\u4F20\u7167\u7247\u6570\u5230\u8FBE\u9650\u5236\u540E\uFF0C\u4E0A\u4F20\u6309\u94AE\u6D88\u5931\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.</p>
`,order:3,title:{"zh-CN":"\u7167\u7247\u5899","en-US":"Pictures Wall"},relativePath:"components/upload/demo/picture-card.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNsZWFyZml4Ij4KICAgIDxhLXVwbG9hZAogICAgICB2LW1vZGVsOmZpbGUtbGlzdD0iZmlsZUxpc3QiCiAgICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUtY2FyZCIKICAgICAgQHByZXZpZXc9ImhhbmRsZVByZXZpZXciCiAgICA+CiAgICAgIDxkaXYgdi1pZj0iZmlsZUxpc3QubGVuZ3RoIDwgOCI+CiAgICAgICAgPHBsdXMtb3V0bGluZWQgLz4KICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiA4cHgiPlVwbG9hZDwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YS1tb2RhbCA6dmlzaWJsZT0icHJldmlld1Zpc2libGUiIDp0aXRsZT0icHJldmlld1RpdGxlIiA6Zm9vdGVyPSJudWxsIiBAY2FuY2VsPSJoYW5kbGVDYW5jZWwiPgogICAgICA8aW1nIGFsdD0iZXhhbXBsZSIgc3R5bGU9IndpZHRoOiAxMDAlIiA6c3JjPSJwcmV2aWV3SW1hZ2UiIC8+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CgpmdW5jdGlvbiBnZXRCYXNlNjQoZmlsZTogRmlsZSkgewogIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpOwogICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7CiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTsKICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTsKICB9KTsKfQoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBQbHVzT3V0bGluZWQsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IHByZXZpZXdWaXNpYmxlID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IHByZXZpZXdJbWFnZSA9IHJlZignJyk7CiAgICBjb25zdCBwcmV2aWV3VGl0bGUgPSByZWYoJycpOwoKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmPFVwbG9hZFByb3BzWydmaWxlTGlzdCddPihbCiAgICAgIHsKICAgICAgICB1aWQ6ICctMScsCiAgICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB1aWQ6ICctMicsCiAgICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB1aWQ6ICctMycsCiAgICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB1aWQ6ICctNCcsCiAgICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB1aWQ6ICcteHh4JywKICAgICAgICBwZXJjZW50OiA1MCwKICAgICAgICBuYW1lOiAnaW1hZ2UucG5nJywKICAgICAgICBzdGF0dXM6ICd1cGxvYWRpbmcnLAogICAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnLTUnLAogICAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICAgIHN0YXR1czogJ2Vycm9yJywKICAgICAgfSwKICAgIF0pOwoKICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHsKICAgICAgcHJldmlld1Zpc2libGUudmFsdWUgPSBmYWxzZTsKICAgICAgcHJldmlld1RpdGxlLnZhbHVlID0gJyc7CiAgICB9OwogICAgY29uc3QgaGFuZGxlUHJldmlldyA9IGFzeW5jIChmaWxlOiBVcGxvYWRQcm9wc1snZmlsZUxpc3QnXVtudW1iZXJdKSA9PiB7CiAgICAgIGlmICghZmlsZS51cmwgJiYgIWZpbGUucHJldmlldykgewogICAgICAgIGZpbGUucHJldmlldyA9IChhd2FpdCBnZXRCYXNlNjQoZmlsZS5vcmlnaW5GaWxlT2JqKSkgYXMgc3RyaW5nOwogICAgICB9CiAgICAgIHByZXZpZXdJbWFnZS52YWx1ZSA9IGZpbGUudXJsIHx8IGZpbGUucHJldmlldzsKICAgICAgcHJldmlld1Zpc2libGUudmFsdWUgPSB0cnVlOwogICAgICBwcmV2aWV3VGl0bGUudmFsdWUgPSBmaWxlLm5hbWUgfHwgZmlsZS51cmwuc3Vic3RyaW5nKGZpbGUudXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgcHJldmlld1Zpc2libGUsCiAgICAgIHByZXZpZXdJbWFnZSwKICAgICAgZmlsZUxpc3QsCiAgICAgIGhhbmRsZUNhbmNlbCwKICAgICAgaGFuZGxlUHJldmlldywKICAgICAgcHJldmlld1RpdGxlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+CjxzdHlsZT4KLyogeW91IGNhbiBtYWtlIHVwIHVwbG9hZCBidXR0b24gYW5kIHNhbXBsZSBzdHlsZSBieSB1c2luZyBzdHlsZXNoZWV0cyAqLwouYW50LXVwbG9hZC1zZWxlY3QtcGljdHVyZS1jYXJkIGkgewogIGZvbnQtc2l6ZTogMzJweDsKICBjb2xvcjogIzk5OTsKfQoKLmFudC11cGxvYWQtc2VsZWN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC10ZXh0IHsKICBtYXJnaW4tdG9wOiA4cHg7CiAgY29sb3I6ICM2NjY7Cn0KPC9zdHlsZT4K",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNsZWFyZml4Ij4KICAgIDxhLXVwbG9hZAogICAgICB2LW1vZGVsOmZpbGUtbGlzdD0iZmlsZUxpc3QiCiAgICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUtY2FyZCIKICAgICAgQHByZXZpZXc9ImhhbmRsZVByZXZpZXciCiAgICA+CiAgICAgIDxkaXYgdi1pZj0iZmlsZUxpc3QubGVuZ3RoIDwgOCI+CiAgICAgICAgPHBsdXMtb3V0bGluZWQgLz4KICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiA4cHgiPlVwbG9hZDwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YS1tb2RhbCA6dmlzaWJsZT0icHJldmlld1Zpc2libGUiIDp0aXRsZT0icHJldmlld1RpdGxlIiA6Zm9vdGVyPSJudWxsIiBAY2FuY2VsPSJoYW5kbGVDYW5jZWwiPgogICAgICA8aW1nIGFsdD0iZXhhbXBsZSIgc3R5bGU9IndpZHRoOiAxMDAlIiA6c3JjPSJwcmV2aWV3SW1hZ2UiIC8+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsKICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7CiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTsKCiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTsKCiAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7CiAgfSk7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgUGx1c091dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgcHJldmlld1Zpc2libGUgPSByZWYoZmFsc2UpOwogICAgY29uc3QgcHJldmlld0ltYWdlID0gcmVmKCcnKTsKICAgIGNvbnN0IHByZXZpZXdUaXRsZSA9IHJlZignJyk7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbewogICAgICB1aWQ6ICctMScsCiAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJy0yJywKICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnLTMnLAogICAgICBuYW1lOiAnaW1hZ2UucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICctNCcsCiAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJy14eHgnLAogICAgICBwZXJjZW50OiA1MCwKICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgIHN0YXR1czogJ3VwbG9hZGluZycsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICctNScsCiAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICB9XSk7CgogICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4gewogICAgICBwcmV2aWV3VmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgICBwcmV2aWV3VGl0bGUudmFsdWUgPSAnJzsKICAgIH07CgogICAgY29uc3QgaGFuZGxlUHJldmlldyA9IGFzeW5jIGZpbGUgPT4gewogICAgICBpZiAoIWZpbGUudXJsICYmICFmaWxlLnByZXZpZXcpIHsKICAgICAgICBmaWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoZmlsZS5vcmlnaW5GaWxlT2JqKTsKICAgICAgfQoKICAgICAgcHJldmlld0ltYWdlLnZhbHVlID0gZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3OwogICAgICBwcmV2aWV3VmlzaWJsZS52YWx1ZSA9IHRydWU7CiAgICAgIHByZXZpZXdUaXRsZS52YWx1ZSA9IGZpbGUubmFtZSB8fCBmaWxlLnVybC5zdWJzdHJpbmcoZmlsZS51cmwubGFzdEluZGV4T2YoJy8nKSArIDEpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBwcmV2aWV3VmlzaWJsZSwKICAgICAgcHJldmlld0ltYWdlLAogICAgICBmaWxlTGlzdCwKICAgICAgaGFuZGxlQ2FuY2VsLAogICAgICBoYW5kbGVQcmV2aWV3LAogICAgICBwcmV2aWV3VGl0bGUsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+CjxzdHlsZT4KLyogeW91IGNhbiBtYWtlIHVwIHVwbG9hZCBidXR0b24gYW5kIHNhbXBsZSBzdHlsZSBieSB1c2luZyBzdHlsZXNoZWV0cyAqLwouYW50LXVwbG9hZC1zZWxlY3QtcGljdHVyZS1jYXJkIGkgewogIGZvbnQtc2l6ZTogMzJweDsKICBjb2xvcjogIzk5OTsKfQoKLmFudC11cGxvYWQtc2VsZWN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC10ZXh0IHsKICBtYXJnaW4tdG9wOiA4cHg7CiAgY29sb3I6ICM2NjY7Cn0KPC9zdHlsZT4="}},{default:o(()=>[n("div",An,[p(i,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture-card",onPreview:a.handlePreview},{default:o(()=>[a.fileList.length<8?(C(),Z("div",hn,[p(l),yn])):j("",!0)]),_:1},8,["file-list","onPreview"]),p(d,{visible:a.previewVisible,title:a.previewTitle,footer:null,onCancel:a.handleCancel},{default:o(()=>[n("img",{alt:"example",style:{width:"100%"},src:a.previewImage},null,8,fn)]),_:1},8,["visible","title","onCancel"])])]),htmlCode:o(()=>[wn]),jsVersionHtml:o(()=>[Zn]),_:1},8,["jsfiddle"])}var Gn=A(bn,[["render",vn]]);const Wn=h({components:{UploadOutlined:f},setup(){const a=I([{uid:"-1",name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"}]);return{fileList:a,handleChange:c=>{let u=[...c.fileList];u=u.slice(-2),u=u.map(r=>(r.response&&(r.url=r.response.url),r)),a.value=u}}}}),Vn=s(" Upload "),Bn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam"),n("span",{class:"token punctuation"},","),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"info"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" resFileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token comment"},"// 1. Limit the number of uploaded files"),s(`
      `),n("span",{class:"token comment"},"//    Only to show two recent uploaded files, and old ones will be replaced by the new"),s(`
      resFileList `),n("span",{class:"token operator"},"="),s(" resFileList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token comment"},"// 2. read from response and show file link"),s(`
      resFileList `),n("span",{class:"token operator"},"="),s(" resFileList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// Component will show file.url as link"),s(`
          file`),n("span",{class:"token punctuation"},"."),s("url "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" file"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      fileList`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" resFileList"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"info"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" resFileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 1. Limit the number of uploaded files"),s(`
      `),n("span",{class:"token comment"},"//    Only to show two recent uploaded files, and old ones will be replaced by the new"),s(`

      resFileList `),n("span",{class:"token operator"},"="),s(" resFileList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 2. read from response and show file link"),s(`

      resFileList `),n("span",{class:"token operator"},"="),s(" resFileList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// Component will show file.url as link"),s(`
          file`),n("span",{class:"token punctuation"},"."),s("url "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("response"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" file"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      fileList`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" resFileList"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Ln(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"You can gain full control over filelist by configuring `fileList`. You can accomplish all kinds of customed functions. The following shows two circumstances:",cn:"\u4F7F\u7528 `fileList` \u5BF9\u5217\u8868\u8FDB\u884C\u5B8C\u5168\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u81EA\u5B9A\u4E49\u529F\u80FD\uFF0C\u4EE5\u4E0B\u6F14\u793A\u4E8C\u79CD\u60C5\u51B5\uFF1A",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>fileList</code> \u5BF9\u5217\u8868\u8FDB\u884C\u5B8C\u5168\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u81EA\u5B9A\u4E49\u529F\u80FD\uFF0C\u4EE5\u4E0B\u6F14\u793A\u4E8C\u79CD\u60C5\u51B5\uFF1A</p>
<ol>
<li>
<p>\u4E0A\u4F20\u5217\u8868\u6570\u91CF\u7684\u9650\u5236\u3002</p>
</li>
<li>
<p>\u8BFB\u53D6\u8FDC\u7A0B\u8DEF\u5F84\u5E76\u663E\u793A\u94FE\u63A5\u3002</p>
</li>
</ol>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can gain full control over filelist by configuring <code>fileList</code>. You can accomplish all kinds of customed functions. The following shows two circumstances:</p>
<ol>
<li>
<p>limit the number of uploaded files.</p>
</li>
<li>
<p>read from response and show file link.</p>
</li>
</ol>
`,order:4,title:{"zh-CN":"\u5B8C\u5168\u63A7\u5236\u7684\u4E0A\u4F20\u5217\u8868","en-US":"Complete control over file list"},relativePath:"components/upload/demo/fileList.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6bXVsdGlwbGU9InRydWUiCiAgICA6ZmlsZS1saXN0PSJmaWxlTGlzdCIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+CiAgICA8YS1idXR0b24+CiAgICAgIDx1cGxvYWQtb3V0bGluZWQ+PC91cGxvYWQtb3V0bGluZWQ+CiAgICAgIFVwbG9hZAogICAgPC9hLWJ1dHRvbj4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgVXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZFByb3BzIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBVcGxvYWRPdXRsaW5lZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWY8VXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J10+KFsKICAgICAgewogICAgICAgIHVpZDogJy0xJywKICAgICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20veHh4LnBuZycsCiAgICAgIH0sCiAgICBdKTsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvOiBVcGxvYWRDaGFuZ2VQYXJhbSkgPT4gewogICAgICBsZXQgcmVzRmlsZUxpc3QgPSBbLi4uaW5mby5maWxlTGlzdF07CgogICAgICAvLyAxLiBMaW1pdCB0aGUgbnVtYmVyIG9mIHVwbG9hZGVkIGZpbGVzCiAgICAgIC8vICAgIE9ubHkgdG8gc2hvdyB0d28gcmVjZW50IHVwbG9hZGVkIGZpbGVzLCBhbmQgb2xkIG9uZXMgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgbmV3CiAgICAgIHJlc0ZpbGVMaXN0ID0gcmVzRmlsZUxpc3Quc2xpY2UoLTIpOwoKICAgICAgLy8gMi4gcmVhZCBmcm9tIHJlc3BvbnNlIGFuZCBzaG93IGZpbGUgbGluawogICAgICByZXNGaWxlTGlzdCA9IHJlc0ZpbGVMaXN0Lm1hcChmaWxlID0+IHsKICAgICAgICBpZiAoZmlsZS5yZXNwb25zZSkgewogICAgICAgICAgLy8gQ29tcG9uZW50IHdpbGwgc2hvdyBmaWxlLnVybCBhcyBsaW5rCiAgICAgICAgICBmaWxlLnVybCA9IGZpbGUucmVzcG9uc2UudXJsOwogICAgICAgIH0KICAgICAgICByZXR1cm4gZmlsZTsKICAgICAgfSk7CgogICAgICBmaWxlTGlzdC52YWx1ZSA9IHJlc0ZpbGVMaXN0OwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6bXVsdGlwbGU9InRydWUiCiAgICA6ZmlsZS1saXN0PSJmaWxlTGlzdCIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+CiAgICA8YS1idXR0b24+CiAgICAgIDx1cGxvYWQtb3V0bGluZWQ+PC91cGxvYWQtb3V0bGluZWQ+CiAgICAgIFVwbG9hZAogICAgPC9hLWJ1dHRvbj4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBVcGxvYWRPdXRsaW5lZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFt7CiAgICAgIHVpZDogJy0xJywKICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20veHh4LnBuZycsCiAgICB9XSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gaW5mbyA9PiB7CiAgICAgIGxldCByZXNGaWxlTGlzdCA9IFsuLi5pbmZvLmZpbGVMaXN0XTsgLy8gMS4gTGltaXQgdGhlIG51bWJlciBvZiB1cGxvYWRlZCBmaWxlcwogICAgICAvLyAgICBPbmx5IHRvIHNob3cgdHdvIHJlY2VudCB1cGxvYWRlZCBmaWxlcywgYW5kIG9sZCBvbmVzIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIG5ldwoKICAgICAgcmVzRmlsZUxpc3QgPSByZXNGaWxlTGlzdC5zbGljZSgtMik7IC8vIDIuIHJlYWQgZnJvbSByZXNwb25zZSBhbmQgc2hvdyBmaWxlIGxpbmsKCiAgICAgIHJlc0ZpbGVMaXN0ID0gcmVzRmlsZUxpc3QubWFwKGZpbGUgPT4gewogICAgICAgIGlmIChmaWxlLnJlc3BvbnNlKSB7CiAgICAgICAgICAvLyBDb21wb25lbnQgd2lsbCBzaG93IGZpbGUudXJsIGFzIGxpbmsKICAgICAgICAgIGZpbGUudXJsID0gZmlsZS5yZXNwb25zZS51cmw7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gZmlsZTsKICAgICAgfSk7CiAgICAgIGZpbGVMaXN0LnZhbHVlID0gcmVzRmlsZUxpc3Q7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(d,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",multiple:!0,"file-list":a.fileList,onChange:a.handleChange},{default:o(()=>[p(i,null,{default:o(()=>[p(l),Vn]),_:1})]),_:1},8,["file-list","onChange"])]),htmlCode:o(()=>[Bn]),jsVersionHtml:o(()=>[Fn]),_:1},8,["jsfiddle"])}var Xn=A(Wn,[["render",Ln]]);const Un=h({components:{InboxOutlined:O},setup(){return{handleChange:t=>{const c=t.file.status;c!=="uploading"&&console.log(t.file,t.fileList),c==="done"?y.success(`${t.file.name} file uploaded successfully.`):c==="error"&&y.error(`${t.file.name} file upload failed.`)},fileList:I([]),handleDrop:t=>{console.log(t)}}}}),Yn={class:"ant-upload-drag-icon"},xn=n("p",{class:"ant-upload-text"},"Click or drag file to this area to upload",-1),Hn=n("p",{class:"ant-upload-hint"}," Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files ",-1),Rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload-dragger")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("fileList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleDrop"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ant-upload-drag-icon"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("inbox-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("inbox-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ant-upload-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Click or drag file to this area to upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ant-upload-hint"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload-dragger")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" InboxOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    InboxOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"info"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" status "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"fileList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"handleDrop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),s(" DragEvent")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload-dragger")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("fileList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleDrop"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ant-upload-drag-icon"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("inbox-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("inbox-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ant-upload-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Click or drag file to this area to upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ant-upload-hint"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload-dragger")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" InboxOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    InboxOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"info"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" status "),n("span",{class:"token operator"},"="),s(" info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"fileList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"handleDrop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"e"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Jn(a,t,c,u,r,k){const l=e("inbox-outlined"),i=e("a-upload-dragger"),d=e("demo-box");return C(),b(d,{jsfiddle:{us:"You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.",cn:"\u628A\u6587\u4EF6\u62D6\u5165\u6307\u5B9A\u533A\u57DF\uFF0C\u5B8C\u6210\u4E0A\u4F20\uFF0C\u540C\u6837\u652F\u6301\u70B9\u51FB\u4E0A\u4F20\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u628A\u6587\u4EF6\u62D6\u5165\u6307\u5B9A\u533A\u57DF\uFF0C\u5B8C\u6210\u4E0A\u4F20\uFF0C\u540C\u6837\u652F\u6301\u70B9\u51FB\u4E0A\u4F20\u3002</p>
<p>\u8BBE\u7F6E <code>multiple</code> \u540E\uFF0C\u53EF\u4EE5\u4E00\u6B21\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.</p>
<p>We can upload serveral files at once by giving the input the <code>multiple</code> attribute.</p>
`,order:5,title:{"zh-CN":"\u62D6\u62FD\u4E0A\u4F20","en-US":"Drag and Drop"},relativePath:"components/upload/demo/drag.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1kcmFnZ2VyCiAgICB2LW1vZGVsOmZpbGVMaXN0PSJmaWxlTGlzdCIKICAgIG5hbWU9ImZpbGUiCiAgICA6bXVsdGlwbGU9InRydWUiCiAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICAgIEBkcm9wPSJoYW5kbGVEcm9wIgogID4KICAgIDxwIGNsYXNzPSJhbnQtdXBsb2FkLWRyYWctaWNvbiI+CiAgICAgIDxpbmJveC1vdXRsaW5lZD48L2luYm94LW91dGxpbmVkPgogICAgPC9wPgogICAgPHAgY2xhc3M9ImFudC11cGxvYWQtdGV4dCI+Q2xpY2sgb3IgZHJhZyBmaWxlIHRvIHRoaXMgYXJlYSB0byB1cGxvYWQ8L3A+CiAgICA8cCBjbGFzcz0iYW50LXVwbG9hZC1oaW50Ij4KICAgICAgU3VwcG9ydCBmb3IgYSBzaW5nbGUgb3IgYnVsayB1cGxvYWQuIFN0cmljdGx5IHByb2hpYml0IGZyb20gdXBsb2FkaW5nIGNvbXBhbnkgZGF0YSBvciBvdGhlcgogICAgICBiYW5kIGZpbGVzCiAgICA8L3A+CiAgPC9hLXVwbG9hZC1kcmFnZ2VyPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgSW5ib3hPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBVcGxvYWRDaGFuZ2VQYXJhbSB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSW5ib3hPdXRsaW5lZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZm86IFVwbG9hZENoYW5nZVBhcmFtKSA9PiB7CiAgICAgIGNvbnN0IHN0YXR1cyA9IGluZm8uZmlsZS5zdGF0dXM7CiAgICAgIGlmIChzdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTsKICAgICAgfQogICAgICBpZiAoc3RhdHVzID09PSAnZG9uZScpIHsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LmApOwogICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTsKICAgICAgfQogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgZmlsZUxpc3Q6IHJlZihbXSksCiAgICAgIGhhbmRsZURyb3A6IChlOiBEcmFnRXZlbnQpID0+IHsKICAgICAgICBjb25zb2xlLmxvZyhlKTsKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1kcmFnZ2VyCiAgICB2LW1vZGVsOmZpbGVMaXN0PSJmaWxlTGlzdCIKICAgIG5hbWU9ImZpbGUiCiAgICA6bXVsdGlwbGU9InRydWUiCiAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICAgIEBkcm9wPSJoYW5kbGVEcm9wIgogID4KICAgIDxwIGNsYXNzPSJhbnQtdXBsb2FkLWRyYWctaWNvbiI+CiAgICAgIDxpbmJveC1vdXRsaW5lZD48L2luYm94LW91dGxpbmVkPgogICAgPC9wPgogICAgPHAgY2xhc3M9ImFudC11cGxvYWQtdGV4dCI+Q2xpY2sgb3IgZHJhZyBmaWxlIHRvIHRoaXMgYXJlYSB0byB1cGxvYWQ8L3A+CiAgICA8cCBjbGFzcz0iYW50LXVwbG9hZC1oaW50Ij4KICAgICAgU3VwcG9ydCBmb3IgYSBzaW5nbGUgb3IgYnVsayB1cGxvYWQuIFN0cmljdGx5IHByb2hpYml0IGZyb20gdXBsb2FkaW5nIGNvbXBhbnkgZGF0YSBvciBvdGhlcgogICAgICBiYW5kIGZpbGVzCiAgICA8L3A+CiAgPC9hLXVwbG9hZC1kcmFnZ2VyPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBJbmJveE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEluYm94T3V0bGluZWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBpbmZvID0+IHsKICAgICAgY29uc3Qgc3RhdHVzID0gaW5mby5maWxlLnN0YXR1czsKCiAgICAgIGlmIChzdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTsKICAgICAgfQoKICAgICAgaWYgKHN0YXR1cyA9PT0gJ2RvbmUnKSB7CiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseS5gKTsKICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7CiAgICAgIH0KICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBmaWxlTGlzdDogcmVmKFtdKSwKICAgICAgaGFuZGxlRHJvcDogZSA9PiB7CiAgICAgICAgY29uc29sZS5sb2coZSk7CiAgICAgIH0sCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(i,{fileList:a.fileList,"onUpdate:fileList":t[0]||(t[0]=g=>a.fileList=g),name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:a.handleChange,onDrop:a.handleDrop},{default:o(()=>[n("p",Yn,[p(l)]),xn,Hn]),_:1},8,["fileList","onChange","onDrop"])]),htmlCode:o(()=>[Rn]),jsVersionHtml:o(()=>[zn]),_:1},8,["jsfiddle"])}var Sn=A(Un,[["render",Jn]]);const jn=h({components:{UploadOutlined:f},setup(){const a=I([{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),t=I([{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]);return{fileList:a,fileList1:t}}}),G=a=>(P("data-v-2e3afd02"),a=a(),N(),a),Pn=s(" upload "),Nn=G(()=>n("br",null,null,-1)),Kn=G(()=>n("br",null,null,-1)),Dn=s(" upload "),Qn=G(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList1"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upload-list-inline"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList1 "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      fileList1`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token comment"},"/* tile uploaded pictures */"),s(`
`),n("span",{class:"token selector"},".upload-list-inline :deep(.ant-upload-list-item)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)),On=G(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList1"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upload-list-inline"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      fileList1`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token comment"},"/* tile uploaded pictures */"),s(`
`),n("span",{class:"token selector"},".upload-list-inline :deep(.ant-upload-list-item)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1));function En(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"If uploaded file is a picture, the thumbnail can be shown.",cn:"\u4E0A\u4F20\u6587\u4EF6\u4E3A\u56FE\u7247\uFF0C\u53EF\u5C55\u793A\u672C\u5730\u7F29\u7565\u56FE\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E0A\u4F20\u6587\u4EF6\u4E3A\u56FE\u7247\uFF0C\u53EF\u5C55\u793A\u672C\u5730\u7F29\u7565\u56FE\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>If uploaded file is a picture, the thumbnail can be shown.</p>
`,order:6,title:{"zh-CN":"\u56FE\u7247\u5217\u8868\u6837\u5F0F","en-US":"Pictures with list style"},relativePath:"components/upload/demo/picture-style.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgPgogICAgICA8YS1idXR0b24+CiAgICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgICB1cGxvYWQKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YnIgLz4KICAgIDxiciAvPgogICAgPGEtdXBsb2FkCiAgICAgIHYtbW9kZWw6ZmlsZS1saXN0PSJmaWxlTGlzdDEiCiAgICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUiCiAgICAgIGNsYXNzPSJ1cGxvYWQtbGlzdC1pbmxpbmUiCiAgICA+CiAgICAgIDxhLWJ1dHRvbj4KICAgICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICAgIHVwbG9hZAogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IFVwbG9hZFByb3BzIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBVcGxvYWRPdXRsaW5lZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWY8VXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J10+KFsKICAgICAgewogICAgICAgIHVpZDogJy0xJywKICAgICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJy0yJywKICAgICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgIF0pOwogICAgY29uc3QgZmlsZUxpc3QxID0gcmVmPFVwbG9hZFByb3BzWydmaWxlTGlzdCddPihbCiAgICAgIHsKICAgICAgICB1aWQ6ICctMScsCiAgICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICAgIHRodW1iVXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIH0sCiAgICAgIHsKICAgICAgICB1aWQ6ICctMicsCiAgICAgICAgbmFtZTogJ3l5eS5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICAgIHRodW1iVXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIH0sCiAgICBdKTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBmaWxlTGlzdDEsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlIHNjb3BlZD4KLyogdGlsZSB1cGxvYWRlZCBwaWN0dXJlcyAqLwoudXBsb2FkLWxpc3QtaW5saW5lIDpkZWVwKC5hbnQtdXBsb2FkLWxpc3QtaXRlbSkgewogIGZsb2F0OiBsZWZ0OwogIHdpZHRoOiAyMDBweDsKICBtYXJnaW4tcmlnaHQ6IDhweDsKfQoudXBsb2FkLWxpc3QtaW5saW5lIFtjbGFzcyo9Jy11cGxvYWQtbGlzdC1ydGwnXSA6ZGVlcCguYW50LXVwbG9hZC1saXN0LWl0ZW0pIHsKICBmbG9hdDogcmlnaHQ7Cn0KPC9zdHlsZT4K",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgPgogICAgICA8YS1idXR0b24+CiAgICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgICB1cGxvYWQKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YnIgLz4KICAgIDxiciAvPgogICAgPGEtdXBsb2FkCiAgICAgIHYtbW9kZWw6ZmlsZS1saXN0PSJmaWxlTGlzdDEiCiAgICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUiCiAgICAgIGNsYXNzPSJ1cGxvYWQtbGlzdC1pbmxpbmUiCiAgICA+CiAgICAgIDxhLWJ1dHRvbj4KICAgICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICAgIHVwbG9hZAogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXBsb2FkT3V0bGluZWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbewogICAgICB1aWQ6ICctMScsCiAgICAgIG5hbWU6ICd4eHgucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB0aHVtYlVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICctMicsCiAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB0aHVtYlVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfV0pOwogICAgY29uc3QgZmlsZUxpc3QxID0gcmVmKFt7CiAgICAgIHVpZDogJy0xJywKICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIHRodW1iVXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJy0yJywKICAgICAgbmFtZTogJ3l5eS5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIHRodW1iVXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICB9XSk7CiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgZmlsZUxpc3QxLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pgo8c3R5bGUgc2NvcGVkPgovKiB0aWxlIHVwbG9hZGVkIHBpY3R1cmVzICovCi51cGxvYWQtbGlzdC1pbmxpbmUgOmRlZXAoLmFudC11cGxvYWQtbGlzdC1pdGVtKSB7CiAgZmxvYXQ6IGxlZnQ7CiAgd2lkdGg6IDIwMHB4OwogIG1hcmdpbi1yaWdodDogOHB4Owp9Ci51cGxvYWQtbGlzdC1pbmxpbmUgW2NsYXNzKj0nLXVwbG9hZC1saXN0LXJ0bCddIDpkZWVwKC5hbnQtdXBsb2FkLWxpc3QtaXRlbSkgewogIGZsb2F0OiByaWdodDsKfQo8L3N0eWxlPg=="}},{default:o(()=>[n("div",null,[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture"},{default:o(()=>[p(i,null,{default:o(()=>[p(l),Pn]),_:1})]),_:1},8,["file-list"]),Nn,Kn,p(d,{"file-list":a.fileList1,"onUpdate:file-list":t[1]||(t[1]=m=>a.fileList1=m),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture",class:"upload-list-inline"},{default:o(()=>[p(i,null,{default:o(()=>[p(l),Dn]),_:1})]),_:1},8,["file-list"])])]),htmlCode:o(()=>[Qn]),jsVersionHtml:o(()=>[On]),_:1},8,["jsfiddle"])}var Tn=A(jn,[["render",En],["__scopeId","data-v-2e3afd02"]]);const Mn=h({components:{UploadOutlined:f},setup(){const a=I([]),t=I(!1);return{fileList:a,uploading:t,handleRemove:k=>{const l=a.value.indexOf(k),i=a.value.slice();i.splice(l,1),a.value=i},beforeUpload:k=>(a.value=[...a.value,k],!1),handleUpload:()=>{const k=new FormData;a.value.forEach(l=>{k.append("files[]",l)}),t.value=!0,K("https://www.mocky.io/v2/5cc8019d300000980a055e76",{method:"post",data:k}).then(()=>{a.value=[],t.value=!1,y.success("upload successfully.")}).catch(()=>{t.value=!1,y.error("upload failed.")})}}}}),_n={class:"clearfix"},qn=s(" Select File "),$n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(),n("span",{class:"token attr-name"},":file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@remove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleRemove"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Select File
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList.length === 0"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploading"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 16px")]),n("span",{class:"token punctuation"},'"')])]),s(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" request "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'umi-request'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploading "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"handleRemove"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onRemove'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" index "),n("span",{class:"token operator"},"="),s(" fileList"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" newFileList "),n("span",{class:"token operator"},"="),s(" fileList"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      newFileList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      fileList`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" newFileList"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"beforeUpload"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'beforeUpload'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("fileList"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},","),s(" file"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" formData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FormData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      fileList`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        formData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'files[]'"),n("span",{class:"token punctuation"},","),s(" file "),n("span",{class:"token keyword"},"as"),s(" any"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      uploading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token comment"},"// You can use any AJAX library you like"),s(`
      `),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://www.mocky.io/v2/5cc8019d300000980a055e76'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(" formData"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          fileList`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
          uploading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
          message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload successfully.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          uploading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
          message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload failed.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      uploading`),n("span",{class:"token punctuation"},","),s(`
      handleRemove`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      handleUpload`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),ns=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(),n("span",{class:"token attr-name"},":file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@remove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleRemove"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Select File
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList.length === 0"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploading"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 16px")]),n("span",{class:"token punctuation"},'"')])]),s(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" request "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'umi-request'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploading "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleRemove"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" index "),n("span",{class:"token operator"},"="),s(" fileList"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" newFileList "),n("span",{class:"token operator"},"="),s(" fileList"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      newFileList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      fileList`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" newFileList"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("fileList"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},","),s(" file"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" formData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FormData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      fileList`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        formData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'files[]'"),n("span",{class:"token punctuation"},","),s(" file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      uploading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// You can use any AJAX library you like"),s(`

      `),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://www.mocky.io/v2/5cc8019d300000980a055e76'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(" formData"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fileList`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        uploading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload successfully.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        uploading`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload failed.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      uploading`),n("span",{class:"token punctuation"},","),s(`
      handleRemove`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      handleUpload`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function ss(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"Upload files manually after `beforeUpload` returns `false`.",cn:"`beforeUpload` \u8FD4\u56DE `false` \u540E\uFF0C\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u540E\uFF0C\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Upload files manually after <code>beforeUpload</code> returns <code>false</code>.</p>
`,order:7,title:{"zh-CN":"\u624B\u52A8\u4E0A\u4F20","en-US":"Upload manually"},relativePath:"components/upload/demo/upload-manually.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNsZWFyZml4Ij4KICAgIDxhLXVwbG9hZCA6ZmlsZS1saXN0PSJmaWxlTGlzdCIgOmJlZm9yZS11cGxvYWQ9ImJlZm9yZVVwbG9hZCIgQHJlbW92ZT0iaGFuZGxlUmVtb3ZlIj4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDx1cGxvYWQtb3V0bGluZWQ+PC91cGxvYWQtb3V0bGluZWQ+CiAgICAgICAgU2VsZWN0IEZpbGUKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YS1idXR0b24KICAgICAgdHlwZT0icHJpbWFyeSIKICAgICAgOmRpc2FibGVkPSJmaWxlTGlzdC5sZW5ndGggPT09IDAiCiAgICAgIDpsb2FkaW5nPSJ1cGxvYWRpbmciCiAgICAgIHN0eWxlPSJtYXJnaW4tdG9wOiAxNnB4IgogICAgICBAY2xpY2s9ImhhbmRsZVVwbG9hZCIKICAgID4KICAgICAge3sgdXBsb2FkaW5nID8gJ1VwbG9hZGluZycgOiAnU3RhcnQgVXBsb2FkJyB9fQogICAgPC9hLWJ1dHRvbj4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCByZXF1ZXN0IGZyb20gJ3VtaS1yZXF1ZXN0JzsKaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oW10pOwogICAgY29uc3QgdXBsb2FkaW5nID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKCiAgICBjb25zdCBoYW5kbGVSZW1vdmU6IFVwbG9hZFByb3BzWydvblJlbW92ZSddID0gZmlsZSA9PiB7CiAgICAgIGNvbnN0IGluZGV4ID0gZmlsZUxpc3QudmFsdWUuaW5kZXhPZihmaWxlKTsKICAgICAgY29uc3QgbmV3RmlsZUxpc3QgPSBmaWxlTGlzdC52YWx1ZS5zbGljZSgpOwogICAgICBuZXdGaWxlTGlzdC5zcGxpY2UoaW5kZXgsIDEpOwogICAgICBmaWxlTGlzdC52YWx1ZSA9IG5ld0ZpbGVMaXN0OwogICAgfTsKCiAgICBjb25zdCBiZWZvcmVVcGxvYWQ6IFVwbG9hZFByb3BzWydiZWZvcmVVcGxvYWQnXSA9IGZpbGUgPT4gewogICAgICBmaWxlTGlzdC52YWx1ZSA9IFsuLi5maWxlTGlzdC52YWx1ZSwgZmlsZV07CiAgICAgIHJldHVybiBmYWxzZTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlVXBsb2FkID0gKCkgPT4gewogICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOwogICAgICBmaWxlTGlzdC52YWx1ZS5mb3JFYWNoKChmaWxlOiBVcGxvYWRQcm9wc1snZmlsZUxpc3QnXVtudW1iZXJdKSA9PiB7CiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlc1tdJywgZmlsZSBhcyBhbnkpOwogICAgICB9KTsKICAgICAgdXBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKCiAgICAgIC8vIFlvdSBjYW4gdXNlIGFueSBBSkFYIGxpYnJhcnkgeW91IGxpa2UKICAgICAgcmVxdWVzdCgnaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2JywgewogICAgICAgIG1ldGhvZDogJ3Bvc3QnLAogICAgICAgIGRhdGE6IGZvcm1EYXRhLAogICAgICB9KQogICAgICAgIC50aGVuKCgpID0+IHsKICAgICAgICAgIGZpbGVMaXN0LnZhbHVlID0gW107CiAgICAgICAgICB1cGxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygndXBsb2FkIHN1Y2Nlc3NmdWxseS4nKTsKICAgICAgICB9KQogICAgICAgIC5jYXRjaCgoKSA9PiB7CiAgICAgICAgICB1cGxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ3VwbG9hZCBmYWlsZWQuJyk7CiAgICAgICAgfSk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICB1cGxvYWRpbmcsCiAgICAgIGhhbmRsZVJlbW92ZSwKICAgICAgYmVmb3JlVXBsb2FkLAogICAgICBoYW5kbGVVcGxvYWQsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNsZWFyZml4Ij4KICAgIDxhLXVwbG9hZCA6ZmlsZS1saXN0PSJmaWxlTGlzdCIgOmJlZm9yZS11cGxvYWQ9ImJlZm9yZVVwbG9hZCIgQHJlbW92ZT0iaGFuZGxlUmVtb3ZlIj4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDx1cGxvYWQtb3V0bGluZWQ+PC91cGxvYWQtb3V0bGluZWQ+CiAgICAgICAgU2VsZWN0IEZpbGUKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YS1idXR0b24KICAgICAgdHlwZT0icHJpbWFyeSIKICAgICAgOmRpc2FibGVkPSJmaWxlTGlzdC5sZW5ndGggPT09IDAiCiAgICAgIDpsb2FkaW5nPSJ1cGxvYWRpbmciCiAgICAgIHN0eWxlPSJtYXJnaW4tdG9wOiAxNnB4IgogICAgICBAY2xpY2s9ImhhbmRsZVVwbG9hZCIKICAgID4KICAgICAge3sgdXBsb2FkaW5nID8gJ1VwbG9hZGluZycgOiAnU3RhcnQgVXBsb2FkJyB9fQogICAgPC9hLWJ1dHRvbj4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHJlcXVlc3QgZnJvbSAndW1pLXJlcXVlc3QnOwppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBVcGxvYWRPdXRsaW5lZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIGNvbnN0IHVwbG9hZGluZyA9IHJlZihmYWxzZSk7CgogICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gZmlsZSA9PiB7CiAgICAgIGNvbnN0IGluZGV4ID0gZmlsZUxpc3QudmFsdWUuaW5kZXhPZihmaWxlKTsKICAgICAgY29uc3QgbmV3RmlsZUxpc3QgPSBmaWxlTGlzdC52YWx1ZS5zbGljZSgpOwogICAgICBuZXdGaWxlTGlzdC5zcGxpY2UoaW5kZXgsIDEpOwogICAgICBmaWxlTGlzdC52YWx1ZSA9IG5ld0ZpbGVMaXN0OwogICAgfTsKCiAgICBjb25zdCBiZWZvcmVVcGxvYWQgPSBmaWxlID0+IHsKICAgICAgZmlsZUxpc3QudmFsdWUgPSBbLi4uZmlsZUxpc3QudmFsdWUsIGZpbGVdOwogICAgICByZXR1cm4gZmFsc2U7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpID0+IHsKICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsKICAgICAgZmlsZUxpc3QudmFsdWUuZm9yRWFjaChmaWxlID0+IHsKICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVzW10nLCBmaWxlKTsKICAgICAgfSk7CiAgICAgIHVwbG9hZGluZy52YWx1ZSA9IHRydWU7IC8vIFlvdSBjYW4gdXNlIGFueSBBSkFYIGxpYnJhcnkgeW91IGxpa2UKCiAgICAgIHJlcXVlc3QoJ2h0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NicsIHsKICAgICAgICBtZXRob2Q6ICdwb3N0JywKICAgICAgICBkYXRhOiBmb3JtRGF0YSwKICAgICAgfSkudGhlbigoKSA9PiB7CiAgICAgICAgZmlsZUxpc3QudmFsdWUgPSBbXTsKICAgICAgICB1cGxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ3VwbG9hZCBzdWNjZXNzZnVsbHkuJyk7CiAgICAgIH0pLmNhdGNoKCgpID0+IHsKICAgICAgICB1cGxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgICBtZXNzYWdlLmVycm9yKCd1cGxvYWQgZmFpbGVkLicpOwogICAgICB9KTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgZmlsZUxpc3QsCiAgICAgIHVwbG9hZGluZywKICAgICAgaGFuZGxlUmVtb3ZlLAogICAgICBiZWZvcmVVcGxvYWQsCiAgICAgIGhhbmRsZVVwbG9hZCwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[n("div",_n,[p(d,{"file-list":a.fileList,"before-upload":a.beforeUpload,onRemove:a.handleRemove},{default:o(()=>[p(i,null,{default:o(()=>[p(l),qn]),_:1})]),_:1},8,["file-list","before-upload","onRemove"]),p(i,{type:"primary",disabled:a.fileList.length===0,loading:a.uploading,style:{"margin-top":"16px"},onClick:a.handleUpload},{default:o(()=>[s(V(a.uploading?"Uploading":"Start Upload"),1)]),_:1},8,["disabled","loading","onClick"])])]),htmlCode:o(()=>[$n]),jsVersionHtml:o(()=>[ns]),_:1},8,["jsfiddle"])}var as=A(Mn,[["render",ss]]);const ts=h({components:{UploadOutlined:f}}),os=s(" Upload Directory "),es=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"directory"),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload Directory
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),ps=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"directory"),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload Directory
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function cs(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"You can select and upload a whole directory.",cn:"\u652F\u6301\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u6240\u6709\u6587\u4EF6\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u652F\u6301\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u6240\u6709\u6587\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can select and upload a whole directory.</p>
`,order:8,title:{"zh-CN":"\u6587\u4EF6\u5939\u4E0A\u4F20","en-US":"Upload directory"},relativePath:"components/upload/demo/directory.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZCBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIgZGlyZWN0b3J5PgogICAgPGEtYnV0dG9uPgogICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICBVcGxvYWQgRGlyZWN0b3J5CiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZCBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIgZGlyZWN0b3J5PgogICAgPGEtYnV0dG9uPgogICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICBVcGxvYWQgRGlyZWN0b3J5CiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBVcGxvYWRPdXRsaW5lZCwKICB9LAp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(d,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",directory:""},{default:o(()=>[p(i,null,{default:o(()=>[p(l),os]),_:1})]),_:1})]),htmlCode:o(()=>[es]),jsVersionHtml:o(()=>[ps]),_:1},8,["jsfiddle"])}var ls=A(ts,[["render",cs]]);const us=h({components:{UploadOutlined:f},setup(){return{previewFile:async t=>{console.log("Your upload file:",t);const c=await fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8",{method:"POST",body:t}),{thumbnail:u}=await c.json();return u},fileList:I([])}}}),is=s(" Upload "),ks=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("//jsonplaceholder.typicode.com/posts/"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":preview-file"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("previewFile"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"previewFile"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'previewFile'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Your upload file:'"),n("span",{class:"token punctuation"},","),s(" file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// Your process logic. Here we just mock to the same file"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://next.json-generator.com/api/json/get/4ytyBoLK8'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"body"),n("span",{class:"token operator"},":"),s(" file"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" thumbnail "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" thumbnail"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      previewFile`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"fileList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),rs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("//jsonplaceholder.typicode.com/posts/"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":preview-file"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("previewFile"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"previewFile"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Your upload file:'"),n("span",{class:"token punctuation"},","),s(" file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// Your process logic. Here we just mock to the same file"),s(`

      `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://next.json-generator.com/api/json/get/4ytyBoLK8'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"body"),n("span",{class:"token operator"},":"),s(" file"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
        thumbnail`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" thumbnail"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      previewFile`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"fileList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function ds(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"Customize local preview. Can handle with non-image format files such as video.",cn:"\u81EA\u5B9A\u4E49\u672C\u5730\u9884\u89C8\uFF0C\u7528\u4E8E\u5904\u7406\u975E\u56FE\u7247\u683C\u5F0F\u6587\u4EF6\uFF08\u4F8B\u5982\u89C6\u9891\u6587\u4EF6\uFF09\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u672C\u5730\u9884\u89C8\uFF0C\u7528\u4E8E\u5904\u7406\u975E\u56FE\u7247\u683C\u5F0F\u6587\u4EF6\uFF08\u4F8B\u5982\u89C6\u9891\u6587\u4EF6\uFF09\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize local preview. Can handle with non-image format files such as video.</p>
`,order:9,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u9884\u89C8","en-US":"Customize preview file"},relativePath:"components/upload/demo/preview-file.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUiCiAgICAgIGFjdGlvbj0iLy9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyIKICAgICAgOnByZXZpZXctZmlsZT0icHJldmlld0ZpbGUiCiAgICA+CiAgICAgIDxhLWJ1dHRvbj4KICAgICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICAgIFVwbG9hZAogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IFVwbG9hZFByb3BzIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBVcGxvYWRPdXRsaW5lZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgcHJldmlld0ZpbGU6IFVwbG9hZFByb3BzWydwcmV2aWV3RmlsZSddID0gYXN5bmMgZmlsZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdZb3VyIHVwbG9hZCBmaWxlOicsIGZpbGUpOwogICAgICAvLyBZb3VyIHByb2Nlc3MgbG9naWMuIEhlcmUgd2UganVzdCBtb2NrIHRvIHRoZSBzYW1lIGZpbGUKICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbmV4dC5qc29uLWdlbmVyYXRvci5jb20vYXBpL2pzb24vZ2V0LzR5dHlCb0xLOCcsIHsKICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICBib2R5OiBmaWxlLAogICAgICB9KTsKICAgICAgY29uc3QgeyB0aHVtYm5haWwgfSA9IGF3YWl0IHJlcy5qc29uKCk7CiAgICAgIHJldHVybiB0aHVtYm5haWw7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgcHJldmlld0ZpbGUsCiAgICAgIGZpbGVMaXN0OiByZWYoW10pLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUiCiAgICAgIGFjdGlvbj0iLy9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyIKICAgICAgOnByZXZpZXctZmlsZT0icHJldmlld0ZpbGUiCiAgICA+CiAgICAgIDxhLWJ1dHRvbj4KICAgICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICAgIFVwbG9hZAogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXBsb2FkT3V0bGluZWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBwcmV2aWV3RmlsZSA9IGFzeW5jIGZpbGUgPT4gewogICAgICBjb25zb2xlLmxvZygnWW91ciB1cGxvYWQgZmlsZTonLCBmaWxlKTsgLy8gWW91ciBwcm9jZXNzIGxvZ2ljLiBIZXJlIHdlIGp1c3QgbW9jayB0byB0aGUgc2FtZSBmaWxlCgogICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9uZXh0Lmpzb24tZ2VuZXJhdG9yLmNvbS9hcGkvanNvbi9nZXQvNHl0eUJvTEs4JywgewogICAgICAgIG1ldGhvZDogJ1BPU1QnLAogICAgICAgIGJvZHk6IGZpbGUsCiAgICAgIH0pOwogICAgICBjb25zdCB7CiAgICAgICAgdGh1bWJuYWlsLAogICAgICB9ID0gYXdhaXQgcmVzLmpzb24oKTsKICAgICAgcmV0dXJuIHRodW1ibmFpbDsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgcHJldmlld0ZpbGUsCiAgICAgIGZpbGVMaXN0OiByZWYoW10pLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[n("div",null,[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),"list-type":"picture",action:"//jsonplaceholder.typicode.com/posts/","preview-file":a.previewFile},{default:o(()=>[p(i,null,{default:o(()=>[p(l),is]),_:1})]),_:1},8,["file-list","preview-file"])])]),htmlCode:o(()=>[ks]),jsVersionHtml:o(()=>[rs]),_:1},8,["jsfiddle"])}var gs=A(us,[["render",ds]]);const ms=h({components:{UploadOutlined:f},setup(){return{beforeUpload:t=>new Promise(c=>{const u=new FileReader;u.readAsDataURL(t),u.onload=()=>{const r=document.createElement("img");r.src=u.result,r.onload=()=>{const k=document.createElement("canvas");k.width=r.naturalWidth,k.height=r.naturalHeight;const l=k.getContext("2d");l.drawImage(r,0,0),l.fillStyle="red",l.textBaseline="middle",l.font="33px Arial",l.fillText("Ant Design Vue",20,20),k.toBlob(c)}}}),fileList:I([])}}}),Cs=s(" Upload "),Is=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"beforeUpload"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'beforeUpload'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" reader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"img"),n("span",{class:"token operator"},":"),s(" HTMLImageElement "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'img'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          img`),n("span",{class:"token punctuation"},"."),s("src "),n("span",{class:"token operator"},"="),s(" reader"),n("span",{class:"token punctuation"},"."),s("result "),n("span",{class:"token keyword"},"as"),s(" string"),n("span",{class:"token punctuation"},";"),s(`
          img`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" canvas "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'canvas'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalWidth"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("height "),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalHeight"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" ctx "),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawImage"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("textBaseline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("font "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'33px Arial'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Ant Design Vue'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toBlob"),n("span",{class:"token punctuation"},"("),s("resolve"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"fileList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),bs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" reader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"const"),s(" img "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'img'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          img`),n("span",{class:"token punctuation"},"."),s("src "),n("span",{class:"token operator"},"="),s(" reader"),n("span",{class:"token punctuation"},"."),s("result"),n("span",{class:"token punctuation"},";"),s(`

          img`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" canvas "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'canvas'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("width "),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalWidth"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),s("height "),n("span",{class:"token operator"},"="),s(" img"),n("span",{class:"token punctuation"},"."),s("naturalHeight"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"const"),s(" ctx "),n("span",{class:"token operator"},"="),s(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawImage"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("textBaseline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),s("font "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'33px Arial'"),n("span",{class:"token punctuation"},";"),s(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Ant Design Vue'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            canvas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toBlob"),n("span",{class:"token punctuation"},"("),s("resolve"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"fileList"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function As(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"Use `beforeUpload` for transform file before request such as add a watermark.",cn:"\u4F7F\u7528 `beforeUpload` \u8F6C\u6362\u4E0A\u4F20\u7684\u6587\u4EF6\uFF08\u4F8B\u5982\u6DFB\u52A0\u6C34\u5370\uFF09\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>beforeUpload</code> \u8F6C\u6362\u4E0A\u4F20\u7684\u6587\u4EF6\uFF08\u4F8B\u5982\u6DFB\u52A0\u6C34\u5370\uFF09\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>beforeUpload</code> for transform file before request such as add a watermark.</p>
`,order:10,title:{"zh-CN":"\u4E0A\u4F20\u524D\u8F6C\u6362\u6587\u4EF6","en-US":"Transform file before request"},relativePath:"components/upload/demo/transform-file.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgICAgOmJlZm9yZS11cGxvYWQ9ImJlZm9yZVVwbG9hZCIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDx1cGxvYWQtb3V0bGluZWQ+PC91cGxvYWQtb3V0bGluZWQ+CiAgICAgICAgVXBsb2FkCiAgICAgIDwvYS1idXR0b24+CiAgICA8L2EtdXBsb2FkPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBiZWZvcmVVcGxvYWQ6IFVwbG9hZFByb3BzWydiZWZvcmVVcGxvYWQnXSA9IGZpbGUgPT4gewogICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7CiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsKICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTsKICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gewogICAgICAgICAgY29uc3QgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7CiAgICAgICAgICBpbWcuc3JjID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7CiAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gewogICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLm5hdHVyYWxXaWR0aDsKICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5uYXR1cmFsSGVpZ2h0OwogICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsKICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApOwogICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7CiAgICAgICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJzsKICAgICAgICAgICAgY3R4LmZvbnQgPSAnMzNweCBBcmlhbCc7CiAgICAgICAgICAgIGN0eC5maWxsVGV4dCgnQW50IERlc2lnbiBWdWUnLCAyMCwgMjApOwogICAgICAgICAgICBjYW52YXMudG9CbG9iKHJlc29sdmUpOwogICAgICAgICAgfTsKICAgICAgICB9OwogICAgICB9KTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBiZWZvcmVVcGxvYWQsCiAgICAgIGZpbGVMaXN0OiByZWYoW10pLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgICAgOmJlZm9yZS11cGxvYWQ9ImJlZm9yZVVwbG9hZCIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDx1cGxvYWQtb3V0bGluZWQ+PC91cGxvYWQtb3V0bGluZWQ+CiAgICAgICAgVXBsb2FkCiAgICAgIDwvYS1idXR0b24+CiAgICA8L2EtdXBsb2FkPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBVcGxvYWRPdXRsaW5lZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGJlZm9yZVVwbG9hZCA9IGZpbGUgPT4gewogICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7CiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsKICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTsKCiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHsKICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOwogICAgICAgICAgaW1nLnNyYyA9IHJlYWRlci5yZXN1bHQ7CgogICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHsKICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7CiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy5uYXR1cmFsV2lkdGg7CiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcubmF0dXJhbEhlaWdodDsKICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7CiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTsKICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnOwogICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7CiAgICAgICAgICAgIGN0eC5mb250ID0gJzMzcHggQXJpYWwnOwogICAgICAgICAgICBjdHguZmlsbFRleHQoJ0FudCBEZXNpZ24gVnVlJywgMjAsIDIwKTsKICAgICAgICAgICAgY2FudmFzLnRvQmxvYihyZXNvbHZlKTsKICAgICAgICAgIH07CiAgICAgICAgfTsKICAgICAgfSk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGJlZm9yZVVwbG9hZCwKICAgICAgZmlsZUxpc3Q6IHJlZihbXSksCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[n("div",null,[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":a.beforeUpload},{default:o(()=>[p(i,null,{default:o(()=>[p(l),Cs]),_:1})]),_:1},8,["file-list","before-upload"])])]),htmlCode:o(()=>[Is]),jsVersionHtml:o(()=>[bs]),_:1},8,["jsfiddle"])}var hs=A(ms,[["render",As]]);const ys=h({components:{UploadOutlined:f},setup(){const a=u=>{u.file.status!=="uploading"&&console.log(u.file,u.fileList),u.file.status==="done"?y.success(`${u.file.name} file uploaded successfully`):u.file.status==="error"&&y.error(`${u.file.name} file upload failed.`)};return{fileList:I([]),headers:{authorization:"authorization-text"},handleChange:a,progress:{strokeColor:{"0%":"#108ee9","100%":"#87d068"},strokeWidth:3,format:u=>`${parseFloat(u.toFixed(2))}%`,class:"test"}}}}),fs=s(" Click to Upload "),ws=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("headers"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":progress"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("progress"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam"),n("span",{class:"token punctuation"},","),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"info"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"progress"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'progress'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"strokeColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},"'0%'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#108ee9'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'100%'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#87d068'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"strokeWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"format"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"percent"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"parseFloat"),n("span",{class:"token punctuation"},"("),s("percent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"%"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'test'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"authorization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      progress`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Zs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("headers"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":progress"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("progress"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"info"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" progress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"strokeColor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},"'0%'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#108ee9'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string-property property"},"'100%'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#87d068'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"strokeWidth"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"format"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"percent"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"parseFloat"),n("span",{class:"token punctuation"},"("),s("percent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"%"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'test'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"authorization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      progress`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function vs(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"Use `progress` for customize progress bar.",cn:"\u4F7F\u7528 `progress` \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>progress</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>progress</code> for customize progress bar.</p>
`,order:15,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F","en-US":"Customize Progress Bar"},relativePath:"components/upload/demo/customize-progress-bar.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICA6cHJvZ3Jlc3M9InByb2dyZXNzIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgQ2xpY2sgdG8gVXBsb2FkCiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbzogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTsKICAgICAgfQogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7CiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseWApOwogICAgICB9IGVsc2UgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7CiAgICAgIH0KICAgIH07CgogICAgY29uc3QgZmlsZUxpc3QgPSByZWYoW10pOwogICAgY29uc3QgcHJvZ3Jlc3M6IFVwbG9hZFByb3BzWydwcm9ncmVzcyddID0gewogICAgICBzdHJva2VDb2xvcjogewogICAgICAgICcwJSc6ICcjMTA4ZWU5JywKICAgICAgICAnMTAwJSc6ICcjODdkMDY4JywKICAgICAgfSwKICAgICAgc3Ryb2tlV2lkdGg6IDMsCiAgICAgIGZvcm1hdDogcGVyY2VudCA9PiBgJHtwYXJzZUZsb2F0KHBlcmNlbnQudG9GaXhlZCgyKSl9JWAsCiAgICAgIGNsYXNzOiAndGVzdCcsCiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgZmlsZUxpc3QsCiAgICAgIGhlYWRlcnM6IHsKICAgICAgICBhdXRob3JpemF0aW9uOiAnYXV0aG9yaXphdGlvbi10ZXh0JywKICAgICAgfSwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBwcm9ncmVzcywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICA6cHJvZ3Jlc3M9InByb2dyZXNzIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgQ2xpY2sgdG8gVXBsb2FkCiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gaW5mbyA9PiB7CiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7CiAgICAgIH0KCiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5YCk7CiAgICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTsKICAgICAgfQogICAgfTsKCiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbXSk7CiAgICBjb25zdCBwcm9ncmVzcyA9IHsKICAgICAgc3Ryb2tlQ29sb3I6IHsKICAgICAgICAnMCUnOiAnIzEwOGVlOScsCiAgICAgICAgJzEwMCUnOiAnIzg3ZDA2OCcsCiAgICAgIH0sCiAgICAgIHN0cm9rZVdpZHRoOiAzLAogICAgICBmb3JtYXQ6IHBlcmNlbnQgPT4gYCR7cGFyc2VGbG9hdChwZXJjZW50LnRvRml4ZWQoMikpfSVgLAogICAgICBjbGFzczogJ3Rlc3QnLAogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgcHJvZ3Jlc3MsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:a.headers,progress:a.progress,onChange:a.handleChange},{default:o(()=>[p(i,null,{default:o(()=>[p(l),fs]),_:1})]),_:1},8,["file-list","headers","progress","onChange"])]),htmlCode:o(()=>[ws]),jsVersionHtml:o(()=>[Zs]),_:1},8,["jsfiddle"])}var Gs=A(ys,[["render",vs]]);const Ws=h({components:{UploadOutlined:f},setup(){const a=I([]),t=I([]);return{fileList:a,fileList2:t}}}),Vs=s(" Upload (Max: 1) "),Bs=s(" Upload (Max: 3) "),Fs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-space")]),s(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("vertical"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":max-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Upload (Max: 1)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList2"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":max-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("3"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Upload (Max: 3)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList2 "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      fileList2`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Ls=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-space")]),s(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("vertical"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":max-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Upload (Max: 1)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList2"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("picture"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":max-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("3"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
        Upload (Max: 3)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      fileList2`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Xs(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("a-space"),m=e("demo-box");return C(),b(m,{jsfiddle:{us:"Limit files with `maxCount`. Will replace current one when `maxCount` is `1`.",cn:"\u901A\u8FC7 `maxCount` \u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A `1` \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u4EE3\u66FF\u5F53\u524D\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>maxCount</code> \u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A <code>1</code> \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u4EE3\u66FF\u5F53\u524D\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Limit files with <code>maxCount</code>. Will replace current one when <code>maxCount</code> is <code>1</code>.</p>
`,order:10,title:{"zh-CN":"\u9650\u5236\u6570\u91CF","en-US":"Max Count"},relativePath:"components/upload/demo/max-count.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSIgc2l6ZT0ibGFyZ2UiPgogICAgPGEtdXBsb2FkCiAgICAgIHYtbW9kZWw6ZmlsZS1saXN0PSJmaWxlTGlzdCIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgICA6bWF4LWNvdW50PSIxIgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDx1cGxvYWQtb3V0bGluZWQ+PC91cGxvYWQtb3V0bGluZWQ+CiAgICAgICAgVXBsb2FkIChNYXg6IDEpCiAgICAgIDwvYS1idXR0b24+CiAgICA8L2EtdXBsb2FkPgogICAgPGEtdXBsb2FkCiAgICAgIHYtbW9kZWw6ZmlsZS1saXN0PSJmaWxlTGlzdDIiCiAgICAgIGxpc3QtdHlwZT0icGljdHVyZSIKICAgICAgOm1heC1jb3VudD0iMyIKICAgICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA+CiAgICAgIDxhLWJ1dHRvbj4KICAgICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICAgIFVwbG9hZCAoTWF4OiAzKQogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBVcGxvYWRQcm9wcyB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXBsb2FkT3V0bGluZWQsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmPFVwbG9hZFByb3BzWydmaWxlTGlzdCddPihbXSk7CiAgICBjb25zdCBmaWxlTGlzdDIgPSByZWY8VXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J10+KFtdKTsKCiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgZmlsZUxpc3QyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSIgc2l6ZT0ibGFyZ2UiPgogICAgPGEtdXBsb2FkCiAgICAgIHYtbW9kZWw6ZmlsZS1saXN0PSJmaWxlTGlzdCIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgICA6bWF4LWNvdW50PSIxIgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDx1cGxvYWQtb3V0bGluZWQ+PC91cGxvYWQtb3V0bGluZWQ+CiAgICAgICAgVXBsb2FkIChNYXg6IDEpCiAgICAgIDwvYS1idXR0b24+CiAgICA8L2EtdXBsb2FkPgogICAgPGEtdXBsb2FkCiAgICAgIHYtbW9kZWw6ZmlsZS1saXN0PSJmaWxlTGlzdDIiCiAgICAgIGxpc3QtdHlwZT0icGljdHVyZSIKICAgICAgOm1heC1jb3VudD0iMyIKICAgICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA+CiAgICAgIDxhLWJ1dHRvbj4KICAgICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICAgIFVwbG9hZCAoTWF4OiAzKQogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWYoW10pOwogICAgY29uc3QgZmlsZUxpc3QyID0gcmVmKFtdKTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBmaWxlTGlzdDIsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(g,{direction:"vertical",style:{width:"100%"},size:"large"},{default:o(()=>[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=w=>a.fileList=w),"list-type":"picture","max-count":1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},{default:o(()=>[p(i,null,{default:o(()=>[p(l),Vs]),_:1})]),_:1},8,["file-list"]),p(d,{"file-list":a.fileList2,"onUpdate:file-list":t[1]||(t[1]=w=>a.fileList2=w),"list-type":"picture","max-count":3,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},{default:o(()=>[p(i,null,{default:o(()=>[p(l),Bs]),_:1})]),_:1},8,["file-list"])]),_:1})]),htmlCode:o(()=>[Fs]),jsVersionHtml:o(()=>[Ls]),_:1},8,["jsfiddle"])}var Us=A(Ws,[["render",Xs]]);const Ys=h({components:{UploadOutlined:f,StarOutlined:E},setup(){return{fileList:I([{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),handleChange:({file:c,fileList:u})=>{c.status!=="uploading"&&console.log(c,u)},handleClick:c=>{console.log(c,"custom removeIcon event")}}}}),xs=s(" Upload "),Hs=s("download"),Rs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-upload-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ showDownloadIcon: true, showRemoveIcon: true }"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#downloadIcon"),n("span",{class:"token punctuation"},">")]),s("download"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#removeIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("StarOutlined")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("StarOutlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined"),n("span",{class:"token punctuation"},","),s(" StarOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam"),n("span",{class:"token punctuation"},","),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
    StarOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// custom error message to show"),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// custom error message to show"),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" file"),n("span",{class:"token punctuation"},","),s(" fileList "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},","),s(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"handleClick"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),s(" MouseEvent")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'custom removeIcon event'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),zs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-upload-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ showDownloadIcon: true, showRemoveIcon: true }"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#downloadIcon"),n("span",{class:"token punctuation"},">")]),s("download"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#removeIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("StarOutlined")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("StarOutlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined"),n("span",{class:"token punctuation"},","),s(" StarOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
    StarOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// custom error message to show"),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// custom error message to show"),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
      file`),n("span",{class:"token punctuation"},","),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},","),s(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"handleClick"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token parameter"},"e"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'custom removeIcon event'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Js(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("StarOutlined"),g=e("a-upload"),m=e("demo-box");return C(),b(m,{jsfiddle:{us:"Use slot for custom action icons of files.",cn:"\u4F7F\u7528\u76F8\u5E94\u63D2\u69FD\u8BBE\u7F6E\u5217\u8868\u4EA4\u4E92\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528\u76F8\u5E94\u63D2\u69FD\u8BBE\u7F6E\u5217\u8868\u4EA4\u4E92\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use slot for custom action icons of files.</p>
`,order:12,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u4EA4\u4E92\u56FE\u6807","en-US":"custom action icon"},relativePath:"components/upload/demo/upload-custom-action-icon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6c2hvdy11cGxvYWQtbGlzdD0ieyBzaG93RG93bmxvYWRJY29uOiB0cnVlLCBzaG93UmVtb3ZlSWNvbjogdHJ1ZSB9IgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgVXBsb2FkCiAgICA8L2EtYnV0dG9uPgogICAgPHRlbXBsYXRlICNkb3dubG9hZEljb24+ZG93bmxvYWQ8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICNyZW1vdmVJY29uPjxTdGFyT3V0bGluZWQgQGNsaWNrPSJoYW5kbGVDbGljayI+PC9TdGFyT3V0bGluZWQ+PC90ZW1wbGF0ZT4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogICAgU3Rhck91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oWwogICAgICB7CiAgICAgICAgdWlkOiAnMScsCiAgICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS94eHgucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzInLAogICAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS95eXkucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzMnLAogICAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgICB9LAogICAgXSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgZmlsZSwgZmlsZUxpc3QgfTogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgaWYgKGZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGZpbGUsIGZpbGVMaXN0KTsKICAgICAgfQogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGhhbmRsZUNsaWNrOiAoZTogTW91c2VFdmVudCkgPT4gewogICAgICAgIGNvbnNvbGUubG9nKGUsICdjdXN0b20gcmVtb3ZlSWNvbiBldmVudCcpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6c2hvdy11cGxvYWQtbGlzdD0ieyBzaG93RG93bmxvYWRJY29uOiB0cnVlLCBzaG93UmVtb3ZlSWNvbjogdHJ1ZSB9IgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgVXBsb2FkCiAgICA8L2EtYnV0dG9uPgogICAgPHRlbXBsYXRlICNkb3dubG9hZEljb24+ZG93bmxvYWQ8L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlICNyZW1vdmVJY29uPjxTdGFyT3V0bGluZWQgQGNsaWNrPSJoYW5kbGVDbGljayI+PC9TdGFyT3V0bGluZWQ+PC90ZW1wbGF0ZT4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogICAgU3Rhck91dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWYoW3sKICAgICAgdWlkOiAnMScsCiAgICAgIG5hbWU6ICd4eHgucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsCiAgICAgIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20veHh4LnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJzInLAogICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS95eXkucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnMycsCiAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgc3RhdHVzOiAnZXJyb3InLAogICAgICByZXNwb25zZTogJ1NlcnZlciBFcnJvciA1MDAnLAogICAgICAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93CiAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgfV0pOwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7CiAgICAgIGZpbGUsCiAgICAgIGZpbGVMaXN0LAogICAgfSkgPT4gewogICAgICBpZiAoZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coZmlsZSwgZmlsZUxpc3QpOwogICAgICB9CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGhhbmRsZUNsaWNrOiBlID0+IHsKICAgICAgICBjb25zb2xlLmxvZyhlLCAnY3VzdG9tIHJlbW92ZUljb24gZXZlbnQnKTsKICAgICAgfSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:o(()=>[p(g,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=w=>a.fileList=w),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","show-upload-list":{showDownloadIcon:!0,showRemoveIcon:!0},onChange:a.handleChange},{downloadIcon:o(()=>[Hs]),removeIcon:o(()=>[p(d,{onClick:a.handleClick},null,8,["onClick"])]),default:o(()=>[p(i,null,{default:o(()=>[p(l),xs]),_:1})]),_:1},8,["file-list","onChange"])]),htmlCode:o(()=>[Rs]),jsVersionHtml:o(()=>[zs]),_:1},8,["jsfiddle"])}var Ss=A(Ys,[["render",Js]]);const js=h({components:{UploadOutlined:f},setup(){return{fileList:I([{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),handleChange:({file:u,fileList:r})=>{u.status!=="uploading"&&console.log(u,r)},beforeUpload:u=>{const r=u.type==="image/png";return r||y.error(`${u.name} is not a png file`),r||D.LIST_IGNORE}}}}),Ps=s(" Upload png only "),Ns=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload png only
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam"),n("span",{class:"token punctuation"},","),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message"),n("span",{class:"token punctuation"},","),s(" Upload "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// custom error message to show"),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// custom error message to show"),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" file"),n("span",{class:"token punctuation"},","),s(" fileList "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},","),s(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"beforeUpload"),n("span",{class:"token operator"},":"),s(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'beforeUpload'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" isPNG "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isPNG"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," is not a png file"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" isPNG "),n("span",{class:"token operator"},"||"),s(" Upload"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"LIST_IGNORE"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Ks=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Upload png only
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message"),n("span",{class:"token punctuation"},","),s(" Upload "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// custom error message to show"),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// custom error message to show"),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(`
      file`),n("span",{class:"token punctuation"},","),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},","),s(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"file"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" isPNG "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isPNG"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," is not a png file"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"return"),s(" isPNG "),n("span",{class:"token operator"},"||"),s(" Upload"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"LIST_IGNORE"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Ds(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-upload"),g=e("demo-box");return C(),b(g,{jsfiddle:{us:"`beforeUpload` only prevent upload behavior when return false or reject promise, the prevented file would still show in file list. Here is the example you can keep prevented files out of list by return `UPLOAD.LIST_IGNORE`.",cn:"`beforeUpload` \u8FD4\u56DE `false` \u6216 `Promise.reject` \u65F6\uFF0C\u53EA\u7528\u4E8E\u62E6\u622A\u4E0A\u4F20\u884C\u4E3A\uFF0C\u4E0D\u4F1A\u963B\u6B62\u6587\u4EF6\u8FDB\u5165\u4E0A\u4F20\u5217\u8868\uFF08[\u539F\u56E0](https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235)\uFF09\u3002\u5982\u679C\u9700\u8981\u963B\u6B62\u5217\u8868\u5C55\u73B0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE `Upload.LIST_IGNORE` \u5B9E\u73B0\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u6216 <code>Promise.reject</code> \u65F6\uFF0C\u53EA\u7528\u4E8E\u62E6\u622A\u4E0A\u4F20\u884C\u4E3A\uFF0C\u4E0D\u4F1A\u963B\u6B62\u6587\u4EF6\u8FDB\u5165\u4E0A\u4F20\u5217\u8868\uFF08<a href="https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235" target="_blank" rel="noopener noreferrer">\u539F\u56E0</a>\uFF09\u3002\u5982\u679C\u9700\u8981\u963B\u6B62\u5217\u8868\u5C55\u73B0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE <code>Upload.LIST_IGNORE</code> \u5B9E\u73B0\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>beforeUpload</code> only prevent upload behavior when return false or reject promise, the prevented file would still show in file list. Here is the example you can keep prevented files out of list by return <code>UPLOAD.LIST_IGNORE</code>.</p>
`,order:7.1,title:{"zh-CN":"\u53EA\u4E0A\u4F20 png \u56FE\u7247","en-US":"Upload png file only"},relativePath:"components/upload/demo/upload-png-only.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6YmVmb3JlLXVwbG9hZD0iYmVmb3JlVXBsb2FkIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgVXBsb2FkIHBuZyBvbmx5CiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IG1lc3NhZ2UsIFVwbG9hZCB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXBsb2FkT3V0bGluZWQsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmPFVwbG9hZFByb3BzWydmaWxlTGlzdCddPihbCiAgICAgIHsKICAgICAgICB1aWQ6ICcxJywKICAgICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3h4eC5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnMicsCiAgICAgICAgbmFtZTogJ3l5eS5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3l5eS5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnMycsCiAgICAgICAgbmFtZTogJ3p6ei5wbmcnLAogICAgICAgIHN0YXR1czogJ2Vycm9yJywKICAgICAgICByZXNwb25zZTogJ1NlcnZlciBFcnJvciA1MDAnLCAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93CiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20venp6LnBuZycsCiAgICAgIH0sCiAgICBdKTsKCiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyBmaWxlLCBmaWxlTGlzdCB9OiBVcGxvYWRDaGFuZ2VQYXJhbSkgPT4gewogICAgICBpZiAoZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coZmlsZSwgZmlsZUxpc3QpOwogICAgICB9CiAgICB9OwogICAgY29uc3QgYmVmb3JlVXBsb2FkOiBVcGxvYWRQcm9wc1snYmVmb3JlVXBsb2FkJ10gPSBmaWxlID0+IHsKICAgICAgY29uc3QgaXNQTkcgPSBmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnOwogICAgICBpZiAoIWlzUE5HKSB7CiAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtmaWxlLm5hbWV9IGlzIG5vdCBhIHBuZyBmaWxlYCk7CiAgICAgIH0KICAgICAgcmV0dXJuIGlzUE5HIHx8IFVwbG9hZC5MSVNUX0lHTk9SRTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBiZWZvcmVVcGxvYWQsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6YmVmb3JlLXVwbG9hZD0iYmVmb3JlVXBsb2FkIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPHVwbG9hZC1vdXRsaW5lZD48L3VwbG9hZC1vdXRsaW5lZD4KICAgICAgVXBsb2FkIHBuZyBvbmx5CiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBtZXNzYWdlLCBVcGxvYWQgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXBsb2FkT3V0bGluZWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbewogICAgICB1aWQ6ICcxJywKICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywKICAgICAgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS94eHgucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnMicsCiAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3l5eS5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICczJywKICAgICAgbmFtZTogJ3p6ei5wbmcnLAogICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsCiAgICAgIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20venp6LnBuZycsCiAgICB9XSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsKICAgICAgZmlsZSwKICAgICAgZmlsZUxpc3QsCiAgICB9KSA9PiB7CiAgICAgIGlmIChmaWxlLnN0YXR1cyAhPT0gJ3VwbG9hZGluZycpIHsKICAgICAgICBjb25zb2xlLmxvZyhmaWxlLCBmaWxlTGlzdCk7CiAgICAgIH0KICAgIH07CgogICAgY29uc3QgYmVmb3JlVXBsb2FkID0gZmlsZSA9PiB7CiAgICAgIGNvbnN0IGlzUE5HID0gZmlsZS50eXBlID09PSAnaW1hZ2UvcG5nJzsKCiAgICAgIGlmICghaXNQTkcpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKGAke2ZpbGUubmFtZX0gaXMgbm90IGEgcG5nIGZpbGVgKTsKICAgICAgfQoKICAgICAgcmV0dXJuIGlzUE5HIHx8IFVwbG9hZC5MSVNUX0lHTk9SRTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgZmlsZUxpc3QsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgYmVmb3JlVXBsb2FkLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:o(()=>[p(d,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=m=>a.fileList=m),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":a.beforeUpload,onChange:a.handleChange},{default:o(()=>[p(i,null,{default:o(()=>[p(l),Ps]),_:1})]),_:1},8,["file-list","before-upload","onChange"])]),htmlCode:o(()=>[Ns]),jsVersionHtml:o(()=>[Ks]),_:1},8,["jsfiddle"])}var Qs=A(js,[["render",Ds]]);const Os=h({components:{UploadOutlined:f},setup(){const a=c=>{c.file.status!=="uploading"&&console.log(c.file,c.fileList),c.file.status==="done"?y.success(`${c.file.name} file uploaded successfully`):c.file.status==="error"&&y.error(`${c.file.name} file upload failed.`)};return{fileList:I([{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),headers:{authorization:"authorization-text"},handleChange:a}}}),Es=s(" Click to Upload "),Ts=["onClick"],Ms=["onClick"],_s=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("headers"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#itemRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ file, actions }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file.status === "),n("span",{class:"token punctuation"},"'"),s("error"),n("span",{class:"token punctuation"},"'"),s(" ? "),n("span",{class:"token punctuation"},"'"),s("color: red"),n("span",{class:"token punctuation"},"'"),s(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("javascript:;"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("actions.download"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("download"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("javascript:;"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("actions.remove"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" UploadChangeParam"),n("span",{class:"token punctuation"},","),s(" UploadProps "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"info"),n("span",{class:"token operator"},":"),s(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// custom error message to show"),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"authorization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),qs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-upload")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileList"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("headers"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleChange"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("upload-outlined")]),n("span",{class:"token punctuation"},">")]),s(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#itemRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ file, actions }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file.status === "),n("span",{class:"token punctuation"},"'"),s("error"),n("span",{class:"token punctuation"},"'"),s(" ? "),n("span",{class:"token punctuation"},"'"),s("color: red"),n("span",{class:"token punctuation"},"'"),s(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("javascript:;"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("actions.download"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("download"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("javascript:;"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("actions.remove"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UploadOutlined "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    UploadOutlined`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"info"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},","),s(" info"),n("span",{class:"token punctuation"},"."),s("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("status "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("info"),n("span",{class:"token punctuation"},"."),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" fileList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"thumbUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"uid"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"status"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"response"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// custom error message to show"),s(`
      `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileList`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"headers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"authorization"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      handleChange`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function $s(a,t,c,u,r,k){const l=e("upload-outlined"),i=e("a-button"),d=e("a-space"),g=e("a-upload"),m=e("demo-box");return C(),b(m,{jsfiddle:{us:"Custom render by using `itemRender` slot.",cn:"\u4F7F\u7528 `itemRender` \u63D2\u69FD\u8FDB\u884C\u5B8C\u5168\u81EA\u5B9A\u4E49\u5217\u8868",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>itemRender</code> \u63D2\u69FD\u8FDB\u884C\u5B8C\u5168\u81EA\u5B9A\u4E49\u5217\u8868</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Custom render by using <code>itemRender</code> slot.</p>
`,order:0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868","en-US":"Custom Render"},relativePath:"components/upload/demo/custom-render.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPGEtYnV0dG9uPgogICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICBDbGljayB0byBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgICA8dGVtcGxhdGUgI2l0ZW1SZW5kZXI9InsgZmlsZSwgYWN0aW9ucyB9Ij4KICAgICAgPGEtc3BhY2U+CiAgICAgICAgPHNwYW4gOnN0eWxlPSJmaWxlLnN0YXR1cyA9PT0gJ2Vycm9yJyA/ICdjb2xvcjogcmVkJyA6ICcnIj57eyBmaWxlLm5hbWUgfX08L3NwYW4+CiAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7IiBAY2xpY2s9ImFjdGlvbnMuZG93bmxvYWQiPmRvd25sb2FkPC9hPgogICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6OyIgQGNsaWNrPSJhY3Rpb25zLnJlbW92ZSI+ZGVsZXRlPC9hPgogICAgICA8L2Etc3BhY2U+CiAgICA8L3RlbXBsYXRlPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkUHJvcHMgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbzogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTsKICAgICAgfQogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7CiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseWApOwogICAgICB9IGVsc2UgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7CiAgICAgIH0KICAgIH07CgogICAgY29uc3QgZmlsZUxpc3QgPSByZWY8VXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J10+KFsKICAgICAgewogICAgICAgIHVpZDogJy0xJywKICAgICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJy0yJywKICAgICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzMnLAogICAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgICB9LAogICAgXSk7CiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgaGVhZGVyczogewogICAgICAgIGF1dGhvcml6YXRpb246ICdhdXRob3JpemF0aW9uLXRleHQnLAogICAgICB9LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPGEtYnV0dG9uPgogICAgICA8dXBsb2FkLW91dGxpbmVkPjwvdXBsb2FkLW91dGxpbmVkPgogICAgICBDbGljayB0byBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgICA8dGVtcGxhdGUgI2l0ZW1SZW5kZXI9InsgZmlsZSwgYWN0aW9ucyB9Ij4KICAgICAgPGEtc3BhY2U+CiAgICAgICAgPHNwYW4gOnN0eWxlPSJmaWxlLnN0YXR1cyA9PT0gJ2Vycm9yJyA/ICdjb2xvcjogcmVkJyA6ICcnIj57eyBmaWxlLm5hbWUgfX08L3NwYW4+CiAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7IiBAY2xpY2s9ImFjdGlvbnMuZG93bmxvYWQiPmRvd25sb2FkPC9hPgogICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6OyIgQGNsaWNrPSJhY3Rpb25zLnJlbW92ZSI+ZGVsZXRlPC9hPgogICAgICA8L2Etc3BhY2U+CiAgICA8L3RlbXBsYXRlPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVwbG9hZE91dGxpbmVkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gaW5mbyA9PiB7CiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7CiAgICAgIH0KCiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5YCk7CiAgICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTsKICAgICAgfQogICAgfTsKCiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbewogICAgICB1aWQ6ICctMScsCiAgICAgIG5hbWU6ICd4eHgucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB0aHVtYlVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICctMicsCiAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB0aHVtYlVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICczJywKICAgICAgbmFtZTogJ3p6ei5wbmcnLAogICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsCiAgICAgIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20venp6LnBuZycsCiAgICB9XSk7CiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgaGVhZGVyczogewogICAgICAgIGF1dGhvcml6YXRpb246ICdhdXRob3JpemF0aW9uLXRleHQnLAogICAgICB9LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:o(()=>[p(g,{"file-list":a.fileList,"onUpdate:file-list":t[0]||(t[0]=w=>a.fileList=w),name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:a.headers,onChange:a.handleChange},{itemRender:o(({file:w,actions:v})=>[p(d,null,{default:o(()=>[n("span",{style:Q(w.status==="error"?"color: red":"")},V(w.name),5),n("a",{href:"javascript:;",onClick:v.download},"download",8,Ts),n("a",{href:"javascript:;",onClick:v.remove},"delete",8,Ms)]),_:2},1024)]),default:o(()=>[p(i,null,{default:o(()=>[p(l),Es]),_:1})]),_:1},8,["file-list","headers","onChange"])]),htmlCode:o(()=>[_s]),jsVersionHtml:o(()=>[qs]),_:1},8,["jsfiddle"])}var na=A(Os,[["render",$s]]);const sa={pageData:{title:"Upload",description:"",frontmatter:{category:"Components",subtitle:"\u4E0A\u4F20",type:"\u6570\u636E\u5F55\u5165",title:"Upload",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002"},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"UploadFile",slug:"UploadFile",content:"\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002"},{level:3,title:"change",slug:"change",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F"},{level:3,title:"\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F",slug:"\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F",content:""},{level:3,title:"\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F",slug:"\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F",content:"\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002"},{level:3,title:"customRequest \u600E\u4E48\u4F7F\u7528\uFF1F",slug:"customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F",content:"\u8BF7\u53C2\u8003 <https://github.com/react-component/upload#customrequest>\u3002"},{level:3,title:"\u4E3A\u4F55 fileList \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 onChange \u540E\u7EED\u7684 status \u66F4\u65B0\u4E8B\u4EF6\uFF1F",slug:"\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F",content:"`onChange` \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C `fileList` \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 `3.0.0-beta.10` \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002"},{level:3,title:"onChange \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F",slug:"onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F",content:"\u5386\u53F2\u539F\u56E0\uFF0C\u5728 `beforeUpload` \u8FD4\u56DE `false` \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE `{ originFileObj: File }` \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B `info.file.originFileObj` \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002"}],relativePath:"components/upload/index.zh-CN.md",content:`
\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002

## \u4F55\u65F6\u4F7F\u7528

\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002

- \u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002
- \u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002
- \u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |  |
| --- | --- | --- | --- | --- | --- |
| accept | \u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | \u65E0 |  |  |
| action | \u4E0A\u4F20\u7684\u5730\u5740 | string\\|(file) =&gt; \`Promise\` | \u65E0 |  |  |
| beforeUpload | \u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE \`false\` \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 \`File\` \u6216 \`Blob\` \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\u3002 | (file, fileList) =&gt; \\\`boolean | Promise\\\` | \u65E0 |  |
| customRequest | \u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0 | Function | \u65E0 |  |  |
| data | \u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5 | object\\|(file) =&gt; object | \u65E0 |  |  |
| directory | \u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08[caniuse](https://caniuse.com/#feat=input-file-directory)\uFF09 | boolean | false |  |  |
| directory | \u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08[caniuse](https://caniuse.com/#feat=input-file-directory)\uFF09 | boolean | false | 3.0 |  |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |  |  |
| downloadIcon | \u81EA\u5B9A\u4E49\u4E0B\u8F7D icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| fileList | \u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09 | object\\[] | \u65E0 |  |  |
| headers | \u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548 | object | \u65E0 |  |  |
| iconRender | \u81EA\u5B9A\u4E49\u663E\u793A icon | v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot; | - | 3.0 |  |
| isImageUrl | \u81EA\u5B9A\u4E49\u7F29\u7565\u56FE\u662F\u5426\u4F7F\u7528 &amp;lt;img /&gt; \u6807\u7B7E\u8FDB\u884C\u663E\u793A | (file: UploadFile) =&gt; boolean | - | 3.0 |  |
| itemRender | \u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879 | v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object\\[], actions: { download: function, preview: function, remove: function }&quot; | - | 3.0 |  |
| listType | \u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F \`text\`, \`picture\` \u548C \`picture-card\` | string | \`text\` |  |  |
| maxCount | \u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A 1 \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u6587\u4EF6\u4EE3\u66FF\u5F53\u524D\u6587\u4EF6 | number | - | 3.0 |  |
| method | \u4E0A\u4F20\u8BF7\u6C42\u7684 http method | string | \`post\` | 1.5.0 |  |
| multiple | \u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C\`ie10+\` \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002 | boolean | false |  |  |
| name | \u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D | string | \`file\` |  |  |
| openFileDialogOnClick | \u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846 | boolean | true |  |  |
| openFileDialogOnClick | \u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846 | boolean | true | 3.0 |  |
| previewFile | \u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91 | (file: File \\| Blob) =&gt; Promise&amp;lt;dataURL: string&gt; | \u65E0 | 1.5.0 |  |
| previewIcon | \u81EA\u5B9A\u4E49\u9884\u89C8 icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| progress | \u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F | [ProgressProps](/components/progress/#API)\uFF08\u4EC5\u652F\u6301 \`type=&quot;line&quot;\`\uFF09 | { strokeWidth: 2, showInfo: false } | 3.0 |  |
| removeIcon | \u81EA\u5B9A\u4E49\u5220\u9664 icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| showUploadList | \u662F\u5426\u5C55\u793A uploadList, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A showPreviewIcon \u548C showRemoveIcon | Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean } | true | showDownloadIcon(3.0) |  |
| supportServerRender | \u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u9700\u8981\u6253\u5F00\u8FD9\u4E2A | boolean | false |  |  |
| withCredentials | \u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie | boolean | false |  |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 | \u7248\u672C |  |
| --- | --- | --- | --- | --- |
| change | \u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 [change](#change) | Function | \u65E0 |  |
| download | \u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875\u3002 | Function(file): void | \u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875 | 1.5.0 |
| drop | \u5F53\u6587\u4EF6\u88AB\u62D6\u5165\u4E0A\u4F20\u533A\u57DF\u65F6\u6267\u884C\u7684\u56DE\u8C03\u529F\u80FD | (event: DragEvent) =&gt; void | - | 3.0 |
| preview | \u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03 | Function(file) | \u65E0 |  |
| reject | \u62D6\u62FD\u6587\u4EF6\u4E0D\u7B26\u5408 accept \u7C7B\u578B\u65F6\u7684\u56DE\u8C03 | Function(fileList) | \u65E0 |  |
| remove \xA0 | \u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664 | function(file): boolean \\| Promise | - \xA0 | 3.0 |

### UploadFile

\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
| --- | --- | --- | --- |
| name | \u6587\u4EF6\u540D | string | - |
| percent | \u4E0A\u4F20\u8FDB\u5EA6 | number | - |
| status | \u4E0A\u4F20\u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u5C55\u793A\u989C\u8272\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C | \`error\` \\| \`success\` \\| \`done\` \\| \`uploading\` \\| \`removed\` | - |
| thumbUrl | \u7F29\u7565\u56FE\u5730\u5740 | string | - |
| uid | \u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210 | string | - |
| url | \u4E0B\u8F7D\u5730\u5740 | string | - |

### change

&gt; \u4E0A\u4F20\u4E2D\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002

\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A

\`\`\`jsx
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
\`\`\`

1. \`file\` \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002

   \`\`\`jsx
   {
      uid: &#39;uid&#39;,      // \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81
      name: &#39;xx.png&#39;,   // \u6587\u4EF6\u540D
      status: &#39;done&#39;, // \u72B6\u6001\u6709\uFF1Auploading done error removed
      response: &#39;{&quot;status&quot;: &quot;success&quot;}&#39;, // \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9
      linkProps: &#39;{&quot;download&quot;: &quot;image&quot;}&#39;, // \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027
      xhr: &#39;XMLHttpRequest{ ... }&#39;, // XMLHttpRequest Header
   }
   \`\`\`

2. \`fileList\` \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002

3. \`event\` \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002

## FAQ

### \u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F

- \u670D\u52A1\u7AEF\u4E0A\u4F20\u63A5\u53E3\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003 [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki#server-side)\u3002
- \u5982\u679C\u8981\u505A\u672C\u5730 mock \u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A [express \u7684\u4F8B\u5B50](https://github.com/react-component/upload/blob/master/server.js)\u3002

### \u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F

\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002

### \`customRequest\` \u600E\u4E48\u4F7F\u7528\uFF1F

\u8BF7\u53C2\u8003 &lt;https://github.com/react-component/upload#customrequest&gt;\u3002

### \u4E3A\u4F55 \`fileList\` \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 \`onChange\` \u540E\u7EED\u7684 \`status\` \u66F4\u65B0\u4E8B\u4EF6\uFF1F

\`onChange\` \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C \`fileList\` \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 \`3.0.0-beta.10\` \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002

### \`onChange\` \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F

\u5386\u53F2\u539F\u56E0\uFF0C\u5728 \`beforeUpload\` \u8FD4\u56DE \`false\` \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE \`{ originFileObj: File }\` \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B \`info.file.originFileObj\` \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002
`,html:`<p>\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002</p>
<ul>
<li>\u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002</li>
<li>\u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002</li>
<li>\u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>accept</td>
<td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td>
<td>string</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>action</td>
<td>\u4E0A\u4F20\u7684\u5730\u5740</td>
<td>string|(file) =&gt; <code>Promise</code></td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>beforeUpload</td>
<td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 <code>File</code> \u6216 <code>Blob</code> \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\u3002</td>
<td>(file, fileList) =&gt; \`boolean</td>
<td>Promise\`</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>customRequest</td>
<td>\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0</td>
<td>Function</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td>
<td>object|(file) =&gt; object</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>directory</td>
<td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>directory</td>
<td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>downloadIcon</td>
<td>\u81EA\u5B9A\u4E49\u4E0B\u8F7D icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>fileList</td>
<td>\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09</td>
<td>object[]</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>headers</td>
<td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548</td>
<td>object</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>iconRender</td>
<td>\u81EA\u5B9A\u4E49\u663E\u793A icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>isImageUrl</td>
<td>\u81EA\u5B9A\u4E49\u7F29\u7565\u56FE\u662F\u5426\u4F7F\u7528 &lt;img /&gt; \u6807\u7B7E\u8FDB\u884C\u663E\u793A</td>
<td>(file: UploadFile) =&gt; boolean</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>itemRender</td>
<td>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879</td>
<td>v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>listType</td>
<td>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F <code>text</code>, <code>picture</code> \u548C <code>picture-card</code></td>
<td>string</td>
<td><code>text</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxCount</td>
<td>\u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A 1 \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u6587\u4EF6\u4EE3\u66FF\u5F53\u524D\u6587\u4EF6</td>
<td>number</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>method</td>
<td>\u4E0A\u4F20\u8BF7\u6C42\u7684 http method</td>
<td>string</td>
<td><code>post</code></td>
<td>1.5.0</td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>ie10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td>
<td>string</td>
<td><code>file</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>openFileDialogOnClick</td>
<td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td>
<td>boolean</td>
<td>true</td>
<td></td>
<td></td>
</tr>
<tr>
<td>openFileDialogOnClick</td>
<td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>previewFile</td>
<td>\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91</td>
<td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td>
<td>\u65E0</td>
<td>1.5.0</td>
<td></td>
</tr>
<tr>
<td>previewIcon</td>
<td>\u81EA\u5B9A\u4E49\u9884\u89C8 icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>progress</td>
<td>\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F</td>
<td><a href="/components/progress/#API">ProgressProps</a>\uFF08\u4EC5\u652F\u6301 <code>type=&quot;line&quot;</code>\uFF09</td>
<td>{ strokeWidth: 2, showInfo: false }</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>removeIcon</td>
<td>\u81EA\u5B9A\u4E49\u5220\u9664 icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>showUploadList</td>
<td>\u662F\u5426\u5C55\u793A uploadList, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A showPreviewIcon \u548C showRemoveIcon</td>
<td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }</td>
<td>true</td>
<td>showDownloadIcon(3.0)</td>
<td></td>
</tr>
<tr>
<td>supportServerRender</td>
<td>\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u9700\u8981\u6253\u5F00\u8FD9\u4E2A</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>withCredentials</td>
<td>\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
<th>\u7248\u672C</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td>
<td>Function</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>download</td>
<td>\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875\u3002</td>
<td>Function(file): void</td>
<td>\u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875</td>
<td>1.5.0</td>
</tr>
<tr>
<td>drop</td>
<td>\u5F53\u6587\u4EF6\u88AB\u62D6\u5165\u4E0A\u4F20\u533A\u57DF\u65F6\u6267\u884C\u7684\u56DE\u8C03\u529F\u80FD</td>
<td>(event: DragEvent) =&gt; void</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>preview</td>
<td>\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03</td>
<td>Function(file)</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>reject</td>
<td>\u62D6\u62FD\u6587\u4EF6\u4E0D\u7B26\u5408 accept \u7C7B\u578B\u65F6\u7684\u56DE\u8C03</td>
<td>Function(fileList)</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>remove</td>
<td>\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664</td>
<td>function(file): boolean | Promise</td>
<td>-</td>
<td>3.0</td>
</tr>
</tbody>
</table>
<h3 id="UploadFile">UploadFile <a class="header-anchor" href="#UploadFile">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002</p>
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
<td>name</td>
<td>\u6587\u4EF6\u540D</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>percent</td>
<td>\u4E0A\u4F20\u8FDB\u5EA6</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>status</td>
<td>\u4E0A\u4F20\u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u5C55\u793A\u989C\u8272\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C</td>
<td><code>error</code> | <code>success</code> | <code>done</code> | <code>uploading</code> | <code>removed</code></td>
<td>-</td>
</tr>
<tr>
<td>thumbUrl</td>
<td>\u7F29\u7565\u56FE\u5730\u5740</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>uid</td>
<td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>url</td>
<td>\u4E0B\u8F7D\u5730\u5740</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="change">change <a class="header-anchor" href="#change">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<blockquote>
<p>\u4E0A\u4F20\u4E2D\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002</p>
</blockquote>
<p>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A</p>
<pre class="language-jsx" v-pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
<ol>
<li>
<p><code>file</code> \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002</p>
<pre class="language-jsx" v-pre><code><span class="token punctuation">{</span>
   <span class="token literal-property property">uid</span><span class="token operator">:</span> <span class="token string">'uid'</span><span class="token punctuation">,</span>      <span class="token comment">// \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'xx.png'</span><span class="token punctuation">,</span>   <span class="token comment">// \u6587\u4EF6\u540D</span>
   <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span> <span class="token comment">// \u72B6\u6001\u6709\uFF1Auploading done error removed</span>
   <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token string">'{"status": "success"}'</span><span class="token punctuation">,</span> <span class="token comment">// \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9</span>
   <span class="token literal-property property">linkProps</span><span class="token operator">:</span> <span class="token string">'{"download": "image"}'</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027</span>
   <span class="token literal-property property">xhr</span><span class="token operator">:</span> <span class="token string">'XMLHttpRequest{ ... }'</span><span class="token punctuation">,</span> <span class="token comment">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>
</code></pre>
</li>
<li>
<p><code>fileList</code> \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002</p>
</li>
<li>
<p><code>event</code> \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002</p>
</li>
</ol>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F">\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<ul>
<li>\u670D\u52A1\u7AEF\u4E0A\u4F20\u63A5\u53E3\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/blueimp/jQuery-File-Upload/wiki#server-side" target="_blank" rel="noopener noreferrer">jQuery-File-Upload</a>\u3002</li>
<li>\u5982\u679C\u8981\u505A\u672C\u5730 mock \u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A <a href="https://github.com/react-component/upload/blob/master/server.js" target="_blank" rel="noopener noreferrer">express \u7684\u4F8B\u5B50</a>\u3002</li>
</ul>
<h3 id="\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F">\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002</p>
<h3 id="customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F"><code>customRequest</code> \u600E\u4E48\u4F7F\u7528\uFF1F <a class="header-anchor" href="#customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u8BF7\u53C2\u8003 <a href="https://github.com/react-component/upload#customrequest" target="_blank" rel="noopener noreferrer">https://github.com/react-component/upload#customrequest</a>\u3002</p>
<h3 id="\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F">\u4E3A\u4F55 <code>fileList</code> \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 <code>onChange</code> \u540E\u7EED\u7684 <code>status</code> \u66F4\u65B0\u4E8B\u4EF6\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>onChange</code> \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C <code>fileList</code> \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 <code>3.0.0-beta.10</code> \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002</p>
<h3 id="onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F"><code>onChange</code> \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F <a class="header-anchor" href="#onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5386\u53F2\u539F\u56E0\uFF0C\u5728 <code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE <code>{ originFileObj: File }</code> \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B <code>info.file.originFileObj</code> \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002</p>
`,lastUpdated:1648882138641}},aa={class:"markdown"},ta=B(`<p>\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002</p><ul><li>\u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002</li><li>\u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002</li><li>\u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td><td>string</td><td>\u65E0</td><td></td><td></td></tr><tr><td>action</td><td>\u4E0A\u4F20\u7684\u5730\u5740</td><td>string|(file) =&gt; <code>Promise</code></td><td>\u65E0</td><td></td><td></td></tr><tr><td>beforeUpload</td><td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 <code>File</code> \u6216 <code>Blob</code> \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\u3002</td><td>(file, fileList) =&gt; \`boolean</td><td>Promise\`</td><td>\u65E0</td><td></td></tr><tr><td>customRequest</td><td>\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0</td><td>Function</td><td>\u65E0</td><td></td><td></td></tr><tr><td>data</td><td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td><td>object|(file) =&gt; object</td><td>\u65E0</td><td></td><td></td></tr><tr><td>directory</td><td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>directory</td><td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td><td>boolean</td><td>false</td><td>3.0</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>downloadIcon</td><td>\u81EA\u5B9A\u4E49\u4E0B\u8F7D icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>fileList</td><td>\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09</td><td>object[]</td><td>\u65E0</td><td></td><td></td></tr><tr><td>headers</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548</td><td>object</td><td>\u65E0</td><td></td><td></td></tr><tr><td>iconRender</td><td>\u81EA\u5B9A\u4E49\u663E\u793A icon</td><td>v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>isImageUrl</td><td>\u81EA\u5B9A\u4E49\u7F29\u7565\u56FE\u662F\u5426\u4F7F\u7528 &lt;img /&gt; \u6807\u7B7E\u8FDB\u884C\u663E\u793A</td><td>(file: UploadFile) =&gt; boolean</td><td>-</td><td>3.0</td><td></td></tr><tr><td>itemRender</td><td>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879</td><td>v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>listType</td><td>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F <code>text</code>, <code>picture</code> \u548C <code>picture-card</code></td><td>string</td><td><code>text</code></td><td></td><td></td></tr><tr><td>maxCount</td><td>\u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A 1 \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u6587\u4EF6\u4EE3\u66FF\u5F53\u524D\u6587\u4EF6</td><td>number</td><td>-</td><td>3.0</td><td></td></tr><tr><td>method</td><td>\u4E0A\u4F20\u8BF7\u6C42\u7684 http method</td><td>string</td><td><code>post</code></td><td>1.5.0</td><td></td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>ie10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>name</td><td>\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td><td>string</td><td><code>file</code></td><td></td><td></td></tr><tr><td>openFileDialogOnClick</td><td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td><td>boolean</td><td>true</td><td></td><td></td></tr><tr><td>openFileDialogOnClick</td><td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td><td>boolean</td><td>true</td><td>3.0</td><td></td></tr><tr><td>previewFile</td><td>\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91</td><td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td><td>\u65E0</td><td>1.5.0</td><td></td></tr><tr><td>previewIcon</td><td>\u81EA\u5B9A\u4E49\u9884\u89C8 icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>progress</td><td>\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F</td><td><a href="/components/progress/#API">ProgressProps</a>\uFF08\u4EC5\u652F\u6301 <code>type=&quot;line&quot;</code>\uFF09</td><td>{ strokeWidth: 2, showInfo: false }</td><td>3.0</td><td></td></tr><tr><td>removeIcon</td><td>\u81EA\u5B9A\u4E49\u5220\u9664 icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>showUploadList</td><td>\u662F\u5426\u5C55\u793A uploadList, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A showPreviewIcon \u548C showRemoveIcon</td><td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }</td><td>true</td><td>showDownloadIcon(3.0)</td><td></td></tr><tr><td>supportServerRender</td><td>\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u9700\u8981\u6253\u5F00\u8FD9\u4E2A</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>withCredentials</td><td>\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie</td><td>boolean</td><td>false</td><td></td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>change</td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td><td>Function</td><td>\u65E0</td><td></td></tr><tr><td>download</td><td>\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875\u3002</td><td>Function(file): void</td><td>\u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875</td><td>1.5.0</td></tr><tr><td>drop</td><td>\u5F53\u6587\u4EF6\u88AB\u62D6\u5165\u4E0A\u4F20\u533A\u57DF\u65F6\u6267\u884C\u7684\u56DE\u8C03\u529F\u80FD</td><td>(event: DragEvent) =&gt; void</td><td>-</td><td>3.0</td></tr><tr><td>preview</td><td>\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03</td><td>Function(file)</td><td>\u65E0</td><td></td></tr><tr><td>reject</td><td>\u62D6\u62FD\u6587\u4EF6\u4E0D\u7B26\u5408 accept \u7C7B\u578B\u65F6\u7684\u56DE\u8C03</td><td>Function(fileList)</td><td>\u65E0</td><td></td></tr><tr><td>remove</td><td>\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664</td><td>function(file): boolean | Promise</td><td>-</td><td>3.0</td></tr></tbody></table><h3 id="UploadFile">UploadFile <a class="header-anchor" href="#UploadFile"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u6587\u4EF6\u540D</td><td>string</td><td>-</td></tr><tr><td>percent</td><td>\u4E0A\u4F20\u8FDB\u5EA6</td><td>number</td><td>-</td></tr><tr><td>status</td><td>\u4E0A\u4F20\u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u5C55\u793A\u989C\u8272\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C</td><td><code>error</code> | <code>success</code> | <code>done</code> | <code>uploading</code> | <code>removed</code></td><td>-</td></tr><tr><td>thumbUrl</td><td>\u7F29\u7565\u56FE\u5730\u5740</td><td>string</td><td>-</td></tr><tr><td>uid</td><td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210</td><td>string</td><td>-</td></tr><tr><td>url</td><td>\u4E0B\u8F7D\u5730\u5740</td><td>string</td><td>-</td></tr></tbody></table><h3 id="change">change <a class="header-anchor" href="#change"><span aria-hidden="true" class="anchor">#</span></a></h3><blockquote><p>\u4E0A\u4F20\u4E2D\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002</p></blockquote><p>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A</p><pre class="language-jsx"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><ol><li><p><code>file</code> \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002</p><pre class="language-jsx"><code><span class="token punctuation">{</span>
   <span class="token literal-property property">uid</span><span class="token operator">:</span> <span class="token string">&#39;uid&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xx.png&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// \u6587\u4EF6\u540D</span>
   <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;done&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u72B6\u6001\u6709\uFF1Auploading done error removed</span>
   <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token string">&#39;{&quot;status&quot;: &quot;success&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9</span>
   <span class="token literal-property property">linkProps</span><span class="token operator">:</span> <span class="token string">&#39;{&quot;download&quot;: &quot;image&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027</span>
   <span class="token literal-property property">xhr</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest{ ... }&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p><code>fileList</code> \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002</p></li><li><p><code>event</code> \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002</p></li></ol><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F">\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><ul><li>\u670D\u52A1\u7AEF\u4E0A\u4F20\u63A5\u53E3\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/blueimp/jQuery-File-Upload/wiki#server-side" target="_blank" rel="noopener noreferrer">jQuery-File-Upload</a>\u3002</li><li>\u5982\u679C\u8981\u505A\u672C\u5730 mock \u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A <a href="https://github.com/react-component/upload/blob/master/server.js" target="_blank" rel="noopener noreferrer">express \u7684\u4F8B\u5B50</a>\u3002</li></ul><h3 id="\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F">\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002</p><h3 id="customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F"><code>customRequest</code> \u600E\u4E48\u4F7F\u7528\uFF1F <a class="header-anchor" href="#customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u8BF7\u53C2\u8003 <a href="https://github.com/react-component/upload#customrequest" target="_blank" rel="noopener noreferrer">https://github.com/react-component/upload#customrequest</a>\u3002</p><h3 id="\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F">\u4E3A\u4F55 <code>fileList</code> \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 <code>onChange</code> \u540E\u7EED\u7684 <code>status</code> \u66F4\u65B0\u4E8B\u4EF6\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>onChange</code> \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C <code>fileList</code> \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 <code>3.0.0-beta.10</code> \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002</p><h3 id="onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F"><code>onChange</code> \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F <a class="header-anchor" href="#onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5386\u53F2\u539F\u56E0\uFF0C\u5728 <code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE <code>{ originFileObj: File }</code> \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B <code>info.file.originFileObj</code> \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002</p>`,27),oa=[ta];function ea(a,t,c,u,r,k){return C(),Z("article",aa,oa)}var pa=A(sa,[["render",ea]]);const ca={pageData:{title:"Upload",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"Upload",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool."},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""},{level:3,title:"UploadFile",slug:"UploadFile",content:"Extends File with additional props."},{level:3,title:"change",slug:"change",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"How do I implement upload server side?"},{level:3,title:"How do I implement upload server side?",slug:"How-do-I-implement-upload-server-side",content:""},{level:3,title:"I want to display download links.",slug:"I-want-to-display-download-links",content:"Please set property `url` of each item in `fileList` to control content of link."},{level:3,title:"How to use customRequest?",slug:"How-to-use-customRequest",content:"See <https://github.com/react-component/upload#customrequest>."},{level:3,title:"Why will the fileList that's in control not trigger change status update when the file is not in the list?",slug:"Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list",content:"`change` only trigger when file in the list, it will ignore left events when removed from the list. Please note that there exist bug which makes event still trigger even the file is not in the list before `3.0.0-beta.10`."},{level:3,title:"Why does change sometimes return File object and other times return { originFileObj: File }?",slug:"Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File",content:"For compatible case, we return File object when `beforeUpload` return `false`. It will merge to `{ originFileObj: File }` in next major version. Current version is compatible to get origin file by `info.file.originFileObj`. You can change this before major release."}],relativePath:"components/upload/index.en-US.md",content:`
Upload file by selecting or dragging.

## When To Use

Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

- When you need to upload one or more files.
- When you need to show the process of uploading.
- When you need to upload files by dragging and dropping.

## API

| Property | Description | Type | Default | Version |  |
| --- | --- | --- | --- | --- | --- |
| accept | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |  |  |
| action | Uploading URL | string\\|(file) =&gt; \`Promise\` | - |  |  |
| beforeUpload | Hook function which will be executed before uploading. Uploading will be stopped with \`false\` or a rejected Promise returned. | (file, fileList) =&gt; \\\`boolean | Promise\\\` | - |  |
| customRequest | override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest | Function | - |  |  |
| data | Uploading params or function which can return uploading params. | object\\|function(file) | - |  |  |
| directory | support upload whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory)) | boolean | false |  |  |
| directory | Support upload whole directory\uFF08[caniuse](https://caniuse.com/#feat=input-file-directory)\uFF09 | boolean | false | 3.0 |  |
| disabled | disable upload button | boolean | false |  |  |
| downloadIcon | custom download icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| fileList | List of files that have been uploaded (controlled). Here is a common issue [#2423](https://github.com/ant-design/ant-design/issues/2423) when using it | object\\[] | - |  |  |
| headers | Set request headers, valid above IE10. | object | - |  |  |
| iconRender | Custom show icon | v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot; | - | 3.0 |  |
| isImageUrl | Customize if render &amp;lt;img /&gt; in thumbnail | (file: UploadFile) =&gt; boolean | - | 3.0 |  |
| itemRender | Custom item of uploadList | v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object\\[], actions: { download: function, preview: function, remove: function }&quot; | - | 3.0 |  |
| listType | Built-in stylesheets, support for three types: \`text\`, \`picture\` or \`picture-card\` | string | \`text\` |  |  |
| maxCount | Limit the number of uploaded files. Will replace current one when \`maxCount\` is \`1\` | number | - | 3.0 |  |
| method | http method of upload request | string | \`post\` | 1.5.0 |  |
| multiple | Whether to support selected multiple file. \`IE10+\` supported. You can select multiple files with CTRL holding down while multiple is set to be true | boolean | false |  |  |
| name | The name of uploading file | string | \`file\` |  |  |
| openFileDialogOnClick | click open file dialog | boolean | true |  |  |
| openFileDialogOnClick | Click open file dialog | boolean | true | 3.0 |  |
| previewFile | Customize preview file logic | (file: File \\| Blob) =&gt; Promise&amp;lt;dataURL: string&gt; | - | 1.5.0 |  |
| previewIcon | custom preview icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| progress | Custom progress bar | [ProgressProps](/components/progress/#API) (support \`type=&quot;line&quot;\` only) | { strokeWidth: 2, showInfo: false } | 3.0 |  |
| removeIcon | custom remove icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| showUploadList | Whether to show default upload list, could be an object to specify \`showPreviewIcon\` and \`showRemoveIcon\` individually | Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: booleanshowDownloadIcon?: boolean } | true | showDownloadIcon(3.0) |  |
| supportServerRender | Need to be turned on while the server side is rendering. | boolean | false |  |  |
| withCredentials | ajax upload with cookie sent | boolean | false |  |  |

### events

| Events Name | Description | Arguments | Version |  |
| --- | --- | --- | --- | --- |
| change | A callback function, can be executed when uploading state is changing. See [change](#change) | Function | - |  |
| download | Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB. | Function(file): void | Jump to new TAB | 1.5.0 |
| drop | A callback function executed when files are dragged and dropped into upload area | (event: DragEvent) =&gt; void | - | 3.0 |
| preview | A callback function, will be executed when file link or preview icon is clicked. | Function(file) | - |  |
| reject | A callback function, will be executed when drop files is not accept. | Function(fileList) | - |  |
| remove \xA0 | A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject | function(file): boolean \\| Promise | - \xA0 | 3.0 |

### UploadFile

Extends File with additional props.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | File name | string | - |
| percent | Upload progress percent | number | - |
| status | Upload status. Show different style when configured | \`error\` \\| \`success\` \\| \`done\` \\| \`uploading\` \\| \`removed\` | - |
| thumbUrl | Thumb image url | string | - |
| uid | unique id. Will auto generate when not provided | string | - |
| url | Download url | string | - |

### change

&gt; The function will be called when uploading is in progress, completed or failed

When uploading state change, it returns:

\`\`\`jsx
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
\`\`\`

1. \`file\` File object for the current operation.

   \`\`\`jsx
   {
      uid: &#39;uid&#39;,   // unique identifier, negative is recommend, to prevent interference with internal generated id
      name: &#39;xx.png&#39;,   // file name
      status: &#39;done&#39;, // options\uFF1Auploading, done, error, removed
      response: &#39;{&quot;status&quot;: &quot;success&quot;}&#39;, // response from server
      linkProps: &#39;{&quot;download&quot;: &quot;image&quot;}&#39;, // additional html props of file link
      xhr: &#39;XMLHttpRequest{ ... }&#39;, // XMLHttpRequest Header
   }
   \`\`\`

2. \`fileList\` current list of files

3. \`event\` response from server, including uploading progress, supported by advanced browsers.

## FAQ

### How do I implement upload server side?

- You can consult [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki#server-side) about how to implement server side upload interface.
- There is a mock example of [express](https://github.com/react-component/upload/blob/master/server.js) in rc-upload.

### I want to display download links.

Please set property \`url\` of each item in \`fileList\` to control content of link.

### How to use \`customRequest\`?

See &lt;https://github.com/react-component/upload#customrequest&gt;.

### Why will the \`fileList\` that&#39;s in control not trigger \`change\` \`status\` update when the file is not in the list?

\`change\` only trigger when file in the list, it will ignore left events when removed from the list. Please note that there exist bug which makes event still trigger even the file is not in the list before \`3.0.0-beta.10\`.

### Why does \`change\` sometimes return File object and other times return { originFileObj: File }?

For compatible case, we return File object when \`beforeUpload\` return \`false\`. It will merge to \`{ originFileObj: File }\` in next major version. Current version is compatible to get origin file by \`info.file.originFileObj\`. You can change this before major release.
`,html:`<p>Upload file by selecting or dragging.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.</p>
<ul>
<li>When you need to upload one or more files.</li>
<li>When you need to show the process of uploading.</li>
<li>When you need to upload files by dragging and dropping.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>accept</td>
<td>File types that can be accepted. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td>
<td>string</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>action</td>
<td>Uploading URL</td>
<td>string|(file) =&gt; <code>Promise</code></td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>beforeUpload</td>
<td>Hook function which will be executed before uploading. Uploading will be stopped with <code>false</code> or a rejected Promise returned.</td>
<td>(file, fileList) =&gt; \`boolean</td>
<td>Promise\`</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>customRequest</td>
<td>override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest</td>
<td>Function</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>Uploading params or function which can return uploading params.</td>
<td>object|function(file)</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>directory</td>
<td>support upload whole directory (<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>)</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>directory</td>
<td>Support upload whole directory\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>disable upload button</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>downloadIcon</td>
<td>custom download icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>fileList</td>
<td>List of files that have been uploaded (controlled). Here is a common issue <a href="https://github.com/ant-design/ant-design/issues/2423" target="_blank" rel="noopener noreferrer">#2423</a> when using it</td>
<td>object[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>headers</td>
<td>Set request headers, valid above IE10.</td>
<td>object</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>iconRender</td>
<td>Custom show icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>isImageUrl</td>
<td>Customize if render &lt;img /&gt; in thumbnail</td>
<td>(file: UploadFile) =&gt; boolean</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>itemRender</td>
<td>Custom item of uploadList</td>
<td>v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>listType</td>
<td>Built-in stylesheets, support for three types: <code>text</code>, <code>picture</code> or <code>picture-card</code></td>
<td>string</td>
<td><code>text</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxCount</td>
<td>Limit the number of uploaded files. Will replace current one when <code>maxCount</code> is <code>1</code></td>
<td>number</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>method</td>
<td>http method of upload request</td>
<td>string</td>
<td><code>post</code></td>
<td>1.5.0</td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>Whether to support selected multiple file. <code>IE10+</code> supported. You can select multiple files with CTRL holding down while multiple is set to be true</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>The name of uploading file</td>
<td>string</td>
<td><code>file</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>openFileDialogOnClick</td>
<td>click open file dialog</td>
<td>boolean</td>
<td>true</td>
<td></td>
<td></td>
</tr>
<tr>
<td>openFileDialogOnClick</td>
<td>Click open file dialog</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>previewFile</td>
<td>Customize preview file logic</td>
<td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td>
<td>-</td>
<td>1.5.0</td>
<td></td>
</tr>
<tr>
<td>previewIcon</td>
<td>custom preview icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>progress</td>
<td>Custom progress bar</td>
<td><a href="/components/progress/#API">ProgressProps</a> (support <code>type=&quot;line&quot;</code> only)</td>
<td>{ strokeWidth: 2, showInfo: false }</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>removeIcon</td>
<td>custom remove icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>showUploadList</td>
<td>Whether to show default upload list, could be an object to specify <code>showPreviewIcon</code> and <code>showRemoveIcon</code> individually</td>
<td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: booleanshowDownloadIcon?: boolean }</td>
<td>true</td>
<td>showDownloadIcon(3.0)</td>
<td></td>
</tr>
<tr>
<td>supportServerRender</td>
<td>Need to be turned on while the server side is rendering.</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>withCredentials</td>
<td>ajax upload with cookie sent</td>
<td>boolean</td>
<td>false</td>
<td></td>
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
<th>Version</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>A callback function, can be executed when uploading state is changing. See <a href="#change">change</a></td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>download</td>
<td>Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB.</td>
<td>Function(file): void</td>
<td>Jump to new TAB</td>
<td>1.5.0</td>
</tr>
<tr>
<td>drop</td>
<td>A callback function executed when files are dragged and dropped into upload area</td>
<td>(event: DragEvent) =&gt; void</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>preview</td>
<td>A callback function, will be executed when file link or preview icon is clicked.</td>
<td>Function(file)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>reject</td>
<td>A callback function, will be executed when drop files is not accept.</td>
<td>Function(fileList)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>remove</td>
<td>A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject</td>
<td>function(file): boolean | Promise</td>
<td>-</td>
<td>3.0</td>
</tr>
</tbody>
</table>
<h3 id="UploadFile">UploadFile <a class="header-anchor" href="#UploadFile">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Extends File with additional props.</p>
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
<td>name</td>
<td>File name</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>percent</td>
<td>Upload progress percent</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>status</td>
<td>Upload status. Show different style when configured</td>
<td><code>error</code> | <code>success</code> | <code>done</code> | <code>uploading</code> | <code>removed</code></td>
<td>-</td>
</tr>
<tr>
<td>thumbUrl</td>
<td>Thumb image url</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>uid</td>
<td>unique id. Will auto generate when not provided</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>url</td>
<td>Download url</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="change">change <a class="header-anchor" href="#change">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<blockquote>
<p>The function will be called when uploading is in progress, completed or failed</p>
</blockquote>
<p>When uploading state change, it returns:</p>
<pre class="language-jsx" v-pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
<ol>
<li>
<p><code>file</code> File object for the current operation.</p>
<pre class="language-jsx" v-pre><code><span class="token punctuation">{</span>
   <span class="token literal-property property">uid</span><span class="token operator">:</span> <span class="token string">'uid'</span><span class="token punctuation">,</span>   <span class="token comment">// unique identifier, negative is recommend, to prevent interference with internal generated id</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'xx.png'</span><span class="token punctuation">,</span>   <span class="token comment">// file name</span>
   <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span> <span class="token comment">// options\uFF1Auploading, done, error, removed</span>
   <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token string">'{"status": "success"}'</span><span class="token punctuation">,</span> <span class="token comment">// response from server</span>
   <span class="token literal-property property">linkProps</span><span class="token operator">:</span> <span class="token string">'{"download": "image"}'</span><span class="token punctuation">,</span> <span class="token comment">// additional html props of file link</span>
   <span class="token literal-property property">xhr</span><span class="token operator">:</span> <span class="token string">'XMLHttpRequest{ ... }'</span><span class="token punctuation">,</span> <span class="token comment">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>
</code></pre>
</li>
<li>
<p><code>fileList</code> current list of files</p>
</li>
<li>
<p><code>event</code> response from server, including uploading progress, supported by advanced browsers.</p>
</li>
</ol>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="How-do-I-implement-upload-server-side">How do I implement upload server side? <a class="header-anchor" href="#How-do-I-implement-upload-server-side">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<ul>
<li>You can consult <a href="https://github.com/blueimp/jQuery-File-Upload/wiki#server-side" target="_blank" rel="noopener noreferrer">jQuery-File-Upload</a> about how to implement server side upload interface.</li>
<li>There is a mock example of <a href="https://github.com/react-component/upload/blob/master/server.js" target="_blank" rel="noopener noreferrer">express</a> in rc-upload.</li>
</ul>
<h3 id="I-want-to-display-download-links">I want to display download links. <a class="header-anchor" href="#I-want-to-display-download-links">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Please set property <code>url</code> of each item in <code>fileList</code> to control content of link.</p>
<h3 id="How-to-use-customRequest">How to use <code>customRequest</code>? <a class="header-anchor" href="#How-to-use-customRequest">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>See <a href="https://github.com/react-component/upload#customrequest" target="_blank" rel="noopener noreferrer">https://github.com/react-component/upload#customrequest</a>.</p>
<h3 id="Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list">Why will the <code>fileList</code> that's in control not trigger <code>change</code> <code>status</code> update when the file is not in the list? <a class="header-anchor" href="#Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>change</code> only trigger when file in the list, it will ignore left events when removed from the list. Please note that there exist bug which makes event still trigger even the file is not in the list before <code>3.0.0-beta.10</code>.</p>
<h3 id="Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File">Why does <code>change</code> sometimes return File object and other times return { originFileObj: File }? <a class="header-anchor" href="#Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>For compatible case, we return File object when <code>beforeUpload</code> return <code>false</code>. It will merge to <code>{ originFileObj: File }</code> in next major version. Current version is compatible to get origin file by <code>info.file.originFileObj</code>. You can change this before major release.</p>
`,lastUpdated:1648882138641}},la={class:"markdown"},ua=B(`<p>Upload file by selecting or dragging.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.</p><ul><li>When you need to upload one or more files.</li><li>When you need to show the process of uploading.</li><li>When you need to upload files by dragging and dropping.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th><th></th></tr></thead><tbody><tr><td>accept</td><td>File types that can be accepted. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td><td>string</td><td>-</td><td></td><td></td></tr><tr><td>action</td><td>Uploading URL</td><td>string|(file) =&gt; <code>Promise</code></td><td>-</td><td></td><td></td></tr><tr><td>beforeUpload</td><td>Hook function which will be executed before uploading. Uploading will be stopped with <code>false</code> or a rejected Promise returned.</td><td>(file, fileList) =&gt; \`boolean</td><td>Promise\`</td><td>-</td><td></td></tr><tr><td>customRequest</td><td>override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest</td><td>Function</td><td>-</td><td></td><td></td></tr><tr><td>data</td><td>Uploading params or function which can return uploading params.</td><td>object|function(file)</td><td>-</td><td></td><td></td></tr><tr><td>directory</td><td>support upload whole directory (<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>)</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>directory</td><td>Support upload whole directory\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td><td>boolean</td><td>false</td><td>3.0</td><td></td></tr><tr><td>disabled</td><td>disable upload button</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>downloadIcon</td><td>custom download icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>fileList</td><td>List of files that have been uploaded (controlled). Here is a common issue <a href="https://github.com/ant-design/ant-design/issues/2423" target="_blank" rel="noopener noreferrer">#2423</a> when using it</td><td>object[]</td><td>-</td><td></td><td></td></tr><tr><td>headers</td><td>Set request headers, valid above IE10.</td><td>object</td><td>-</td><td></td><td></td></tr><tr><td>iconRender</td><td>Custom show icon</td><td>v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>isImageUrl</td><td>Customize if render &lt;img /&gt; in thumbnail</td><td>(file: UploadFile) =&gt; boolean</td><td>-</td><td>3.0</td><td></td></tr><tr><td>itemRender</td><td>Custom item of uploadList</td><td>v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>listType</td><td>Built-in stylesheets, support for three types: <code>text</code>, <code>picture</code> or <code>picture-card</code></td><td>string</td><td><code>text</code></td><td></td><td></td></tr><tr><td>maxCount</td><td>Limit the number of uploaded files. Will replace current one when <code>maxCount</code> is <code>1</code></td><td>number</td><td>-</td><td>3.0</td><td></td></tr><tr><td>method</td><td>http method of upload request</td><td>string</td><td><code>post</code></td><td>1.5.0</td><td></td></tr><tr><td>multiple</td><td>Whether to support selected multiple file. <code>IE10+</code> supported. You can select multiple files with CTRL holding down while multiple is set to be true</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>name</td><td>The name of uploading file</td><td>string</td><td><code>file</code></td><td></td><td></td></tr><tr><td>openFileDialogOnClick</td><td>click open file dialog</td><td>boolean</td><td>true</td><td></td><td></td></tr><tr><td>openFileDialogOnClick</td><td>Click open file dialog</td><td>boolean</td><td>true</td><td>3.0</td><td></td></tr><tr><td>previewFile</td><td>Customize preview file logic</td><td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td><td>-</td><td>1.5.0</td><td></td></tr><tr><td>previewIcon</td><td>custom preview icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>progress</td><td>Custom progress bar</td><td><a href="/components/progress/#API">ProgressProps</a> (support <code>type=&quot;line&quot;</code> only)</td><td>{ strokeWidth: 2, showInfo: false }</td><td>3.0</td><td></td></tr><tr><td>removeIcon</td><td>custom remove icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>showUploadList</td><td>Whether to show default upload list, could be an object to specify <code>showPreviewIcon</code> and <code>showRemoveIcon</code> individually</td><td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: booleanshowDownloadIcon?: boolean }</td><td>true</td><td>showDownloadIcon(3.0)</td><td></td></tr><tr><td>supportServerRender</td><td>Need to be turned on while the server side is rendering.</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>withCredentials</td><td>ajax upload with cookie sent</td><td>boolean</td><td>false</td><td></td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th><th></th></tr></thead><tbody><tr><td>change</td><td>A callback function, can be executed when uploading state is changing. See <a href="#change">change</a></td><td>Function</td><td>-</td><td></td></tr><tr><td>download</td><td>Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB.</td><td>Function(file): void</td><td>Jump to new TAB</td><td>1.5.0</td></tr><tr><td>drop</td><td>A callback function executed when files are dragged and dropped into upload area</td><td>(event: DragEvent) =&gt; void</td><td>-</td><td>3.0</td></tr><tr><td>preview</td><td>A callback function, will be executed when file link or preview icon is clicked.</td><td>Function(file)</td><td>-</td><td></td></tr><tr><td>reject</td><td>A callback function, will be executed when drop files is not accept.</td><td>Function(fileList)</td><td>-</td><td></td></tr><tr><td>remove</td><td>A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject</td><td>function(file): boolean | Promise</td><td>-</td><td>3.0</td></tr></tbody></table><h3 id="UploadFile">UploadFile <a class="header-anchor" href="#UploadFile"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Extends File with additional props.</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>File name</td><td>string</td><td>-</td></tr><tr><td>percent</td><td>Upload progress percent</td><td>number</td><td>-</td></tr><tr><td>status</td><td>Upload status. Show different style when configured</td><td><code>error</code> | <code>success</code> | <code>done</code> | <code>uploading</code> | <code>removed</code></td><td>-</td></tr><tr><td>thumbUrl</td><td>Thumb image url</td><td>string</td><td>-</td></tr><tr><td>uid</td><td>unique id. Will auto generate when not provided</td><td>string</td><td>-</td></tr><tr><td>url</td><td>Download url</td><td>string</td><td>-</td></tr></tbody></table><h3 id="change">change <a class="header-anchor" href="#change"><span aria-hidden="true" class="anchor">#</span></a></h3><blockquote><p>The function will be called when uploading is in progress, completed or failed</p></blockquote><p>When uploading state change, it returns:</p><pre class="language-jsx"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><ol><li><p><code>file</code> File object for the current operation.</p><pre class="language-jsx"><code><span class="token punctuation">{</span>
   <span class="token literal-property property">uid</span><span class="token operator">:</span> <span class="token string">&#39;uid&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// unique identifier, negative is recommend, to prevent interference with internal generated id</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xx.png&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// file name</span>
   <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;done&#39;</span><span class="token punctuation">,</span> <span class="token comment">// options\uFF1Auploading, done, error, removed</span>
   <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token string">&#39;{&quot;status&quot;: &quot;success&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token comment">// response from server</span>
   <span class="token literal-property property">linkProps</span><span class="token operator">:</span> <span class="token string">&#39;{&quot;download&quot;: &quot;image&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token comment">// additional html props of file link</span>
   <span class="token literal-property property">xhr</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest{ ... }&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p><code>fileList</code> current list of files</p></li><li><p><code>event</code> response from server, including uploading progress, supported by advanced browsers.</p></li></ol><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="How-do-I-implement-upload-server-side">How do I implement upload server side? <a class="header-anchor" href="#How-do-I-implement-upload-server-side"><span aria-hidden="true" class="anchor">#</span></a></h3><ul><li>You can consult <a href="https://github.com/blueimp/jQuery-File-Upload/wiki#server-side" target="_blank" rel="noopener noreferrer">jQuery-File-Upload</a> about how to implement server side upload interface.</li><li>There is a mock example of <a href="https://github.com/react-component/upload/blob/master/server.js" target="_blank" rel="noopener noreferrer">express</a> in rc-upload.</li></ul><h3 id="I-want-to-display-download-links">I want to display download links. <a class="header-anchor" href="#I-want-to-display-download-links"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Please set property <code>url</code> of each item in <code>fileList</code> to control content of link.</p><h3 id="How-to-use-customRequest">How to use <code>customRequest</code>? <a class="header-anchor" href="#How-to-use-customRequest"><span aria-hidden="true" class="anchor">#</span></a></h3><p>See <a href="https://github.com/react-component/upload#customrequest" target="_blank" rel="noopener noreferrer">https://github.com/react-component/upload#customrequest</a>.</p><h3 id="Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list">Why will the <code>fileList</code> that&#39;s in control not trigger <code>change</code> <code>status</code> update when the file is not in the list? <a class="header-anchor" href="#Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>change</code> only trigger when file in the list, it will ignore left events when removed from the list. Please note that there exist bug which makes event still trigger even the file is not in the list before <code>3.0.0-beta.10</code>.</p><h3 id="Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File">Why does <code>change</code> sometimes return File object and other times return { originFileObj: File }? <a class="header-anchor" href="#Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File"><span aria-hidden="true" class="anchor">#</span></a></h3><p>For compatible case, we return File object when <code>beforeUpload</code> return <code>false</code>. It will merge to <code>{ originFileObj: File }</code> in next major version. Current version is compatible to get origin file by <code>info.file.originFileObj</code>. You can change this before major release.</p>`,27),ia=[ua];function ka(a,t,c,u,r,k){return C(),Z("article",la,ia)}var ra=A(ca,[["render",ka]]);const da=h({CN:pa,US:ra,components:{Basic:nn,Avatar:un,DefaultFileList:Cn,PictureCard:Gn,FileList:Xn,Drag:Sn,PictureStyle:Tn,UploadManually:as,Directory:ls,PreviewFile:gs,TransformFile:hs,customizeProgressBarVue:Gs,maxCountVue:Us,uploadCustomActionIconVue:Ss,uploadPngOnlyVue:Qs,customRenderVue:na},setup(){return{}}});function ga(a,t,c,u,r,k){const l=e("Basic"),i=e("Avatar"),d=e("DefaultFileList"),g=e("PictureCard"),m=e("FileList"),w=e("Drag"),v=e("PictureStyle"),F=e("UploadManually"),L=e("Directory"),X=e("PreviewFile"),U=e("TransformFile"),Y=e("customizeProgressBarVue"),x=e("maxCountVue"),H=e("uploadCustomActionIconVue"),R=e("uploadPngOnlyVue"),z=e("customRenderVue"),J=e("demo-sort");return C(),b(J,null,{default:o(()=>[p(l),p(i),p(d),p(g),p(m),p(w),p(v),p(F),p(L),p(X),p(U),p(Y),p(x),p(H),p(R),p(z)]),_:1})}var Aa=A(da,[["render",ga]]);export{Aa as default};
