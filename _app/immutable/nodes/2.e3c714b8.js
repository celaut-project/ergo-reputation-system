import{s as h,n as f,r as j}from"../chunks/scheduler.e108d1fd.js";import{S as T,i as S,g as m,s as g,h as C,y as p,c as N,a,z as b,f as i}from"../chunks/index.c1d64499.js";function W(l){let e,v="Welcome to SvelteKit",c,n,x="Connect to Nautilus",u,o,d="Generate Reputation Proof",r,_;return{c(){e=m("h1"),e.textContent=v,c=g(),n=m("button"),n.textContent=x,u=g(),o=m("button"),o.textContent=d},l(t){e=C(t,"H1",{"data-svelte-h":!0}),p(e)!=="svelte-yyjjjs"&&(e.textContent=v),c=N(t),n=C(t,"BUTTON",{"data-svelte-h":!0}),p(n)!=="svelte-dso3br"&&(n.textContent=x),u=N(t),o=C(t,"BUTTON",{"data-svelte-h":!0}),p(o)!=="svelte-1fg34vj"&&(o.textContent=d)},m(t,s){a(t,e,s),a(t,c,s),a(t,n,s),a(t,u,s),a(t,o,s),r||(_=[b(n,"click",y),b(o,"click",y)],r=!0)},p:f,i:f,o:f,d(t){t&&(i(e),i(c),i(n),i(u),i(o)),r=!1,j(_)}}}async function y(){if(ergoConnector){const l=ergoConnector.nautilus;if(l){console.log("Nautilus Wallet is ready to use");const e=await l.connect();console.log(e?"Connected!":"Not connected!")}else console.log("Nautilus Wallet is not active")}else console.log("No wallet available")}function k(l){return[]}class O extends T{constructor(e){super(),S(this,e,k,W,h,{})}}export{O as component};
