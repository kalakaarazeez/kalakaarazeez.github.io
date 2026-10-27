const $=s=>document.querySelector(s),D=SITE;
const rows=(el,a,empty)=>{$(el).innerHTML=a.length?a.map(r=>`<li><span>${r[0]}</span><div>${r[2]?`<a href="${r[2]}" target="_blank" rel="noopener">${r[1]}</a>`:r[1]}</div></li>`).join(''):`<li class="empty">${empty||''}</li>`};
const ICON={cube:'<path d="M12 3l8 4v10l-8 4-8-4V7z M4 7l8 4 8-4 M12 11v10"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3M8 21h8"/>',flute:'<rect x="2" y="10" width="20" height="4" rx="2"/><circle cx="8" cy="12" r=".6"/><circle cx="12" cy="12" r=".6"/><circle cx="16" cy="12" r=".6"/>',book:'<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1z M12 6v13"/>',bell:'<path d="M3 12h3M18 12h3M6 8v8M18 8v8M9 10v4M15 10v4M9 12h6"/>'};
const PAGES=[['home','Home','#5ce1e6'],['research','Research','#6ea8ff'],['experience','Experience','#b78bff'],['wins','Wins','#ffd166'],['hobbies','Hobbies','#ff7eb6'],['gallery','Gallery','#ff9f5b'],['poems','Poems','#ff5c8a'],['contact','Contact','#6dffb0']];
$('#nav').innerHTML=PAGES.map(p=>`<a href="#${p[0]}" data-p="${p[0]}">${p[1]}</a>`).join('');
$('#quote').innerHTML=`${D.quote[0]}<br>${D.quote[1]}<cite>${D.quote[2]}</cite>`;
$('#r-now').textContent=D.research;
$('#r-thesis').innerHTML=D.thesis.map(t=>`<div><b>${t[0]}</b><p>${t[1]}</p></div>`).join('');
$('#r-pre').innerHTML=D.preprints.length?D.preprints.map(p=>`<li><div><a href="${p.link||'#'}" target="_blank">${p.title}</a><br><small>${p.info||''}</small></div></li>`).join(''):'<li class="empty">First one is cooking. Check back soon.</li>';
rows('#r-conf',D.conferences);rows('#e-ta',D.teaching);rows('#e-roles',D.roles);rows('#e-edu',D.education);rows('#c-list',D.contact);
$('#w-grid').innerHTML=Object.entries(D.wins).map(([k,v])=>`<div class="glass"><h3 style="margin-top:0">${k}</h3><ul class="rows">${v.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('');
$('#h-grid').innerHTML=D.hobbies.map(h=>`<div class="card">${h.img?`<img src="${h.img}" alt="${h.t}" loading="lazy">`:`<div class="ph"><svg viewBox="0 0 24 24">${ICON[h.icon]||ICON.cube}</svg></div>`}<div class="t"><h4>${h.t}</h4><p>${h.d}</p></div></div>`).join('');
$('#g-grid').innerHTML=D.gallery.map((g,i)=>`<img src="${g.src}" alt="${g.cap}" data-i="${i}" loading="lazy">`).join('');
$('#p-list').innerHTML=D.poems.map((p,i)=>`<li data-i="${i}"><span>${p.date}</span><div>${p.title}</div></li>`).join('');
const modal=$('#modal'),open=h=>{$('#mbox').innerHTML=h;modal.classList.add('on')};
$('#g-grid').onclick=e=>{const i=e.target.dataset.i;if(i!=null){const g=D.gallery[i];open(`<img src="${g.src}"><small>${g.cap}</small>`)}};
$('#p-list').onclick=e=>{const li=e.target.closest('li');if(li){const p=D.poems[li.dataset.i];open(`<h2>${p.title}</h2><pre>${p.text}</pre><small>${p.date}</small>`)}};
modal.onclick=e=>{if(e.target===modal)modal.classList.remove('on')};
addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('on')});
function route(){const id=PAGES.find(p=>'#'+p[0]===location.hash)?location.hash.slice(1):'home',p=PAGES.find(x=>x[0]===id);
document.querySelectorAll('.page').forEach(s=>s.classList.toggle('on',s.id===id));
document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.p===id));
document.documentElement.style.setProperty('--accent',p[2]);$('#'+id).scrollTop=0}
addEventListener('hashchange',route);route();
let li=0,ci=0,del=false;const T=$('#typed');
(function type(){const s=D.lines[li];ci+=del?-1:1;T.textContent=s.slice(0,ci);
let t=del?25:55;if(!del&&ci===s.length){del=true;t=1800}else if(del&&ci===0){del=false;li=(li+1)%D.lines.length;t=300}setTimeout(type,t)})();
const c=$('#bg'),x=c.getContext('2d'),M={x:-999,y:-999};let W,H,N=[];
function size(){W=c.width=innerWidth;H=c.height=innerHeight;const n=Math.min(130,Math.max(50,W*H/13000|0));
N=Array.from({length:n},(_,i)=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.6+1.2,h:i/n*300}))}
addEventListener('resize',size);addEventListener('mousemove',e=>{M.x=e.clientX;M.y=e.clientY});size();
(function draw(){x.clearRect(0,0,W,H);for(const n of N){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;
const dx=M.x-n.x,dy=M.y-n.y,d=Math.hypot(dx,dy);if(d<120){n.x-=dx/d*.6;n.y-=dy/d*.6}}
for(let i=0;i<N.length;i++)for(let j=i+1;j<N.length;j++){const a=N[i],b=N[j],d=Math.hypot(a.x-b.x,a.y-b.y);
if(d<170){x.strokeStyle=`hsla(${(a.h+b.h)/2},85%,65%,${.32*(1-d/170)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
for(const n of N){x.beginPath();x.arc(n.x,n.y,n.r,0,7);x.fillStyle=`hsla(${n.h},90%,72%,.95)`;x.shadowColor=`hsl(${n.h},90%,60%)`;x.shadowBlur=8;x.fill()}
x.shadowBlur=0;requestAnimationFrame(draw)})();
