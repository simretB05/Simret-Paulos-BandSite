let h3 = document.createElement("h3");
h3.classList.add("shows__title");
document.querySelector(".show-ticket").appendChild(h3);
h3.innerHTML = `Shows`;

const shows = [
  {
    DATES: "Mon Sept 06 2021",
    VENUE: "Ronald Lane",
    LOCATION: "San Francisco,CA",
  },
  {
    DATES: "Tue Sept 21 2021",
    VENUE: "Pier 3 East",
    LOCATION: "San Francisco,CA",
  },
  {
    DATES: "Fri Sept 15 2021",
    VENUE: "View Lounge",
    LOCATION: "San Francisco,CA",
  },
  {
    DATES: "Sat  Nov 06 2021",
    VENUE: "Hyatt Agency",
    LOCATION: "San Francisco,CA",
  },
  {
    DATES: "Fri  Nov 26 2021",
    VENUE: "Moscow Center",
    LOCATION: "San Francisco,CA",
  },
  {
    DATES: "wed  Dec 15 2021",
    VENUE: " Press club",
    LOCATION: "San Francisco,CA",
  },
];

for (let i = 0; i < shows.length; i++) {
  let DATES = shows[i].DATES;

  let VENUE = shows[i].VENUE;

  let LOCATION = shows[i].LOCATION;
  article = document.querySelector(".show-ticket");

  let convert = document.createElement("div");
  convert.setAttribute("id", "concerts");
  document.querySelector(".show-ticket").append(convert);
  let newdiv = document.createElement("div");
  newdiv.setAttribute("id", "shows-venue");
  document.querySelector("#concerts").append(newdiv);
  let showlist = document.createElement("ul");
  showlist.classList.add("shows__list");
  document.querySelector("#shows-venue").appendChild(showlist);
  let listitem = document.createElement("li");
  listitem.classList.add("list__item");

  listitem.innerHTML = `<li class="shows-list__item">
  <Span class="shows-list__title shows-list__item--completed">DATES</span><br/>${DATES}</li>
  <li class="shows-list__item"><Span class="shows-list__title shows-list__item--completed">VENUE</span>
<br/>${VENUE}</li><li class="shows-list__item">
<Span class="shows-list__title shows-list__item--completed">LOCATION</span><br/>${LOCATION}</li>
 <button class="button">BUY TICKETS</button>`;
  document.querySelector(".shows__list").appendChild(listitem);

  // let elem = document.createElement("hr");
  // elem.setAttribute("width", "100px");
  // document.showlist.appendChild(elem);
}
// const completeTask = (e) => {
//   e.preventDefault();
//   //classList.toggle will check if the class exists, and if so remove it. If it doesn't exist, it will add it
//   e.target.classList.toggle("show-list__item--completed");
// };
