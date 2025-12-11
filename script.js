let redCount = 0;
let blueCount = 0;

document.getElementById("redBtn").addEventListener("click", () => {
  redCount++;
  document.getElementById("message").innerText =
    "赤ボタンを " + redCount + " 回押しました";
});

document.getElementById("blueBtn").addEventListener("click", () => {
  blueCount++;
  document.getElementById("message").innerText =
    "青ボタンを " + blueCount + " 回押しました";
});

document.getElementById("YellowBtn").addEventListener("click", () => {
  yellowCount++;
  document.getElementById("message").innerText =
    "黄色ボタンを " + blueCount + " 回押しました";
});