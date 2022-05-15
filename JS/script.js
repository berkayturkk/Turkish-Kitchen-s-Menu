// Menu dizisi olusturulmasi

const menu = [
{
    id: 1,
    title: "Manti",
    category: "Anatolia",
    price: 54.00,
    img:
      "https://i.lezzet.com.tr/images-xxlarge-secondary/manti-nasil-pisirilir-9853d099-517c-4e89-be1c-960b703dcb8e.jpg",
    desc: `It is one of the dishes unique to Turkish cuisine, which is made by cutting thinly rolled dough into a rectangular shape and adding ground beef into it.`,
},
{
    id: 2,
    title: "Baklava",
    category: "Anatolia",
    price: 61.00,
    img:
      "https://www.karakoygulluoglu.com/assets/img/products/600.02.002.025/big%20stil.jpg",
    desc: `It is made from thinly rolled yufka and is one of the most famous desserts of Turkish cuisine. Walnuts, pistachios and cream are placed between the dough.`,
},
{
    id: 3,
    title: "Lahmacun",
    category: "Anatolia",
    price: 20.00,
    img:
      "https://imgrosetta.mynet.com.tr/file/11942326/11942326-1200x675.jpg",
    desc: `It is a food made by thinly opening the amur and topped with ingredients such as minced meat, parsley, onion, black pepper, garlic, and red pepper.`,
},
{
    id: 4,
    title: "Olive Oil Leaf Wrap",
    category: "Aegean",
    price: 41.00,
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2014/07/zeytinyagli-yaprak-sarmasi-yemekcom.jpg",
    desc: `Pilaf is made with bulgur or rice. The interior material varies according to the region.`,
},
{
    id: 5,
    title: "Stuffed Artichokes",
    category: "Aegean",
    price: 50.00,
    img:
      "https://www.yilmazmandira.com/wp-content/uploads/2020/08/enginar-dolmas%C4%B1-1.jpg",
    desc: `Stuffed artichokes are stuffed with olive oil, and the stuffed artichokes are cooked in water with lemon. Stuffed artichokes are a delicacy that an eater can never forget with both its taste and appearance.`,
},
{
    id: 6,
    title: "Shambali",
    category: "Aegean",
    price: 8.50,
    img:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/5ec92fbe7af50710c8ceed3c.jpg",
    desc: `Yogurt, egg, flour and semolina are mixed and poured into the tray, almonds are arranged on it and sherbet is poured. Known as Şambaba in different regions of Turkey, this dessert is a gift from İzmir to Turkish cuisine.`,
},
{
    id: 7,
    title: "Anchovy Rice",
    category: "Blacksea",
    price: 55.00,
    img:
      "https://kulturveyasam.com/wp-content/uploads/2017/04/02-hamsili-pilav.jpg",
    desc: `This dish, where anchovies, identified with the Black Sea, meet with rice, is one of the legendary flavors. The fame of rice pilaf hidden among crispy anchovies has spread all over Turkey.`,
},
{
    id: 8,
    title: "Kale Wrap",
    category: "Blacksea",
    price: 46.00,
    img:
      "https://kulturveyasam.com/wp-content/uploads/2017/04/05-kara-lahana-sarmas%C4%B1.jpg",
    desc: `Stuffed stuffing, which is among the favorite dishes of everyone from seventy to seventy, is another delicious dish with kale.`,
},
{
    id: 9,
    title: "Laz Pastry",
    category: "Blacksea",
    price: 29.00,
    img:
      "https://kulturveyasam.com/wp-content/uploads/2017/04/08-laz-bo%CC%88reg%CC%86i.jpg",
    desc: `This famous Black Sea dessert is prepared by laying a light pudding between the layers of the pastry. Laz pastry is very popular with tea and coffee, after meals, as an irrefutable dessert at any time of the day.`,
},

]

// Elementlerin secilmesi

const btnDOM = document.querySelector(".btn-container");
const menuDOM = document.querySelector(".section-center");

// Buton elementi olusturulmasi

const createBtn = function(){
    let buttons = `
        <button class="btn btn-outline-dark btn-item" id="All">
        All
        </button>
        <button class="btn btn-outline-dark btn-item" id="Anatolia">
        Anatolia
        </button>
        <button class="btn btn-outline-dark btn-item" id="Aegean">
        Aegean
        </button>
        <button class="btn btn-outline-dark btn-item" id="Blacksea">
        Black Sea
        </button>     
    `

    btnDOM.innerHTML = buttons;
}

createBtn();

// Yiyeceklerin html kodunun olusturulmasi

function createFoods(food){
    let html = `
      <div class="menu-items col-lg-6 col-sm-12">
        <img class="photo" src="${food.img}" alt="${food.title}">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${food.title}</h4>
            <h4 class="price">${food.price}</h4>
          </div>
          <div class="menu-text">${food.desc}</div>
        </div>
      </div>  
    `
    return html
  }




// Butun yiyeceklerin listesinin olusturulmasi

const listAllFoods = () => {
    let allFoods="";
  
    menu.map(item => {
      allFoods += createFoods(item)
    })
    menuDOM.innerHTML = allFoods;
  }

// Default olarak sayfaya menu yuklenmesi 

document.addEventListener("DOMContentLoaded",listAllFoods);



// Anadolu yiyeceklerin listesinin olusturulmasi

const listAnatoliaFoods = function(){
    let anatoliaFoods = "";

    menu.map(item => {
        if(item.category==="Anatolia"){
            anatoliaFoods += createFoods(item);
        }
    })

    menuDOM.innerHTML = anatoliaFoods;
}

document.querySelector("#Anatolia").addEventListener("click",listAnatoliaFoods);

// Ege yiyeceklerinin olusturulmasi

function listAegeanFoods() {
    let aegeanFoods = "";

    menu.map(item => {
        if(item.category==="Aegean"){
            aegeanFoods += createFoods(item);
        }
    });

    menuDOM.innerHTML = aegeanFoods;
}

document.querySelector("#Aegean").addEventListener("click",listAegeanFoods);

// Karadeniz yiyeceklerinin olusturulmasi

const listBlackseaFoods = function(){
    let blackseaFoods = "";

    menu.map(item => {
        if(item.category==="Blacksea"){
            blackseaFoods += createFoods(item);
        }
    })

    menuDOM.innerHTML = blackseaFoods;
}

document.querySelector("#Blacksea").addEventListener("click",listBlackseaFoods);

// All a tiklandiginde tum yiyeceklerin yuklenmesi

document.querySelector("#All").addEventListener("click",listAllFoods);








