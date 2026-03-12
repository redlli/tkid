---
layout: home
title: Products
permalink: /product2
---

<style>
  :root {
    --bg-color: #f8f9fa;
    --card-bg: #ffffff;
    --text-main: #1d1d1f;
    --text-muted: #6e6e73;
    --accent: #0071e3;
    --radius: 16px;
    --accent-color: #f20053; /* Your hover text color */
    --shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  /* Container & Card */
  .product-grid {
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
  }

  .product-card {
    display: flex;
    flex-direction: row;
    gap: 60px;
    align-items: center;
    background: var(--card-bg);
    margin-bottom: 60px;
    padding: 40px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
  }

  /* Slideshow Area */
  .slideshow-container {
    position: relative;
    flex: 1;
    max-width: 450px;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 12px;
    background: #f5f5f7;
  }

  .slideshow-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Content Area */
  .product-info {
    flex: 1;
  }

  .product-info h2 { 
    margin: 0 0 15px 0; 
    font-size: 2.2rem; 
    font-weight: 700;
    color: var(--text-main);
    letter-spacing: -0.02em;
  }

  .description { 
    font-size: 1.1rem; 
    line-height: 1.6;
    color: var(--text-muted); 
    margin-bottom: 35px; 
  }
  
  .buy-label { 
    font-weight: 600; 
    margin-bottom: 15px; 
    display: block; 
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--text-muted);
    letter-spacing: 0.1em;
  }

  .button-group { display: flex; gap: 15px; }

  .btn {
    background: var(--text-main);
    color: white !important;
    padding: 14px 28px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    border: 2px solid transparent;
  }

  .btn:hover { 
    color: var(--accent-color) !important; 
   
    transform: translateY(-2px);
  }

  /* Navigation UI */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    color: #000;
    border-radius: 50%;
    font-size: 18px;
    transition: all 0.2s ease;
    z-index: 10;
    user-select: none;
    opacity: 0;
  }

  .slideshow-container:hover .prev,
  .slideshow-container:hover .next { opacity: 1; }
  
  .next { right: 15px; }
  .prev { left: 15px; }

  /* Fade Animation */
  .fade {
    animation: fadeEffect 0.5s ease-in-out;
  }

  @keyframes fadeEffect {
    from { opacity: 0.4; }
    to { opacity: 1; }
  }

  /* Mobile Optimization */
  @media (max-width: 900px) {
    .product-card { 
        flex-direction: column; 
        padding: 20px;
        gap: 30px;
    }
    .slideshow-container { max-width: 100%; width: 100%; }
    .product-info h2 { font-size: 1.8rem; }
    .prev, .next { opacity: 1; } /* Always show on mobile */
  }
</style>

<div class="product-grid">
  {% for entry in site.data.pdata %}
  <div class="product-card">
    
    <div class="slideshow-container">
      {% assign images = entry.img | split: "," %}
      {% for image in images %}
        <div class="mySlides-{{ forloop.parentloop.index }} fade" style="display: {% if forloop.first %}block{% else %}none{% endif %}; height: 100%;">
          <img src="{{ image | strip }}" alt="{{ entry.title }}">
        </div>
      {% endfor %}
      
      {% if images.size > 1 %}
        <a class="prev" onclick="plusSlides(-1, {{ forloop.index }}, 'mySlides-{{ forloop.index }}')">&#10094;</a>
        <a class="next" onclick="plusSlides(1, {{ forloop.index }}, 'mySlides-{{ forloop.index }}')">&#10095;</a>
      {% endif %}
    </div>

    <div class="product-info">
      <h2>{{ entry.title }}</h2>
      <p class="description">{{ entry.des }}</p>
      
      <span class="buy-label">Available on</span>
      <div class="button-group">
        {% if entry.teepublic_link %}
          <a href="{{ entry.teepublic_link }}" class="btn" target="_blank">Teepublic</a>
        {% endif %}
        {% if entry.thredless_link %}
          <a href="{{ entry.thredless_link }}" class="btn" target="_blank">Threadless</a>
        {% endif %}
      </div>
    </div>

  </div>
  {% endfor %}
</div>

<script>
let slideIndexMap = {};

function plusSlides(n, galleryID, className) {
  if (slideIndexMap[galleryID] === undefined) {
    slideIndexMap[galleryID] = 1;
  }
  showSlides(slideIndexMap[galleryID] += n, galleryID, className);
}

function showSlides(n, galleryID, className) {
  let slides = document.getElementsByClassName(className);
  if (slideIndexMap[galleryID] === undefined) {
    slideIndexMap[galleryID] = 1;
  }
  
  if (n > slides.length) { slideIndexMap[galleryID] = 1 }    
  if (n < 1) { slideIndexMap[galleryID] = slides.length }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndexMap[galleryID] - 1].style.display = "block";  
}
</script>
