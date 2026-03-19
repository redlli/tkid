---
layout: home
title: Design Gallery
permalink: /product
---

<style>
  :root {
    --theme-bg: #ff8597;
    --accent-hover: #f20053;
    --text-dark: #000000;
    --text-light: #ffffff;
    --font-main: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body { 
    overflow-x: hidden;
    font-family: var(--font-main);
    color: var(--text-dark);
    -webkit-font-smoothing: antialiased;
  }

  /* --- Grid Wall --- */
  .mashup-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 0;
  }

  .mashup-cell {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: rgba(0,0,0,0.03);
  }

  .mashup-item {
    width: 100%;
    height: 100%;
    display: flex;
    transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
    will-change: transform;
    cursor: pointer;
  }

  .mashup-item img {
    width: 101%;
    height: 101%;
    object-fit: cover;
  }

  /* --- High-End Gallery Popup --- */
  .popup-overlay {
    position: fixed;
    inset: 0;
    background: rgba(255, 133, 151, 0.95); 
    display: none; 
    z-index: 10000;
    backdrop-filter: blur(15px);
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 20px;
  }

  .popup-overlay.active { display: flex; opacity: 1; }

  .product-container {
    display: flex;
    width: 100%;
    max-width: 1300px;
    margin: auto;
    position: relative; 
    gap: 0; 
    align-items: stretch;
    justify-content: center;
    background: #ffffff;
    border: 5px solid var(--text-dark);
    box-shadow: 25px 25px 0px rgba(0,0,0,0.15);
  }

  .stage {
    position: relative;
    flex: 1.1;
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    border-right: 5px solid var(--text-dark);
    overflow: hidden;
  }

  .stage img {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
  }

  .info-sidebar {
    flex: 0.9;
    padding: 60px;
    display: flex;
    flex-direction: column;
    text-align: left;
    background: white;
    justify-content: space-between; 
  }

  .info-sidebar h2 {
    font-size: 3.5rem;
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 0.95;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .info-sidebar .description {
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--text-dark);
    margin-bottom: 40px;
    opacity: 0.8;
  }

  .buy-section {
    border-top: 2px solid var(--text-dark);
    padding-top: 30px;
    margin-top: auto;
  }

  .buy-section label {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 20px;
    font-weight: 800;
  }

  .btn-group { display: flex; gap: 12px; flex-wrap: wrap; }

  .btn {
    flex: 1;
    min-width: 120px;
    text-align: center;
    padding: 18px 24px;
    background: var(--text-dark);
    color: var(--text-light) !important;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.2s ease;
    border: none;
  }

  .btn:hover { 
    color: var(--accent-hover) !important; 
    transform: translateY(-3px);
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--text-dark);
    color: var(--text-light);
    border: none;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  }
  .nav-btn:hover { background: var(--accent-hover); }
  .prev { left: 0px; }
  .next { right: 0px; }

  .close-btn-inner {
    position: absolute;
    top: 5px; 
    right: 5px; 
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    background: var(--text-dark);
    color: var(--text-light);
    border: none;
    padding: 12px 20px;
    z-index: 100;
    transition: 0.2s;
  }
  
  .close-btn-inner:hover { background: var(--accent-hover); }

  @media (max-width: 1024px) {
    .product-container { flex-direction: column; height: auto; border: 3px solid #000; margin-top: 40px;}
    .stage { width: 100%; height: 40vh; border-right: none; border-bottom: 5px solid #000; }
    .info-sidebar { padding: 30px; min-height: 400px; }
    .close-btn-inner { top: -45px; right: 0px; } 
  }
</style>

<marquee direction="right" scrollamount="7">
  To Download Art <a class="linkhai"  href="https://tkid.redlii.com/download">click Here</a>.
</marquee>

<div class="gallery-container">
  <div class="mashup-grid">
    {% for entry in site.data.pdata %}
      {% assign img_list = entry.img | split: "," %}
      <div class="mashup-cell">
        <div class="mashup-item" 
             data-rotation="0" 
             data-title="{{ entry.title | escape }}" 
             data-des="{{ entry.des | escape }}"
             data-imgs="{{ entry.img }}"
             data-tee="{{ entry.teepublic_link }}"
             data-thread="{{ entry.thredless_link }}"
             data-forth="{{ entry.forthwall_link }}"> <img src="{{ img_list[0] | strip }}" alt="{{ entry.title }}">
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<div id="imagePopup" class="popup-overlay">
  <div class="product-container" onclick="event.stopPropagation()">
    <button class="close-btn-inner" onclick="closePopup()">Close [x]</button>

    <div class="stage" id="popupStage">
      <button class="nav-btn prev" onclick="changeSlide(-1)">←</button>
      <div id="imageMount" style="width:100%; height:100%; display:flex; align-items:center; justify-content:center;"></div>
      <button class="nav-btn next" onclick="changeSlide(1)">→</button>
    </div>

    <div class="info-sidebar">
      <h2 id="pTitle"></h2>
      <p class="description" id="pDes"></p>
      <div class="buy-section">
        <label>Acquire via Platform</label>
        <div id="pButtons" class="btn-group"></div>
      </div>
    </div>
  </div>
</div>

<marquee direction="right" scrollamount="7">
  To Download Art <a class="linkhai"  href="https://tkid.redlii.com/download">click Here</a>.
</marquee>
<script>
let currentIdx = 0;
let currentImgs = [];

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.mashup-item');
    const popup = document.getElementById('imagePopup');

    items.forEach(item => {
        item.addEventListener('click', () => {
            currentImgs = item.getAttribute('data-imgs').split(',');
            document.getElementById('pTitle').innerText = item.getAttribute('data-title');
            document.getElementById('pDes').innerText = item.getAttribute('data-des');
            currentIdx = 0;

            let tee = item.getAttribute('data-tee');
            let thread = item.getAttribute('data-thread');
            let forth = item.getAttribute('data-forth'); // UPDATED
            
            let btns = '';
            if(tee && tee.length > 5) btns += `<a href="${tee}" target="_blank" class="btn">Teepublic</a>`;
            if(thread && thread.length > 5) btns += `<a href="${thread}" target="_blank" class="btn">Threadless</a>`;
            if(forth && forth.length > 5) btns += `<a href="${forth}" target="_blank" class="btn">Forthwall</a>`; // UPDATED
            
            document.getElementById('pButtons').innerHTML = btns;

            renderImage();
            popup.style.display = 'flex';
            setTimeout(() => popup.classList.add('active'), 10);
            document.body.style.overflow = 'hidden';
        });
    });

    popup.addEventListener('click', closePopup);

    document.addEventListener('mousemove', (e) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 400) {
          const f = (400 - dist) / 400;
          const x = (dx / dist) * f * -30;
          const y = (dy / dist) * f * -30;
          item.setAttribute('data-x', x); item.setAttribute('data-y', y);
          updateTransform(item, x, y, 1 + (f * 0.1), true);
        } else {
          updateTransform(item, 0, 0, 1, false);
        }
      });
    });

    setInterval(() => {
      items.forEach(item => {
        let rot = (parseInt(item.getAttribute('data-rotation')) || 0) + (Math.random() > 0.5 ? 90 : -90);
        item.setAttribute('data-rotation', rot);
        updateTransform(item, item.getAttribute('data-x')||0, item.getAttribute('data-y')||0, 1);
      });
    }, 8000);
});

function updateTransform(item, x, y, scale, isHover) {
    const rot = item.getAttribute('data-rotation') || 0;
    item.style.transition = isHover ? 'transform 0.15s ease-out' : 'transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
    item.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`;
}

function renderImage() {
    const mount = document.getElementById('imageMount');
    mount.innerHTML = `<img src="${currentImgs[currentIdx].trim()}" style="animation: fadeIn 0.4s ease;">`;
    document.querySelector('.prev').style.display = currentImgs.length > 1 ? 'flex' : 'none';
    document.querySelector('.next').style.display = currentImgs.length > 1 ? 'flex' : 'none';
}

function changeSlide(n) {
    currentIdx = (currentIdx + n + currentImgs.length) % currentImgs.length;
    renderImage();
}

function closePopup() {
    const popup = document.getElementById('imagePopup');
    popup.classList.remove('active');
    setTimeout(() => { 
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}
</script>

