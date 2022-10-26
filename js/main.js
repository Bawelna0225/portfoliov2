(()=>{"use strict";const e=document.getElementById("cursor");let t,o=0,s=0,n=Array(20).fill({x:0,y:0});const r=document.querySelector(".snackbar");let c;const a=[...document.querySelectorAll(".project")],i=(new Swiper(".swiper",{direction:"horizontal",loop:!1,centeredSlides:!1,slidesPerView:1.1,spaceBetween:20,pagination:{el:".swiper-pagination",dynamicBullets:!1},breakpoints:{520:{slidesPerView:1.4},640:{slidesPerView:2.4},968:{slidesPerView:3.4},1300:{slidesPerView:4.4}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),document.querySelectorAll(".form-input")),l=document.getElementById("firstName"),d=document.getElementById("lastName"),m=document.getElementById("email"),u=document.getElementById("subject"),p=document.getElementById("message"),v=document.querySelector("form"),h=()=>{let e=!1;if((l.value.length<1||""==l.value.split(" ").join(""))&&(i[0].classList.add("error"),e=!0),(d.value.length<1||""==d.value.split(" ").join(""))&&(i[1].classList.add("error"),e=!0),y(m.value)||(i[2].classList.add("error"),e=!0),(u.value.length<1||""==u.value.split(" ").join(""))&&(i[3].classList.add("error"),e=!0),(p.value.length<1||""==p.value.split(" ").join(""))&&(i[4].classList.add("error"),e=!0),l.addEventListener("input",(()=>{i[0].classList.remove("error")})),d.addEventListener("input",(()=>{i[1].classList.remove("error")})),m.addEventListener("input",(()=>{i[2].classList.remove("error")})),u.addEventListener("input",(()=>{i[3].classList.remove("error")})),p.addEventListener("input",(()=>{i[4].classList.remove("error")})),!e){var t=new FormData(document.querySelector("form")),o=new XMLHttpRequest;o.open("POST","./sendmail.php"),o.onload=function(){console.log(this.response)},o.send(t),v.classList.add("pending"),document.querySelector("form").submit.click(),setTimeout((()=>{v.classList.remove("pending"),v.classList.add("success"),setTimeout((()=>{v.classList.remove("success"),v.reset()}),2e3)}),2e3)}},y=e=>/\S+@\S+\.\S+/.test(e),g=document.querySelector(".snackbar");let L;const w=new IntersectionObserver((e=>{e.forEach((e=>{e.target.classList.toggle("shown",e.isIntersecting),e.isIntersecting&&w.unobserve(e.target)}))}),{rootMargin:"0%",threshold:.6}),f=["<span>Did You Know?</span><br> First ever computer mouse was made out of wood!","<span>Did You Know?</span><br> 86% of people try to plug in their USB devices upside down.","<span>Did You Know?</span><br> The first product scanned was a packet of chewing gum in 1974.","<span>Did You Know?</span><br> “Phantom Vibration Syndrome” is the name for when someone thinks their phone is vibrating, but it isn't.","<span>Did You Know?</span><br> There is special Braille technology and accessories for blind people to use cell phones.","<span>Did You Know?</span><br> Over 6,000 new computer viruses are created and released every month.","<span>Did You Know?</span><br> Comic Sans is the most hated font in the world.","<span>Did You Know?</span><br> More people have cell phones than toilets.","<span>Did You Know?</span><br> Facebook pays $500 for reporting any vulnerability in their security.","<span>Did You Know?</span><br> The first webpage is still running.","<span>Did You Know?</span><br> Most of today's successful companies started in garages.","<span>Did You Know?</span><br> About 51% of internet traffic is non-human. Over 30% is from hacking programs, spammers, and phishing.","<span>Did You Know?</span><br> The first computer virus was harmless."];document.querySelector(".fun-fact").innerHTML=f[Math.floor(Math.random()*f.length)],window.addEventListener("load",(()=>{setTimeout((()=>{document.querySelector(".preloader").classList.add("loaded"),setTimeout((()=>{document.querySelector("#home").classList.add("active")}),800)}),3e3)})),document.addEventListener("mousemove",(function(e){o=e.clientX,s=e.clientY}),!1),function(){for(let t=0;t<20;t++){let t=document.createElement("div");t.classList.add("cursor-circle"),e.append(t)}t=[...document.querySelectorAll(".cursor-circle")]}(),function e(){n.shift(),n.push({x:o,y:s});for(let e=0;e<20;e++){let o=n[e],s=n[e+1]||n[19],r=s.x-o.x,c=s.y-o.y;o.x+=.35*r,o.y+=.35*c,t[e].style.transform=`translate(${o.x}px, ${o.y}px) scale(${e/20})`}requestAnimationFrame(e)}(),[...document.querySelectorAll("section")].forEach((e=>{w.observe(e)}));const b=document.querySelector(".back-to-top");b.addEventListener("click",(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})),window.addEventListener("scroll",(()=>{scrollY>300?b.classList.add("active"):b.classList.remove("active")}));const S=document.querySelector(".themes-btn"),E=document.querySelector("#dropdown");S.addEventListener("click",(e=>{E.classList.toggle("open"),[...document.querySelectorAll(".dropdown-item")].filter((e=>{e.dataset.themeId===localStorage.getItem("currentTheme-id")&&e.classList.add("active")}))}));const q=document.querySelector(".wrapper-menu"),I=document.querySelector(".side-menu");q.addEventListener("click",(()=>{q.classList.toggle("open"),I.classList.toggle("open")})),window.addEventListener("click",(e=>{document.getElementById("dropdown").contains(e.target)||document.querySelector(".themes-btn").contains(e.target)||document.getElementById("dropdown").classList.remove("open"),q.contains(e.target)||I.contains(e.target)||(I.classList.remove("open"),q.classList.remove("open"))})),window.addEventListener("keydown",(e=>{document.getElementById("dropdown").classList.contains("open")&&"Escape"===e.key&&document.getElementById("dropdown").classList.remove("open"),I.classList.contains("open")&&"Escape"===e.key&&(I.classList.remove("open"),q.classList.remove("open"))}));const T=document.querySelector(".dropdown-items");fetch("../js/themes.json").then((e=>e.json())).then((e=>{e.forEach((e=>{const{name:t,id:o,colors:{primaryColor:s,firstAccentColor:n,secondAccentColor:a}}=e,i=((e,t)=>{const o=document.createElement("button");o.classList.add("dropdown-item"),o.setAttribute("data-theme-id",e);const s=document.createElement("div");return s.classList.add("theme-description"),s.innerHTML=`Theme: <br/> ${t}`,o.appendChild(s),o.addEventListener("click",(t=>{((e,t)=>{[...document.querySelectorAll(".dropdown-item")].filter((e=>{e.classList.remove("active")})),fetch("../js/themes.json").then((e=>e.json())).then((o=>{o.filter((o=>{const{name:s,id:n,colors:{navbarColor:a,primaryColor:i,textColor:l,shadowColor:d,firstAccentColor:m,secondAccentColor:u}}=o;n===e&&(root.style.setProperty("--navbar-color",a),root.style.setProperty("--primary-color",i),root.style.setProperty("--text-color",l),root.style.setProperty("--shadow-color",d),root.style.setProperty("--accent-color",m),root.style.setProperty("--accent-color2",u),localStorage.setItem("currentTheme-id",n),localStorage.setItem("currentTheme-navbarColor",a),localStorage.setItem("currentTheme-primaryColor",i),localStorage.setItem("currentTheme-textColor",l),localStorage.setItem("currentTheme-shadowColor",d),localStorage.setItem("currentTheme-firstAccentColor",m),localStorage.setItem("currentTheme-secondAccentColor",u),clearInterval(c),r.textContent=`Theme Changed to: ${s}`,r.classList.add("active"),c=setInterval((()=>{r.classList.remove("active")}),3e3)),t.target.classList.add("active")}))})).catch((e=>console.log(`%cERROR! ${e}`,"color: red; font-size: 18px")))})(e,t)})),o})(o,t);i.style.backgroundImage=`linear-gradient(45deg, ${s} 0%, ${s} 33%, ${n} 33%, ${n} 66%, ${a} 66%, ${a} 100%)`,T.appendChild(i)}))}));const k=document.querySelector(".prev"),C=document.querySelector(".next");k.addEventListener("click",(()=>{(()=>{const e=document.querySelector(".project.active");e.classList.remove("active"),e.previousElementSibling?e.previousElementSibling.classList.add("active"):a[a.length-1].classList.add("active")})()})),C.addEventListener("click",(()=>{(()=>{const e=document.querySelector(".project.active");e.classList.remove("active"),e.nextElementSibling?e.nextElementSibling.classList.add("active"):a[0].classList.add("active")})()})),document.querySelector("form").onsubmit=e=>{e.preventDefault(),h()},document.querySelector(".copy-to-clipboard").addEventListener("click",(()=>{navigator.clipboard.writeText("pawelczarnecki0225@gmail.com").then((function(){clearInterval(L),g.textContent="Copied To Clipboard!",g.classList.add("active"),L=setInterval((()=>{g.classList.remove("active")}),3e3)}))})),document.querySelector('a[href="/pages/timeline/index.html"]').onclick=e=>{e.preventDefault(),document.querySelector(".transition").classList.add("active"),setTimeout((()=>{window.location.href="pages/timeline/"}),1500)}})();