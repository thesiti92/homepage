(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(153),r=a(151),A=a(169),s=a(148),l="#e0e0e0",c="#455a64",d="0px 0px 16px 2px rgba(51, 51, 51, 0.48)",p="0px 0px 16px 2px rgba(51,51,51,0.38)",m=s.b.h3.withConfig({displayName:"TimelineItem__ItemHeader",componentId:"sc-102kv2v-0"})(["white-space:nowrap;margin-bottom:3%;"]),u=s.b.div.withConfig({displayName:"TimelineItem__TimelineItemWrapper",componentId:"sc-102kv2v-1"})(["background-color:",";width:500px;grid-row:span 2;align-content:middle;border-radius:10px;margin:14px 0;padding:12px 14px;box-shadow:",';:nth-child(odd){justify-self:flex-end;}::before{content:"";position:absolute;display:inline-block;width:32px;height:32px;border-radius:50%;left:calc(50% - 16px);box-shadow:',";transform:translateY(calc(50% + 16px + 7px));background-color:#4a148c;}"],l,d,p),g=s.b.ul.withConfig({displayName:"TimelineItem__FeatList",componentId:"sc-102kv2v-2"})(["overflow:hidden;margin:0;transition:max-height ",",visibility ",",opacity ",";",""],"0.4s","0.4s","0.4s",function(e){return e.visible?Object(s.a)(["max-height:500px;visibility:visible;opacity:1;"]):Object(s.a)(["max-height:0px;visibility:hidden;opacity:0;"])}),f=s.b.p.withConfig({displayName:"TimelineItem__Brief",componentId:"sc-102kv2v-3"})(["transition:visibility ",",opacity ",",max-height ",";margin:0;overflow:hidden;",""],"0.4s","0.4s","0.4s",function(e){return e.visible?Object(s.a)(["visibility:visible;opacity:1;max-height:100px;"]):Object(s.a)(["visibility:hidden;opacity:0;max-height:0px;"])}),h=s.b.li.withConfig({displayName:"TimelineItem__Feat",componentId:"sc-102kv2v-4"})([""]);var b=function(e){var t=e.position,a=e.org,o=e.feats,r=e.brief,A=Object(n.useState)(!1),s=A[0],l=A[1];return i.a.createElement(u,{onClick:function(){return l(!s)}},i.a.createElement(m,null,t+" @ "+a),i.a.createElement(f,{visible:!s},r),i.a.createElement(g,{visible:s},o.map(function(e){return i.a.createElement(h,{key:e},e)})))},w=a(174),y=s.b.div.withConfig({displayName:"Timeline__TimelineWrapper",componentId:"j9v87f-0"})(['display:grid;position:relative;grid-template-columns:1fr;align-items:center;width:1200px;margin:auto;::before{content:"";background:#455a64;width:5px;top:0;bottom:0;position:absolute;left:50%;border-radius:6px;transform:translateX(-50%);}']),E="undefined"==typeof window?"-"+window.innerWidth/3+"px":"-600px",x=Object(s.c)(["0%{right:",";}10%{right:0;}90%{right:0;}100%{right:",";}"],E,E),v=s.b.h4.withConfig({displayName:"Timeline__HelperText",componentId:"j9v87f-1"})(["position:absolute;top:6%;right:",";color:#546e7a;align-items:center;display:flex;font-size:1.2rem;background-color:",";padding:6px;border-radius:6px;animation:"," 6s ease-out 10s;animation-fill-mode:forwards;box-shadow:",";"],E,l,x,p),j=Object(s.b)(w.a).withConfig({displayName:"Timeline__StyledGoInfo",componentId:"j9v87f-2"})(["margin-right:0.3rem;"]);var I=function(){var e=A.data.allTimelineJson.edges;return i.a.createElement(y,null,i.a.createElement(v,null,i.a.createElement(j,null),"Click an item for more info!"),e.map(function(e){var t=e.node;return i.a.createElement(b,t)}))},B=(a(170),a(172)),N=a(173),C=a.n(N),k=s.b.div.withConfig({displayName:"Intro__IntroWrapper",componentId:"sc-7f21nl-0"})(["padding:6% 10%;display:flex;justify-content:center;align-items:center;"]),Q=Object(s.b)(C.a).withConfig({displayName:"Intro__Headshot",componentId:"sc-7f21nl-1"})(["border-radius:50%;box-shadow:",";"],p),T=s.b.div.withConfig({displayName:"Intro__TextWrapper",componentId:"sc-7f21nl-2"})(["display:flex;flex-flow:column;padding:20px;width:50%;margin-left:6%;"]),D=s.b.div.withConfig({displayName:"Intro__Tagline",componentId:"sc-7f21nl-3"})(["font-size:2rem;color:",";"],c),_=s.b.h1.withConfig({displayName:"Intro__Name",componentId:"sc-7f21nl-4"})(["font-size:3.2rem;"]);var R=function(){var e=B.data.file.childImageSharp;return i.a.createElement(k,null,i.a.createElement(Q,{fixed:e.fixed}),i.a.createElement(T,null,i.a.createElement(_,null,"Alex Iansiti"),i.a.createElement(D,null,"Just your average quarter Japanese male who likes to code, cook, and speak Italian.")))},S=s.b.h1.withConfig({displayName:"pages__TimelineHeader",componentId:"sc-6kvjaa-0"})(["text-align:center;"]);t.default=function(){return i.a.createElement(r.a,{title:"Home"}),i.a.createElement(o.a,null,i.a.createElement(R,null),i.a.createElement(S,null,"Here's All the Stuff I've Done!"),i.a.createElement(I,null))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),i=a.n(n),o=a(4),r=a.n(o),A=a(33),s=a.n(A);a.d(t,"a",function(){return s.a});a(147);var l=i.a.createContext({}),c=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),A=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(A.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,a){"use strict";var n=a(152),i=a(0),o=a.n(i),r=a(4),A=a.n(r),s=a(155),l=a.n(s);function c(e){var t=e.description,a=e.lang,i=e.meta,r=e.title,A=n.data.site,s=t||A.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+A.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:s}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:A.a.string,lang:A.a.string,meta:A.a.arrayOf(A.a.object),title:A.a.string.isRequired},t.a=c},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},153:function(e,t,a){"use strict";var n=a(149),i=a(0),o=a.n(i),r=a(4),A=a.n(r),s=a(146),l=a(148),c=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:A.a.string},c.defaultProps={siteTitle:""};a(154);var d=l.b.div.withConfig({displayName:"layout__LayoutWrapper",componentId:"gfnls3-0"})(["margin:0 auto;max-width:960;padding:4% 6%;"]),p=l.b.footer.withConfig({displayName:"layout__Footer",componentId:"gfnls3-1"})(["margin-top:5%;"]),m=function(e){var t=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null,o.a.createElement("main",null,t),o.a.createElement(p,null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};m.propTypes={children:A.a.node.isRequired};t.a=m},169:function(e){e.exports={data:{allTimelineJson:{edges:[{node:{org:"Pinterest",position:"Growth Engineer",feats:["Worked on numerous improvements to the email and notifications dispatching tool."],brief:"Worked on numerous improvements to the email and notifications dispatching tool."}},{node:{org:"Point API",position:"Lead Software Engineer",feats:["Wrote and deployed several critical platform features –Point API uses artificial intelligence to suggest email replies to enhance messaging applications.","Designed and implemented the company’s homepage. (See pointapi.com)","Created an internal data annotation tool for rapidly labeling sections of email text.","Architected Point API’s JS and React packages. (On Github or docs.pointapi.com)","Converted REST backend to Websockets for highly interactive autocomplete sessions.","Wrote account management and payments page in React and Alibaba's Ant Design"],brief:"Served as the lead front end developer while the company went through YC and launched their intial MVPs."}},{node:{org:"Harvard SEAS",position:"Research Assistant",feats:["Researched advanced machine learning applications.  Focused on how a DCGAN model maps geometric transformations and how simGANs improve generated wireless localization data.","Worked with PhD students to develop a wireless localization protocol for use with millimeter wave antennas. Learned machine learning/statistics concepts and data processing with Pandas."],brief:"Helped out graduate students with various signal processing and ML projects."}}]}}}},172:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEEBQID/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDAv/aAAwDAQACEAMQAAAB6rXqVJw8SNHJAkLf/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAAxASESFB/9oACAEBAAEFArjY597hhsTfQthgFiryP//EABgRAAIDAAAAAAAAAAAAAAAAAAAhAQIQ/9oACAEDAQE/AYYiuf/EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAgEBPwFyM//EABkQAAIDAQAAAAAAAAAAAAAAAAERABAhUf/aAAgBAQAGPwLRnIrbjBFZX//EABwQAAIDAAMBAAAAAAAAAAAAAAABESExQWGBkf/aAAgBAQABPyHFiYjL7Dx9Gkiro0mt8m+RWh5QVJLP/9oADAMBAAIAAwAAABDzGMH/xAAXEQADAQAAAAAAAAAAAAAAAAABEBEx/9oACAEDAQE/EDpMFf/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAgEBPxCiiXw0iT//xAAcEAEAAgMBAQEAAAAAAAAAAAABABEhMUHRUXH/2gAIAQEAAT8QtruwFHrClG/D2G9WprSXswNLxBv8l3dG1T9yRKK8lRwKmc6lhBl0z//Z",width:220,height:220,src:"/homepage/static/b860944888fdf1363e8f7a76bac69a46/b8bd2/headshot.jpg",srcSet:"/homepage/static/b860944888fdf1363e8f7a76bac69a46/b8bd2/headshot.jpg 1x,\n/homepage/static/b860944888fdf1363e8f7a76bac69a46/149de/headshot.jpg 1.5x,\n/homepage/static/b860944888fdf1363e8f7a76bac69a46/191b1/headshot.jpg 2x"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-74784d1a898dfed6f9fa.js.map