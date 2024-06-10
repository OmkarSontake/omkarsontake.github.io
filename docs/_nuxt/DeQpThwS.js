import{r as c,l as D,c as _,a,t as k,i as d,m as V,q as N,v as z,s as H,o as b}from"./CZetQFBS.js";const p=window.setInterval,R={class:"pt-40 lg:py-52 2xl:py-40"},W={class:"justify-between max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto pr-5"},j={class:"space-y-10"},q={id:"digit-clock"},A=a("canvas",{id:"analog-clock",width:"150",height:"150",class:"bg-[#999]"},null,-1),F={class:"space-y-5"},G={key:0,href:"mailto:sontakor@mail.uc.edu",class:"block"},K={__name:"lab-two",setup(U){const u=c(!1),g=c(""),i=c(""),f=c(""),y=()=>{f.value=i.value,i.value=""};function S(){g.value="Current time: "+new Date}function C(){console.log("Show/hide email"),u.value=!u.value}function P(e,o){const t=e.createRadialGradient(0,0,o*.95,0,0,o*1.05);t.addColorStop(0,"#333"),t.addColorStop(.5,"white"),t.addColorStop(1,"#333"),e.beginPath(),e.arc(0,0,o,0,2*Math.PI),e.fillStyle="white",e.fill(),e.strokeStyle=t,e.lineWidth=o*.1,e.stroke(),e.beginPath(),e.arc(0,0,o*.1,0,2*Math.PI),e.fillStyle="#333",e.fill()}function E(e,o){e.font=o*.15+"px arial",e.textBaseline="middle",e.textAlign="center";for(let t=1;t<13;t++){let s=t*Math.PI/6;e.rotate(s),e.translate(0,-o*.85),e.rotate(-s),e.fillText(t.toString(),0,0),e.rotate(s),e.translate(0,o*.85),e.rotate(-s)}}return D(()=>{var e=document.getElementById("analog-clock"),o=e.getContext("2d"),t=e.height/2;o.translate(t,t),t=t*.9,p(s,1e3);function s(){P(o,t),E(o,t),I(o,t)}function I(n,l){const r=new Date,m=r.getHours(),v=r.getMinutes(),w=r.getSeconds(),M=m%12*360/12+v*(360/60)/12;h(n,M,l*.5,l*.07);const T=v*360/60+w*(360/60)/60;h(n,T,l*.8,l*.07);const B=w*360/60;h(n,B,l*.9,l*.02)}function h(n,l,r,m){n.beginPath(),n.lineWidth=m,n.lineCap="round",n.moveTo(0,0),n.rotate(l*Math.PI/180),n.lineTo(0,-r),n.stroke(),n.rotate(-l*Math.PI/180)}p(s,1e3),p(S,500)}),(e,o)=>(b(),_("section",R,[a("div",W,[a("div",j,[a("div",q,k(d(g)),1),A,a("div",F,[a("button",{onClick:C,class:"glow w-fit relative inline-block bg-neutral-100 p-2 rounded-md z-index:1;"}," Show/hide your email "),d(u)?(b(),_("a",G," sontakor@mail.uc.edu ")):V("",!0),N(a("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>H(i)?i.value=t:null),type:"text",placeholder:"echo value",class:"block"},null,512),[[z,d(i)]]),a("button",{onClick:y,class:"glow w-fit relative inline-block bg-neutral-100 p-2 rounded-md z-index:1;"}," Submit Echo "),a("p",null,"Echo: "+k(d(f)),1)])])])]))}};export{K as default};
