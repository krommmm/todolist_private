(()=>{"use strict";const e=class{constructor(){this.storageArray=this.getStorage()}getStorage(){return void 0!==localStorage.getItem("lists")&&null!==localStorage.getItem("lists")?JSON.parse(localStorage.getItem("lists")):null===localStorage.getItem("lists")||void 0===localStorage.getItem("lists")?{todo:[],workToday:[],work:[],wish:[],course:[],fetes:[],aniv:[]}:void 0}setStorage(e){localStorage.setItem("lists",JSON.stringify(e))}},t=class{constructor(e){this.typeList=e}afficherList(){let t="",a=(new e).getStorage()[this.typeList]||{todo:[],workToday:[],work:[],wish:[],course:[],fetes:[]},r=new Date;for(let e=0;e<a.length;e++){let n="",s="",i="";null!==a[e].date&&void 0!==a[e].date&&(n=new Date(a[e].date[2],a[e].date[1]-1,a[e].date[0]),s=n-r),s=Math.ceil(s/864e5);let o="jours";i=s<4?"timeLeft red":"timeLeft",s>31&&(s=Math.round(s/31),o="mois"),s<1&&s>-1&&(s="today",o=""),null!==a[e].date&&void 0!==a[e].date?t+=`\n        <div class="container" data-id="${a[e].id}">\n        <div class="description">\n          <div  draggable="true" class="text">\n          <p  class="myText">${a[e].texte} <span class="${i}"> ${s} ${o}</span></p>\n          <i class="fa-solid fa-chevron-right"></i>\n          </div>\n        </div>\n        <div class="item">\n        <i class="fa-regular fa-pen-to-square modify"></i\n        ><i class="fa-regular fa-trash-can delete"></i>\n        </div>\n      </div>\n        `:t+=`\n            <div  class="container" data-id="${a[e].id}">\n            <div  class="description">\n              <div draggable="true" class="text">\n              <p  class="myText">${a[e].texte}</p>\n              <i class="fa-solid fa-chevron-right"></i>\n              </div>\n            </div>\n            <div class="item">\n            <i class="fa-regular fa-pen-to-square modify"></i\n            ><i class="fa-regular fa-trash-can delete"></i>\n            </div>\n          </div>\n            `}document.querySelector(".list").innerHTML=t}};var a,r=new Uint8Array(16);function n(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=[],o=0;o<256;++o)i.push((o+256).toString(16).substr(1));const l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&s.test(e)}(a))throw TypeError("Stringified UUID is invalid");return a},c=function(e,t,a){var r=(e=e||{}).random||(e.rng||n)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){a=a||0;for(var s=0;s<16;++s)t[a+s]=r[s];return t}return l(r)},d=class{constructor(e,t,a){this.year=e,this.month=t,this.date=a,this.donnée={year:this.year,month:{janvier:31,fevrier:28,mars:31,avril:30,mai:31,juin:30,juillet:31,aout:31,septembre:30,octobre:31,novembre:30,decembre:31},day:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]}}obtenirDateActuelle(){let e=new Date,t=e.getFullYear(),a=e.getMonth()+1;return[e.getDate(),a,t]}isThisYearBisextil(){return this.year%4==0&&this.year%100!=0||this.year%400==0}obtenirDateDuMois(e,t,a){return new Date(e,t-1,a-1).getDay()}convertMoisEnLettre(e,t){let a=e.donnée.month;return Object.keys(a)[t-1]}convertMoisLettreEnInt(e,t){let a=Object.keys(e.donnée.month);for(let e=0;e<a.length;e++)if(a[e]===t)return e+1}},u=class{constructor(e,t,a,r){this.year=e,this.mois=t,this.day=a,this.joursSemaine=["Lun.","Mar.","Mer.","Jeu.","Ven.","Sam.","Dim."],this.newYear=r}obtenirJoursDansLeMois(){return this.newYear.donnée.month[this.mois]}tournerAGauche(e){if(e<=0)return e;e--;let t=-document.querySelector(".mois").offsetWidth;return document.getElementById("diapo_container").style.transform=`translateX(${t*e}px)`,e}tournerADroite(e,t){if(++e===t)return e-1;let a=-document.querySelector(".mois").offsetWidth;return document.getElementById("diapo_container").style.transform=`translateX(${a*e}px)`,e}afficherCalendrier(){const e=this.obtenirJoursDansLeMois(),t=this.day;let a=0,r=1,n=document.createElement("div");n.className="containerCalendar";let s=document.createElement("div");s.className="divPara";let i=document.createElement("p"),o=document.createElement("p");i.className="paraMonth",o.className="paraYear";let l=document.createTextNode(`${this.mois}`),c=document.createTextNode(` ${this.year}`);i.appendChild(l),o.appendChild(c),s.appendChild(i),s.appendChild(o),n.appendChild(s);let d=document.createElement("table"),u=document.createElement("thead"),m=document.createElement("tr");this.joursSemaine.forEach((e=>{let t=document.createElement("th"),a=document.createTextNode(`${e}`);t.appendChild(a),m.appendChild(t)})),u.appendChild(m),d.appendChild(u);for(let s=0;s<6;s++){let s=document.createElement("tr");for(let n=0;n<this.joursSemaine.length;n++){let n,i=document.createElement("td");a<t||r>e?n=document.createTextNode(""):(n=document.createTextNode(`${r}`),i.className="joursSemaine",r++),a++,i.appendChild(n),s.appendChild(i)}d.appendChild(s),n.appendChild(d)}return n}},m={anniversaire:[{date:[4,2,1993],prenom:"quentin"},{date:[13,2,1996],prenom:"axelle"},{date:[28,2,1991],prenom:"edwald"},{date:[28,2,1991],prenom:"alain"},{date:[18,2,1956],prenom:"achile"},{date:[3,3,2017],prenom:"erwin"},{date:[14,3,1989],prenom:"enguerand"},{date:[18,4,1964],prenom:"marie-hélène"},{date:[19,4,1961],prenom:"jean-françois"},{date:[29,4,1961],prenom:"franck"},{date:[11,5,2020],prenom:"claire"},{date:[17,5,1993],prenom:"jumelles"},{date:[20,5,1988],prenom:"javier"},{date:[5,7,1965],prenom:"cecile"},{date:[8,7,1998],prenom:"florianne"},{date:[20,7,1989],prenom:"thibault"},{date:[13,8,2022],prenom:"calixsta"},{date:[23,9,1993],prenom:"caroline"},{date:[12,10,1936],prenom:"nicole"},{date:[26,11,1936],prenom:"arlette"},{date:[25,12,1950],prenom:"marineau"},{date:[26,12,1958],prenom:"pascal"},{date:[30,12,1999],prenom:"lancelot"}]};window.addEventListener("load",(function(){localStorage.setItem("typeList",JSON.stringify("todo"));let e=JSON.parse(localStorage.getItem("typeList"));document.querySelector(".toDo").classList.remove("blue_light"),document.querySelector(".toDo").classList.add("btn-santa"),new t(e).afficherList()}));let f=(new d).obtenirDateActuelle(),p=f[2],h=f[1],g=f[0],y=new d(p,h,g),v=p,L=document.createElement("div");L.id="diapo_container";let S="";for(let e=v;e<v+3;e++){let t=new d(e,h,g),a=t.isThisYearBisextil();t.donnée.month.fevrier=a?29:28;for(let e=h;e<13;e++){let a=(new d).convertMoisEnLettre(t,e),r=t.obtenirDateDuMois(t.donnée.year,e,1),n=new u(t.donnée.year,a,r,t).afficherCalendrier();S+=n;let s=document.createElement("div");s.className="mois",s.appendChild(n),L.appendChild(s)}h=1}document.querySelector(".modal_content").appendChild(L),document.addEventListener("click",(e=>{let t=e.target;if(t.classList.contains("aniv")){document.querySelectorAll(".btn").forEach((e=>{e.classList.remove("btn-santa"),e.classList.add("blue_light")})),t.classList.remove("blue_light"),t.classList.add("btn-santa"),localStorage.setItem("typeList",JSON.stringify("aniv")),JSON.parse(localStorage.getItem("typeList"));let e=new class{constructor(e){this.fetesList=e,this.anniversaire=e.anniversaire}calculerAge(e,t){return(e-t)/31536e6}afficherAnniversaire(){let e="",t=(new d).obtenirDateActuelle(),a=new Date(t[2],t[1]-1,t[0]);return this.anniversaire.forEach((r=>{let n=new Date(r.date[2],r.date[1]-1,r.date[0]),s=(new Date(t[2],r.date[1]-1,r.date[0])-a)/864e5,i=this.calculerAge(a,n),o=Math.floor(i);const l=s<=31&&s>0?"jours":"";o=s<=31&&s>0?Math.floor(i)+1:Math.floor(i);const c=s<=31&&s>0?"aura":"a",d=s<=31&&s>0?"dans":"",u=s<=31&&s>0?"timeLeft red":"timeLeft minus",m=s<=31&&s>0?s:"";e+=`\n      <div class="container">\n\t      <div class="description">\n\t      \t<div class="text">\n\t\t\t  <p><span class="dino">${r.prenom.toUpperCase()}</span> [${r.date[0]}/${r.date[1]}/${r.date[2]}]<span class="${u}"> ${c} ${o} ans ${d} ${m} ${l}</span></p>\n\t      \t</div>\n      \t</div>\n    </div>\n      `})),e}}(m).afficherAnniversaire();document.querySelector(".list").innerHTML=e}})),[{class:"toDo",typeList:"todo"},{class:"workToday",typeList:"workToday"},{class:"work",typeList:"work"},{class:"wish",typeList:"wish"},{class:"course",typeList:"course"},{class:"fetes",typeList:"fetes"}].forEach((e=>{document.addEventListener("click",(a=>{let r=a.target;if(r.classList.contains(`${e.class}`))try{(new class{constructor(){}changerStyles(e){document.querySelectorAll(".btn").forEach((e=>{e.classList.remove("btn-santa"),e.classList.add("blue_light")})),e.classList.remove("blue_light"),e.classList.add("btn-santa")}}).changerStyles(r),localStorage.setItem("typeList",JSON.stringify(`${e.typeList}`));let a=JSON.parse(localStorage.getItem("typeList"));new t(a).afficherList()}catch(e){console.log(e)}}))}));let w=!1;document.addEventListener("click",(e=>{let t=e.target;if(t.classList.contains("text")){let e=t.closest(".container");w?w&&(e.querySelector(".item").style.transitionDuration="0.5s",e.querySelector(".item").style.marginRight="-200px",e.querySelector(".modify").style.transform="rotate(360deg)",e.querySelector(".delete").style.transform="rotate(360deg)",w=!1):(e.querySelector(".item").style.transitionDuration="0.5s",e.querySelector(".item").style.marginRight="0px",e.querySelector(".modify").style.transform="rotate(-360deg)",e.querySelector(".delete").style.transform="rotate(-360deg)",w=!0)}else if(t.classList.contains("myText")){let e=t.closest(".container");w?w&&(e.querySelector(".item").style.transitionDuration="0.5s",e.querySelector(".item").style.marginRight="-200px",e.querySelector(".modify").style.transform="rotate(360deg)",e.querySelector(".delete").style.transform="rotate(360deg)",w=!1):(e.querySelector(".item").style.transitionDuration="0.5s",e.querySelector(".item").style.marginRight="0px",e.querySelector(".modify").style.transform="rotate(-360deg)",e.querySelector(".delete").style.transform="rotate(-360deg)",w=!0)}}));let E=0,b=L.childElementCount;document.addEventListener("click",(e=>{e.target.classList.contains("fa-angles-left")&&(E=(new u).tournerAGauche(E))})),document.addEventListener("click",(e=>{e.target.classList.contains("fa-angles-right")&&(E=(new u).tournerADroite(E,b))})),document.addEventListener("click",(e=>{if(e.target.classList.contains("close-calendar")){document.querySelector(".modal").classList.add("hidden");let e=document.querySelector(".fa-calendar-days");e.classList.contains("inactive")||e.classList.add("inactive")}})),document.addEventListener("submit",(a=>{a.preventDefault();let r=document.querySelector(".myInput");if(void 0!==r.value&&null!==r.value&&""!==r.value){let a=(new e).getStorage(),n=c(),s=JSON.parse(localStorage.getItem("typeList")),i=a[s]||[],o=document.querySelector(".fa-calendar-days");if(o.classList.contains("inactive"))o.classList.contains("inactive")&&i.push({texte:r.value,id:n});else{let e=JSON.parse(localStorage.getItem("dateCalendar"));i.push({texte:r.value,id:n,date:e})}(new e).setStorage(a),new t(s).afficherList(),r.value=""}else r.value=""})),document.addEventListener("click",(e=>{if(e.target.classList.contains("joursSemaine")){document.querySelectorAll("td").forEach((e=>{e.classList.remove("blue")})),e.target.classList.add("blue");let t=e.target.closest("table").parentElement,a=parseInt(e.target.textContent),r=parseInt(t.querySelector(".paraYear").textContent),n=t.querySelector(".paraMonth").textContent;n=convertMoisLettreEnInt(y,n),localStorage.setItem("dateCalendar",JSON.stringify([a,n,r]))}})),document.addEventListener("click",(a=>{let r=a.target;if(r.classList.contains("modify")){let a=(new e).getStorage(),n=r.closest(".container").dataset.id,s=prompt("Quoi toi vouloir ajouter : "),i=JSON.parse(localStorage.getItem("typeList"));if(null!=s)for(let r=0;r<a[i].length;r++)a[i][r].id===n&&(a[i][r].texte=s,(new e).setStorage(a),new t(i).afficherList())}})),document.addEventListener("click",(a=>{let r=a.target;if(r.classList.contains("delete")){let a=(new e).getStorage(),n=r.closest(".container").dataset.id,s=JSON.parse(localStorage.getItem("typeList"));for(let t=0;t<a[s].length;t++)a[s][t].id===n&&(a[s].splice(t,1),(new e).setStorage(a));new t(s).afficherList()}})),document.addEventListener("click",(e=>{e.target.classList.contains("search")&&document.querySelector(".modal").classList.add("hidden")})),document.addEventListener("click",(e=>{let t=e.target;t.classList.contains("fa-calendar-days")&&(t.classList.contains("inactive")?(t.classList.remove("inactive"),document.querySelector(".modal").classList.remove("hidden")):t.classList.contains("inactive")||t.classList.add("inactive"))})),document.addEventListener("DOMContentLoaded",(function(){const a=document.getElementById("sortable-list");let r=null;a.addEventListener("dragstart",(function(e){r=e.target,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html",r.innerHTML)})),a.addEventListener("dragover",(function(e){e.preventDefault()})),a.addEventListener("drop",(function(a){if(a.preventDefault(),a.target.classList.contains("text")){let n=a.target,s=r.closest(".container").dataset.id,i=n.closest(".container").dataset.id,o=new e,l=o.getStorage(),c="",d="",u=JSON.parse(localStorage.getItem("typeList"));if("todo"===u){l.todo.forEach(((e,t)=>{e.id===i&&(d=t),e.id===s&&(c=t)}));let e=l.todo[c],a=l.todo[d];l.todo.splice(d,1,e),l.todo.splice(c,1,a),o.setStorage(l),new t(u).afficherList()}else if("workToday"===u){l.workToday.forEach(((e,t)=>{e.id===i&&(d=t),e.id===s&&(c=t)}));let e=l.workToday[c],a=l.workToday[d];l.workToday.splice(d,1,e),l.workToday.splice(c,1,a),o.setStorage(l),new t(u).afficherList()}else if("work"===u){l.work.forEach(((e,t)=>{e.id===i&&(d=t),e.id===s&&(c=t)}));let e=l.work[c],a=l.work[d];l.work.splice(d,1,e),l.work.splice(c,1,a),o.setStorage(l),new t(u).afficherList()}else if("wish"===u){l.wish.forEach(((e,t)=>{e.id===i&&(d=t),e.id===s&&(c=t)}));let e=l.wish[c],a=l.wish[d];l.wish.splice(d,1,e),l.wish.splice(c,1,a),o.setStorage(l),new t(u).afficherList()}else if("fetes"===u){l.fetes.forEach(((e,t)=>{e.id===i&&(d=t),e.id===s&&(c=t)}));let e=l.fetes[c],a=l.fetes[d];l.fetes.splice(d,1,e),l.fetes.splice(c,1,a),o.setStorage(l),new t(u).afficherList()}else if("course"===u){l.course.forEach(((e,t)=>{e.id===i&&(d=t),e.id===s&&(c=t)}));let e=l.course[c],a=l.course[d];l.course.splice(d,1,e),l.course.splice(c,1,a),o.setStorage(l),new t(u).afficherList()}}}))}))})();