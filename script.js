const slides = [
    {
        title: "Self Introduction",
        content: "Hi! I'm Chhay Sovannara. I'm 15years old and Welcome to my presentation. Click next to see more about me."
    },
    {
        title: "My Hobbies",
        content: "I enjoy Travelling and going out with my friend. They help me relax and express creativity."
    },
    {
        title: "Idk bored",
        content: "BRUH"
    },
    {
        title: "Skills and Interests",
        content: "I don't know what is my talent but I'm interested in other stuff like marketing or business stuff."
    },
    {
        title: "Future Goals",
        content: "I hope that I can buy my parents anything they want and I hope that I will make them proud of me One day."
    },
    {
        title: "Thank You!",
        content: "Thank you for listening! Any questions?"
    }
];

let currentSlide = 0;

document.getElementById('nextBtn').addEventListener('click', function() {
    currentSlide++;
    if (currentSlide < slides.length) {
        document.getElementById('title').innerText = slides[currentSlide].title;
        document.getElementById('content').innerText = slides[currentSlide].content;
    } else {
        currentSlide = slides.length - 1; // Prevent going out of bounds
    }
});
