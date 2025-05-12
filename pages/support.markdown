---
title: Support
layout: home
permalink: /support
icon: /assets/img/logo.png
description: Support us page
keywords: Support, Support us
---

<style>
    /* Centering Container */
    #upi {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center; /* Centering content */
        justify-content: center;
        text-align: center;
        max-width: 400px;
        margin: auto; /* Centers the section */
    }

    /* Rotating Animation */
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* QR Code */
    #upiQR {
        width: 250px;
        animation: rotate 6s linear infinite;
        transition: transform 0.3s ease-in-out;
        margin-bottom: 20px; /* Adds spacing */
    }

    #upiQR:hover {
        transform: scale(1.1);
    }

    /* Support Box */
    .support-box {
        width: 220px;
        padding: 15px;
        background-color: #ffdd57;
        color: #000;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease-in-out;
        margin-top: 15px;
        text-align: center;
    }

    .support-box:hover {
        background-color: #ffc107;
        transform: translateY(-5px);
    }
</style>

<section id="upi">
    <p style="font-size: 30px"> Support me by giving me your money</p>

    <a class="linkhai" href="https://buymeacoffee.com/redlii">
        <img id="upiQR" alt="UPI QR Code">
    </a>

    <div class="support-box" onclick="window.location.href='https://buymeacoffee.com/redlii';">
        Support Me
    </div>
    
</section>
	 

<script>
    // Define the folder path
    const folderPath = "/assets/img/coolart/";

    // Array of image filenames in the folder
    const imageFiles = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"]; // Replace with actual filenames

    // Select a random image
    const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];

    // Update the image source
    document.getElementById("upiQR").src = folderPath + randomImage;
</script>

