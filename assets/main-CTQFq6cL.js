(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/TeledigitosWeb/assets/teledigitos-DWjb1xFn.png`,t=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <header class="navbar">
        <div class="container nav-content">
          <div class="logo">
            <a href="index.html">
              <img src="${e}" alt="Teledígitos" style="height: 40px; width: auto;" />
            </a>
          </div>
          <nav class="nav-links">
            <a href="index.html">Inicio</a>
            <a href="index.html#manifesto">Manifiesto</a>
            <a href="index.html#services">Servicios</a>
            <a href="aspiracion.html">Aspiración</a>
            <a href="about.html">About</a>
          </nav>
        </div>
      </header>
    `}};customElements.define(`app-header`,t);var n=`/TeledigitosWeb/assets/logo-Teledigitos-DLg7xNpc.png`,r=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <footer class="footer">
        <div class="container footer-content">
          <div class="footer-logo">
            <img src="${n}" alt="Teledígitos" style="height: 100px; width: auto;" />
          </div>
          <div class="footer-tagline">Tecnología al servicio de la comunidad. / Sistemas de Comunicación Operativa.</div>
          <div class="footer-copy">&copy; 2026 Teledígitos. Todos los derechos reservados.</div>
        </div>
      </footer>
    `}};customElements.define(`app-footer`,r),document.addEventListener(`DOMContentLoaded`,()=>{let e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{root:null,rootMargin:`0px`,threshold:.15});document.querySelectorAll(`.fade-in`).forEach(t=>e.observe(t));let t=document.querySelector(`.navbar`);window.addEventListener(`scroll`,()=>{window.scrollY>50?(t.style.boxShadow=`0 4px 6px -1px rgba(0, 0, 0, 0.1)`,t.style.background=`rgba(255, 255, 255, 0.9)`):(t.style.boxShadow=`none`,t.style.background=`rgba(255, 255, 255, 0.7)`)})});