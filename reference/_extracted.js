const menu=document.querySelector('.menu');const navigation=document.querySelector('#navigation');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Tutup menu':'Buka menu');navigation.classList.toggle('open',open)});navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Buka menu')}));
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion && 'IntersectionObserver' in window){
 document.body.classList.add('motion-enabled');
 document.querySelectorAll('.feature,.workspace-card,.steps article,.section-head,.faq details,.cta').forEach((el,i)=>{el.classList.add('reveal'); if(el.classList.contains('feature'))el.style.setProperty('--delay',((i%3)*130)+'ms')});
 const animateCount=el=>{if(el.dataset.counted)return;el.dataset.counted='true';const target=Number(el.dataset.count);const start=performance.now();const tick=now=>{const t=Math.min((now-start)/1400,1);el.textContent=Math.round(target*(1-Math.pow(1-t,3))).toLocaleString('id-ID');if(t<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)};
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');entry.target.querySelectorAll('[data-count]').forEach(animateCount);observer.unobserve(entry.target)}}),{threshold:.15});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
} else {document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
