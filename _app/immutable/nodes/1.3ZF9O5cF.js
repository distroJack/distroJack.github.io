import{s as S,n as _,b as x}from"../chunks/scheduler.BvLojk_z.js";import{S as k,i as q,e as f,k as d,s as y,c as g,l as h,m as v,d as l,a as C,g as m,f as $,n as E}from"../chunks/index.Cksj1tUe.js";import{s as H}from"../chunks/entry.CvBX2nd3.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",n,o,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=f("h1"),n=d(r),o=y(),i=f("p"),u=d(c)},l(e){t=g(e,"H1",{});var a=h(t);n=v(a,r),a.forEach(l),o=C(e),i=g(e,"P",{});var p=h(i);u=v(p,c),p.forEach(l)},m(e,a){m(e,t,a),$(t,n),m(e,o,a),m(e,i,a),$(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(n,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(u,c)},i:_,o:_,d(e){e&&(l(t),l(o),l(i))}}}function z(s,t,r){let n;return x(s,j,o=>r(0,n=o)),[n]}let F=class extends k{constructor(t){super(),q(this,t,z,w,S,{})}};export{F as component};
