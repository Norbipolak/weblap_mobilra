/*
<footer class="bg-black p-xl">
        <div class="container-lg grid-col-3 center-text uppercase">
            <div class="color-white">
                 <h2>about</h2>

                 <ul>
                    <li>
                        <a href="#">the company</a>
                    </li>
                    <li>
                        <a href="#">faq</a>
                    </li>
                    <li>
                        <a href="#">privacy policy</a>
                    </li>
                 </ul>
            </div>
            <div class="color-white">
                <h2>locations</h2>

                <ul>
                   <li>
                       <a href="#">san francisco</a>
                   </li>
                   <li>
                       <a href="#">newport beach</a>
                   </li>
                   <li>
                       <a href="#">sun city</a>
                   </li>
                </ul>
            </div>
            <div class="color-white">
                <h2>follow along</h2>

            </div>
        </div>
    </footer>

itt tartottunk múlt órán, hogy ezt a footer-t csináltuk, már csak az van hátra, hogy az utolsó résznél, tehát a grid-col-3 
harmadik részébe belerakjuk a facebook, instagram és a tiktok linkeket
a follow along alatt meg ul li-kben belerakjuk ezeket az ikonokat 

így néz ki az utolsó rész 
<div class="color-white">
    <h2>follow along</h2>
    <ul class="flex jc-space-between" style="max-width: 200px;margin:auto;">
        <li>
            <a class="white-link" href="#">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li>
            <a class="white-link" href="#">
                <i class="fa-brands fa-facebook"></i>
            </a>
        </li>
         <li>
            <a class="white-link" href="#">
                <i class="fa-brands fa-tiktok"></i>
            </a>
        </li>
    </ul>
</div>
<ul class="flex jc-space-between">
azért kellett megadni az ul-nek, hogy legyen flex, mert ezek alapból egymás mellett alatt helyezkednek el egy sima ul li-ben 
és az oldalon úgy volt, hogy egymás mellett ezért, kellett a flex, meg a space-evenly, hogy valahogy elhelykedjenek egymáshoz képest 
horizontálisan, de túl messze vannak egymástól, ezért az ul-nek még adunk html-ben style-val egy width-et, hogy közelebb legyenek
és meg egy margin:auto-t is!!! 
style="width: 200px;margin:auto;" 
-> 
<ul class="flex jc-space-between" style="max-width: 200px;margin:auto;">

Ezt jobb lenne megcsinálni class-okkal, de nekünk nincsenek ilyen class-ok ezért most ez így marad style-val 
Azért jobb itt a max-width, mint a sima width, mert az hogyha már nem férne ki, akkor az 100%-os lesz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Amit most meg kell oldani az, hogy responsive legyen!
Keresünk egy ilyen menüt -> <i class="fa-solid fa-bars"></i>
Ennek az lesz a lényege, hogy akkor fog feltünni, hogyha már nem fér ki a menu, ami a nav-ban található 

Az oldalon is ha már nem férnek ki, hogy home, pages, articles stb. akkor azt már eltünteti és megjelenik ez a valami bars-os ikon 

a center-nav-on belül vannak az ul-ek és arra csinálunk egy media-screen-t a style-ban 
@media screen and (max-width: 960px) {
    .center-nav ul {
        display: none;
    }
}
így 960px-nél eltünnek azok a dolgok, amik vannak az ul-ben home, pages stb. de itt ebben a .nav-center-ben nekünk van egy img is 
ami nem tünik el és a baloldalra kerül középről 
erre kell azt mondani, hogy a .center-nav legyen justify-content: center!!! 
-> 
@media screen and (max-width: 960px) {
    .center-nav {
        justify-content: center;
    }
    
    .center-nav ul {
        display: none;
    }
}
baloldalt meg jelenjen meg egy hamburger menü 
ezt meg a nav-ba bele, a .center-nav felé csinálunk egy ilyen div-et, hogy .mobile-menu, amibe belerakjuk ezt a linket 
-> 
<nav>
    <div class="mobile-menu">
        <i class="fa-solid fa-bars"></i>
    </div>

<div class="center-nav">
css-ben 
-> 
.mobile-menu {
    width: 40px;
    height: 40px;
    font-size: 40px;
}
most ugye nincsen benne a .center-nav-ba ez a dolog és lejjebb van, ezért belerakjuk a .center-nav-ba 
<nav>
    <div class="center-nav">
        <div class="mobile-menu">
            <i class="fa-solid fa-bars"></i>
        </div>

Ilyenkor meg az a probléma, hogy nem jobbra rakja ahova szeretnénk, hanem középre az image mellé 
akkor ez space-between-en marad és akkor ugy lesz, hogy lesz egy keresés ikon a jobb oldalon 
hamburger menu ikon                             image                                       keresés ikon 
mert amugy, most justify-content: center miatt így néz ki 
                                     hamburger ikon image 
minden középen van
a honlapon is csak azért van ott a keresési dolog, hogy meg tudja azt csinálni, hogy space-between, mert ha nincs három akkor nem jó 
modnjuk így sem rossz, mert ha kettő elem van mint most, akkor 
hamburger menu ikon                                                                               image 
de jobb az, hogy az image középen van és akkor fontawesome-ról keresünk egy keresés ikont

itt meg arra, hogy .center-nav justify-content: center arra nem lesz szükség 
@media screen and (max-width: 960px) {
    .center-nav {
        justify-content: center;
    }
    
    .center-nav ul {
        display: none;
    }
}
-> 
@media screen and (max-width: 960px) {
    .center-nav ul {
        display: none;
    }
}
Kerestünk egy search ikon-t és beraktuk egy div-be a .center-nav-nak a legaljára, ugyanugy egy div-be ami megkapta a mobile-menu class-t 
->
<div class="mobile-menu">
    <i class="fa-solid fa-bars"></i>
</div>
.mobile-menu {
    width: 40px;
    height: 40px;
    font-size: 40px;
    display: none;
    cursor: pointer;
}
Meg az nagyon fontos, hogy alapból a mobile menü az display: none legyen tehát ne látszodjon, csak akkor, amikor egy bizonyos szélességre 
összehúzzuk a képernyőt 
de viszont akkor amikor 960px-nél eltünik az ul, akkor a mobile-menu display: block lesz!! 
-> 
@media screen and (max-width: 960px) {
    .center-nav ul {
        display: none;
    }
    .mobile-menu {
        display: block;
    }

és akkor ezzel a menü rész az jól funkciónál, mert 960px-ig ott vannak a dolgok space-evenly-ben 
utána meg eltünnek és megjelenik a hamburger menü ikon meg a keresés ikon és ezek is space-evenly-ben 
960px felett 
-> 
    home    pages   articles                               image                              wholesale     shop    locations
960px alatt 
-> 
    hamburger ikon                                         image                                       keresés ikon 

ami még problematikus, hogyha húzzuk össze, akkor ez ami itt van az ki fog logni a background-image-ből 
    <header>
        <div class="header-marketing">
            <div class="vertical-text uppercase">
                because we love coffee
            </div>
            <div>
                <h2>Quality Coffee delivered to your door</h2>
                <p>
                    Everything we do is a matter of heart, body and soul. Our
                    mission is to provide sustainably souurced, hand-picked, quality
                    coffee
                </p>
                <button class="brown-bordered-btn">we love coffee</button>
            </div>
        </div>
    </header>
mert az image az megy össze, csökken a szélessége és akkor a magassága is, mert ez vw-vel van megadva a magassága 
ezek a dolgok itt a header-ben pedig minden fix méret 

header {
    // height: 30vw; 
    min-height: 30vw;
    background-image: url(../images/menu-header.jpg);
    background-size: 100%;
    background-position: center;
}
itt a headers-ben a sima height helyett lesz egy min-height
Ez azért jó, mert ha kisebben van, akkor a min-height miatt ki tudnak férni a dolgok, ha meg nagyobbon van akkor meg nagyobb lesz, 
kicsit eltávolodik és akkor nagyon meg jól fog kinézni, kicsin meg nem jön ki belöle a szöveg vagy ami benne van 

de viszont ilyenkor, amikor kicsin van, mobilnézeten, akkor teljesen leér a kép aljáig a button ami legalul van, ezért a headers-nek adunk 
egy padding-et!!!!!!!!!!!!!!!!!!!!!!!!!! -> padding: 20px 0;
-> 
header {
    // height: 30vw; 
    min-height: 30vw;
    background-image: url(../images/menu-header.jpg);
    background-size: 100%;
    background-position: center;
    padding: 20px 0;
}

és amikor elérjük a 960px-et akkor felül van nekünk a header-marketing amiben benne vannak ezek a dolgok 
ami egy ilyen grid 
.header-marketing {
    max-width: 350px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 10px;
}
és erre azt mondjuk, hogy display: none, mert ez bőven elég nekünk mobile-menübe ezek a szövegek nem kellenek 
mert ekkora menü elegendő túl sokat helyet foglalna el mobilnézeten 

amit még észrevettünk, hogy felül összemegy, rámegy egymásra a free shipping-es felírat meg a facebook, instagram ikonok
és itt a váltás nem is 960px-en kell mert még ott jó, hanem kisebben 

az a baj, hogy bemennek egymás alá, mert az upper-line at position: relative a két dolog, meg position: absolute a upper-center-text 
meg a social-media-links, mert így tudtuk őket a left-top-right-val elhelyezni 

ezt úgy tudjuk megcsinálni, hogy az upper-line-nak adunk egy magasságot (mert nem férne be egymás alá az upper-center meg a social-media)
megadjuk a az upper-center-nek meg a social-media-nak, hogy relative legyen és akkor bemennek egymás alá, de fontos a szűlőelemnek, 
hogy legyen egy magassága, mert akkor nem férnek bele és ez egy fekete csík és rosszul nézne ki ha nem ebbe lenne benne mindkettő
még fontos, hogy nem müködik itt a height: auto valamiért ezért meg kell adni, hogy height: 80px mondjuk 
->
@media screen and (max-width: 640px) {
    .upper-line {
        height: 80px;
    }

    .upper-line-text {
        position: relative;
        font-size: 14px;
    }

    .social-media-links {
        position: relative;
        margin: auto;
        font-size: 14px;
        right: 0;
    }
}
és a social.media-links-nél kell a margin: auto; is, hogy középen legyen, meg ott még meg volt adva egy right: 15px, ami nem kell 
meg minegyiknél megadunk egy font-size: 14px-t, hogy kisebbek legyenek a betűk kisebb méreten!!! 
most ugye ezt a részt csináltuk meg 
-> 
    <div class="upper-line">
        <div class="upper-line-text">
            free shipping on orders of $35+
        </div>
        <div class="social-media-links color-white">
            <a href="#" class="white-link">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="white-link">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" class="white-link">
                <i class="fa-brands fa-tiktok"></i>
            </a>
        </div>
    </div>

css
.upper-line-text {
    position: absolute;
    text-transform: uppercase;
    color: white;
    right: 0;
    left: 0;
    margin: auto;
    max-width: 300px;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.social-media-links {
    position: absolute;
    right: 15px;
    height: 40px;
    width: 100px;
    line-height: 40px;
    display: flex;
    justify-content: space-evenly;
}

ugye és azért adtunk meg a media screen-ben a .social-links-nek egy margin: auto
mert annak alapból nem volt, nem úgy mint az upper-line-text-nek!! 
*********
ahol meg vannak a grid-es megoldások 
ezt majd a grid.css-ben szerkesztjük
fontos, hogy nem müködik itt a var, meg kell adni px-ben!!!! 
ez a négyoszthatóra, ahol vannak a coffee-bag-ek
-> 
@media screen and (max-width: 960px) {
    .grid-col-4 {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 720px) {
    .grid-col-4 {
        grid-template-columns: 1fr;
    }
}

akkor van egy hármasoszthatónk, ahol van 3 kép (csésze, leaf meg ice-coffee)
egyből be fog menni eggyesbe, amikor a grid-col-4 is 
->
@media screen and (max-width: 720px) {
    .grid-col-4 {
        grid-template-columns: 1fr;
    }

    .grid-col-3 {
        grid-template-columns: 1fr;
    }
}

itt még az lesz a probléma, hogy szinten egy height van megadva (learn-more-box), ami height: 30vw és kimennek belöle a dolgok
learn-more-box {
    height: 30vw;
    display: flex;
    align-items: center;
}

itt az sem müködött, hogy min-height: 30vw 
meg az sem, hogy azt mondjuk neki, mondjuk 540px-en a media screen-vel a .learn-more-box-ra, hogy height: auto és még egy kis padding 
pedig ez is jó, hogy height: auto és még egy kis padding, hogy ne érjenek le teljesen a dolgok az aljára!!!! 
@media screen and (max-width: 640px) {
    itt a többi dolog... 

    .learn-more-box {
        height: auto;
        padding: 15px 0;
    }
}
még így is kilóg egy kicsit a button alul 
az volt a probléma, hogy a 640px az túl kicsi, itt már kilógott a dolog, ezért ezért 720px-re csináljuk a media screen-t 
@media screen and (max-height: 720px) {
    .learn-more-box {
        height: 40vh;
        padding: 15px 0;
    }
}
és akkor így jó, hogy 720px-en adtunk neki egy nagyobb vh-ot vagy lehetne ez vw is 
****
most jön a 6-os grid
ez bemegy 3-asba, ugyanott ahol bemegy a 4-es 2-esbe 960px-en 
@media screen and (max-width: 960px) {
    .grid-col-4 {
        grid-template-columns: 1fr 1fr;
    }

    .grid-col-6 {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

ennél meg bőven elég ha 540px-en bemegy 1-esbe, mert még itt is nagyobbak a képek 
->
@media screen and (max-height: 540px) {
    .grid-col-6 {
        grid-template-columns: 1fr;
    }
}
*********
alul még van egy kis rés és az azért van, mert beállítottunk a body-nak egy margin-bottom-ot, amit most kiveszünk 
body {
    font-family: "Open Sans", sans-serif; 
    margin-bottom: 25px; 
}
-> 
body {
    font-family: "Open Sans", sans-serif; 
}
*************************************************
Hogyan müködik a menü 
ha rákattintunk a hamburger ikonra, akkor lejön a menü és átváltozik egy x-é ha lent van, ha arra rámyegyünk akkor meg bezáródik 

a nav alatt csinálunk egy másik nav-ot, aminek az lesz a class-ja, hogy mobile-nav 
<nav class="mobile-nav">

</nav>
ebbe egy ul-be belerakjuk az összes li-t, ami benne van az első nav-ban 
->
    <nav class="mobile-nav">
        <ul>
            <li><a href="#">
                    home
                    <i class="fa-solid fa-angle-down"></i>
                </a></li>
            <li><a href="#">
                    pages
                    <i class="fa-solid fa-angle-down"></i>
                </a></li>
            <li><a href="#">
                    articles
                    <i class="fa-solid fa-angle-down"></i>
                </a></li>
            <li><a href="#">
                    wholesale
                    <i class="fa-solid fa-angle-down"></i>
                </a></li>
            <li><a href="#">
                    shop
                    <i class="fa-solid fa-angle-down"></i>
                </a></li>
            <li><a href="#">
                    locations
                    <i class="fa-solid fa-angle-down"></i>
                </a></li>
        </ul>
    </nav>

az elöző nav-nak beállítottunk egy stíluskészletet és ez így nem jó azért annak is adunk egy class-t -> desktop-nav
ez volt eddig a stíluskészlete
nav {
    height: 92px;
    display: flex;
    align-items: center;
}
felső nav megkapta ezt a desktop-nav-ot 
<nav class="desktop-nav">
    <div class="center-nav">

és akkor a css-ben ami eddig sima nav volt az lesz a nav amire rendelkezik egy desktop-nav class-vel 
->
nav.desktop-nav {
    height: 92px;
    display: flex;
    align-items: center;
}
és akkor innentől kezdve a mobile-nav-nak már nincsen beállítva semmi!!!!! 
az a nav, amilyik a mobile-nav-val rendelkezik 
nav.mobile-nav {
    height: auto; -> tartalom függ, hogy milyen magas, olyan magas, mint a tartalmának a magassága!!! 
}

nav.mobile-nav ul {
    display: block;
    background-color: white;
}

megadtunk egy heigth: auto-t a nav-on belüli mobile-nav-nak 
és amit itt fontos, hogy a nav-on belüli ul-ek azok display: flex
mert alapesetben ha nagyobb a képernyő, akkor úgy szeretnénk megjeleníteni ezeket az li-ket (a nav-on belüli-eket)
hogy egymás mellett legyenek, de a mostani lenyíthatós menüben pedig úgy, hogy egymás melett legyenek, ezért kell a display: block ide!!!! 
background-color: white; azért kell, mert alapesetben ugye egy kép van alatta és most azt szeretnénk, hogy fehér legyen 

most ezek az elemek bal oldalon vannak és a sima nav li az flex, de csak alig-items: center 
ezért ezt hagyhatjuk, csak a nav.mobile-nav li-re azt mondjuk, hogy justify-content: center;
nav.mobile-nav li {
    text-align: center;
    display: flex;
    justify-content: center;
}
és akkor ez nincsen hatással a sima nav li-re, mert ez így két különböző dolog 
változások!!!!!!!!!!!!!!!!!!!!!!
nem az ul-nek adjuk meg, hogy background-color: white hanem a .mobile-nav-nak 
.mobile-nav ul meg lesz egy width: 80% és margin: auto;
-> 
nav.mobile-nav {
    height: auto;
    background-color: white;
}

nav.mobile-nav ul {
    display: block;
    width: 80%;
    margin: auto;
}

nav.mobile-nav li {
    text-align: center;
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--light-grey);
}
Az oldalon úgy van, hogy mindegyiknek felül van egy vonal -> border-top: 1px solid var(--light-grey);
ezt megadjuk az li-nek!!!! 
lehet, hogy az egész header-nek a hátterét meg kell változtatni mobilban 
a header-nek adunk egy background-color: white-ot és egy background-image none-t  
és akkor fehér lesz a háttér de ezt mégse csináljuk!!!!!!!!!!!!!!!!

header-nek van egy padding: 20px 0-ja és azt szeretnénk, hogy a header és az upper-line között ne legyen padding 
ezért átírjuk a padding: 20px 0;-t padding-bottom: 20px-re!!!! 

csináltunk egy mobile-menu.js-t és adunk id-t a mobile-nav-nak, a desktop-nav-nak és a mobile-menu-nek 
ezeket id alapján lementjük a mobile-menu.js-be 

Ha a mobile-menu-re rákattintunk akkor alapból legyen egy olyan class-je, hogy display-none
<nav class="desktop-nav" id="desktop-nav">
    <div class="center-nav">
        <div class="mobile-menu display-none" id="mobile-menu">
            <i class="fa-solid fa-bars"></i>
        </div>
.display-none {
    display: none;
}

és akkor nem jelenik meg alapból az a menü, csak akkor, hogyha rákattintunk 
ezt csináljuk a mobile-menu.js-ben!!!! 
fontos, hogy be kell script-elni html-ben -> <script src="js/mobile-menu.js"></script>

const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector("#mobile-nav");

mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("display-none");
});

Tehát ha rákattintunk a mobileNav-re (hamburger ikon) akkor megjelenik ez a mobile-nav, ha pedig mégegyszer akkor meg eltűnik 
erre jó a toggle!!!!!!

csinálhatunk ilyen opacity dolgot, hogy megadjuk az egész nav.mobile-nav-nak, hogy opacity:1; 
és akkor egy keyframes-vel pedig csinálunk egy opacity:0-ból egy opacity:1-et, 0.5s alatt  

nav.mobile-nav {
    height: auto;
    background-color: white;
    opacity: 1;
}

@keyframes opacity-anim {
    from {opacity: 0;}
    to {opacity: 1;}
}

.opacity-anim {
    animation-name: opacity-anim;
    animation-duration: 0.5s;
}

mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("display-none");
    mobileNav.classList.toggle("opacity-anim");
});

és akkor így szépen fokozatosan jelenik meg ez a menu, annyi idő alatt, amennyi bele van írva az animation-duration-ba 
fontos ez az egész rész keyframes!!!!!! meg fontos, hogy opacity:1 legyen megadva a nav.mobile-nav-nak

és a háttér miatt a desktop nav-ot is le kell szedni, mert az alatt van a háttérkép
-> 
és a style-ban készítünk egy olyat, hogy desktop-nav-white
-> 
.desktop-nav-white {
    background-image: white!important;
    background-color: white!important;
}
és ha kijön a mobile-menu, akkor ezzel nem lesz ott a background-image és lesz helyette egy fehér háttér 
-> 
const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector("#mobile-nav");
const desktopNav = document.querySelector("#desktop-nav");

mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("display-none");
    mobileNav.classList.toggle("opacity-anim");
    desktopNav.classList.toggle("desktop-nav-white");
});
tehát lementettük a desktop-nav-ot is és ha rákattintunk a mobile-menu-re, akkor ez fehér lesz a háttérkép helyett 

mit csináltunk itt 
- megcsináltuk, hogyan nézzen ki a desktop-nav, amikor bemegy a képernyő 960px alá 
    ilyenkor megjelenik a hamburger-menu-ikon az image középen marad és a jobb oldalon lesz egy keresés ikon 
-csináltunk egy másik nav-ot ez lesz a mobile-nav a desktop-nav alá 
    - ide betettük az összes dolgot, ami benne van a desktop-nav-ben egy ul-ben az összes li-t, ami ott két ul-ben van 
    - fontos, hogy ezek a li-k, már nem egymás melett vannak flex-ben, hanem egymás alatt ezért, kell a az ul-nek egy display: block 
    - hogy a szöveg az li-kben középen legyen, ezért kell a display: flex, justify-content: center, ugyanugy, mint a lottónál 
    is úgy tettük középre a számokat, hogy flex meg justify-content-center
- meg van adva a <div class="mobile-menu display-none" id="mobile-menu">-nek egy display: none;
    és ezt a js-ben csináltuk, hogyha rákattinutnk a hamburger-ikon-ra, akkor vegye le ezt a display-none és akkor látszódni fog ez a menü 
    megadtunk ugyanennek az opacity-anim-ot is ami azt csinálja, hogy ez a menu 0.5s alatt jelenjen meg, mert ez csak azt csinálja
    az opacity-anim, hogy opacity:0 - csinál egy opacity: 1-et, fontos, hogy meg legyen adva az opacity:1 a nav.mobile-nav-nak!!!! 
    és még ugyanitt a lementettük a desktop-nav-ot is, mert azt szeretnénk, hogy a háttérszíne ennek a dolognak fehér legyen és ne az a 
    kép ami alapból alatta volt -> desktop-nav-white, fontos itt az important, hogy felülírja (mert pl. ennek a div-nek meg van adva egy másik 
    class-ban a background-color vagy image, akkor itt kell az !important, hogy ezt felülírja)
***********************************************************************************

még azt kell megcsinálni, hogy amikor még nem nyítodik le a ez a mobile-nav-os dolog, akkor ugye egy hamburger-ikon van a dekstop-nav-ban 
de úgy van az oldalon, hogyha ezt már lenyitjuk, akkor a hamburger ikon helyett lett egy x ikon és ha rákattuntunk akkor meg visszamegy a 
mobile-nav és megint egy hamburger-ikon lesz ott 

<i class="fa-solid fa-bars"></i>
ennek adhatunk egy id-t, csak az a kérdés, hogyha ezt lementjük akkor azt kapjuk vissza amit várunk mert úgy müködik ez a fontawesome, hogy 
ezeket a ikonokat kicseréli svg-re és éppen emiatt 
<i class="fa-solid fa-bars" id="bars"></i>
js-ben lementjük 
const bars = document.querySelector("#bars");
console.log(bars);
console -> 
i#bars-fa-solid-fa-bars
de müködőképes lehet!!!! 

mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("display-none");
    mobileNav.classList.toggle("opacity-anim");
    desktopNav.classList.toggle("desktop-nav-white");

    bars.classList.add("fa-xmark");
    bars.classList.remove("fa-bars");
});
<i class="fa-solid fa-bars" id="bars"></i>
hozzáadjuk a x-et és leszedjük a hamburger ikont 
és akkor így müködik is, csak annyi, hogy ilyenkor amikor visszamegy akkor nem rakja vissza a hamburger-ikont és marad az x 

erre kell majd egy if és hasonló dolgot csinálunk, mint a toggle, tehát ha rajta van a hamburger, akkor az remove-oljuk és hozzáadjuk az x-et 
else akkor meg hozzáadjuk a hamburger-t és remove-oljuk az x-et!!!!!!!!
->
mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("display-none");
    mobileNav.classList.toggle("opacity-anim");
    desktopNav.classList.toggle("desktop-nav-white");

    if(bars.classList.contains("fa-xmark")) {
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
    } else {
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-bars")
    }
});
ezt azért lehet megcsinálni, mert itt két class-van 
fa-solid
fa-bars 
<i class="fa-solid fa-bars" id="bars"></i>

és ez így jól müködik, mert alapból rajta van a hamburger ikon ugye, mint felette látszik a fa-bars és akkor ha rákattintunk a mobile-menu-re 
akkor ezt leszedi és egy x-et meg hozzáad!!!! utána meg fordítva 

ez nagyon fontos!!!!!!!!!! hogyha egy ikon-t csinálunk a html-ben, adunk neki egy class-t, lementjük JavaScriptbe akkor egy if-vel, mint itt is 
adhatunk neki egy másik ikont fontos itt a contains!!!!!, mert ez alapján tudjuk, hogy mi van rajta, tehát mit kell levenni és akkor mit kell 
majd hozzáadni!!!!!

const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector("#mobile-nav");
const desktopNav = document.querySelector("#desktop-nav");
const bars = document.querySelector("#bars");
console.log(bars);

mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("display-none");
    mobileNav.classList.toggle("opacity-anim");
    desktopNav.classList.toggle("desktop-nav-white");

    if(bars.classList.contains("fa-xmark")) {
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
    } else {
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-bars")
    }
});
*************************************************************************************
ez a mobile-menu alapból nincs ott laptop kijelző méreten, de ha bemegyünk mobil-ra rányomunk hamburgerre, akkor lenyílik a menü 
és utána kihúzzuk megint nagyobbra akkor meg megváltozik ugye a desktop-menu ott is megjelennek azok a dolgok, amik vannak a 
mobile-menu-ben, szóval ott már nem lesz hamburger ikon meg keresés ikon hanem így fog kinézni 
home    pages   articles                            image                       wholesale   shop    location
                                                    home 
                                                    pages 
                                                    articles 
                                                    wholesale
                                                    shop 
                                                    locations 
tehát ha mobile-on megnyitjuk akkor ugymarad, mert nincs ami ezt eltüntetné, de ez egy ritka dolog, hogy mobilról váltunk laptopra 
ez nem olyan életszerű, hogy van egy mobilunk aztán az hirtelen laptoppá változik 
*******************************************************************************************************************************
csinálunk egy product-html, mert ha rákattintunk az index-en arra, amikor van 4 kávéstasak egymás mellett, akkor átvisz minket egy 
másik oldalra!! 
lemásolhatunk pár dolgot az index-ről, mert pl a footer-e az teljesen ugyanaz ennek a dolog-nak, meg a header is nav is 
csak azt töröltük ki, ami a header és a footer között volt 

header és footer között csinálunk egy div-et, megadunk neki egy container-xl-et 
*********
    <div class="container-xl grid-col-2"></div>

    <div class="container-xl">
        <div class="grid-col-2"></div>
    </div>

ez a kettő az naggyából ugyanazt csinálja, de mi a második variációt fogjuk használni 
container-nek a feladata, hogy legyen egy width-je, legyen valami padding-je és jó ha van text-align: center
meg margin: auto-ja 
*******
Lesz egy kétosztható grid és lesz az egyik felében egy kép a másik felében pedig dolgok a termékről 
    <div class="container-xl">
        <div class="grid-col-2">
            <div class="img-holder">
                <img src="images/coffee-bag-01-600x839.jpg">
            </div>

            <div>
                <h1>Columbia Dark Roast</h1>
            </div>
        </div>
    </div>

ugye nincs a grid elválasztvat és nem néz ki jól, hogy egymás mellett van teljesen a szöveg és a kép 
ezért megadunk majd a grid-col-2 mellé egy másik class-t, hogy legyen grid-gap-je 
<div class="grid-col-2 gap-xl">
meg a container-nek is adunk egy padding-et 
<div class="container-xl p-xl">
-> 
    <div class="container-xl p-xl">
        <div class="grid-col-2 gap-xl">
            <div class="img-holder">
                <img src="images/coffee-bag-01-600x839.jpg">
            </div>

            <div>
                <h1>Columbia Dark Roast</h1>
                <h3>$19.00 - $27.00</h3>
            </div>
        </div>
    </div>

ezt majd a folytatás a weblap_mobilra_2-ben 
itt még a második div-ben van rengeteg információ 
*/

