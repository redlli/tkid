function playHoverSound() {
                var audio = new Audio('/assets/Audio/Hover.wav');
                audio.play();
            }
document.querySelectorAll('header a').forEach(function(element) {
                element.addEventListener('mouseover', playHoverSound);
            });

