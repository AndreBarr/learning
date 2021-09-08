const search = document.querySelector("#search");
const matchList = document.querySelector("#match-list");

// Search states.json and filter it
const searchStates = async (searchText) => {
  const res = await fetch("../data/states.json");
  const states = await res.json();

  const matches = states.filter((state) => {
    if (searchText.length > 0) {
      // Using RegExp (^ means starts with and gi is for global and case insensitive)
      const regex = new RegExp(`^${searchText}`, "gi");
      return state.name.match(regex) || state.abbr.match(regex);

      //   //   Way I first did it
      //   return (
      //     state.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
      //     state.abbr.toLowerCase().startsWith(searchText.toLowerCase())
      //   );
    }
  });

  outputHtml(matches);
};

// Show results in HTML
const outputHtml = (matches) => {
  const html = matches
    .map(
      (match) =>
        `<div class="card card-body mb-1">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
    </div>`
    )
    .join("");

  matchList.innerHTML = html;

  //   // Way I First did it (No styling)
  //   let output = "";
  //   matches.forEach((state) => {
  //     output += `<ul>
  //         <h4>${state.name} (${state.abbr}) ${state.capital}</h4>
  //         <p>Lat: ${state.lat} / Long: ${state.long}</p>
  //         </ul>`;
  //   });
  //   matchList.innerHTML = output;
};

search.addEventListener("input", () => {
  searchStates(search.value);
});
