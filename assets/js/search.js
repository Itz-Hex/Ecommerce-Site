// Get the input field
var input = document.getElementById("searchInput");
console.log(input);

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    search(input.value);
  }
});

function search(input) {
    let filter = input.toUpperCase();
    let cards = document.getElementsByClassName("card");

    for (i = 0; i < cards.length; i++) {
        a = cards[i].getElementsByTagName("h1")[0];
        console.log(a);
        txtValue = a.textContent || a.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
        } else {
          cards[i].style.display = "none";
        }
      }
}
