---
layout: home
title: Design Gallery
permalink: /show
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

  /* --- Gallery Popup --- */
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

  /* BUTTON GROUP - Flex Wrap allows 3 buttons to sit nicely */
  .btn-group { 
    display: flex; 
    gap: 12px; 
    flex-wrap: wrap; 
  }

  .btn {
    flex: 1;
    min-width: 100px; /* Ensures buttons don't get too squashed */
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

<script>
let currentIdx = 0;
let currentImgs = [];

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.mashup-item');
    const popup = document.getElementById('imagePopup');

    items.forEach(item => {
        item.addEventListener('click', () => {
            openGalleryPopup(
                item.getAttribute('data-imgs').split(','),
                item.getAttribute('data-title'),
                item.getAttribute('data-des'),
                item.getAttribute('data-tee'),
                item.getAttribute('data-thread'),
                item.getAttribute('data-forth') // Added Forthwall attribute
            );
        });
    });

    // Check URL for Search Data
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('title')) {
        openGalleryPopup(
            urlParams.get('imgs').split(','),
            urlParams.get('title'),
            urlParams.get('des'),
            urlParams.get('tee'),
            urlParams.get('thread'),
            urlParams.get('forth') 
            // urlParams.get('name'
        );
    }

    popup.addEventListener('click', closePopup);
});
//Update Function: Update function openGalleryPopup(imgs, title, des, tee, thread, forth, name).
function openGalleryPopup(imgs, title, des, tee, thread, forth) {
    const popup = document.getElementById('imagePopup');
    currentImgs = imgs;
    document.getElementById('pTitle').innerText = title;
    document.getElementById('pDes').innerText = des;
    currentIdx = 0;

    let btns = '';
    // Check and build each button
    if(tee && tee.length > 5) btns += `<a href="${tee}" target="_blank" class="btn">Teepublic</a>`;
    if(thread && thread.length > 5) btns += `<a href="${thread}" target="_blank" class="btn">Threadless</a>`;
    if(forth && forth.length > 5) btns += `<a href="${forth}" target="_blank" class="btn">Forthwall</a>`;
//then add this here to add that name button here
//if(name && name.length > 5) { btns += <a href="${printify}" target="_blank" class="btn">Printify</a>; }
    document.getElementById('pButtons').innerHTML = btns;

    renderImage();
    popup.style.display = 'flex';
    setTimeout(() => popup.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
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
    
    // Smooth transition before redirecting
    setTimeout(() => { 
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // REDIRECT TO PRODUCT PAGE
        window.location.href = '/product'; 
    }, 300);
}
</script>

