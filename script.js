let button = document.getElementById("go");
button.addEventListener("click", checkTs);
function checkTs() {
  let result = 0;
  let a1 = document.getElementById("q1").value;
  if (a1 === "40") {
    result++;
  }
  let a2 = document.getElementById("q2").value;
  if (a2 === "28") {
    result++;
  }
  alert(
    "Поздравляю! Ты завершил тест. Последние два примера дались нелегко? Посмотри, сколько из них ты решил правильно: " +
      result
  );
}
