(function(e){function t(t){for(var n,c,o=t[0],i=t[1],u=t[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(d.length)d.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},l=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/reisefradrag/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=i;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4d02":function(e,t,r){"use strict";r("cd48")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function a(e,t,r,a,l,c){var o=Object(n["l"])("TravelDeduction");return Object(n["g"])(),Object(n["c"])(o)}r("b65f");var l=r("ab33"),c=r.n(l),o={className:"max-w-screen-2xl px-8 py-12 font-light mx-auto"},i={class:"flex flex-col items-center text-center text-gray-800"},u={class:"font-medium text-xl pl-20 -mt-12 text-green-600"},s=Object(n["e"])("p",{class:"text-sm text-right text-gray-600 font-light"}," Fradrag: ",-1),p={class:"items-end mt-8 mb-4 text-gray-700"},d=Object(n["e"])("h1",{class:" text-2xl"},"Reisefradrag",-1),b=Object(n["e"])("p",{class:"text-base"}," Fyll ut feltene for å regne ut inntektsfradrag ",-1),f={class:"h-4 text-red-600"},v={class:"text-left flex"},m={class:" max-w-md text-gray-800"},g=Object(n["e"])("label",{class:"text-xl",for:"expenses"},"Utgifter",-1),j=Object(n["e"])("p",{class:"py-4"},[Object(n["d"])(" I visse tilfeller kan du ha krav på fradrag for utgifter til bompenger og ferge i tillegg til reisefradraget. "),Object(n["e"])("a",{class:"text-green-600 hover:text-green-500",href:"https://www.skatteetaten.no/person/skatt/skattemelding/finn-post/3/2/8/",target:"_blank",rel:"noreferrer"},"Les mer")],-1),O=Object(n["e"])("button",{class:"bg-green-500 text-lg border-2 hover:text-green-500 border-green-500 focus:outline-none text-white hover:bg-white py-2 w-full sm:w-2/3 my-8"}," Fullfør ",-1);function x(e,t,r,a,l,x){var h=Object(n["l"])("multiple-inputs"),y=Object(n["l"])("input-field");return Object(n["g"])(),Object(n["c"])("div",o,[Object(n["e"])("div",i,[Object(n["e"])("img",{class:a.travelDeduction>0&&"animate-bounce",src:c.a,alt:"Travel"},null,2),Object(n["p"])(Object(n["e"])("div",u,[s,Object(n["d"])(" "+Object(n["m"])(a.travelDeduction&&Math.trunc(a.travelDeduction).toLocaleString("nb-NO"))+" kr ",1)],512),[[n["o"],a.travelDeduction>0]]),Object(n["e"])("div",p,[d,b,Object(n["e"])("div",f,[Object(n["p"])(Object(n["e"])("p",null," Beløpet gir ikke rett på fradrag 😥 ",512),[[n["o"],a.request&&0===a.travelDeduction]])])]),Object(n["e"])("form",{action:"submit",onSubmit:t[2]||(t[2]=Object(n["q"])((function(){return a.submit&&a.submit.apply(a,arguments)}),["prevent"]))},[Object(n["e"])(h,{sectionLabel:"Arbeidsreiser",onUpdateTravels:a.getWorkTravels},null,8,["onUpdateTravels"]),Object(n["e"])(h,{sectionLabel:"Besøksreiser",onUpdateTravels:a.getVisitTravels},null,8,["onUpdateTravels"]),Object(n["e"])("div",v,[Object(n["e"])("div",m,[Object(n["e"])("div",null,[g,j,Object(n["e"])(y,{class:" w-1/2",type:"number",modelValue:a.expenses,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.expenses=e}),metaText:"kr",placeholder:"2 500"},null,8,["modelValue"])])])]),O],32)])])}var h=r("1da1"),y=(r("96cf"),r("d3b7"),{class:"mb-8 text-left"}),k={class:"text-xl"},w={class:"flex space-x-8"};function T(e,t,r,a,l,c){var o=Object(n["l"])("input-field");return Object(n["g"])(),Object(n["c"])("div",y,[Object(n["e"])("label",k,Object(n["m"])(e.sectionLabel),1),(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["k"])(e.travels,(function(t,r){return Object(n["g"])(),Object(n["c"])("div",{key:r,class:"grid grid-cols-2 my-4 space-x-4",onInput:function(t){return e.updateArray(t,r)}},[Object(n["e"])(o,{type:"number",name:"km",placeholder:"35",metaText:"km"}),Object(n["e"])(o,{name:"times",type:"number",placeholder:"5",metaText:"antall"})],40,["onInput"])})),128)),Object(n["e"])("div",w,[Object(n["e"])("div",{class:"text-green-600 hover:text-green-500 cursor-pointer",onClick:t[1]||(t[1]=function(){return e.addVariation&&e.addVariation.apply(e,arguments)})}," Legg til flere "),Object(n["p"])(Object(n["e"])("div",{class:"text-red-600 hover:text-red-400 cursor-pointer",onClick:t[2]||(t[2]=function(){return e.removeVariation&&e.removeVariation.apply(e,arguments)})}," Fjern felt ",512),[[n["o"],e.travels.length>1]])])])}r("b0c0"),r("a434");var S=Object(n["r"])("data-v-421208ae");Object(n["i"])("data-v-421208ae");var V={class:"font-light text-gray border focus-within:border-green-500 relative p-4"};Object(n["h"])();var I=S((function(e,t,r,a,l,c){return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["e"])("div",V,[Object(n["e"])("input",{name:r.name,id:r.id,value:r.modelValue||r.value,placeholder:r.placeholder,type:"number",class:"block font-light w-full focus:outline-none text-left",onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["name","id","value","placeholder"]),Object(n["e"])("span",null,[Object(n["p"])(Object(n["e"])("label",{class:"absolute top-0 py-4 right-0 mx-4",for:r.name},Object(n["m"])(r.metaText),9,["for"]),[[n["o"],r.metaText]])])])])})),P=(r("a9e3"),{props:{name:{type:String,default:""},id:{type:String,default:""},modelValue:{type:[String,Number],default:""},value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},metaText:{type:String,default:""}}});r("4d02");P.render=I,P.__scopeId="data-v-421208ae";var _=P,D=Object(n["f"])({props:{sectionLabel:{type:String,default:""}},components:{InputField:_},setup:function(){var e=Object(n["j"])([{km:"",antall:""}]),t=function(t,r){var a=t.target.value;"km"===t.target.name?e.value[r].km=parseInt(a):e.value[r].antall=parseInt(a),this.$emit("updateTravels",Object(n["n"])(e.value))},r=function(){e.value.push({km:"",antall:""})},a=function(){e.value.splice(e.value.length-1,1)};return{travels:e,addVariation:r,removeVariation:a,updateArray:t}}});D.render=T;var F=D,L={components:{MultipleInputs:F,InputField:_},setup:function(){var e,t,r=Object(n["j"])("0"),a=Object(n["j"])(),l=Object(n["j"])(""),c=function(t){e=t},o=function(e){t=e},i=function(){window.scrollTo(0,0),a.value={arbeidsreiser:e||[{km:0,antall:0}],besoeksreiser:t||[{km:0,antall:0}],utgifterBomFergeEtc:parseInt(l.value)},r.value=u()},u=function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value)};fetch("https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag",e).then(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,t.ok){e.next=6;break}return a=n&&n.message||t.status,e.abrupt("return",Promise.reject(a));case 6:r.value=n.reisefradrag;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))};return{travelDeduction:r,submit:i,MultipleInputs:F,workTravels:e,getWorkTravels:c,visitTravels:t,getVisitTravels:o,expenses:l,request:a}}};L.render=x;var M=L,N={name:"App",components:{TravelDeduction:M}};N.render=a;var U=N;r("a766");Object(n["b"])(U).mount("#app")},a766:function(e,t,r){},ab33:function(e,t,r){e.exports=r.p+"img/travel-image-3.cd20794d.png"},cd48:function(e,t,r){}});
//# sourceMappingURL=app.8f28b31c.js.map