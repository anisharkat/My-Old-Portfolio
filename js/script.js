var typed = new Typed(".typing",{
    strings : ["Front-End Developer" ,"Back-End Developer" , "Front-End Developer" ],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
const nav = document.querySelector(".nav");
navList = nav.querySelectorAll("li")
totalNavList = navList.length;
for (let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a")
    a.addEventListener("click" , function(){
        for (let j=0; j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
    })
}
let navItems = document.querySelectorAll('ul > li > a');
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    let scrollHeight = window.pageYOffset;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop / 1.1 <= scrollHeight) {
            for (let j = 0; j < navItems.length; j++) {
                navItems[j].classList.remove('active');
            }
            navItems[i].classList.add('active');
        }
    }
}