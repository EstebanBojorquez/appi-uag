(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),s=t("NmYn"),r=t.n(s),b=t("Wbzz"),n=t("Xrax"),o=t("k4MR"),l=t("TSYQ"),c=t.n(l),p=t("QH2O"),g=t("qKvR"),d=function(A){var e,t=A.title,a=A.tabs,i=void 0===a?[]:a;return Object(g.b)("div",{className:c()(p.pageHeader,(e={},e[p.withTabs]=i.length,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.text},t)))))},m=t("BAC9"),j=function(A){var e=A.relativePagePath,t=A.repository,a=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||a,s=i.baseUrl,r=i.subDirectory,n=s+"/edit/"+i.branch+r+"/src/pages"+e;return s?Object(g.b)("div",{className:"bx--row "+m.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:m.link,href:n},"Edit this page on GitHub"))):null},u=t("FCXl"),E=t("dI71"),Q=t("I8xM"),x=function(A){function e(){return A.apply(this,arguments)||this}return Object(E.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,a=t.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(A){var e,i=r()(A,{lower:!0}),s=i===a,n=new RegExp(a+"(?!-)"),o=t.replace(n,i);return Object(g.b)("li",{key:A,className:c()((e={},e[Q.selectedItem]=s,e),Q.listItem)},Object(g.b)(b.Link,{className:Q.link,to:""+o},A))}));return Object(g.b)("div",{className:Q.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:Q.list},i))))))},e}(i.a.Component),h=t("MjG9");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,i=A.Title,s=e.frontmatter,l=void 0===s?{}:s,c=e.relativePagePath,p=e.titleType,m=l.tabs,E=l.title,Q=l.theme,B=l.description,N=l.keywords,f=Object(b.useStaticQuery)("2456312558").site.pathPrefix,w=f?a.pathname.replace(f,""):a.pathname,O=m?w.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"";return Object(g.b)(o.a,{tabs:m,homepage:!1,theme:Q,pageTitle:E,pageDescription:B,pageKeywords:N,titleType:p},Object(g.b)(d,{title:i?Object(g.b)(i,null):E,label:"label",tabs:m}),m&&Object(g.b)(x,{slug:w,tabs:m,currentTab:O}),Object(g.b)(h.a,{padded:!0},t,Object(g.b)(j,{relativePagePath:c})),Object(g.b)(u.a,{pageContext:e,location:a,slug:w,tabs:m,currentTab:O}),Object(g.b)(n.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pfKO:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return b})),t.d(e,"default",(function(){return d}));var a=t("wx14"),i=t("zLVn"),s=(t("q1tI"),t("7ljp")),r=(t("013z"),t("QH4P")),b=(t("qKvR"),{}),n=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}},o=n("PageDescription"),l=n("FeatureCard"),c=n("ArtDirection"),p={_frontmatter:b},g=r.a;function d(A){var e=A.components,t=Object(i.a)(A,["components"]);return Object(s.b)(g,Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"MDX content starts here"),Object(s.b)(o,{mdxType:"PageDescription"},Object(s.b)("p",null,"The homepage content here lives in the ",Object(s.b)("inlineCode",{parentName:"p"},"src/pages/index.mdx")," directory at the root of your project. Just like the other mdx pages, you can use all of our theme components here without importing them. Review the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/pages/index.mdx"}),"MDX example source"),".")),Object(s.b)(l,{color:"dark",href:"/getting-started",title:"Getting started",actionIcon:"arrowRight",className:"homepage-feature",mdxType:"FeatureCard"},Object(s.b)(c,{mdxType:"ArtDirection"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQD/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABHdCdsBmqN//EABcQAAMBAAAAAAAAAAAAAAAAAAABAzH/2gAIAQEAAQUCmQFkyAs//8QAFhEAAwAAAAAAAAAAAAAAAAAAAhAy/9oACAEDAQE/ASpf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAz/9oACAECAQE/ARNf/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFhABAQEAAAAAAAAAAAAAAAAAQQAQ/9oACAEBAAE/IRHARw//2gAMAwEAAgADAAAAEFPv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/EMUf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/EFdf/8QAFhABAQEAAAAAAAAAAAAAAAAAMQAQ/9oACAEBAAE/EHhKeEr/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/static/2ab1550f185f6b7e782e1aa3eeeb3046/2e753/blue-stripes-mobile.jpg",srcSet:["/static/2ab1550f185f6b7e782e1aa3eeeb3046/69549/blue-stripes-mobile.jpg 288w","/static/2ab1550f185f6b7e782e1aa3eeeb3046/473e3/blue-stripes-mobile.jpg 576w","/static/2ab1550f185f6b7e782e1aa3eeeb3046/2e753/blue-stripes-mobile.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQD/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABHdCdsBmqN//EABcQAAMBAAAAAAAAAAAAAAAAAAABAzH/2gAIAQEAAQUCmQFkyAs//8QAFhEAAwAAAAAAAAAAAAAAAAAAAhAy/9oACAEDAQE/ASpf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAz/9oACAECAQE/ARNf/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFhABAQEAAAAAAAAAAAAAAAAAQQAQ/9oACAEBAAE/IRHARw//2gAMAwEAAgADAAAAEFPv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/EMUf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/EFdf/8QAFhABAQEAAAAAAAAAAAAAAAAAMQAQ/9oACAEBAAE/EHhKeEr/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/static/2ab1550f185f6b7e782e1aa3eeeb3046/2e753/blue-stripes-tablet.jpg",srcSet:["/static/2ab1550f185f6b7e782e1aa3eeeb3046/69549/blue-stripes-tablet.jpg 288w","/static/2ab1550f185f6b7e782e1aa3eeeb3046/473e3/blue-stripes-tablet.jpg 576w","/static/2ab1550f185f6b7e782e1aa3eeeb3046/2e753/blue-stripes-tablet.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAGRdGnsASP/xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIDMf/aAAgBAQABBQKBQLP/xAAWEQADAAAAAAAAAAAAAAAAAAABEDL/2gAIAQMBAT8BNL//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQ//aAAgBAgEBPwGZ/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEQMUH/2gAIAQEAAT8hujEH/9oADAMBAAIAAwAAABAP7//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/EHH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8Qhdf/xAAWEAADAAAAAAAAAAAAAAAAAAAAEDH/2gAIAQEAAT8QU5H/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/static/9820c2d87efd52c02784eeff51e351b2/2e753/blue-stripes.jpg",srcSet:["/static/9820c2d87efd52c02784eeff51e351b2/69549/blue-stripes.jpg 288w","/static/9820c2d87efd52c02784eeff51e351b2/473e3/blue-stripes.jpg 576w","/static/9820c2d87efd52c02784eeff51e351b2/2e753/blue-stripes.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-c070cce77569a7088e7c.js.map