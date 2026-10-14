
(function () {
  var root = document.documentElement;
  function $(s) { return document.querySelector(s); }

  /* Icon library (24px, stroke) */
  var IC = {
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 13h6M9 17h6"/>',
    chartup: '<path d="M3 20h18M5 16l5-5 4 3 6-8M15 6h5v5"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    users: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6M15 14c3 0 6 1.5 6 5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="1"/><path d="M9 7V4h6v3M3 13h18"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
    magnifier: '<circle cx="11" cy="11" r="6"/><path d="M16 16l5 5"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="1"/><path d="M9 4h6v3H9zM8 12h8M8 16h5"/>',
    box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
    pin: '<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    refresh: '<path d="M20 12a8 8 0 0 1-14 5M4 12a8 8 0 0 1 14-5M18 3v4h-4M6 21v-4h4"/>',
    building: '<path d="M4 21V4h11v17M15 9h5v12M8 8h3M8 12h3M8 16h3M3 21h18"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
    headset: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/><path d="M19 20c0 1.5-2 2-5 2"/>',
    wrench: '<path d="M14 6a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3l9-9a4 4 0 0 1-2-2z"/>',
    gavel: '<path d="M13 4l5 5-3 3-5-5zM11 10l-7 7 3 3 7-7M3 21h10"/>',
    ban: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
    heart: '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
    balance: '<path d="M12 3v18M5 21h14M4 8h16M6 8l-3 7a3 3 0 0 0 6 0zM18 8l-3 7a3 3 0 0 0 6 0z"/>',
    lock: '<rect x="5" y="10" width="14" height="10" rx="1"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    megaphone: '<path d="M3 10v4h4l9 5V5l-9 5zM19 9a4 4 0 0 1 0 6"/>',
    hardhat: '<path d="M4 16a8 8 0 0 1 16 0zM2 16h20M12 8V4M9 9l1 7M15 9l-1 7"/>',
    warning: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
    siren: '<path d="M7 18v-6a5 5 0 0 1 10 0v6M4 18h16M12 3v2M4.5 6l1.5 1.5M19.5 6L18 7.5"/>',
    leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19l8-8"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7"/>',
    whatsapp: '<path d="M3 21l1.6-4.7A9 9 0 1 1 8 19.5z"/><path d="M9 9c0 3.5 3 6.5 6.5 6.5l1.5-1.5-2.5-1.2-1 1c-1.5-.6-2.6-1.7-3.2-3.2l1-1L9.1 7.5z"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
  };
  function ic(n) { return '<i class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">' + IC[n] + '</svg></i>'; }
  function renderIcons(root) {
    root.querySelectorAll("i.ic[data-i]").forEach(function (el) {
      var n = el.getAttribute("data-i");
      if (IC[n]) el.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + IC[n] + '</svg>';
      el.removeAttribute("data-i");
    });
  }
  renderIcons(document);

  /* Category images supplied by the site owner; local category artwork removed. */
  var PHOTO = {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85",
    about: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    quality: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1800&q=85",
    logistics: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1800&q=85",
    clients: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
    growth: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
    experience: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
    footer: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1800&q=85",
    "core-competence": "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=85",
    "office-supplies": "https://images.unsplash.com/photo-1779684998897-ce5de594a5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "office-equipment": "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "ict-equipment": "https://media.istockphoto.com/id/1350722246/photo/server-room-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=d0h-TtP8lxKLSurIWuH6DUovHpDKZrB3H3UVwEb5YRY=",
    "furniture-fittings": "https://plus.unsplash.com/premium_photo-1682147364229-f5faa0fd9bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "cleaning-materials": "https://plus.unsplash.com/premium_photo-1679920025550-75324e59680f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "electrical-hardware": "https://images.unsplash.com/photo-1606756171089-cf7d0a1015e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "plumbing-materials": "https://plus.unsplash.com/premium_photo-1683141410787-c4dbd2220487?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "safety-ppe": "https://media.istockphoto.com/id/1195038999/photo/reflective-road-work-clothes-in-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=JpmuUNA4QfjjD0suYqwJ3UQI_NFTPzsebdYVZJWkG4E=",
    "hse-health-protection": "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
    "hse-workplace-safety": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80",
    "hse-safe-handling": "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80",
    "hse-risk-assessment": "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80",
    "hse-emergency": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    "hse-environment": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80",
    "hse-compliance": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    "hse-improvement": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
  };
  function photoUrl(name) { return PHOTO[name] || PHOTO.warehouse || PHOTO.hero; }
  document.documentElement.classList.add("js");

  /* Mobile menu */
  var menu = $("#menu"), burger = $("#burger");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    $("#bpath").setAttribute("d", open ? "M5 5l14 14M19 5L5 19" : "M4 7h16M4 12h16M4 17h16");
  }
  burger.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setMenu(false); burger.focus(); } });
  window.addEventListener("resize", function () { if (window.innerWidth > 960) setMenu(false); });

  /* Highlight the nav link of the section in view */
  var links = {};
  document.querySelectorAll("#menu a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var alias = { experience: "clients" };
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = alias[en.target.id] || en.target.id;
        Object.keys(links).forEach(function (k) {
          if (k === id) links[k].setAttribute("aria-current", "true"); else links[k].removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main > section[id]").forEach(function (sec) { spy.observe(sec); });
  }

  /* Theme toggle */
  $("#theme").addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") && !window.matchMedia("(prefers-color-scheme: light)").matches);
    root.setAttribute("data-theme", dark ? "light" : "dark");
    drawField();
  });

  /* Procurement ring */
  var stages = ["Supplier Identification", "Supplier Vetting", "Order Placement", "Quality Verification", "Logistics & Delivery", "Client Acceptance"];
  var cx = 210, cy = 210, R = 150, NS = "http://www.w3.org/2000/svg";
  var pts = stages.map(function (_, i) {
    var a = (-90 + i * 60) * Math.PI / 180;
    return [cx + R * Math.cos(a), cy + R * Math.sin(a)];
  });
  $("#hexpoly").setAttribute("points", pts.map(function (p) { return p.join(","); }).join(" "));
  var spokes = $("#spokes");
  pts.forEach(function (p) {
    var l = document.createElementNS(NS, "line");
    l.setAttribute("class", "spoke"); l.setAttribute("x1", cx); l.setAttribute("y1", cy);
    l.setAttribute("x2", p[0]); l.setAttribute("y2", p[1]); spokes.appendChild(l);
  });
  var nodesG = $("#nodes"), list = $("#stages"), nodes = [], btns = [];
  stages.forEach(function (name, i) {
    var g = document.createElementNS(NS, "g");
    g.setAttribute("class", "node"); g.setAttribute("transform", "translate(" + pts[i][0] + "," + pts[i][1] + ")");
    g.innerHTML = '<circle r="20"></circle><text>' + (i + 1) + '</text>';
    g.addEventListener("click", function () { select(i, true); });
    nodesG.appendChild(g); nodes.push(g);
    var li = document.createElement("li");
    li.innerHTML = '<button type="button" aria-pressed="false"><span class="n">' + (i + 1) + '</span><span>' + name.replace("&", "&amp;") + '</span></button>';
    li.firstChild.addEventListener("click", function () { select(i, true); });
    list.appendChild(li); btns.push(li.firstChild);
  });
  var cur = 0, timer = null;
  function select(i, manual) {
    cur = i;
    nodes.forEach(function (n, k) { n.setAttribute("class", "node" + (k === i ? " on" : (k < i ? " done" : ""))); });
    btns.forEach(function (b, k) { b.setAttribute("aria-pressed", k === i ? "true" : "false"); });
    var d = "M" + pts[0][0] + "," + pts[0][1];
    for (var k = 1; k <= i; k++) d += " L" + pts[k][0] + "," + pts[k][1];
    $("#trace").setAttribute("d", d);
    $("#readout").innerHTML = "<b>Stage " + (i + 1) + " of 6: " + stages[i].replace("&", "&amp;") + ".</b> Every order stays well-coordinated, traceable and accountable.";
    if (manual) { clearInterval(timer); timer = null; }
  }
  select(0, false);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    timer = setInterval(function () { select((cur + 1) % 6, false); }, 2600);
  }

  /* Categories */
  var icons = {
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    print: '<rect x="6" y="3" width="12" height="6"/><rect x="3" y="9" width="18" height="8" rx="1"/><rect x="7" y="14" width="10" height="7"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    chair: '<path d="M7 3h10v8H7zM5 11h14v4H5zM7 15v6M17 15v6"/>',
    spray: '<path d="M9 9h6v12H9zM10 5h4v4h-4zM14 6h4M19 4l1-1M19 7l2 0"/>',
    plug: '<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5"/>',
    pipe: '<path d="M3 8h10a4 4 0 0 1 4 4v9M3 8v4M17 21h4M13 8V4h4"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'
  };
  var cats = [["Office Supplies & Stationery", "pen", "office-supplies"], ["Office Equipment", "print", "office-equipment"],
    ["ICT Equipment", "chip", "ict-equipment"], ["Furniture & Fittings", "chair", "furniture-fittings"],
    ["Cleaning Materials", "spray", "cleaning-materials"], ["Electrical Appliances & Hardware", "plug", "electrical-hardware"],
    ["Plumbing Materials", "pipe", "plumbing-materials"], ["Safety & PPE", "shield", "safety-ppe"]];
  $("#cats").innerHTML = cats.map(function (c) {
    return '<div class="cat" data-img="' + c[2] + '"><span class="ph" aria-hidden="true"></span><span class="slot">Add image</span><svg viewBox="0 0 24 24" aria-hidden="true">' + icons[c[1]] + '</svg><h3>' + c[0].replace("&", "&amp;") + '</h3></div>';
  }).join("");
  /* Load supplied category image; failed loads leave the Add image placeholder visible */
  document.querySelectorAll(".cat[data-img]").forEach(function (card) {
    var url = photoUrl(card.getAttribute("data-img")), probe = new Image();
    probe.onload = function () {
      card.querySelector(".ph").style.backgroundImage = 'url("' + url + '")';
      card.classList.add("has-img");
    };
    probe.src = url;
  });

  /* HSE */
  var hse = [
    ["a", "Health Protection Measures", "The company promotes a healthy working environment by identifying and managing potential health risks. That includes clean and hygienic workplaces, safe work practices, and keeping employees clear of conditions that may cause occupational illness. Protective equipment is provided where necessary."],
    ["b", "Workplace Safety Management", "Strict safety procedures apply across all operations to prevent accidents and injuries, in line with applicable occupational safety and health laws. Employees are trained on safety awareness, emergency procedures and safe use of equipment."],
    ["c", "Safe Handling, Storage and Transportation of Goods", "All merchandise and materials are handled, stored and transported to established safety standards. Proper labeling, packaging and handling procedures prevent damage, contamination or accidents in storage and transit, protecting personnel and company and client assets."],
    ["d", "Risk Assessment and Hazard Control", "Regular risk assessments identify potential hazards. Control measures eliminate or reduce the risks found, including standard operating procedures, safety signage and preventive maintenance of equipment."],
    ["e", "Emergency Preparedness and Response", "Clear emergency response procedures cover incidents such as fire, accidents or environmental spills. Employees know the emergency exits, reporting channels and response actions."],
    ["f", "Environmental Responsibility and Sustainability", "Environmental protection is a core operational principle. The company adopts environmentally responsible sourcing and prioritizes suppliers who comply with environmental standards. Waste is managed through proper disposal, recycling or reuse where applicable."],
    ["g", "Compliance with Environmental Regulations", "All operations follow relevant environmental laws and regulations. The company monitors its activities for adherence to environmental guidelines and takes corrective action whenever non-compliance risks are identified."],
    ["h", "Continuous Improvement and Awareness", "HSE policies and practices are reviewed and improved continuously. Regular staff sensitization and training promote a strong safety and environmental culture and ongoing improvement in HSE performance."]
  ];
  var hseIcons = ["heart", "hardhat", "box", "warning", "siren", "leaf", "book", "refresh"];
  var hseImgs = ["hse-health-protection", "hse-workplace-safety", "hse-safe-handling", "hse-risk-assessment", "hse-emergency", "hse-environment", "hse-compliance", "hse-improvement"];
  var hseOk = {};
  var tabs = $("#hsetabs"), panel = $("#hsepanel"), tbtn = [];
  hse.forEach(function (h, i) {
    var b = document.createElement("button");
    b.type = "button"; b.setAttribute("role", "tab"); b.setAttribute("aria-selected", "false");
    b.innerHTML = '<span class="tic">' + ic(hseIcons[i]) + '</span><span>' + h[1] + '</span>';
    b.addEventListener("click", function () { showHse(i); });
    tabs.appendChild(b); tbtn.push(b);
  });
  function showHse(i) {
    tbtn.forEach(function (b, k) { b.setAttribute("aria-selected", k === i ? "true" : "false"); });
    panel.innerHTML = '<div class="phead"><span class="orb" aria-hidden="true">' + ic(hseIcons[i]) + '</span><span class="k">' + hse[i][0] + ')</span></div><h3>' + hse[i][1] + '</h3><p>' + hse[i][2] + '</p>' +
      '<div class="photoslot hsephoto"><span class="phimg" aria-hidden="true"></span><span class="phlabel"><b>Photo</b><small>images/' + hseImgs[i] + '.jpg</small></span></div>';
    var box = panel.querySelector(".hsephoto"), url = photoUrl(hseImgs[i]);
    function showPhoto() { box.querySelector(".phimg").style.backgroundImage = 'url("' + url + '")'; box.classList.add("has-photo"); }
    if (hseOk[url]) { showPhoto(); }
    else { var pr = new Image(); pr.onload = function () { hseOk[url] = true; if (panel.contains(box)) showPhoto(); }; pr.src = url; }
  }
  showHse(0);

  /* Copy buttons */
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var el = document.getElementById(b.getAttribute("data-copy")), label = b.textContent;
      var text = (el.value !== undefined && el.tagName === "TEXTAREA") ? el.value : el.textContent.trim();
      var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = label; }, 1400); };
      var fallback = function () {
        if (el.select) { el.select(); } else { var r = document.createRange(); r.selectNodeContents(el); var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r); }
      };
      try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
    });
  });

  /* #cf-cat is a native in-form dropdown; its selected value is submitted directly. */

  /* Enquiry form. Delivery is wired later: set ENQUIRY_ENDPOINT to the mail/form service URL. */
  var ENQUIRY_ENDPOINT = "/api/enquiries";
  function sendEnquiry(data) {
    if (!ENQUIRY_ENDPOINT) { return Promise.reject(new Error("not-configured")); }
    return fetch(ENQUIRY_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(data) })
      .then(function (r) { if (!r.ok) { throw new Error("http-" + r.status); } });
  }
  $("#cform").addEventListener("submit", function (e) {
    e.preventDefault();
    var v = function (id) { return $(id).value.trim(); };
    var data = { name: v("#cf-name"), organization: v("#cf-org"), email: v("#cf-email"), phone: v("#cf-phone"), category: v("#cf-cat"), message: v("#cf-msg") };
    var err = $("#cf-err"), ok = $("#cf-ok"), btn = $("#cform .btn.submit");
    ok.hidden = true;
    if (!data.name || !data.message) {
      err.textContent = "Add your name and a short message so we know what you need.";
      err.hidden = false; (data.name ? $("#cf-msg") : $("#cf-name")).focus(); return;
    }
    if (!data.email && !data.phone) {
      err.textContent = "Add an email or phone number so we can reply.";
      err.hidden = false; $("#cf-email").focus(); return;
    }
    err.hidden = true; btn.disabled = true;
    sendEnquiry(data).then(function () {
      ok.textContent = "Thank you. Your message has been sent and our team will get back to you.";
      ok.hidden = false; $("#cform").reset();
      $("#cf-cat").value = "";
    }).catch(function (x) {
      err.textContent = x && x.message === "not-configured"
        ? "Sending is not switched on yet, so your message was not sent. Please call or email us for now."
        : "Your message could not be sent. Please try again, or call or email us.";
      err.hidden = false;
    }).then(function () { btn.disabled = false; });
  });

  /* Hex field background */
  var cv = $("#hexfield"), ctx = cv.getContext("2d"), cells = [], size = 34, raf = null;
  function css(v) { return getComputedStyle(root).getPropertyValue(v).trim(); }
  function hexPath(x, y, r) {
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      var a = Math.PI / 3 * i + Math.PI / 6;
      var px = x + r * Math.cos(a), py = y + r * Math.sin(a);
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.closePath();
  }
  function layout() {
    var w = cv.clientWidth, h = cv.clientHeight, d = window.devicePixelRatio || 1;
    cv.width = w * d; cv.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    cells = [];
    var dx = size * Math.sqrt(3), dy = size * 1.5;
    for (var row = 0, y = 0; y < h + size; row++, y += dy) {
      for (var x = (row % 2) * dx / 2; x < w + size; x += dx) {
        cells.push({ x: x, y: y, p: Math.random() * 6.28, on: Math.random() < 0.07 });
      }
    }
  }
  function drawField(t) {
    t = t || 0;
    var w = cv.clientWidth, h = cv.clientHeight;
    ctx.clearRect(0, 0, w, h);
    var line = css("--line"), acc = css("--accent");
    cells.forEach(function (c) {
      var fade = Math.max(0, 1 - (c.x / w) * 0.35 - (c.y / h) * 0.5);
      ctx.globalAlpha = 0.9 * fade; ctx.strokeStyle = line; ctx.lineWidth = 1;
      hexPath(c.x, c.y, size - 2); ctx.stroke();
      if (c.on) {
        ctx.globalAlpha = (0.12 + 0.12 * Math.sin(t / 900 + c.p)) * fade;
        ctx.fillStyle = acc; hexPath(c.x, c.y, size - 2); ctx.fill();
      }
    });
    ctx.globalAlpha = 1;
  }
  function loop(t) { drawField(t); raf = requestAnimationFrame(loop); }
  layout(); drawField(0);
  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!still) raf = requestAnimationFrame(loop);
  /* Background photos: used when images/bg-<name>.jpg is published with the page */
  document.querySelectorAll("[data-bg]").forEach(function (b) {
    var url = photoUrl(b.getAttribute("data-bg")), probe = new Image();
    probe.onload = function () {
      (b.querySelector(".bgimg") || b).style.backgroundImage = 'url("' + url + '")';
      b.classList.add("has-bg");
    };
    probe.src = url;
  });

  /* Centre photo of the procurement ring: images/core-competence.jpg */
  (function () {
    var img = $("#coreimg"), box = $("#corebox"), probe = new Image();
    probe.onload = function () { img.setAttribute("href", photoUrl("core-competence")); box.classList.add("has-core"); };
    probe.src = photoUrl("core-competence");
  })();

  /* Photo slots: images/<name>.jpg */
  document.querySelectorAll("[data-photo]").forEach(function (box) {
    var url = photoUrl(box.getAttribute("data-photo")), probe = new Image();
    probe.onload = function () { box.querySelector(".phimg").style.backgroundImage = 'url("' + url + '")'; box.classList.add("has-photo"); };
    probe.src = url;
  });

  /* Back to top */
  var totop = $("#totop"), reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function onScrollTop() { totop.classList.toggle("show", window.scrollY > 700); }
  window.addEventListener("scroll", onScrollTop, { passive: true }); onScrollTop();
  totop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }); });

  /* Scroll reveal */
  var rvSel = ".sec-head,.cat,.tl li,.vm > div,.subhead,.core6 > div,.split .col,.path li,.route,.log > div,.clients > div,.loyal,.exp > div,.care2 > h3,.svc > div,.tabs,.panel,.seal-card,.gh,.cl,.step,.og-head .sec-head,.cway,.cform";
  var rvEls = document.querySelectorAll(rvSel);
  if ("IntersectionObserver" in window) {
    var parents = [];
    rvEls.forEach(function (el) {
      var par = el.parentNode, idx = parents.indexOf(par);
      if (idx < 0) { parents.push(par); idx = parents.length - 1; par.__n = 0; }
      el.style.setProperty("--d", Math.min(par.__n++ * 0.07, 0.42) + "s");
      el.classList.add("rv");
    });
    var rvo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); rvo.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    rvEls.forEach(function (el) { rvo.observe(el); });
    window.addEventListener("beforeprint", function () { rvEls.forEach(function (el) { el.classList.add("in"); }); });
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("svg").forEach(function (sv) { if (sv.pauseAnimations) sv.pauseAnimations(); });
  }

  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { layout(); drawField(0); }, 150); });
})();
