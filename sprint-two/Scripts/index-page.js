

let dataComment = [

];
function createEl(comments) {
  let arrticle = document.querySelector("#comment-storage");
  let section = document.createElement("div");
  section.classList.add("comment-section");
  document.querySelector("#comment-storage").prepend(section);
  let given = document.createElement("div");
  given.classList.add("data-intro");
  document.querySelector(".comment-section").prepend(given);
  let avator = document.createElement("div");
  avator.classList.add("new-avatar");
  given.appendChild(avator);
  let onlydata = document.createElement("div");
  onlydata.classList.add("only-data");
  given.appendChild(onlydata);
  let datax = document.createElement("div");
  datax.classList.add("data-x");
  onlydata.appendChild(datax);
  let dataname = document.createElement("h3");
  dataname.classList.add("data__name");
  dataname.innerText = comments.name;
  datax.appendChild(dataname);
  let datadate = document.createElement("p");
  datadate.classList.add("data__date");
  datadate.innerText =  new Date().toLocaleDateString()
  datax.appendChild(datadate);
  let databody = document.createElement("p");
  databody.classList.add("data__text");
  databody.innerText = comments.body;
  onlydata.appendChild(databody);
  const imageArray = ["<img src=''>"];
  const ranNum = Math.floor(Math.random() * imageArray.length);
  avator.innerHTML = imageArray[ranNum];
 

 
  let cards;
  if (localStorage.getItem('cards')===null){
    cards=[];
   } else{
cards=JSON.parse(localStorage.getItem('cards'));
   }
   cards.push(comments);
   localStorage.setItem("cards",JSON.stringify(cards));
    console.log(typeof(cards));
  
  return arrticle;
}
//  function getComments(){
//   for (let i = 0; i < dataComment.length; ++i) {
//     createEl(dataComment[i])
// }

//  }

function displayComments() {

const card= document.createElement('div')
card.innerHTML="";
   for (let i = 0; i < dataComment.length; ++i) {

   card= createEl(dataComment[i])
  
   }
   
  }


function handleSubmit(event) {
  event.preventDefault();

  let recentComment = {};

  recentComment.name = event.target.name.value;

  recentComment.body = event.target.comment.value;
  
  if (recentComment.name === "" ||  recentComment.body=== "") {
    document.getElementById("comment").style.borderColor = "red";
    document.getElementById("name").style.borderColor = "red";
  
    return false;
  } else {
    if (recentComment.name  !== "" || recentComment.body  !== "") {
      document.getElementById("comment").style.borderColor = "black";
      document.getElementById("name").style.borderColor = "black";
   
    }
    
    form.reset();
  dataComment.push(recentComment);
  
  }
  displayComments();

  

}


  
  
form.reset();
 form.addEventListener("submit", handleSubmit);







