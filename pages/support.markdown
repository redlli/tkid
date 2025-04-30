---
title: Support
layout: home
permalink: /support
icon: /assets/img/logo.png
description: Support us page
keywords: Support, Support us
---
<style>
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

#upiQR {
    animation: rotate 2s linear infinite;
}

</style>
<section id="upi">
    <p style="font-size: 30px">"Support me by giving me your money"</p>
    <img style="width: 350px;" id="upiQR" alt="UPiQR">
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

