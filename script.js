const url = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

fetch(url)
  .then((response) => response.json())
  .then((response) => {

    let nav = document.getElementById("nav");
    let cards = document.getElementById("cards");

    response.forEach(element => {
      let li = document.createElement("li");
      li.className = "nav-item"
      let a = document.createElement("a");
      a.className = "nav-link"
      a.innerText = a.id = element.name;
      a.href = "#"
      li.append(a);
      nav.append(li);
    });

    
    display(element.products[0]);

    function display(products){
    let cards = document.getElementById("cards");
    cards.innerHTML = "";
    for (let index = 0; index < products.length; index++) {
      let div = document.createElement("div");
      div.className = "col-lg-4 col-sm-6 portfolio-item mb-4";
      let card = document.createElement("div");
      card.className = "card h-100";
      let img =document.createElement("img");
      img.className = "card-img-top";
      img.src = products[index].image;
      card.append(img);

      let cBody = document.createElement("div");
      let cTitle = document.createElement("h4");
      hr.innerText = products[index].name;
      let cText = document.createElement("p");
      cText.innerText = products[index].description;
      let cPrice = document.createElement("b");
      cPrice.innerText = products[index].price;
      cBody.append(cTitle);
      cBody.append(cText);
      cBody.append(cPrice);
      card.append(cBody);

      
      div.append(card);
      cards.append(div);
    }
    }

    
    //Crea un nuevo boton
    function newBtn(name, click) {
      let btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-link " + name;
      btn.innerText = name[0].toUpperCase() + name.slice(1);
      btn.addEventListener("click", click);
      return btn;
    }

  });