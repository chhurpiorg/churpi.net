const page = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === page) {
    link.classList.add("active");
  }
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const chooserData = {
  food: {
    title: "Start with varieties and recipes.",
    body: "Learn the difference between soft and hard Churpi, then browse simple serving ideas from Himalayan kitchens.",
    link: "varieties.html",
    label: "Open varieties"
  },
  history: {
    title: "Start with origins and culture.",
    body: "Trace how mountain geography, herding, storage, and trade shaped Churpi's role in daily life.",
    link: "origins.html",
    label: "Open origins"
  },
  maker: {
    title: "Start with the making process.",
    body: "Walk through milk selection, curdling, pressing, drying, and storage to understand the craft.",
    link: "process.html",
    label: "Open making process"
  }
};

document.querySelectorAll("[data-chooser]").forEach((chooser) => {
  const output = chooser.querySelector(".chooser-output");
  chooser.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      chooser.querySelectorAll("[data-choice]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const item = chooserData[button.dataset.choice];
      output.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p><a href="${item.link}">${item.label}</a>`;
    });
  });
});

const timelineData = {
  pasture: ["Milk begins in highland herds.", "Yak, chauri, and cattle milk reflect local grazing systems. Churpi lets families preserve milk beyond the day it is collected."],
  household: ["Curd becomes household food.", "Families separate curds, press them, and decide whether the cheese will be eaten fresh or dried for later."],
  trade: ["Dry cheese travels well.", "Hard Churpi can move through local markets because it is compact, durable, and less dependent on refrigeration."],
  global: ["A new export identity appears.", "Hard Churpi is now also sold internationally as Himalayan dog chews, linking rural dairy work to global pet markets."]
};

document.querySelectorAll("[data-timeline]").forEach((timeline) => {
  const panel = document.querySelector(".timeline-panel");
  timeline.querySelectorAll("[data-panel]").forEach((button) => {
    button.addEventListener("click", () => {
      timeline.querySelectorAll("[data-panel]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const [title, body] = timelineData[button.dataset.panel];
      panel.innerHTML = `<h3>${title}</h3><p>${body}</p>`;
    });
  });
});

const processData = {
  milk: ["Milk is collected and often partially skimmed.", "Traditional makers may use yak, chauri, or cow milk. Lower-fat milk can help hard Churpi dry more firmly and keep longer."],
  curd: ["The milk is heated and curdled.", "Fermented milk or another souring agent helps separate curds from whey."],
  press: ["Curds are drained and pressed.", "Pressure removes liquid and turns loose curds into a compact block ready for shaping."],
  dry: ["Drying creates the famous hardness.", "Pieces may be sun-dried, smoke-dried, or dried with low heat until they become dense and shelf-stable."],
  store: ["Storage protects the work.", "Hard Churpi keeps best when dry. Traditional storage methods vary, but the goal is always to avoid moisture."]
};

document.querySelectorAll("[data-process]").forEach((board) => {
  const detail = board.querySelector(".process-detail");
  board.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      board.querySelectorAll("[data-step]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const [title, body] = processData[button.dataset.step];
      detail.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
    });
  });
});

document.querySelectorAll("[data-moisture]").forEach((range) => {
  const output = document.querySelector(".meter-output");
  const render = () => {
    const value = Number(range.value);
    if (value < 35) {
      output.innerHTML = "<strong>Hard and dry</strong><span>Best suited to slow chewing and long storage.</span>";
    } else if (value < 70) {
      output.innerHTML = "<strong>Firm and sliceable</strong><span>Useful for drying further, smoking, or adding to cooked food.</span>";
    } else {
      output.innerHTML = "<strong>Soft and fresh</strong><span>Better suited to curries, pickles, soups, and quick eating.</span>";
    }
  };
  range.addEventListener("input", render);
  render();
});

const varietyData = {
  soft: {
    title: "Soft Churpi",
    body: "Fresh, crumbly, and slightly tangy. It is often cooked into curries, soups, pickles, and vegetable dishes.",
    points: ["Texture: soft to crumbly", "Use: cooking and side dishes", "Storage: shorter than dried hard Churpi"]
  },
  hard: {
    title: "Hard Churpi",
    body: "Dried until extremely firm. It is usually chewed slowly, carried as a travel food, and valued for long storage.",
    points: ["Texture: very hard and dense", "Use: slow snack, travel food, and dog chew export", "Storage: long when kept dry"]
  }
};

document.querySelectorAll("[data-compare]").forEach((compare) => {
  const card = compare.querySelector(".compare-card");
  compare.querySelectorAll("[data-variety]").forEach((button) => {
    button.addEventListener("click", () => {
      compare.querySelectorAll("[data-variety]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const item = varietyData[button.dataset.variety];
      card.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p><ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>`;
    });
  });
});

document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  const result = quiz.querySelector(".quiz-result");
  quiz.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const right = button.dataset.answer === "right";
      result.textContent = right ? "Correct. Hard Churpi is the slow-chewing dried form." : "Not quite. The clue points to hard Churpi.";
      result.style.color = right ? "#24483e" : "#a75538";
    });
  });
});

document.querySelectorAll("[data-accordion]").forEach((accordion) => {
  const buttons = accordion.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      panel.classList.toggle("open", !open);
    });
  });
});

document.querySelectorAll("[data-filter]").forEach((filter) => {
  const cards = filter.querySelectorAll(".recipe-grid article");
  filter.querySelectorAll("[data-filter-value]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.filterValue;
      filter.querySelectorAll("[data-filter-value]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      cards.forEach((card) => {
        const tags = card.dataset.tags || "";
        card.hidden = value !== "all" && !tags.includes(value);
      });
    });
  });
});

document.querySelectorAll("[data-glossary]").forEach((glossary) => {
  const input = glossary.querySelector("[data-glossary-input]");
  const cards = glossary.querySelectorAll(".glossary-list article");
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    cards.forEach((card) => {
      const haystack = `${card.dataset.term} ${card.textContent}`.toLowerCase();
      card.hidden = query.length > 0 && !haystack.includes(query);
    });
  });
});
