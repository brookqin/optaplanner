"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[14],{1014:function(e,n,r){r.r(n),r.d(n,{FilterComponent:function(){return y},default:function(){return F}});var t=r(3028),l=r(8079),s=r(6234),u=r(2621),a=r(804),i=r(6163),o=r(7798),c=r(3679),d=r(9852),p=r(4419),h=r(4473),f=r(3490),j=r(7481),Z=r(3485),x=r(9717),m=r(1316),g=r(969),v=r(9369),w={},C=r(2685),b=r(4280),q=r(1257),R=r.n(q),L=r(2426),k=r.n(L),_=r(7574),P=g.lazy((function(){return r.e(235).then(r.bind(r,3235))})),y=function(e){var n=(0,v.I0)(),r=(0,g.useRef)(null),q=(0,g.useState)([]),L=(0,s.Z)(q,2),y=L[0],F=L[1],S=(0,g.useState)([]),I=(0,s.Z)(S,2),O=I[0],z=I[1],B=(0,g.useState)([]),M=(0,s.Z)(B,2),A=M[0],E=M[1],D=(0,g.useState)([]),H=(0,s.Z)(D,2),N=H[0],T=H[1],V=(0,g.useState)(!0),$=(0,s.Z)(V,2),K=$[0],U=$[1],X=(0,v.v9)((function(e){return e.data.data})),G=(0,v.v9)((function(e){return e.pullrequestFilter.filter})),J=(0,v.v9)((function(e){return e.pullrequestFilter.filteredData})),Q=i.Z.useForm(),W=(0,s.Z)(Q,1)[0],Y=(0,g.useCallback)(R()((function(e){n(C.hX(e))}),400),[]),ee=function(e){return e.reduce((function(e,n){return n&&!e.find((function(e){return e.login===n.login}))&&e.push(n),e}),[]).sort((function(e,n){return null!==e&&void 0!==e&&e.login&&null!==n&&void 0!==n&&n.login?e.login.toLocaleLowerCase()<n.login.toLocaleLowerCase()?-1:e.login.toLocaleLowerCase()>n.login.toLocaleLowerCase()?1:0:0}))};(0,g.useEffect)((function(){var e;null===(e=r.current)||void 0===e||e.focus({cursor:"start"})}),[]),(0,g.useEffect)((function(){var e;null!==(e=J.projects)&&void 0!==e&&e.length&&(F(Array.from(new Set(J.projects.flatMap((function(e){return e.pullRequests.map((function(e){return e.base.ref})).filter((function(e){return e}))})))).sort(b.$)),z(Array.from(new Set(J.projects.flatMap((function(e){return e.pullRequests.map((function(e){return e.head.ref})).filter((function(e){return e}))})))).sort(b.$)),E(ee(J.projects.flatMap((function(e){return e.pullRequests.map((function(e){return e.user})).filter((function(e){return e}))})))),T(ee(J.projects.flatMap((function(e){return e.pullRequests.flatMap((function(e){return e.requested_reviewers})).filter((function(e){return e}))})))))}),[J,n]);var ne=function(e,n){return!e||n.ref&&e.includes(n.ref)},re=function(e,n){return!e||0===e.length||n&&n.filter((function(n){return e.includes(n.login)})).length>0},te=function(e,n){return n?e:e.filter((function(e){var n;return(null===(n=e.pullRequests)||void 0===n?void 0:n.length)>0}))};return(0,g.useEffect)((function(){if(null!==X&&void 0!==X&&X.projects)if(function(e){return 1===Object.keys(e).length||(!e.base||0===e.base.length)&&(!e.head||0===e.head.length)&&(!e.userLogins||0===e.userLogins.length)&&(!e.requested_reviewersLogins||0===e.requested_reviewersLogins.length)&&[null,void 0,""].includes(e.search)&&(!e.date||2!==e.date.length)}(G))n(C.a_({metadata:X.metadata,projects:te(X.projects,G.showZeroPullRequests)}));else{var e=G.search?G.search.toLocaleLowerCase():void 0,r=X.projects.reduce((function(n,r){var s=r.pullRequests.filter((function(n){return ne(G.base,n.base)&&ne(G.head,n.head)&&re(G.userLogins,n.user?[n.user]:void 0)&&re(G.requested_reviewersLogins,n.requested_reviewers)&&(l=e,s=n.title,!l||s&&s.toLocaleLowerCase().includes(l))&&(r=G.date,t=n.created_at,!r||2!==r.length||t&&k()(t).isBetween(r[0].startOf("day"),r[1].endOf("day")));var r,t,l,s}));return[].concat((0,l.Z)(n),[(0,t.Z)((0,t.Z)({},r),{},{pullRequests:s})])}),[]);n(C.a_({metadata:X.metadata,projects:te(r,G.showZeroPullRequests)}))}}),[G,X,n]),(0,_.jsx)(i.Z,{initialValues:w,onValuesChange:Y,form:W,children:(0,_.jsx)(o.Z,{children:(0,_.jsx)(c.Z,{span:24,children:(0,_.jsx)(d.Z,{activeKey:K?"0":"1",ghost:!0,style:{backgroundColor:"#FFFFFF"},expandIcon:function(e){var n=e.isActive;return(0,_.jsx)(u.Z,{rotate:n?90:0,style:{fontSize:18,marginTop:5}})},onChange:function(e){return U(!e.includes("1"))},children:(0,_.jsxs)(d.Z.Panel,{header:(0,_.jsx)(p.Z.Title,{level:4,children:"Filter Pull Requests"}),extra:(0,_.jsx)(i.Z.Item,{name:"showZeroPullRequests",children:(0,_.jsx)("span",{onClick:function(e){Y({showZeroPullRequests:!G.showZeroPullRequests}),e.stopPropagation()},children:(0,_.jsx)(h.Z,{checkedChildren:"Show 0 Pull Requests",unCheckedChildren:"Hide 0 Pull Requests",defaultChecked:!0})})}),children:[(0,_.jsxs)(o.Z,{gutter:[12,0],children:[(0,_.jsx)(c.Z,{span:12,children:(0,_.jsx)(i.Z.Item,{label:"Pull Request",name:"search",labelCol:{span:24},wrapperCol:{span:24},children:(0,_.jsx)(f.Z,{ref:r,placeholder:"pull request title",allowClear:!0})})}),(0,_.jsx)(c.Z,{span:12,children:(0,_.jsx)(i.Z.Item,{label:"Date",name:"date",labelCol:{span:24},wrapperCol:{span:24},children:(0,_.jsx)(j.Z.RangePicker,{})})})]}),(0,_.jsxs)(o.Z,{gutter:[12,0],children:[(0,_.jsx)(c.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{label:"Base",name:"base",labelCol:{span:24},wrapperCol:{span:24},children:(0,_.jsx)(Z.Z,{mode:"multiple",placeholder:"Branch",children:y.map((function(e){return(0,_.jsx)(Z.Z.Option,{children:e},e)}))})})}),(0,_.jsx)(c.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{label:"Head",name:"head",labelCol:{span:24},wrapperCol:{span:24},children:(0,_.jsx)(Z.Z,{mode:"multiple",placeholder:"Branch",children:O.map((function(e){return(0,_.jsx)(Z.Z.Option,{children:e},e)}))})})}),(0,_.jsx)(c.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{label:"Users",name:"userLogins",labelCol:{span:24},wrapperCol:{span:24},children:(0,_.jsx)(Z.Z,{mode:"multiple",placeholder:"Pull Request user",children:A.map((function(e){return(0,_.jsx)(Z.Z.Option,{children:(0,_.jsx)(g.Suspense,{fallback:(0,_.jsx)(m.Z,{size:"small"}),children:(0,_.jsx)(P,{user:e,size:16,showName:!0,hideButton:!0})})},null===e||void 0===e?void 0:e.login)}))})})}),(0,_.jsx)(c.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{label:"Reviewers",name:"requested_reviewersLogins",labelCol:{span:24},wrapperCol:{span:24},children:(0,_.jsx)(Z.Z,{mode:"multiple",placeholder:"Pull Request reviewers",children:N.map((function(e){return(0,_.jsx)(Z.Z.Option,{children:(0,_.jsx)(g.Suspense,{fallback:(0,_.jsx)(m.Z,{size:"small"}),children:(0,_.jsx)(P,{user:e,size:16,showName:!0,hideButton:!0})})},null===e||void 0===e?void 0:e.login)}))})})})]}),(0,_.jsx)(o.Z,{justify:"end",children:(0,_.jsx)(c.Z,{children:(0,_.jsx)(x.Z,{type:"primary",icon:(0,_.jsx)(a.Z,{}),onClick:function(){W.resetFields(),n(C.mc())},children:"Clear"})})})]},"1")})})})})},F=y}}]);
//# sourceMappingURL=14.27403cc6.chunk.js.map