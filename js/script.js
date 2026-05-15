/* MOBILE MENU */
const siteHeader = document.querySelector(".header");
const siteBurger = document.querySelector(".header__burger");
const siteNav = document.querySelector(".header__nav");

if (siteHeader && siteBurger && siteNav) {
  siteBurger.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("header--open");
    document.body.classList.toggle("menu-open", isOpen);
    siteBurger.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("header--open");
      document.body.classList.remove("menu-open");
      siteBurger.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".header__dropdown-button").forEach((button) => {
    button.addEventListener("click", () => {
      const dropdown = button.closest(".header__dropdown");
      if (!dropdown) return;
      dropdown.classList.toggle("header__dropdown--open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    siteHeader.classList.remove("header--open");
    document.body.classList.remove("menu-open");
    siteBurger.setAttribute("aria-expanded", "false");
  });
}

const heroSlides = [
  {
    title: "Начинается регистрация<br>на хакатон<br>в Брянске",
    subtitle: "с 3 октября по 7 октября 2025",
    buttonText: "Посмотреть",
    buttonLink: "#",

    background: "#0d1828",

    shape: "./img/i_alone.svg",
    image: "./img/region/bryansk/hero_block.png",

    imageY: "0px",
    imageHeight: "610px",
    imageWidth: "auto",
  },
  {
    title: "Стартует трек для школьников",
    subtitle: "участвуй в команде и развивай ИТ-навыки",
    buttonText: "Подробнее",
    buttonLink: "./schoolchildren.html",

    background: "#1E5BFF",

    shape: "./img/t_alone.svg",
    image: "./img/region/arkhangelsk/hero_block.png",

    imageY: "0px",
    imageHeight: "600px",
    imageWidth: "auto",
  },
  {
    title: "Открыт набор для студентов",
    subtitle: "создавай проекты и работай с реальными задачами",
    buttonText: "Перейти",
    buttonLink: "./student.html",

    background: "#6C4DFF",

    shape: "./img/p_alone.svg",
    image: "./img/region/kazan/hero_block.png",

    imageY: "0px",
    imageHeight: "600px",
    imageWidth: "auto",
  }
];

const hero = document.querySelector(".hero");
const heroSlide = document.querySelector("#heroSlide");
const heroDots = document.querySelector("#heroDots");
const heroPrev = document.querySelector("#heroPrev");
const heroNext = document.querySelector("#heroNext");

let currentHeroSlide = 0;

function renderHeroSlide(index) {
  const slide = heroSlides[index];

  hero.style.background = slide.background;

  heroSlide.innerHTML = `
    <div class="hero__content">
      <div class="hero__text-block">
        <h1 class="hero__title title title--xl">${slide.title}</h1>
        <p class="hero__subtitle text text--24">${slide.subtitle}</p>
      </div>

      <a class="hero__button" href="${slide.buttonLink}">
        ${slide.buttonText}
      </a>
    </div>

    <div 
      class="hero__visual"
      style="
        --hero-image-y: ${slide.imageY};
        --hero-image-height: ${slide.imageHeight};
        --hero-image-width: ${slide.imageWidth};
      "
    >
      <img 
        class="hero__shape-img" 
        src="${slide.shape}" 
        alt=""
      >

      <img 
        class="hero__image" 
        src="${slide.image}" 
        alt=""
      >
    </div>
  `;

  renderHeroDots();
}

function renderHeroDots() {
  heroDots.innerHTML = "";

  heroSlides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.classList.add("hero__dot");
    dot.type = "button";
    dot.setAttribute("aria-label", `Слайд ${index + 1}`);

    if (index === currentHeroSlide) {
      dot.classList.add("hero__dot--active");
    }

    dot.addEventListener("click", () => {
      currentHeroSlide = index;
      renderHeroSlide(currentHeroSlide);
    });

    heroDots.appendChild(dot);
  });
}

function showNextHeroSlide() {
  currentHeroSlide++;

  if (currentHeroSlide >= heroSlides.length) {
    currentHeroSlide = 0;
  }

  renderHeroSlide(currentHeroSlide);
}

function showPrevHeroSlide() {
  currentHeroSlide--;

  if (currentHeroSlide < 0) {
    currentHeroSlide = heroSlides.length - 1;
  }

  renderHeroSlide(currentHeroSlide);
}

if (hero && heroSlide && heroDots && heroPrev && heroNext) {
  heroNext.addEventListener("click", showNextHeroSlide);
  heroPrev.addEventListener("click", showPrevHeroSlide);

  renderHeroSlide(currentHeroSlide);
}





const tracksSlides = [
  {
    tag: "Треки",
    title: "Конкурс проходит<br>для школьников<br>6 - 11 классов",
    buttonText: "Ознакомиться с треком",
    buttonLink: "./schoolchildren.html",

    background: "#6C4DFF",

    shape: "./img/p_alone_school.svg",
    image: "./img/Школьники.png",

    imageY: "1px",
    imageHeight: "600px",
    imageWidth: "auto"
  },
  {
    tag: "Треки",
    title: "Конкурс проходит<br>для студентов",
    buttonText: "Ознакомиться с треком",
    buttonLink: "./student.html",

    background: "#275CF6",

    shape: "./img/p_alone_student.svg",
    image: "./img/Студенты.png",

    imageY: "15px",
    imageHeight: "600px",
    imageWidth: "auto"
  }
];

const tracksInner = document.querySelector(".tracks__inner");
const tracksSlide = document.querySelector("#tracksSlide");
const tracksDots = document.querySelector("#tracksDots");
const tracksPrev = document.querySelector("#tracksPrev");
const tracksNext = document.querySelector("#tracksNext");

let currentTracksSlide = 0;

function renderTracksSlide(index) {
  const slide = tracksSlides[index];

  tracksInner.style.background = slide.background;

  tracksSlide.innerHTML = `
    <div class="tracks__content">
      <div class="tracks__text-block">
        <span class="tracks__tag">${slide.tag}</span>

        <h2 class="tracks__title title title--lg">
          ${slide.title}
        </h2>
      </div>

      <a class="tracks__button" href="${slide.buttonLink}">
        ${slide.buttonText}
      </a>
    </div>

    <div 
      class="tracks__visual"
      style="
        --tracks-image-y: ${slide.imageY};
        --tracks-image-height: ${slide.imageHeight};
        --tracks-image-width: ${slide.imageWidth};
      "
    >
      <img class="tracks__shape" src="${slide.shape}" alt="">
      <img class="tracks__image" src="${slide.image}" alt="">
    </div>
  `;

  renderTracksDots();
}

function renderTracksDots() {
  tracksDots.innerHTML = "";

  tracksSlides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.classList.add("tracks__dot");
    dot.type = "button";
    dot.setAttribute("aria-label", `Слайд ${index + 1}`);

    if (index === currentTracksSlide) {
      dot.classList.add("tracks__dot--active");
    }

    dot.addEventListener("click", () => {
      currentTracksSlide = index;
      renderTracksSlide(currentTracksSlide);
    });

    tracksDots.appendChild(dot);
  });
}

function showNextTracksSlide() {
  currentTracksSlide++;

  if (currentTracksSlide >= tracksSlides.length) {
    currentTracksSlide = 0;
  }

  renderTracksSlide(currentTracksSlide);
}

function showPrevTracksSlide() {
  currentTracksSlide--;

  if (currentTracksSlide < 0) {
    currentTracksSlide = tracksSlides.length - 1;
  }

  renderTracksSlide(currentTracksSlide);
}

if (tracksInner && tracksSlide && tracksDots && tracksPrev && tracksNext) {
  tracksNext.addEventListener("click", showNextTracksSlide);
  tracksPrev.addEventListener("click", showPrevTracksSlide);

  renderTracksSlide(currentTracksSlide);
}

const reviews = [
  {
    quote: "«Конкурс «Моя профессия — ИТ» стал мощной площадкой, ежегодно объединяющей всё больше талантливых школьников. Федерация спортивного программирования, как никто другой, понимает дух соревнования и ценность таких инициатив. Этот проект мотивирует ребят с юных лет, формирует интерес, воспитывает здоровую конкуренцию и помогает выбрать путь<br>в информационных технологиях»",
    name: "Александр Росляков",
    role: "Исполнительный директор Федерации<br>спортивного программирования России",
    avatar: "./img/Росляков.png",
    link: "https://fsp-russia.ru/"
  },
  {
    quote: "«АФК «Система» поддерживает этот конкурс, потому что верит в силу молодежи и важность инноваций в ИТ отрасли. Мы хотим вдохновить участников продолжать свое обучение, развиваться и не бояться новых вызовов. <br>Ваше участие в этом конкурсе — это шаг к реализации вашего потенциала<br>и достижению высоких результатов в будущем»",
    name: "Сергей Ткаченко",
    role: "Вице-президент по информационным <br>технологиям АФК «Система»",
    avatar: "./img/Ткаченко.png",
    link: "https://www.sistema.ru/"
  },
  {
    quote: "«Уверен, что на новом всероссийском уровне конкурс «Моя профессия – ИТ» поможет талантливым ребятам из разных уголков и регионов страны заявить<br>о себе. Участие в нем – отличная возможность для развития и самореализации ребят, увлеченных ИТ. Кроме того, это практические кейсы, погружение<br>в реальные задачи бизнеса, новые идеи и перспективы для будущей карьеры»",
    name: "Николай Пожидаев",
    role: "Президент Sitronics Group",
    avatar: "./img/Пожидаев.png",
    link: "https://www.sitronics.com/"
  },
  {
    quote: "«Моя профессия – ИТ» – это прекрасный конкурс, у истоков которого я стоял еще в 2014 году. Хочу сказать, что этот конкурс позволяет нашим юным дарованиям проявить себя, проявить свою креативность. Благодаря знаниям, которые есть <br>у них на сегодня, им даются замечательные проекты. Мы предоставляли МПИТ кейс, связанный с созданием портала экосистемы по работе с детьми.<br>И, поверьте, то, что рождается сегодня в головах наших школьников, завтра может уже стать реальным программным продуктом и нести пользу нашей стране»",
    name: "Владимир Егоров",
    role: "Генеральный директор НО «Целевой фонд<br>будущих поколений Республики Саха (Якутия)»",
    avatar: "./img/Егоров.png",
    link: "https://fondyakutia.ru/"
  }
];

const reviewsCard = document.querySelector("#reviewsCard");
const reviewsPrev = document.querySelector("#reviewsPrev");
const reviewsNext = document.querySelector("#reviewsNext");

let currentReview = 0;

function renderReview(index) {
  if (!reviewsCard) return;

  const review = reviews[index];

  const dots = reviews.map((item, dotIndex) => {
    const activeClass = dotIndex === index ? "reviews__dot--active" : "";

    return `
      <button 
        class="reviews__dot ${activeClass}" 
        type="button" 
        aria-label="Отзыв ${dotIndex + 1}"
        data-review-index="${dotIndex}"
      ></button>
    `;
  }).join("");

  reviewsCard.innerHTML = `
    <p class="reviews__quote text text--20">
      ${review.quote}
    </p>

    <div class="reviews__person">
      <div class="reviews__avatar">
        <img src="${review.avatar}" alt="">
      </div>

      <div>
        <h3 class="reviews__name">
          ${review.name}
        </h3>

        <p class="reviews__role text text--16">
          ${review.role}
        </p>
      </div>
    </div>

    <div class="reviews__bottom">
      <div class="reviews__dots">
        ${dots}
      </div>

      <a class="reviews__link" href="${review.link}">
        Перейти на их сайт
      </a>
    </div>
  `;

  const dotButtons = reviewsCard.querySelectorAll(".reviews__dot");

  dotButtons.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentReview = Number(dot.dataset.reviewIndex);
      renderReview(currentReview);
    });
  });
}

function showNextReview() {
  currentReview++;

  if (currentReview >= reviews.length) {
    currentReview = 0;
  }

  renderReview(currentReview);
}

function showPrevReview() {
  currentReview--;

  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }

  renderReview(currentReview);
}

if (reviewsPrev && reviewsNext) {
  reviewsPrev.addEventListener("click", showPrevReview);
  reviewsNext.addEventListener("click", showNextReview);
}

renderReview(currentReview);