import{x as t,t as e,z as r,A as n}from"./61a91b08.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=t=>void 0===t.strings
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{D:a,V:i,I:l,H:s,W:p}=r,d=(t,e,r={})=>{if(void 0!==e._$litPart$)throw Error("container already contains a live render");let n,o;const a=[],i=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT,null,!1);let l;for(;null!==(l=i.nextNode());){const e=l.data;if(e.startsWith("lit-part")){if(0===a.length&&void 0!==n)throw Error("there must be only one root part per container");o=c(t,l,a,r),null!=n||(n=o)}else if(e.startsWith("lit-node"))u(l,a,r);else if(e.startsWith("/lit-part")){if(1===a.length&&o!==n)throw Error("internal error");o=h(l,o,a)}}console.assert(void 0!==n,"there should be exactly one root part in a render container"),e._$litPart$=n},c=(e,r,n,o)=>{let p,d;if(0===n.length)d=new s(r,null,void 0,o),p=e;else{const t=n[n.length-1];if("template-instance"===t.type)d=new s(r,null,t.instance,o),t.instance.v.push(d),p=t.result.values[t.instancePartIndex++],t.templatePartIndex++;else if("iterable"===t.type){d=new s(r,null,t.part,o);const e=t.iterator.next();if(e.done)throw p=void 0,t.done=!0,Error("Unhandled shorter than expected iterable");p=e.value,t.part._$AH.push(d)}else d=new s(r,null,t.part,o)}if(p=l(d,p),p===t)n.push({part:d,type:"leaf"});else if(null===(c=p)||"object"!=typeof c&&"function"!=typeof c)n.push({part:d,type:"leaf"}),d._$AH=p;else if(((t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e)(p)){const t="lit-part "+f(p);if(r.data!==t)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{const t=s.prototype._$AC(p),e=new a(t,d);n.push({type:"template-instance",instance:e,part:d,templatePartIndex:0,instancePartIndex:0,result:p}),d._$AH=e}}else i(p)?(n.push({part:d,type:"iterable",value:p,iterator:p[Symbol.iterator](),done:!1}),d._$AH=[]):(n.push({part:d,type:"leaf"}),d._$AH=null==p?"":p);var c;return d},h=(t,e,r)=>{if(void 0===e)throw Error("unbalanced part marker");e._$AB=t;const n=r.pop();if("iterable"===n.type&&!n.iterator.next().done)throw Error("unexpected longer than expected iterable");if(r.length>0)return r[r.length-1].part},u=(t,r,n)=>{var a;const i=/lit-node (\d+)/.exec(t.data),s=parseInt(i[1]),d=null!==(a=t.previousElementSibling)&&void 0!==a?a:t.parentElement;if(null===d)throw Error("could not find node for attribute parts");d.removeAttribute("defer-hydration");const c=r[r.length-1];if("template-instance"!==c.type)throw Error("internal error");{const t=c.instance;for(;;){const r=t._$AD.parts[c.templatePartIndex];if(void 0===r||r.type!==e.ATTRIBUTE&&r.type!==e.ELEMENT||r.index!==s)break;if(r.type===e.ATTRIBUTE){const a=new r.ctor(d,r.name,r.strings,c.instance,n),i=o(a)?c.result.values[c.instancePartIndex]:c.result.values,l=!(a.type===e.EVENT||a.type===e.PROPERTY);a._$AI(i,a,c.instancePartIndex,l),c.instancePartIndex+=r.strings.length-1,t.v.push(a)}else{const e=new p(d,c.instance,n);l(e,c.result.values[c.instancePartIndex++]),t.v.push(e)}c.templatePartIndex++}}},f=t=>{const e=new Uint32Array(2).fill(5381);for(const r of t.strings)for(let t=0;t<r.length;t++)e[t%2]=33*e[t%2]^r.charCodeAt(t);return btoa(String.fromCharCode(...new Uint8Array(e.buffer)))};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
globalThis.litElementHydrateSupport=({LitElement:t})=>{const e=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"observedAttributes").get;Object.defineProperty(t,"observedAttributes",{get(){return[...e.call(this),"defer-hydration"]}});const r=t.prototype.attributeChangedCallback;t.prototype.attributeChangedCallback=function(t,e,n){"defer-hydration"===t&&null===n&&o.call(this),r.call(this,t,e,n)};const o=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||o.call(this)};const a=t.prototype.createRenderRoot;t.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):a.call(this)};const i=Object.getPrototypeOf(t.prototype).update;t.prototype.update=function(t){const e=this.render();i.call(this,t),this._$AG?(this._$AG=!1,d(e,this.renderRoot,this.renderOptions)):n(e,this.renderRoot,this.renderOptions)}};
