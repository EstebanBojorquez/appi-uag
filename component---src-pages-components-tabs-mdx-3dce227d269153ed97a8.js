(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(A,e,a){"use strict";var t=a("q1tI"),n=a.n(t),o=a("NmYn"),s=a.n(o),c=a("Wbzz"),r=a("Xrax"),i=a("k4MR"),b=a("TSYQ"),l=a.n(b),p=a("QH2O"),g=a("qKvR"),m=function(A){var e,a=A.title,t=A.tabs,n=void 0===t?[]:t;return Object(g.b)("div",{className:l()(p.pageHeader,(e={},e[p.withTabs]=n.length,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.text},a)))))},d=a("BAC9"),u=function(A){var e=A.relativePagePath,a=A.repository,t=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||t,o=n.baseUrl,s=n.subDirectory,r=o+"/edit/"+n.branch+s+"/src/pages"+e;return o?Object(g.b)("div",{className:"bx--row "+d.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:d.link,href:r},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),x=a("I8xM"),E=function(A){function e(){return A.apply(this,arguments)||this}return Object(f.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,a=A.slug,t=a.split("/").filter(Boolean).slice(-1)[0],n=e.map((function(A){var e,n=s()(A,{lower:!0}),o=n===t,r=new RegExp(t+"(?!-)"),i=a.replace(r,n);return Object(g.b)("li",{key:A,className:l()((e={},e[x.selectedItem]=o,e),x.listItem)},Object(g.b)(c.Link,{className:x.link,to:""+i},A))}));return Object(g.b)("div",{className:x.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:x.list},n))))))},e}(n.a.Component),B=a("MjG9");e.a=function(A){var e=A.pageContext,a=A.children,t=A.location,n=A.Title,o=e.frontmatter,b=void 0===o?{}:o,l=e.relativePagePath,p=e.titleType,d=b.tabs,f=b.title,x=b.theme,h=b.description,T=b.keywords,N=Object(c.useStaticQuery)("2456312558").site.pathPrefix,O=N?t.pathname.replace(N,""):t.pathname,y=d?O.split("/").filter(Boolean).slice(-1)[0]||s()(d[0],{lower:!0}):"";return Object(g.b)(i.a,{tabs:d,homepage:!1,theme:x,pageTitle:f,pageDescription:h,pageKeywords:T,titleType:p},Object(g.b)(m,{title:n?Object(g.b)(n,null):f,label:"label",tabs:d}),d&&Object(g.b)(E,{slug:O,tabs:d,currentTab:y}),Object(g.b)(B.a,{padded:!0},a,Object(g.b)(u,{relativePagePath:l})),Object(g.b)(j.a,{pageContext:e,location:t,slug:O,tabs:d,currentTab:y}),Object(g.b)(r.a,null))}},BAC9:function(A,e,a){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,a){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,a){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},aLPR:function(A,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return c})),a.d(e,"default",(function(){return j}));var t=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),c=(a("qKvR"),{}),r=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}},i=r("PageDescription"),b=r("Tabs"),l=r("Tab"),p=r("Row"),g=r("Column"),m=r("Title"),d={_frontmatter:c},u=s.a;function j(A){var e=A.components,a=Object(n.a)(A,["components"]);return Object(o.b)(u,Object(t.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)(i,{mdxType:"PageDescription"},Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<Tabs>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<Tab>")," components are used together to display and swap between content. Like all of the MDX components, you’ll need to give the content you pass in a line of whitespace. When in doubt, follow the examples. Everything should be left aligned, indenting ",Object(o.b)("inlineCode",{parentName:"p"},"<Tab>")," will result in errors.")),Object(o.b)("h2",null,"Example"),Object(o.b)(b,{mdxType:"Tabs"},Object(o.b)(l,{label:"Just text",mdxType:"Tab"},Object(o.b)("p",null,"The tab component can be used for a variety of content. From text, to images, to columns. If you want to have multiple columns, you’ll need to use our ",Object(o.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Column")," helpers as demonstrated in the “Two images” tab.")),Object(o.b)(l,{label:"Single image",mdxType:"Tab"},Object(o.b)("p",null,"If your content is full width, you don’t need ",Object(o.b)("inlineCode",{parentName:"p"},"Row")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Column")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABtEIBv//EABYQAAMAAAAAAAAAAAAAAAAAAAABFP/aAAgBAQABBQKNESIkf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAxEi/9oACAEDAQE/AYXos//EABcRAAMBAAAAAAAAAAAAAAAAAAECECL/2gAIAQIBAT8BU5n/xAAVEAEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAQAGPwJVf//EABYQAAMAAAAAAAAAAAAAAAAAAAEQYf/aAAgBAQABPyGga3//2gAMAwEAAgADAAAAEHgf/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERIWGR/9oACAEDAQE/EGWZPOI//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QYrf/xAAYEAADAQEAAAAAAAAAAAAAAAAAARExYf/aAAgBAQABPxBOcNSwcJ//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"color array",title:"color array",src:"/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg",srcSet:["/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/69549/colors.jpg 288w","/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/473e3/colors.jpg 576w","/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)(l,{label:"Two images",mdxType:"Tab"},Object(o.b)(p,{mdxType:"Row"},Object(o.b)(g,{colSm:6,colLg:6,mdxType:"Column"},Object(o.b)("p",null,"Column one"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABtEIBv//EABYQAAMAAAAAAAAAAAAAAAAAAAABFP/aAAgBAQABBQKNESIkf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAxEi/9oACAEDAQE/AYXos//EABcRAAMBAAAAAAAAAAAAAAAAAAECECL/2gAIAQIBAT8BU5n/xAAVEAEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAQAGPwJVf//EABYQAAMAAAAAAAAAAAAAAAAAAAEQYf/aAAgBAQABPyGga3//2gAMAwEAAgADAAAAEHgf/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERIWGR/9oACAEDAQE/EGWZPOI//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QYrf/xAAYEAADAQEAAAAAAAAAAAAAAAAAARExYf/aAAgBAQABPxBOcNSwcJ//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"color array",title:"color array",src:"/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg",srcSet:["/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/69549/colors.jpg 288w","/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/473e3/colors.jpg 576w","/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)(g,{colSm:6,colLg:6,mdxType:"Column"},Object(o.b)("p",null,"Column two"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABtEIBv//EABYQAAMAAAAAAAAAAAAAAAAAAAABFP/aAAgBAQABBQKNESIkf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAxEi/9oACAEDAQE/AYXos//EABcRAAMBAAAAAAAAAAAAAAAAAAECECL/2gAIAQIBAT8BU5n/xAAVEAEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAQAGPwJVf//EABYQAAMAAAAAAAAAAAAAAAAAAAEQYf/aAAgBAQABPyGga3//2gAMAwEAAgADAAAAEHgf/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERIWGR/9oACAEDAQE/EGWZPOI//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QYrf/xAAYEAADAQEAAAAAAAAAAAAAAAAAARExYf/aAAgBAQABPxBOcNSwcJ//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"color array",title:"color array",src:"/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg",srcSet:["/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/69549/colors.jpg 288w","/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/473e3/colors.jpg 576w","/appi-uag/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))),Object(o.b)("h2",null,"Code"),Object(o.b)(m,{mdxType:"Title"},"Text"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Tabs/Tabs.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Tabs",path:"components/Tabs/Tabs.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Tabs"}),'// Start with the wrapper component (Tabs)\n<Tabs>\n\n<Tab label="Text">\n\nThe tab component can be used for a variety of content. From text, to images, to columns. If you want to have multiple columns, you’ll need to use our `Row` and `Column` helpers as demonstrated in the "Two images" tab.\n\n</Tab>\n')),Object(o.b)(m,{mdxType:"Title"},"Single image"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Tabs/Tabs.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Tabs",path:"components/Tabs/Tabs.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Tabs"}),'<Tab label="Single image">\n  If your content is full width, you don’t need `Row` and `Column` ![color\n  array](images/colors.jpg)\n</Tab>\n')),Object(o.b)(m,{mdxType:"Title"},"Multiple images"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Tabs/Tabs.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Tabs",path:"components/Tabs/Tabs.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Tabs"}),'<Tab label="Two images">\n\n<Row>\n<Column colSm={6} colLg={6}>\n\nColumn one\n\n![color array](images/colors.jpg)\n\n</Column>\n<Column colSm={6} colLg={6}>\n\nColumn two\n\n![color array](images/colors.jpg)\n\n</Column>\n</Row>\n\n</Tab>\n\n// Make sure you close the wrapper component\n</Tabs>\n')))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-tabs-mdx-3dce227d269153ed97a8.js.map