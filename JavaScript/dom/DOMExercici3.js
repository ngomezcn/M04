function DOMExercici3() {
  const titles = document.querySelectorAll(".txt_title");
  const texts = document.querySelectorAll(".sec_title");

  titles.forEach((title) => {
    title.style.backgroundColor = "red";
  });

  texts.forEach((title) => {
    title.style.backgroundColor = "green";
  });
}
