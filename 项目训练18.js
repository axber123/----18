const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const imgs = document.querySelectorAll(".content");
let add1 = 0; // 声明为局部变量

btnRight.addEventListener("click", imaMoveRight);
btnLeft.addEventListener("click", imaMoveLeft);
document.body.style.backgroundImage = `url(https://cdn.jsdelivr.net/gh/axber123/image-host@main/img/p${add1 / 100 + 1}.jpg)`;
function imaMoveRight() {
  add1 += 100;
  // 限制最大位置
  if (add1 > 400) {
    add1 = 400;
    btnRight.classList.add("disabled", "no-dong");
  } else {
    btnRight.classList.remove("disabled", "no-dong");
  }
  // 确保左按钮可用
  btnLeft.classList.remove("disabled", "no-dong");

  imgs.forEach((img, index) => {
    const space = -400 + index * 100;
    img.style.transform = `translateX(${space + add1}vw)`;
  });
  document.body.style.backgroundImage = `url(https://cdn.jsdelivr.net/gh/axber123/image-host@main/img/p${add1 / 100 + 1}.jpg)`;
}

function imaMoveLeft() {
  add1 -= 100;
  // 限制最小位置
  if (add1 < 0) {
    add1 = 0;
    btnLeft.classList.add("disabled", "no-dong");
  } else {
    btnLeft.classList.remove("disabled", "no-dong");
  }
  // 确保右按钮可用
  btnRight.classList.remove("disabled", "no-dong");

  imgs.forEach((img, index) => {
    const space = -400 + index * 100;
    img.style.transform = `translateX(${space + add1}vw)`;
  });
  document.body.style.backgroundImage = `url(https://cdn.jsdelivr.net/gh/axber123/image-host@main/img/p${add1 / 100 + 1}.jpg)`;
}
