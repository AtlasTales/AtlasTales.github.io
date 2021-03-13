header =`<div class="zelda-responsive-nav">
<div class="container">
<div class="zelda-responsive-menu">
<div class="logo">
<a href="index.html">
<img src="images/img-logo.png" alt="logo">
</a>
</div>
</div>
</div>
</div>
<div class="zelda-nav">
<div class="container-fluid">
<nav class="navbar navbar-expand-md navbar-light">
<a class="navbar-brand" href="index.html">
<img src="images/img-logo.png" alt="logo">
</a>
<div class="collapse navbar-collapse mean-menu">
<ul class="navbar-nav">
<li class="nav-item"><a href="index.html" class="nav-link active">Accueil </a>

</li>
<li class="nav-item"><a href="#" class="nav-link">Platforme <i class="flaticon-down-arrow"></i></a>
<ul class="dropdown-menu">
 <li class="nav-item"><a href="Platform.html?a=Upcoming" class="nav-link">A venir</a></li>
 <li class="nav-item"><a href="Platform.html?a=Popular" class="nav-link">Popularire</a></li>
 <li class="nav-item"><a href="Platform.html?a=RPG" class="nav-link">RPG</a></li>
 <li class="nav-item"><a href="Platform.html?a=Sport" class="nav-link">Sport</a></li>
</ul>
</li>
<!--<li class="nav-item"><a href="#" class="nav-link"  hidden="">Tournament <i class="flaticon-down-arrow"></i></a>-->
<!--<ul class="dropdown-menu">-->
<!--<li class="nav-item"><a href="stream-schedule.html" class="nav-link">Stream Schedule</a></li>-->
<!--<li class="nav-item"><a href="single-tournament.html" class="nav-link">Tournament Single</a></li>-->
<!--<li class="nav-item"><a href="single-match.html" class="nav-link">Match Single</a></li>-->
<!--<li class="nav-item"><a href="single-team.html" class="nav-link">Team Single</a></li>-->
<!--<li class="nav-item"><a href="single-player.html" class="nav-link">Player Single</a></li>-->
<!--</ul>-->
<!--</li>-->
<!--<li class="nav-item"><a href="#" class="nav-link">Shop <i class="flaticon-down-arrow"></i></a>-->
<!--<ul class="dropdown-menu">-->
<!--<li class="nav-item"><a href="products-list-1.html" class="nav-link">Products List 01</a></li>-->
<!--<li class="nav-item"><a href="products-list-2.html" class="nav-link">Products List 02</a></li>-->
<!--<li class="nav-item"><a href="cart.html" class="nav-link">Cart</a></li>-->
<!--<li class="nav-item"><a href="checkout.html" class="nav-link">Checkout</a></li>-->
<!--<li class="nav-item"><a href="single-products.html" class="nav-link">Products Details</a></li>-->
<!--<li class="nav-item"><a href="my-account.html?html" class="nav-link">My Account</a></li>-->
<!--</ul>-->
<!--</li>-->
<li class="nav-item"><a href="#" class="nav-link">Communauté <i class="flaticon-down-arrow"></i></a>
<ul class="dropdown-menu">

<li class="nav-item"><a href="single-blog-1.html" class="nav-link">Blog</a></li>
<li class="nav-item"><a href="single-blog-2.html" class="nav-link">Forum</a></li>
 <li class="nav-item"><a href="single-blog-3.html" class="nav-link">Twitch</a></li>
 <li class="nav-item"><a href="single-blog-3.html" class="nav-link">Vimeo</a></li>
 <li class="nav-item"><a href="single-blog-3.html" class="nav-link">Youtube</a></li>
</ul>
</li>
<li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
</ul>
<div class="others-option d-flex align-items-center">
<div class="option-item">
<div class="search-box">
<i class="flaticon-search-1"></i>
</div>
</div>
<div class="option-item">
<div class="side-menu-btn">
<i class="flaticon-null-2" data-toggle="modal" data-target="#sidebarModal"></i>
</div>
</div>
</div>
</div>
</nav>
</div>
</div>
<div class="others-option-for-responsive">
<div class="container">
<div class="dot-menu">
<div class="inner">
<div class="circle circle-one"></div>
<div class="circle circle-two"></div>
<div class="circle circle-three"></div>
</div>
</div>
<div class="container">
<div class="option-inner">
<div class="others-option">
<div class="option-item">
<div class="search-box">
<i class="flaticon-search-1"></i>
</div>
</div>
<div class="option-item">
<div class="side-menu-btn">
<i class="flaticon-null-2" data-toggle="modal" data-target="#sidebarModal"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`;

$(".navbar-area").html(header);


logo = `
<div class="logo">
                <a href="index.html" class="d-inline-block"><img src="images/img-logo.png" alt="image"></a>
                <ul class="footer-menu">
                    <li class="nav-item"><a class="nav-link" href="#">Légal</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Conditions d'utilisation</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Politique de confidentialité</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Paramètres des cookies</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Centre de soutien</a></li>
                </ul>
            </div>
`

$(".footer-content").html(logo);

down = `
<div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-5">
                <p><i class="bx bx-copyright"></i>2021 <a href="index.html">Atlas</a> games Pty Ltd.</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-7" style="display: none;">
                <div class="lang-switcher">
                    <span>Select your language</span>
                    <select>
                        <option>English</option>
                        <option>العربية</option>
                        <option>French</option>
                        <option>Portuguese</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
`



$(".copyright-area").html(down);


document.title = 'Atlas Tales - hhhh'