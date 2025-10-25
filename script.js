var arr = [
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Animals of town",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "the crowd of city",
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "fruits of planet",
    image:
      "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "orange peeled",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "web design",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "apple juice",
    image:
      "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showTheCards() {
  var clutter = "";
  arr.forEach(function (obj) {
    const id = obj.name.toLowerCase().replace(/\s+/g, "-");
    clutter += `<div class="box text-zinc-900" id="${id}">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption text-zinc-900">Lorem ipsum </div>
    </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}

function handleSearch() {
  var input = document.querySelector("#searchinput");
  var suggestionBox = document.querySelector(".searchdata");

  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });
  input.addEventListener("input", function (obj) {
    var filteredArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    var clutter = "";
    filteredArray.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`;
    });
    suggestionBox.style.display = "block";
    suggestionBox.innerHTML = clutter;

    const suggestions = suggestionBox.querySelectorAll(".res");
    suggestions.forEach((element, index) => {
      element.addEventListener("click", function () {
        const name = filteredArray[index].name;
        console.log(name);

        const cardId = name.toLowerCase().replace(/\s+/g, "-");
        const card = document.getElementById(cardId);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });

          // Highlight card with red glow
          card.animate(
            [
              { boxShadow: "0 0 0 rgba(230,0,35,0)" },
              { boxShadow: "0 0 40px rgba(230,0,35,0.8)" }, // wider & stronger shadow
              { boxShadow: "0 0 0 rgba(230,0,35,0)" },
            ],
            { duration: 5000 }
          );
        }
        suggestionBox.style.display = "none";
        document.querySelector(".overlay").style.display = "none";
      });
    });

    document.addEventListener("click", function (e) {
      if (e.target.id !== "searchinput" && !e.target.closest(".searchdata")) {
        document.querySelector(".searchdata").style.display = "none";
      }
    });
  });
}

showTheCards();
handleSearch();
