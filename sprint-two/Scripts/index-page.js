

//existing comment array

var dataComment = [];

function fetchComments(){
  const data = localStorage.getItem("cards")
  if(data !== null){
    dataComment = JSON.parse(data)

  }
}


 /***********function for handling the comment stracture ****************/
 let arrticle = document.querySelector("#comment-storage");

function createEl(comments) {
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
  
  return arrticle;
}


  /***********adding to the dome  ****************/


function dataComments(commentss) {
  arrticle.innerHTML = "" // Empty the content of #comment-storage/Empty list of comments displayed

  let card= document.createElement('div')
  card.innerHTML="";
    for (let i = 0; i < commentss.length; ++i) {
      card= createEl(commentss[i])
    }
  }
    

 /***********handesubmit on click and get the name and the comment iput and check if there is a value ****************/

   
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
  dataComment.unshift(recentComment);
  
  }
  savecart(recentComment);
}


  
form.reset();
form.addEventListener("submit", handleSubmit);
fetchComments();
dataComments(dataComment);

 /***********save to local storage/saving to local storage ****************/

  //saving to local storage 

function savecart(comment) {
    let cards;
    if (localStorage.getItem('cards')===null) {
        //cards = [{name:"simret", body:"..."}, ...]
        cards = [...dataComment]; // Copy the content/items of dataComment array into cards
    }else{
          cards = JSON.parse(localStorage.getItem('cards'));
    }
    cards.push(comment)

    localStorage.setItem("cards", JSON.stringify(cards));
    dataComments(cards);

 console.log(cards)
            console.log(typeof(cards));
            console.log(dataComment)
    }
       

    // using an api responce 

function displayCommentss(response) {
  console.log(response);

  const card = document.createElement('div')
  card.innerHTML = "";
  for (let i = 0; i < 4; ++i) {

    createEl(response.data[i]);
    console.log(response);
  }

}
let apiUrl = " https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(displayCommentss);

displayCommentss();



 
