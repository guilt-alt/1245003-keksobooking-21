(()=>{"use strict";(()=>{const e=document.querySelector(".map"),t=e.querySelector(".map__pins"),o=t.querySelector(".map__pin--main"),n=e.querySelector(".map__filters"),r=document.querySelector(".ad-form");window.util={map:e,mapPins:t,mapPinMain:o,mapFilters:n,adForm:r,debounce:e=>{let t=null;return function(...o){t&&window.clearTimeout(t),t=window.setTimeout((()=>{e(...o)}),500)}},getRandomInt:(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),enterPressHandler:(e,t)=>{"Enter"===e.key&&(e.preventDefault(),t(e))},escPressHandler:(e,t)=>{"Escape"===e.key&&(e.preventDefault(),t())}}})(),(()=>{const e=document.querySelector("#pin").content.querySelector("button"),t=t=>{const o=e.cloneNode(!0);return o.style=`left: ${t.location.x-25}px; top: ${t.location.y-70}px;`,o.querySelector("img").src=t.author.avatar,o.querySelector("img").alt=t.offer.title,o},o=()=>{document.querySelectorAll(".map__pin:not(.map__pin--main)").forEach((e=>{e.remove()}))};window.pins={createPins:e=>{const n=document.createDocumentFragment(),r=e.length>5?5:e.length;o();for(let o=0;o<r;o++)n.appendChild(t(e[o]));return window.util.mapPins.appendChild(n)},activePin:e=>{window.util.map.querySelectorAll(".map__pin:not(.map__pin--main)").forEach((e=>{e.classList.remove("map__pin--active")})),e.src?e.parentNode.classList.add("map__pin--active"):e.classList.add("map__pin--active")},removePins:o}})(),(()=>{const e=window.util.map,t=document.querySelector("#card").content.querySelector(".popup"),o=o=>{let a=[];const i=".map__pin:not(.map__pin--main)",s=e.querySelectorAll(".map__pin:not(.map__pin--main)");(o.target.matches(i)||o.target.parentNode.matches(i))&&(r(),s.forEach(((e,t)=>{e!==o.target&&e!==o.target.parentNode||(a=window.filtered.data[t])})),window.pins.activePin(o.target),(o=>{const n=e.querySelector(".map__filters-container"),r=document.createDocumentFragment();r.appendChild((e=>{const o=t.cloneNode(!0),n=o.querySelector(".popup__avatar"),r=o.querySelector(".popup__title"),a=o.querySelector(".popup__text--address"),i=o.querySelector(".popup__text--price"),s=o.querySelector(".popup__type"),d=o.querySelector(".popup__text--capacity"),c=o.querySelector(".popup__text--time"),l=o.querySelector(".popup__description"),u=o.querySelector(".popup__features");u.innerHTML="";const p=o.querySelector(".popup__photos");p.innerHTML="";const m=(e,t,o)=>{t?e.remove():e.textContent=o};return m(r,!e.offer.title,e.offer.title),m(i,!e.offer.price,e.offer.price+" ₽/ночь"),m(s,!e.offer.type,{flat:"Квартира",bungalow:"Бунгало",house:"Дом",palace:"Дворец"}[e.offer.type]),m(d,!e.offer.rooms&&!e.offer.guests,`${e.offer.rooms} комнаты для ${e.offer.guests} гостей`),m(c,!e.offer.checkin&&!e.offer.checkout,`Заезд после ${e.offer.checkin}, выезд до ${e.offer.checkout}`),m(l,!e.offer.description,e.offer.description),m(a,!e.offer.address,e.offer.address),e.author.avatar?n.src=e.author.avatar:n.remove(),e.offer.features?e.offer.features.forEach(((e,t)=>{u.insertAdjacentHTML("beforeend",`<li class="popup__feature popup__feature--${e}"></li>`),u.children[t].textContent=e})):u.remove(),e.offer.photos?e.offer.photos.forEach((e=>{p.insertAdjacentHTML("beforeend",`<img src="${e}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)})):p.remove(),o})(o)),e.insertBefore(r,n)})(a),e.addEventListener("click",n),e.addEventListener("keydown",n),document.addEventListener("keydown",n))},n=e=>{e.target.matches(".popup__close")||"Enter"===e.key&&e.target.matches(".popup__close")?r():window.util.escPressHandler(e,r)},r=()=>{const t=e.querySelector(".popup");null!==t&&(t.remove(),e.removeEventListener("click",n),e.removeEventListener("keydown",n),document.removeEventListener("keydown",n))};window.cards={open:o,openHandler:e=>{window.util.enterPressHandler(e,o)},close:r}})(),(()=>{const e=["gif","jpg","jpeg","png"],t=window.util.adForm,o=t.querySelector("#type"),n=t.querySelector("#price"),r=t.querySelector("#room_number"),a=t.querySelector("#capacity"),i=t.querySelector("#timein"),s=t.querySelector("#timeout"),d=t.querySelector("#avatar"),c=t.querySelector("#images"),l=t.querySelector(".ad-form-header__preview img"),u=t.querySelector(".ad-form__photo img"),p=(t,o)=>{const n=t.files[0],r=n.name.toLowerCase();if(e.some((e=>r.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{o.src=e.result,o.classList.remove("hidden")})),e.readAsDataURL(n)}},m=()=>{const e=Number(a.value),t=Number(r.value);e<=t&&100!==t&&0!==e||100===t&&0===e?a.setCustomValidity(""):a.setCustomValidity("Измените количество комнат или гостей"),a.reportValidity()},w=()=>{"bungalow"===o.value?(n.min=0,n.placeholder="0"):"flat"===o.value?(n.min=1e3,n.placeholder="1000"):"house"===o.value?(n.min=5e3,n.placeholder="5000"):(n.min=1e4,n.placeholder="10000")},v=()=>{i.value!==s.value&&(i.value=s.value)},f=()=>{s.value!==i.value&&(s.value=i.value)},y=()=>{p(d,l)},h=()=>{p(c,u)};window.validation={add:()=>{m(),i.addEventListener("input",f),s.addEventListener("input",v),o.addEventListener("input",w),a.addEventListener("input",m),r.addEventListener("input",m),d.addEventListener("change",y),c.addEventListener("change",h)},remove:()=>{n.placeholder="1000",l.src="img/muffin-grey.svg",u.src="",u.classList.add("hidden"),i.removeEventListener("input",f),s.removeEventListener("input",v),o.removeEventListener("input",w),a.removeEventListener("input",m),r.removeEventListener("input",m),d.removeEventListener("change",y),c.removeEventListener("change",h)},getMainPinCoords:(e,o)=>{const n=window.util.mapPinMain,r=Math.ceil(.5*n.clientWidth),a=t.querySelector("#address"),i=`${parseInt(e,10)+r}, ${parseInt(o,10)+80}`;a.value=i}}})(),(()=>{const e=window.util.map,t=window.util.mapPinMain,o=e.querySelector(".map__pins").clientWidth,n=32.5;t.addEventListener("mousedown",(r=>{r.preventDefault();const a=r=>{r.preventDefault();const a=r.pageX-e.offsetLeft,i=r.pageY-e.offsetTop;t.style.left=a<=0?"-32.5px":a>=o?o-n+"px":a-n+"px",t.style.top=i<=90?"50px":i>=590?"550px":i-n+"px",window.validation.getMainPinCoords(t.style.left,t.style.top)},i=e=>{e.preventDefault(),window.validation.getMainPinCoords(t.style.left,t.style.top),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",i)}))})(),(()=>{const e=document.querySelector("main"),t=t=>{const o=document.createDocumentFragment();return o.appendChild(t),e.appendChild(o)},o=e=>{const t=e=>{window.util.escPressHandler(e,o)},o=()=>{document.querySelector(e).remove(),document.removeEventListener("mousedown",o),document.removeEventListener("keydown",t)};document.addEventListener("mousedown",o),document.addEventListener("keydown",t)};window.messages={loadError:e=>{const t=document.createElement("div");t.classList.add("load-err"),t.style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);\n      padding: 30px; max-width: 100%;\n      font-size: 30px; text-align: center; background-color: #CD5C5C; color: white;\n      border-radius: 5px;\n      z-index: 100;",t.textContent=e,document.body.appendChild(t),o(".load-err")},saveSuccess:()=>{const e=document.querySelector("#success").content.querySelector(".success").cloneNode(!0);t(e),window.events.remove(),window.util.adForm.reset(),o(".success")},saveError:()=>{const e=document.querySelector("#error").content.querySelector(".error").cloneNode(!0);t(e),o(".error")}}})(),(()=>{const e=(e,t,o)=>{e.responseType="json",e.timeout=1e4,e.addEventListener("load",(()=>{200===e.status?t(e.response):o(`Статус ответа: ${e.status} ${e.statusText}`)})),e.addEventListener("error",(()=>{o("Произошла ошибка соеденения")})),e.addEventListener("timeout",(()=>{o(`Запрос не успел выполниться за ${e.timeout}мс`)}))};window.backend={load:(t,o)=>{const n=new XMLHttpRequest;e(n,t,o),n.open("GET","https://21.javascript.pages.academy/keksobooking/data"),n.send()},dataLoadHandler:e=>{const t=e;window.load={data:t},window.filter.updatePins(),window.events.formActivation(window.util.mapFilters,!0)},dataSubmitHandler:t=>{(t=>{((t,o,n)=>{const r=new XMLHttpRequest;e(r,o,n),r.open("POST","https://21.javascript.pages.academy/keksobooking"),r.send(t)})(new FormData(window.util.adForm),window.messages.saveSuccess,window.messages.saveError),t.preventDefault()})(t)}}})(),(()=>{const e=window.util.mapFilters,t=e.querySelector("#housing-type"),o=e.querySelector("#housing-price"),n=e.querySelector("#housing-rooms"),r=e.querySelector("#housing-guests"),a=e.querySelectorAll(".map__checkbox");window.filter={updatePins:()=>{let e=window.load.data;window.cards.close(),window.pins.removePins(),e=e.filter((e=>{return d=e.offer.type,("any"===t.value||t.value===d)&&(e=>{switch(o.value){case"low":return e<1e4;case"middle":return e>=1e4&&e<=5e4;case"high":return e>5e4;default:return!0}})(e.offer.price)&&(s=e.offer.rooms,"any"===n.value||Number(n.value)===s)&&(i=e.offer.guests,"any"===r.value||Number(r.value)===i)&&(e=>{for(let t of a)if(t.checked&&!e.includes(t.value))return!1;return!0})(e.offer.features);var i,s,d})),window.pins.createPins(e),window.filtered={data:e}}}})(),(()=>{const e=window.util.map,t=window.util.mapPinMain,o=window.util.mapFilters,n=window.util.adForm,r=(e,t)=>{const o=e.querySelectorAll("fieldset, select");!1===t?o.forEach((e=>{e.setAttribute("disabled","disabled")})):o.forEach((e=>{e.removeAttribute("disabled")}))},a=()=>{e.classList.contains("map--faded")&&window.backend.load(window.backend.dataLoadHandler,window.messages.loadError),o.addEventListener("change",window.util.debounce(window.filter.updatePins)),e.classList.remove("map--faded"),n.classList.remove("ad-form--disabled"),r(n,!0),window.validation.add(),n.addEventListener("submit",window.backend.dataSubmitHandler),n.addEventListener("reset",i),e.addEventListener("click",window.cards.open),e.addEventListener("keydown",window.cards.openHandler)},i=()=>{window.pins.removePins(),window.cards.close(),e.classList.add("map--faded"),n.classList.add("ad-form--disabled"),t.style="left: 570px;top: 375px;",r(o,!1),r(n,!1),window.validation.remove(),o.reset(),n.removeEventListener("submit",window.backend.dataSubmitHandler),n.removeEventListener("reset",i),e.removeEventListener("click",window.cards.open),e.removeEventListener("keydown",window.cards.openHandler)};t.addEventListener("mousedown",(e=>{1===e.which&&a()})),t.addEventListener("keydown",(e=>{window.util.enterPressHandler(e,a)})),r(o,!1),r(n,!1),window.events={remove:i,formActivation:r}})()})();