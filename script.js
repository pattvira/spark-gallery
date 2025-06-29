fetch("submissions.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("gallery");
    const grouped = {};

    data.forEach((item) => {
      if (!grouped[item.month]) grouped[item.month] = [];
      grouped[item.month].push(item);
    });

    for (const month in grouped) {
      const section = document.createElement("section");
      section.innerHTML = `<h2>${month}</h2>`;
      const grid = document.createElement("div");
      grid.className = "gallery-grid";

      grouped[month].forEach((item) => {
        const card = document.createElement("div");
        card.className = "gallery-card";
        card.innerHTML = `
          <img src="${item.thumbnail}" alt="\${item.title}">
          <h3>${item.title}</h3>
          <p>by ${item.creator}</p>
          <a href="${item.sketchUrl}" target="_blank">View Sketch</a>
        `;
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    }
  });
