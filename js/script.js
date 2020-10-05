function navbar(){
    var topics = ['home', 'world','politics','magazine', 'technology','science','health','sports','arts','fashion','food','travel'];
    var header = document.createElement('header');
    var nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar navbar-expand-xl navbar-dark bg-dark');
   
    var navHeader = document.createElement("a");
     navHeader.className= "navbar-brand";
     navHeader.setAttribute("onclick", "getNews('home')");
     navHeader.innerText = "New York Times";
   
     var button = document.createElement("button");
     button.className=  "navbar-toggler";
     button.type= "button";
     button.setAttribute("data-toggle", "collapse");
     button.setAttribute("data-target", "#navbarCollapse");
     button.setAttribute("aria-controls", "navbarCollapse");
     button.setAttribute("aria-expanded", "false");
     button.setAttribute("aria-label", "Toggle navigation");
   
     var span = document.createElement("span");
     span.setAttribute("class", "navbar-toggler-icon");
     button.appendChild(span);
   
     var navbarDiv = document.createElement("div");
     navbarDiv.setAttribute("class", "collapse navbar-collapse");
     navbarDiv.setAttribute("id", "navbarCollapse");
   
     var ul = document.createElement("ul");
     ul.setAttribute("class", "navbar-nav ");
   
   for(let i = 0; i< topics.length; i++){
     
     var li = document.createElement("li");
     li.setAttribute("class", "nav-item text-uppercase");
     li.id = topics[i];
   
     var a = document.createElement("a");
     a.setAttribute("class", "nav-link");
     a.setAttribute("onclick", "getNews('"+topics[i]+"')");
     a.innerText = topics[i];
     li.appendChild(a);
     ul.appendChild(li);
   }
     
     navbarDiv.appendChild(ul);
     nav.append(navHeader, button, navbarDiv);
     header.appendChild(nav);
     return header;
   }
   

function container() {
  var container = document.createElement("div");
  container.className = "container";
  container.id = "data";
  return container;
}

async function getNews(type) {
  try {
    var data = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/" +
        type +
        ".json?api-key=qLTWAwQAbc8JsIm5XX5GlHJhlkGAOqOl"
    );
    if (data.status == 200 && data.statusText == "OK") {
      var json = await data.json();
      createCard(type, json);
    }
  } catch (err) {
    console.log(err);
  }
}

async function createCard(type, json) {
  document.getElementById("data").innerHTML = "";
  var container = document.getElementById("data");
  document.getElementById(type);

  var rowDiv = document.createElement("div");
  rowDiv.className = "row";

  for (let i = 0; i < json.results.length; i++) {
    var col = document.createElement("div");
    col.className = "col-12 colStyle";
    var card = document.createElement("div");
    card.className = "card";
    var row = document.createElement("div");
    row.className = "row ";

    var content = document.createElement("div");
    content.className = "col-lg-8 col-sm-12";

    var bodyContent = document.createElement("div");
    bodyContent.className = "card-body";
    var section = document.createElement("h4");
    section.setAttribute("class", "card-title text-uppercase section-card");
    section.innerHTML = json.results[i].section;

    var title = document.createElement("h5");
    title.className = "card-title titlecard";
    title.innerHTML = json.results[i].title;

    var createdDate = document.createElement("p");
    createdDate.className = "card-text  date-card";

    var date = document.createElement("small");
    date.className = "text-muted";
    date.innerText = formatDate(json.results[i].created_date);

    createdDate.appendChild(date);

    var abstract = document.createElement("p");
    abstract.className = "card-text abstract-card";
    abstract.innerText = json.results[i].abstract;

    var redirectLink = document.createElement("a");
    redirectLink.className = "card-link continueReading";
    redirectLink.href = json.results[i].short_url;
    redirectLink.innerText = "Continue Reading";
    redirectLink.target = "_blank";

    bodyContent.append(section, title, createdDate, abstract, redirectLink);
    content.appendChild(bodyContent);

    var imageDiv = document.createElement("div");
    imageDiv.className = "col-lg-4 col-sm-12";

    var img = document.createElement("img");
    img.className = "card-img   imgStyle";
    img.src = json.results[i].multimedia[0].url;
    imageDiv.appendChild(img);

    
    row.append(content, imageDiv);
    card.append(row);
    col.append(card);
    rowDiv.append(col);
  }
  container.append(rowDiv);
}

function formatDate(dateString) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let newDate = new Date(dateString);
  let date = months[newDate.getMonth()];
  +"," + newDate.getFullYear();
  console.log(date);
  return date;
}

document.body.append(navbar(),container());
window.onload = (event) => {
  getNews("home");
};
