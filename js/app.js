"use strict";

// Load Sounds
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const musicBourd = document.querySelectorAll(".music-bourd div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
  ];

  // Pannals  unctions
  musicBourd.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  // Visual Bubbles
  const createBubble = (index) => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
