// filepath: /home/daniyal/Projects/personal-portfolio/personal-portfolio/components/ui/clientscripts.tsx
"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Cursor effect
    document.addEventListener("mousemove", function (e) {
      const cursor = document.querySelector(".cursor-dot") as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    });

    // Initialize particles
    function initParticles() {
      if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
        particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#c084fc"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.7,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#a855f7",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      } else {
        console.error("particlesJS is not defined or particles container not found");
        // Try again in a second
        setTimeout(initParticles, 1000);
      }
    }

    // Style the cursor dot element
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    if (cursorDot) {
      cursorDot.style.width = "12px";
      cursorDot.style.height = "12px";
      cursorDot.style.borderRadius = "50%";
      cursorDot.style.backgroundColor = "#a855f7";
      cursorDot.style.position = "fixed";
      cursorDot.style.pointerEvents = "none";
      cursorDot.style.zIndex = "9999";
      cursorDot.style.transform = "translate(-50%, -50%)";
    }

    // Initialize when DOM is fully loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        initParticles();
      });
    } else {
      // If DOMContentLoaded already fired
      setTimeout(initParticles, 100);
    }
  }, []);

  return null;
}