const search = document.getElementById("search");

search.addEventListener("input", function() {
  let value = search.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h2").innerText.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

function download(link) {
  window.open(link, "_blank");
}