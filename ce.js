const{setPrototypeOf:t}=Object;const e=!0,o=!1,r="querySelectorAll",n="attributeChangedCallback",a="connectedCallback",s="disconnectedCallback",c=new WeakSet,l=new MutationObserver((t=>{for(const{target:e,attributeName:o,oldValue:r}of t)e[n](o,r,e.getAttribute(o))})),{observe:u}=((t,n=document,a=MutationObserver,s=["*"])=>{const c=(o,n,a,s,l,u)=>{for(const d of o)(u||r in d)&&(l?a.has(d)||(a.add(d),s.delete(d),t(d,l)):s.has(d)||(s.add(d),a.delete(d),t(d,l)),u||c(d[r](n),n,a,s,l,e))},l=new a((t=>{if(s.length){const r=s.join(","),n=new Set,a=new Set;for(const{addedNodes:s,removedNodes:l}of t)c(l,r,n,a,o,o),c(s,r,n,a,e,o)}})),{observe:u}=l;return(l.observe=t=>u.call(l,t,{subtree:e,childList:e}))(n),l})(((t,e)=>{c.has(t)&&t[e?a:s]?.()})),d=Element.prototype.attachShadow;Element.prototype.attachShadow=function(t){const e=d.call(this,t);return u(e),e};let i={HTML:"http://www.w3.org/1999/xhtml",SVG:"http://www.w3.org/2000/svg"};var w=(e=i)=>new Proxy(new Map,{get(o,r){let u=o.get(r);if(!u){o.set(r,u=new Proxy(new Map,{get(t,e){let o=e.toLowerCase();return t.get(o)||p(t,o)}}));let d=new Map,w=e.document||document,b=w.createElementNS.bind(w,e[r]||i[r]),p=(e,o)=>{let r=d.get(o);r||d.set(o,r=b(o).constructor);class u extends((e=>{function o(e){return t(e,new.target.prototype)}return o.prototype=e.prototype,o})(r)){constructor(t){(t=>{const{[n]:e,[a]:o,[s]:r}=t;e&&l.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:t.constructor.observedAttributes.map((o=>{const r=t.getAttribute(o);return null!=r&&e.call(t,o,null,r),o}))}),(o||r)&&(c.add(t),t.isConnected&&o?.call(t))})(super(t||document.createElement(o)))}}return e.set(o,u),u}}return u}});export{w as default};
