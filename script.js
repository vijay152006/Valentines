// Open envelope and show hearts
function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open'); // Toggle the envelope open/close

    if (envelope.classList.contains('open')) {
        // Add hearts when the envelope is opened
        createHearts();
    }
}

// Create hearts when envelope is opened
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');

    // Create 30 hearts (increased number of hearts)
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Heart emoji
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.animationDelay = `${Math.random() * 2}s`; // Random delay
        heartsContainer.appendChild(heart);

        // Remove the heart after the animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Show overlay and paper when clicking on the paper inside the envelope
function showPaperAndOverlay(event) {
    // Prevent the envelope click event from firing when the paper is clicked
    event.stopPropagation();

    const whitePaper = document.createElement('div');
    const overlay = document.createElement('div');

    // Add classes for the white paper and overlay
    whitePaper.classList.add('white-paper');
    overlay.classList.add('overlay');

    // Add content to the white paper
    whitePaper.innerHTML = `
        <h2 class="letter-heading">Will You Be My Valentine?</h2>
        <p class="letter-content">Heyaa Babbiee Valentine is here Yayyyyyyiee!</p>
        <p class="letter-content">We've been through so much together. You've seen my ups and downs, and I've seen yours yet, you never left my side. No one has ever been this close to me or stayed with me for this long, and that means more to me than words can express.

You're not just cute you’re breathtakingly beautiful, inside and out. I feel a kind of comfort with you that I can’t find anywhere else. I know I annoy you a lot (probably more than anyone else), but that’s only because I love being around you. Every single day, my connection with you grows deeper, and I cherish every moment we share.

We've experienced so much together laughing, fighting, playing, sneaking into each other’s houses, and making unforgettable memories. And I love every bit of it. I don’t ever want this to end. I want to stay in this beautiful reality with you, forever.

I hope you feel the same way. I dream of a future where we stay together, where this love only grows stronger, and maybe one day, where I get to call you my wife.

So, my future wifey, I have a special question for you. Will you go on a Valentine’s date with me? Let’s make our bond even stronger and fall even more in love with each other.

Will you be my Valentine, baby? ❤️<p>
        <p class="letter-content" style="color:red">With Love Your Dearest Vijay<p>
    `;

    // Add tulips containers inside the white paper
    const tulipsLeft = document.createElement('div');
    const tulipsRight = document.createElement('div');
    tulipsLeft.classList.add('tulip', 'left');
    tulipsRight.classList.add('tulip', 'right');
    whitePaper.appendChild(tulipsLeft);
    whitePaper.appendChild(tulipsRight);

    // Append the white paper and overlay to the body
    document.body.appendChild(whitePaper);
    document.body.appendChild(overlay);

    // Display the white paper and overlay
    whitePaper.style.display = 'block';
    overlay.style.display = 'block';

    // Play the music when the paper appears
    const music = document.getElementById('music');
    music.play(); // Play the audio

    // Add event listener to the overlay to close the paper and overlay
    overlay.addEventListener('click', () => {
        whitePaper.style.display = 'none';
        overlay.style.display = 'none';
        music.pause(); // Stop the music when overlay is clicked
        music.currentTime = 0; // Reset music to start
    });
}
