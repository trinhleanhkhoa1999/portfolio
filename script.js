import { skills } from "./constants/data.js";
import { extraSkill } from "./constants/data.js";
import { menuIcon } from "./constants/data.js";
import { servicesCard } from "./constants/data.js";

// ---------------section info sidebar----------
// Render skills
const skillsContainer = document.getElementById("major-skill-content");

skills.forEach((skill) => {
  skillsContainer.innerHTML += `
    <div class="major-skill">
      <div class="major-skill-content">
        <div class="major-skill-content-heading">
          <span class="xs">${skill.name}</span>
          <span class="sm">${skill.percent}%</span>
        </div>
        <div class="progress" data-percent="${skill.percent}"></div>
      </div>
    </div>
  `;
});

// Animate thanh progress
const progresses = document.querySelectorAll(".progress");
progresses.forEach((progress) => {
  const percent = progress.getAttribute("data-percent");
  setTimeout(() => {
    progress.style.setProperty("--percent", percent + "%");
  }, 200);
});

// Render extra skill
const extraSkillContainer = document.getElementById("extra-skill-container");
extraSkill.forEach((item) => {
  extraSkillContainer.innerHTML += `
      <span class="extra-skill-item xs">${item}</span>
  `;
});

// ----------section menu right---------------
// Render menu-right icon
const menuIconE = document.getElementById("menu-icon");
// render menu items
menuIcon.forEach((item, index) => {
  menuIconE.innerHTML += `
    <a href="#${item.tag}" class="menu-item" data-index="${index}">
      <ion-icon name="${item.icon}-outline"></ion-icon>
    </a>
  `;
});

// lấy tất cả các item sau khi render
const menuItems = document.querySelectorAll("#menu-icon .menu-item");

// xử lý active khi click
menuItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    // e.preventDefault();

    menuItems.forEach((i) => i.classList.remove("active"));
    el.classList.add("active");
  });
});
//toggle
const toggle = document.getElementById("toggle");
const toggleMobile = document.getElementById("toggle-mobile");

let isActive = false; // trạng thái chung

function updateToggleUI() {
  if (isActive) {
    toggle.classList.add("active");
    toggleMobile.classList.add("active");
    document.body.classList.toggle("dark");
  } else {
    toggle.classList.remove("active");
    toggleMobile.classList.remove("active");
    document.body.classList.remove("dark");
  }
}

toggle.addEventListener("click", () => {
  isActive = !isActive;
  updateToggleUI();
});

toggleMobile.addEventListener("click", () => {
  isActive = !isActive;
  updateToggleUI();
});

// đảm bảo khi resize vẫn giữ trạng thái
window.addEventListener("resize", updateToggleUI);

// chạy ngay khi load
updateToggleUI();

//show hiden menu cho mobile
const btnMobile = document.getElementById("btn-mobile");
const showHidenMenuMobile = document.getElementById("show-menu-mobile");
const menuMobile = document.getElementById("menu-icon-mobile");

let showHidenMenu = false;

btnMobile.addEventListener("click", () => {
  showHidenMenu = !showHidenMenu;

  // đổi icon button
  btnMobile.innerHTML = showHidenMenu
    ? `<ion-icon name="power"></ion-icon>`
    : `<ion-icon name="menu"></ion-icon>`;

  if (showHidenMenu) {
    // build menu items
    let html = "";
    menuIcon.forEach((item, index) => {
      html += `
        <a href="#${item.tag}" class="menu-item" data-index="${index}">
          <ion-icon name="${item.icon}-outline"></ion-icon>
        </a>
      `;
    });
    menuMobile.innerHTML = html;

    // hiện menu container
    showHidenMenuMobile.style.display = "block";
  } else {
    // clear menu items
    menuMobile.innerHTML = "";
    // ẩn container
    showHidenMenuMobile.style.display = "none";
  }
});

//-------------- service card-----------
const renderServices = document.getElementById("render-services");

servicesCard.forEach((item) => {
  renderServices.innerHTML += `
    <div class="service-card">
      <ion-icon name="${item.iconTitle}"></ion-icon>
      <div class="card-content">
        <h6>${item.title}</h6>
        <div class="card-content-services">
          ${item.serviceItem
            .map(
              (service) => `
              <div class="service-item">
                <ion-icon name="arrow-forward"></ion-icon>
                <p>${service}</p>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
});

