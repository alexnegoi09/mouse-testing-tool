const test = document.querySelector(".test");

test.onwheel = (e) => {
  const scroll = document.createElement("span");

  if (e.deltaY < 0) {
    scroll.innerText = "scrolling up";
    scroll.classList.add("up");
  } else {
    scroll.innerText = "scrolling down";
    scroll.classList.add("down");
  }

  test.appendChild(scroll);
  scroll.classList.add("styled");

  if (test.offsetHeight > window.innerHeight - 300) test.innerHTML = "";
};

test.onclick = () => {
  const leftClick = document.createElement("span");

  leftClick.innerText = "left click";
  leftClick.classList.add("left-click");

  test.appendChild(leftClick);
  leftClick.classList.add("styled");
};

test.oncontextmenu = (e) => {
  e.preventDefault();
  const rightClick = document.createElement("span");

  rightClick.innerText = "right click";
  rightClick.classList.add("right-click");

  test.appendChild(rightClick);
  rightClick.classList.add("styled");
};
