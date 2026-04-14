document.addEventListener("DOMContentLoaded", () => {
  const watchlistProjectBtn = document.getElementById("watchlist-project-btn");
  const watchlistExpandIcon = document.getElementById("watchlist-expand-icon");
  const watchlistProjectP = document.getElementById("watchlist-project-p");
  const watchlistFullProjectDescription = document.getElementById(
    "watchlist-full-project-description",
  );

  const sweetReleaseProjectBtn = document.getElementById(
    "sweet-release-project-btn",
  );
  const sweetReleaseExpandIcon = document.getElementById(
    "sweet-release-expand-icon",
  );
  const sweetReleaseProjectP = document.getElementById(
    "sweet-release-project-p",
  );
  const sweetReleaseFullProjectDescription = document.getElementById(
    "sweet-release-full-project-description",
  );

  const quizzicalProjectBtn = document.getElementById("quizzical-project-btn");
  const quizzicalExpandIcon = document.getElementById("quizzical-expand-icon");
  const quizzicalProjectP = document.getElementById("quizzical-project-p");
  const quizzicalFullProjectDescription = document.getElementById(
    "quizzical-full-project-description",
  );

  // Watchlist hover states
  watchlistProjectBtn.addEventListener("mouseover", () => {
    if (!watchlistProjectP.classList.contains("active-clr")) {
      watchlistExpandIcon.classList.remove("expand-icon");
      watchlistExpandIcon.classList.add("expand-icon-hvr");
      watchlistProjectP.classList.add("p-tag-clr-on-hvr");
    }
  });

  watchlistProjectBtn.addEventListener("mouseout", () => {
    if (!watchlistProjectP.classList.contains("active-clr")) {
      watchlistExpandIcon.classList.remove("expand-icon-hvr");
      watchlistExpandIcon.classList.add("expand-icon");
      watchlistProjectP.classList.remove("p-tag-clr-on-hvr");
    }
  });

  watchlistProjectBtn.addEventListener("click", () => {
    if (watchlistProjectP.classList.contains("active-clr")) {
      watchlistProjectP.classList.remove("active-clr");
      watchlistFullProjectDescription.classList.add("hidden");
      watchlistFullProjectDescription.classList.remove(
        "watchlist-smooth-toggle-description",
      );
      watchlistExpandIcon.classList.remove("close-icon");
      watchlistExpandIcon.classList.add("expand-icon");
    } else {
      watchlistProjectP.classList.add("active-clr");
      watchlistFullProjectDescription.classList.remove("hidden");
      watchlistFullProjectDescription.classList.add(
        "watchlist-smooth-toggle-description",
      );
      watchlistExpandIcon.classList.remove("expand-icon");
      watchlistExpandIcon.classList.add("close-icon");
    }

    if (watchlistProjectP.classList.contains("active-clr")) {
      watchlistExpandIcon.classList.remove("expand-icon-hvr");
    } else {
      watchlistExpandIcon.classList.add("expand-icon-hvr");
    }
  });

  // Sweet Release hover states
  sweetReleaseProjectBtn.addEventListener("mouseover", () => {
    if (!sweetReleaseProjectP.classList.contains("active-clr")) {
      sweetReleaseExpandIcon.classList.remove("expand-icon");
      sweetReleaseExpandIcon.classList.add("expand-icon-hvr");
      sweetReleaseProjectP.classList.add("p-tag-clr-on-hvr");
    }
  });

  sweetReleaseProjectBtn.addEventListener("mouseout", () => {
    if (!sweetReleaseProjectP.classList.contains("active-clr")) {
      sweetReleaseExpandIcon.classList.remove("expand-icon-hvr");
      sweetReleaseExpandIcon.classList.add("expand-icon");
      sweetReleaseProjectP.classList.remove("p-tag-clr-on-hvr");
    }
  });

  sweetReleaseProjectBtn.addEventListener("click", () => {
    if (sweetReleaseProjectP.classList.contains("active-clr")) {
      sweetReleaseProjectP.classList.remove("active-clr");
      sweetReleaseFullProjectDescription.classList.add("hidden");
      sweetReleaseFullProjectDescription.classList.remove(
        "sweet-release-smooth-toggle-description",
      );
      sweetReleaseExpandIcon.classList.remove("close-icon");
      sweetReleaseExpandIcon.classList.add("expand-icon");
    } else {
      sweetReleaseProjectP.classList.add("active-clr");
      sweetReleaseFullProjectDescription.classList.remove("hidden");
      sweetReleaseFullProjectDescription.classList.add(
        "sweet-release-smooth-toggle-description",
      );
      sweetReleaseExpandIcon.classList.remove("expand-icon");
      sweetReleaseExpandIcon.classList.add("close-icon");
    }

    if (sweetReleaseProjectP.classList.contains("active-clr")) {
      sweetReleaseExpandIcon.classList.remove("expand-icon-hvr");
    } else {
      sweetReleaseExpandIcon.classList.add("expand-icon-hvr");
    }
  });

  // Quizzical hover states
  quizzicalProjectBtn.addEventListener("mouseover", () => {
    if (!quizzicalProjectP.classList.contains("active-clr")) {
      quizzicalExpandIcon.classList.remove("expand-icon");
      quizzicalExpandIcon.classList.add("expand-icon-hvr");
      quizzicalProjectP.classList.add("p-tag-clr-on-hvr");
    }
  });

  quizzicalProjectBtn.addEventListener("mouseout", () => {
    if (!quizzicalProjectP.classList.contains("active-clr")) {
      quizzicalExpandIcon.classList.remove("expand-icon-hvr");
      quizzicalExpandIcon.classList.add("expand-icon");
      quizzicalProjectP.classList.remove("p-tag-clr-on-hvr");
    }
  });

  quizzicalProjectBtn.addEventListener("click", () => {
    if (quizzicalProjectP.classList.contains("active-clr")) {
      quizzicalProjectP.classList.remove("active-clr");
      quizzicalFullProjectDescription.classList.add("hidden");
      quizzicalFullProjectDescription.classList.remove(
        "quizzical-smooth-toggle-description",
      );
      quizzicalExpandIcon.classList.remove("close-icon");
      quizzicalExpandIcon.classList.add("expand-icon");
    } else {
      quizzicalProjectP.classList.add("active-clr");
      quizzicalFullProjectDescription.classList.remove("hidden");
      quizzicalFullProjectDescription.classList.add(
        "quizzical-smooth-toggle-description",
      );
      quizzicalExpandIcon.classList.remove("expand-icon");
      quizzicalExpandIcon.classList.add("close-icon");
    }

    if (quizzicalProjectP.classList.contains("active-clr")) {
      quizzicalExpandIcon.classList.remove("expand-icon-hvr");
    } else {
      quizzicalExpandIcon.classList.add("expand-icon-hvr");
    }
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

  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;

  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered
      ? "visible"
      : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });
});
