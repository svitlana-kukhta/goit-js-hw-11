import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="46284520-d906981dc6cb4e25f7cb86bba",m="https://pixabay.com/api/";function f(s){const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${m}?${o.toString()}`;return fetch(t).then(n=>{if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return n.json()})}function p(s,o){o.innerHTML="",s.forEach(t=>{const n=document.createElement("a");n.href=t.largeImageURL;const e=document.createElement("img");e.src=t.webformatURL,e.alt=t.tags,e.width=360;const r=document.createElement("div");r.classList.add("image-info"),r.innerHTML=`
      <p><strong>Likes:</strong> ${t.likes}</p>
      <p><strong>Views:</strong> ${t.views}</p>
      <p><strong>Comments:</strong> ${t.comments}</p>
      <p><strong>Downloads:</strong> ${t.downloads}</p>
    `,n.appendChild(e),n.appendChild(r),o.appendChild(n)})}const g=document.querySelector("#search-input"),h=document.querySelector(".btn"),y=document.querySelector(".gallery"),i=document.querySelector(".loader");let l;h.addEventListener("click",s=>{s.preventDefault();const o=g.value.trim();if(!o){c.show({message:"Please try again!"});return}i.style.display="block",f(o).then(t=>{if(i.style.display="none",!t.hits||t.hits.length===0){c.show({message:"No images found for your query. Please try another search."});return}p(t.hits,y),l=new u(".gallery a",{captionDelay:250}),l.refresh()}).catch(t=>{i.style.display="none",c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=index.js.map
