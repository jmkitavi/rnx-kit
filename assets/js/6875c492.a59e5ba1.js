"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[8610],{5278:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7378),l=a(9213),s=a(8135);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{permalink:r,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},4411:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7378),l=a(1884),s=a(6013),r=a(7258),i=a(9213),o=a(6769),g=a(5278),m=a(1867),c=a(8944);function p(e){const{metadata:t,items:a,sidebar:p,listMetadata:d}=e,{allTagsPath:u,name:h,count:b}=t,E=function(){const{selectMessage:e}=(0,o.c2)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),_=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:E(b),tagName:h});return n.createElement(o.FG,{className:(0,c.Z)(o.kM.wrapper.blogPages,o.kM.page.blogTagPostListPage)},n.createElement(o.d,{title:_}),n.createElement(m.Z,{tag:"blog_tags_posts"}),n.createElement(s.Z,{sidebar:p},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,_),n.createElement(l.Z,{href:u},n.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return n.createElement(r.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})),n.createElement(g.Z,{metadata:d})))}}}]);