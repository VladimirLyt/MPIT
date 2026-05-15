const regions = [
  {
    status: "Хакатон прошел",
    statusColor: "#022992",
    title: "Самарская<br>область",
    city: "Самара",
    image: "./img/region/samara/samara1.jpg",
    pageLink: "./region/samara.html",

    schoolDate: "23–24 октября",
    schoolText: "Все треки",

  },
  {
    status: "Хакатон прошел",
    statusColor: "#022992",
    title: "Брянская<br>область",
    city: "Брянск",
    image: "./img/region/bryansk/bryansk.jpg",
    pageLink: "./region/bryansk.html",

    schoolDate: "24–27 октября",
    schoolText: "Все треки",
  },
  {
    status: "Хакатон походит",
    statusColor: "#1E5BFF",
    title: "Омская<br>область",
    city: "Омск",
    image: "./img/region/omsk/omsk1.jpg",
    pageLink: "./region/omsk.html",

    schoolDate: "27–28 октября",
    schoolText: "Школьники",

    studentDate: "30–31 октября",
    studentText: "Специалисты",
  },
  {
    status: "Регистрация участников",
    statusColor: "#6C4DFF",
    title: "Республика<br>Башкортостан",
    city: "Самара",
    image: "./img/region/bashkortostan/_HDR.jpg",
    pageLink: "./region/bashkortostan.html",

    schoolDate: "9–12 ноября",
    schoolText: "Школьники",

    studentDate: "12–15 ноября",
    studentText: "Специалисты",

  },
  {
    status: "Хакатон прошел",
    statusColor: "#022992",
    title: "Калининградская<br>область",
    city: "Калининград",
    image: "./img/region/kaliningrad/kal.jpg",
    pageLink: "./region/kaliningrad.html",

    schoolDate: "25–28 сентября",
    schoolText: "Все треки",
  },
  {
    status: "Хакатон походит",
    statusColor: "#1E5BFF",
    title: "Санкт-Петербург",
    city: "Санкт-Петербург",
    image: "./img/region/saint-petesburg/piter.jpg",
    pageLink: "./region/saint-petesburg.html",

    schoolDate: "2–5 октября",
    schoolText: "Школьники",
  }

];

const regionsGrid = document.querySelector("#regionsGrid");

function renderRegions() {
  if (!regionsGrid) return;

  regionsGrid.innerHTML = "";

  regions.forEach((region) => {
    const card = document.createElement("a");
    card.classList.add("region-card");
    card.href = region.pageLink;

    const schoolButton = region.schoolDate && region.schoolText
      ? `
        <div class="region-card__button region-card__button--purple">
          <span>${region.schoolDate}</span>
          <span>${region.schoolText}</span>
        </div>
      `
      : "";

    const studentButton = region.studentDate && region.studentText
      ? `
        <div class="region-card__button region-card__button--blue">
          <span>${region.studentDate}</span>
          <span>${region.studentText}</span>
        </div>
      `
      : "";

    const actionsCount = Number(Boolean(schoolButton)) + Number(Boolean(studentButton));

        if (actionsCount === 1) {
        card.classList.add("region-card--one-action");
        }

        if (actionsCount === 2) {
        card.classList.add("region-card--two-actions");
        }

    card.innerHTML = `
      <div class="region-card__info">
        <div class="region-card__status text text--16">
          <span class="region-card__status-dot" style="background: ${region.statusColor};"></span>
          ${region.status}
        </div>

        <h3 class="region-card__title">
          ${region.title}
        </h3>

        <p class="region-card__city text text--18">
          ${region.city}
        </p>
      </div>

      <div class="region-card__image">
        <img src="${region.image}" alt="">
      </div>

      <div class="region-card__actions">
        ${schoolButton}
        ${studentButton}
      </div>
    `;

    regionsGrid.appendChild(card);
  });
}
renderRegions();