
article = document.querySelector(".show-ticket");
let h3 = document.createElement("h3");
h3.classList.add("shows__title");
document.querySelector(".show-ticket").appendChild(h3);
h3.innerHTML = `Shows`;
let div = document.createElement("div");
div.classList.add("main-holder");
div.innerHTML = ` <div class="main-subtitle">DATES</div><div class="main-subtitle">VENUE</div><div class="main-subtitle">LOCATION</div>`;
document.querySelector(".show-ticket").appendChild(div);
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

  let cont = document.createElement("div");
  cont.setAttribute("id", "shows");
  document.querySelector(".show-ticket").append(cont);

  let showlist = document.createElement("ul");
  showlist.classList.add("show-list");
  document.querySelector("#shows").appendChild(showlist);

  showlist.innerHTML = `<div class= "title-cont"><span class="show-list__title">DATES</span></div><br/><div class="show-list__item show-list__item--bold">
  ${DATES}</div><div class= "title-cont"> <span class="show-list__title">VENUE</span></div><br/><div class="show-list__item">${VENUE}</div><div  class= "title-cont">
  <span class="show-list__title">LOCATION</span></div><br/><div class="show-list__item" >${LOCATION}</div>`;

  let button = document.createElement("button");
  button.classList.add("button");

  textbtn = document.createTextNode("BUY TICKETS");
  button.appendChild(textbtn);
  document.querySelector("#shows").appendChild(button);

  let elem = document.createElement("hr");
   
  elem.setAttribute("hr", "50%");
  document.querySelector("#shows").appendChild(elem);

  console.log(cont);
}
bigCont=document.createElement("div");
bigCont.setAttribute("id",'container-big');
document.querySelector(".show-ticket").appendChild(bigCont);

document.getElementById("container-big").appendChild(h3);
let small_con = document.createElement('div');
small_con.classList.add("container-small");
document.getElementById('container-big').appendChild(small_con);
small_con.appendChild(div);
small_con.appendChild(document.querySelector('#shows'));