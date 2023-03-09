!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequireb70b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequireb70b=o),o.register("aVnK3",(function(e,t){var n=o("38EtW");o("eHOcC");document.querySelector(".catalog__list").addEventListener("click",n.handleCocktailClickAction)})),o.register("38EtW",(function(t,n){e(t.exports,"handleCocktailClickAction",(function(){return s}));var i=o("8mYGI"),a=o("8WQrz");const r=document.querySelector(".catalog__icon");function s(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.action,n=e.target.dataset.id;"learn_more"===t?(0,i.handleLearnMoreBtnClick)(n):"favorite"===t?((0,a.addCocktailToFavorite)(n),e.target.dataset.action="remove_favorite",e.target.innerHTML=`Remove ${r.outerHTML}`):"remove_favorite"===t&&((0,a.removeCoctailFromFavorite)(n),e.target.dataset.action="favorite",e.target.innerHTML=`Add to ${r.outerHTML}`)}})),o.register("8mYGI",(function(t,n){e(t.exports,"handleLearnMoreBtnClick",(function(){return s}));var i=o("a48aG"),a=o("8WQrz"),r=o("eHOcC");function s(e){const t=document.querySelector("[data-modal-cocktails]"),n=document.querySelector(".backdrop-cocktails"),o=document.querySelector(".modal-cocktails__button"),s=JSON.parse(localStorage.getItem("favoriteCocktails")||"[]");o.addEventListener("click",(t=>{const n=t.target.dataset.action;"favorite"===n?((0,a.addCocktailToFavorite)(e),t.target.dataset.action="remove_favorite",t.target.innerHTML="Remove from favorite"):"remove_favorite"===n&&((0,a.removeCoctailFromFavorite)(e),t.target.dataset.action="favorite",t.target.innerHTML="Add to favorite")})),(0,i.getCocktailsDetailsById)(e).then((({drinks:e})=>{const i=[],a=[],l=[];for(let t in e[0])t.includes("strIngredient")&&null!==e[0][t]&&a.push(e[0][t]);for(let t in e[0])t.includes("strMeasure")&&null!==e[0][t]&&i.push(e[0][t]);for(let e=0;e<a.length;e+=1)l.push(`<li class="modal-cocktails__item"><span class="modal-cocktails__span">✶</span>\n      ${i[e]||""}<span class="ingredient js-ingredient" data-ingredient="${a[e]}" name='${a[e]}'>${a[e]}</span>\n    </li>`);const c=l.join(" "),d=`\n      <h1 class="modal-cocktails__title">${e[0].strDrink}</h1>\n    <div class="test">\n        <div class="test2">\n          <h2 class="modal-cocktails__subtitle">INSTRACTION:</h2>\n           <p class="modal-cocktails__descrip">${e[0].strInstructions}</p>\n        </div>\n      \n      <img\n        class="modal-cocktails__img"\n        src="${e[0].strDrinkThumb}"\n        alt="modal-cocktails"\n        width="280px"\n        height="280px"\n      />\n\n        <div class="test3">\n          <h2 class="modal-cocktails__conteine">INGREDIENTS</h2>\n          <p class="modal-cocktails__per">Per cocktail</p>\n          <ul class="modal-cocktails__list js-ingredients-list">${c}</ul>\n        </div>   \n    </div>`;t.innerHTML=d,n.classList.remove("hidden"),document.body.style.overflow="hidden",s.includes(e[0].idDrink)&&(o.dataset.action="remove_favorite",o.innerHTML="Remove from favorite");document.querySelector(".js-ingredients-list").addEventListener("click",r.handleIngredientModalOpen)}))}})),o.register("8WQrz",(function(t,n){function i(e){const t=JSON.parse(localStorage.getItem("favoriteCocktails")||"[]");t.includes(e)||(t.push(e),localStorage.setItem("favoriteCocktails",JSON.stringify(t)))}function o(e){const t=JSON.parse(localStorage.getItem("favoriteCocktails")||"[]"),n=t.findIndex((t=>t===e));-1!==n&&(t.splice(n,1),localStorage.setItem("favoriteCocktails",JSON.stringify(t)))}e(t.exports,"addCocktailToFavorite",(function(){return i})),e(t.exports,"removeCoctailFromFavorite",(function(){return o}))})),o.register("eHOcC",(function(t,n){e(t.exports,"handleIngredientModalOpen",(function(){return l}));var i=o("a48aG");const a=document.querySelector("[data-btn-close]"),r=document.querySelector(".backdrop-cocktails"),s=document.querySelector("[data-ingredient-window]");function l(e){if(console.log(e.target),e.preventDefault(),e.target.classList.contains("js-ingredient")){const t=e.target.dataset.ingredient,n=JSON.parse(localStorage.getItem("favoriteIng")||"[]"),o=(document.querySelector("[data-ingredient-window]"),document.querySelector(".modal-ingredient__wrapper")),a=document.querySelector(".js-modal-ingredient");(0,i.getCocktailIngredientByName)(t).then((({ingredients:e})=>{const t=e[0],i=`\n    <h3 class="modal-ingredient__title">${t.strIngredient||"this ingredient is not found"}</h3>\n    <p class="modal-ingredient__descr">${t.strType||"none"}</p>\n    <p class="modal-ingredient__text">\n      <span class="modal-ingredient__name">${t.strIngredient||"this ingredient is not found"}</span> ${t.strDescription||"description is not found"}\n    </p>\n    <ul class="modal-ingredient__list">\n      <li class="modal-ingredient__item"><span class="modal-ingrid__span">✶ </span>Type: ${t.strIngredient||" "}</li>\n      <li class="modal-ingredient__item"><span class="modal-ingrid__span">✶ </span>Country of origin:</li>\n      <li class="modal-ingredient__item"><span class="modal-ingrid__span">✶ </span>Alcohol by volume: ${t.strABV||" "}%</li>\n      <li class="modal-ingredient__item"><span class="modal-ingrid__span">✶ </span>Flavour:</li>\n    </ul>`;o.innerHTML=i,r?.classList.add("hidden"),s.classList.remove("hidden"),document.body.style.overflow="hidden",a.value=t.idIngredient,n.includes(t.idIngredient)?(a.textContent="Remove from favorites",a.dataset.action="remove_favorite"):(a.textContent="Add to favorites",a.dataset.action="favorite")}))}}a.addEventListener("click",(function(e){s.classList.add("hidden"),r?.classList.remove("hidden")}))}))}();
//# sourceMappingURL=index.b6af2d80.js.map
