
document.addEventListener("DOMContentLoaded", function () {
    let paragraph = document.getElementById("text");
    if (paragraph) {
      paragraph.textContent = "This is really cool!";
    } else {
      console.error("The paragraph element with id 'text' was not found.");
    }
  });
  