const navbar=document.querySelector(".navbar");  //navbar variabels
const servisesSection=document.querySelector(".servises");
const coursListSection=document.querySelector(".courses");
const coursViewSection=document.querySelector(".course-overview");
const FQAsSection=document.querySelector(".FQAs");
// modal variabels


const products = Array.from(document.querySelectorAll(".card"));
const myModal = document.querySelector(".my-modal");

const modalImg = document.querySelector('.modal-img');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const nextImg=document.querySelector(".right");
const prevImg=document.querySelector(".left");
const close=document.querySelector(".close");











const currentPage=window.location.pathname ;

//  navbar color change code (start)

if(currentPage.includes("index.html")) 
 {
  console.log('hello');
  window.onscroll=()=>{

    if (window.scrollY>= servisesSection.offsetTop){
      navbar.classList.remove("bg-white");
      navbar.classList.add("nav-onscrol");

    }
    else{
        navbar.classList.add("bg-white");
    }
  }
}
  else if(currentPage.includes("courseList.html"))
  {
   
       window.onscroll=()=>{

    if (window.scrollY>= coursListSection.offsetTop){
      navbar.classList.remove("bg-white");
      navbar.classList.add("nav-onscrol");

    }
    else{
        navbar.classList.add("bg-white");
    }
  }
  }
  else if(currentPage.includes("course.html")){
          window.onscroll=()=>{

    if (window.scrollY>= coursViewSection.offsetTop){
      navbar.classList.remove("bg-white");
      navbar.classList.add("nav-onscrol");

    }
    else{
        navbar.classList.add("bg-white");
    }
  }
  }
    else if(currentPage.includes("FQAs.html")){
          window.onscroll=()=>{

    if (window.scrollY>= FQAsSection.offsetTop){
      navbar.classList.remove("bg-white");
      navbar.classList.add("nav-onscrol");

    }
    else{
        navbar.classList.add("bg-white");
    }
  }
  }

// end

// modal code (start)





const cards = []; 
let currentCardIndex=0;
products.forEach((product,index) => {
   const img = product.querySelector("img").getAttribute("src");
   const title = product.querySelector(".card-title").textContent;
   const text = product.querySelector(".card-text").textContent;

   const card = {
     cardImg: img,
     cardTitle: title,
     cardText: text,
   };

   cards.push(card); 
   product.addEventListener("click",()=>{
    currentCardIndex=index;
  modalImg.setAttribute("src",card.cardImg);

  modalTitle.innerHTML=card.cardTitle;

modalText.innerHTML=card.cardText;

  myModal.classList.add("show-modal");

})
  
});



close.addEventListener("click",()=>{
  myModal.classList.remove("show-modal");
})

nextImg.addEventListener("click",()=>{
   currentCardIndex++;
   if(currentCardIndex >=cards.length)
    currentCardIndex=0;
   const card = cards[currentCardIndex];

  modalImg.setAttribute("src", card.cardImg);
  modalTitle.innerHTML = card.cardTitle;
  modalText.innerHTML = card.cardText;



})

prevImg.addEventListener("click",()=>{
   currentCardIndex--;
   if(currentCardIndex<=cards.length)
    currentCardIndex=cards.length;
   const card = cards[currentCardIndex];

  modalImg.setAttribute("src", card.cardImg);
  modalTitle.innerHTML = card.cardTitle;
  modalText.innerHTML = card.cardText;



})








