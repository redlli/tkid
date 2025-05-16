---
title: About
layout: home
permalink: /random
icon: /assets/img/icons/JA_logo.png
description: Redirecting page
keywords: Redirecting, redlii
---
<h1>Redirecting......</h1>
<script>
    // List of links to redirect randomly
    const links = [
        "https://redlii.com",
        "https://ja.redlii.com",
        "https://blog.redlii.com/",
        "https://youtu.be/iE3AbWq-c7w?si=9HMU5Pl3NO7uZ-r8",
        "https://youtube.com/shorts/DK-t01wnix8?si=UJmMzYOCJNFjRzkp",
    ];

    // Function to redirect to a random link
    function redirectRandomly() {
        const randomIndex = Math.floor(Math.random() * links.length);
        window.location.href = links[randomIndex];
    }

    // Redirect immediately when the page loads
    window.onload = redirectRandomly;
</script>
