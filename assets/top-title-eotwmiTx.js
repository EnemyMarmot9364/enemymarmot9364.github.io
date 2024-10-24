import{z as d,o as n,b as i,e as t,ab as o,x as u,aC as f,i as p,f as a,g}from"./modules/vue-Bu3mA-Of.js";import{u as v}from"./slidev/context-BWoUwfrI.js";function b(r){switch(r){case"ct":return"ns-c-center ns-c-top";case"cm":return"ns-c-center ns-c-middle";case"cb":return"ns-c-center ns-c-bottom";case"lt":return"ns-c-left ns-c-top";case"lm":return"ns-c-left ns-c-middle";case"lb":return"ns-c-left ns-c-bottom";case"rt":return"ns-c-right ns-c-top";case"rm":return"ns-c-right ns-c-middle";case"rb":return"ns-c-right ns-c-bottom";case"c":return"ns-c-center ns-c-top";case"l":return"ns-c-left ns-c-top";case"r":return"ns-c-right ns-c-top";default:return"error"}}const h={key:0,class:"slidev-layout default error"},y={key:1},w={class:"flex flex-col h-full w-full"},k={class:"slidev-layout toptitle content h-fit w-full"},T={key:0,class:"slidev-layout default h-fit w-full"},N={__name:"top-title",props:{color:{default:"light"},align:{default:"l"}},setup(r){v();const l=r,c=d(()=>b(l.align)),m=d(()=>`neversink-${l.color}-scheme`);return(s,e)=>c.value=="error"?(n(),i("div",h,[e[7]||(e[7]=t("span",{class:"ns-c-warning"},[t("b",null,"Error"),o(": invalid layout params.")],-1)),e[8]||(e[8]=t("hr",null,null,-1)),t("p",null,[e[0]||(e[0]=o(" There are two parameters: ")),e[1]||(e[1]=t("code",null,"color",-1)),e[2]||(e[2]=o()),e[3]||(e[3]=t("code",null,"align",-1)),e[4]||(e[4]=o(". Currently: ")),t("code",null,"color: "+u(l.color),1),e[5]||(e[5]=o(" and ")),t("code",null,"align: "+u(l.align),1),e[6]||(e[6]=o(". "))]),e[9]||(e[9]=f("<p> The &quot;slots&quot; of the page are <code>:: title ::</code>, <code>:: content ::</code>, and the implicit default slot </p><p> The <code>align</code> parameter determines how the title is aligned. The letter is (<code>c</code> for center, <code>l</code> for left, <code>r</code> for right). </p><p>The <code>color</code> parameter determines color of the title.</p>",3))])):(n(),i("div",y,[t("div",w,[t("div",{class:p(["w-full h-fit min-h-13 pt-2 pb-2 slidecolor",m.value])},[t("div",{class:p(["slidev-layout toptitle title p-0 pt-0 ml-6 mr-6 mt-auto mb-auto",c.value])},[a(s.$slots,"title")],2)],2),t("div",k,[a(s.$slots,"content")]),s.$slots.default?(n(),i("div",T,[a(s.$slots,"default")])):g("v-if",!0)])]))}};export{N as _};
