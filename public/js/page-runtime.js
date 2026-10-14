(function () {
  "use strict";
  var root = document.documentElement;
  var $ = function (s, p) { return (p || document).querySelector(s); };
  var $$ = function (s, p) { return Array.prototype.slice.call((p || document).querySelectorAll(s)); };
  var photos = {
    about: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85',
    quality: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1800&q=85',
    logistics: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1800&q=85',
    clients: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85',
    growth: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
    experience: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85',
    footer: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1800&q=85',
    'core-competence': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85',
    'office-supplies': 'https://images.unsplash.com/photo-1779684998897-ce5de594a5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'office-equipment': 'https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'ict-equipment': 'https://media.istockphoto.com/id/1350722246/photo/server-room-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=d0h-TtP8lxKLSurIWuH6DUovHpDKZrB3H3UVwEb5YRY=',
    'furniture-fittings': 'https://plus.unsplash.com/premium_photo-1682147364229-f5faa0fd9bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'cleaning-materials': 'https://plus.unsplash.com/premium_photo-1679920025550-75324e59680f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'electrical-hardware': 'https://images.unsplash.com/photo-1606756171089-cf7d0a1015e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'plumbing-materials': 'https://plus.unsplash.com/premium_photo-1683141410787-c4dbd2220487?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'safety-ppe': 'https://media.istockphoto.com/id/1195038999/photo/reflective-road-work-clothes-in-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=JpmuUNA4QfjjD0suYqwJ3UQI_NFTPzsebdYVZJWkG4E='
  };
  function photo(name) { return photos[name] || photos.about; }
  $$('.ic[data-i]').forEach(function (el) { el.removeAttribute('data-i'); });
  $$('.bar [data-theme-toggle], #theme').forEach(function (btn) { btn.addEventListener('click', function () { var light = root.getAttribute('data-theme') !== 'light'; root.setAttribute('data-theme', light ? 'light' : 'dark'); }); });
  var menu = $('#menu'), burger = $('#burger');
  if (menu && burger) {
    var setMenu = function (open) { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', String(open)); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
    burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }
  $$('[data-bg]').forEach(function (el) { var url = photo(el.getAttribute('data-bg')); var target = $('.bgimg', el) || el; target.style.backgroundImage = 'url("' + url + '")'; el.classList.add('has-bg'); });
  $$('[data-photo]').forEach(function (el) { var target = $('.phimg', el); if (target) { target.style.backgroundImage = 'url("' + photo(el.getAttribute('data-photo')) + '")'; el.classList.add('has-photo'); } });
  var cats = $('#cats');
  if (cats && !cats.children.length) {
    var items = [['Office Supplies & Stationery','office-supplies'],['Office Equipment','office-equipment'],['ICT Equipment','ict-equipment'],['Furniture & Fittings','furniture-fittings'],['Cleaning Materials','cleaning-materials'],['Electrical Appliances & Hardware','electrical-hardware'],['Plumbing Materials','plumbing-materials'],['Safety & PPE','safety-ppe']];
    cats.innerHTML = items.map(function (item) { return '<article class="cat" data-img="'+item[1]+'"><span class="ph" aria-hidden="true"></span><span class="slot">Photo</span><h3>'+item[0]+'</h3></article>'; }).join('');
  }
  $$('.cat[data-img]').forEach(function (el) { var ph = $('.ph', el); if (ph) { ph.style.backgroundImage = 'url("' + photo(el.getAttribute('data-img')) + '")'; ph.style.opacity = '1'; el.classList.add('has-img'); } });
  var category = $('#cf-cat'); // Native dropdown value is included directly in the enquiry.
  var form = $('#cform');
  if (form) form.addEventListener('submit', async function (e) {
    e.preventDefault(); var err = $('#cf-err'), ok = $('#cf-ok'), btn = $('.btn.submit', form);
    var value = function (id) { var el = $(id); return el ? el.value.trim() : ''; };
    var data = { name:value('#cf-name'), organization:value('#cf-org'), email:value('#cf-email'), phone:value('#cf-phone'), category:value('#cf-cat'), message:value('#cf-msg') };
    if (err) err.hidden = true; if (ok) ok.hidden = true;
    if (!data.name || !data.message || (!data.email && !data.phone)) { if (err) { err.textContent = 'Please add your name, message, and an email address or phone number.'; err.hidden = false; } return; }
    if (btn) btn.disabled = true;
    try { var response = await fetch('/api/enquiries', { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify(data) }); if (!response.ok) throw new Error('submit failed'); if (ok) { ok.textContent='Thank you. Your message has been sent and our team will get back to you.'; ok.hidden=false; } form.reset(); }
    catch (_) { if (err) { err.textContent='Your message could not be sent. Please try again, or call or email us.'; err.hidden=false; } }
    finally { if (btn) btn.disabled = false; }
  });
  var top = $('#totop'); if (top) { var updateTop = function () { top.classList.toggle('show', window.scrollY > 700); }; window.addEventListener('scroll', updateTop, {passive:true}); updateTop(); top.addEventListener('click', function () { window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}); }); }
  if ('IntersectionObserver' in window) { var elements = $$('.sec-head,.cat,.tl li,.vm > div,.subhead,.core6 > div,.split .col,.path li,.route,.log > div,.clients > div,.loyal,.exp > div,.care2 > h3,.svc > div,.tabs,.panel,.seal-card,.gh,.cl,.step,.og-head .sec-head,.cway,.cform'); var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); } }); }, {rootMargin:'0px 0px -6% 0px',threshold:0.08}); elements.forEach(function (el) { el.classList.add('rv'); observer.observe(el); }); }
})();
