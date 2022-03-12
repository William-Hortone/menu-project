const button = document.querySelector('.button');
const navbar = document.querySelector("ul");
const burger = document.querySelector(".burger");
const themeMode = document.getElementById('icon_mode');

button.addEventListener( 'click', (e) =>{
    console.log("bonjour")
    navbar.classList.toggle('show_nav');
    burger.classList.toggle('show_nav');
})

themeMode.addEventListener('click', (e) => {
    
    document.body.classList.toggle('dark_mode');

      if(document.body.classList.contains('dark_mode'))
        themeMode.src ="./images/dark1.png";
    
      else
        themeMode.src ="./images/light.png";
   
})
 