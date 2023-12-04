$("#demoDefaultSelection").ddslick({
  defaultSelectedIndex: 2,
});

let btn = document.querySelector(".mobile-btn");

const toggleBtn = (menuClassName, showMenuClassName) => {
  let menu = document.querySelector(`.${menuClassName}`);

  if (menu.className.includes(showMenuClassName)) {
    menu.className = menuClassName;
  } else {
    menu.className += ` ${showMenuClassName}`;
  }
};

btn.addEventListener("click", () => {
  toggleBtn("header__menu", "active");
});
