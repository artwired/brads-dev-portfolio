console.log("JS is running");

document.addEventListener("DOMContentLoaded", () => {
  /* -----------------------------------------
    PROJECT TOGGLE SYSTEM (REFACTORED)
  ---------------------------------------- */

  const projects = [
    {
      btn: "watchlist-project-btn",
      icon: "watchlist-expand-icon",
      text: "watchlist-project-p",
      description: "watchlist-full-project-description",
      activeClass: "watchlist-smooth-toggle-description",
    },
    {
      btn: "sweet-release-project-btn",
      icon: "sweet-release-expand-icon",
      text: "sweet-release-project-p",
      description: "sweet-release-full-project-description",
      activeClass: "sweet-release-smooth-toggle-description",
    },
    {
      btn: "quizzical-project-btn",
      icon: "quizzical-expand-icon",
      text: "quizzical-project-p",
      description: "quizzical-full-project-description",
      activeClass: "quizzical-smooth-toggle-description",
    },
  ];

  projects.forEach((project) => {
    const btn = document.getElementById(project.btn);
    const icon = document.getElementById(project.icon);
    const text = document.getElementById(project.text);
    const description = document.getElementById(project.description);

    if (!btn || !icon || !text || !description) return;

    // Hover
    btn.addEventListener("mouseover", () => {
      if (!text.classList.contains("active-clr")) {
        icon.classList.remove("expand-icon");
        icon.classList.add("expand-icon-hvr");
        text.classList.add("p-tag-clr-on-hvr");
      }
    });

    btn.addEventListener("mouseout", () => {
      if (!text.classList.contains("active-clr")) {
        icon.classList.remove("expand-icon-hvr");
        icon.classList.add("expand-icon");
        text.classList.remove("p-tag-clr-on-hvr");
      }
    });

    // Click toggle
    btn.addEventListener("click", () => {
      const isActive = text.classList.contains("active-clr");

      if (isActive) {
        text.classList.remove("active-clr");
        description.classList.add("hidden");
        description.classList.remove(project.activeClass);
        icon.classList.remove("close-icon");
        icon.classList.add("expand-icon");
      } else {
        text.classList.add("active-clr");
        description.classList.remove("hidden");
        description.classList.add(project.activeClass);
        icon.classList.remove("expand-icon");
        icon.classList.add("close-icon");
      }

      // Hover state reset
      if (text.classList.contains("active-clr")) {
        icon.classList.remove("expand-icon-hvr");
      } else {
        icon.classList.add("expand-icon-hvr");
      }
    });
  });

  /* -----------------------------------------
    Focus outline only for keyboard users 
  ---------------------------------------- */

  const handleFirstTab = (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("user-is-tabbing");

      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
    }
  };

  const handleMouseDownOnce = () => {
    document.body.classList.remove("user-is-tabbing");

    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  };

  window.addEventListener("keydown", handleFirstTab);

  /* -----------------------------------------
    Back to top button
  ---------------------------------------- */

  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;

  const alterStyles = (isVisible) => {
    backToTopButton.style.visibility = isVisible ? "visible" : "hidden";
    backToTopButton.style.opacity = isVisible ? 1 : 0;
    backToTopButton.style.transform = isVisible ? "scale(1)" : "scale(0)";
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
    } else {
      isBackToTopRendered = false;
    }
    alterStyles(isBackToTopRendered);
  });
});
