let t=0;const e=new WeakMap,s=s=>{const n="jsx-"+t++;return e.set(s,n),customElements.define(n,s,{extends:s.tag}),n},{assign:n}=Object;var a=t=>(a,o,...c)=>"function"==typeof a&&a.tag?t(a.tag,n(o||{},{is:e.get(a)||s(a)}),...c):t(a,o,...c);export{a as default};
