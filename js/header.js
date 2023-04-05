const header = document.querySelector('header');

header.innerHTML = `
<div id="overlayNav" class="overlay">
    <div class='nav-content'>
        <a class="closebtn" onclick="closeNav()"><i class="fa-solid fa-x"></i></a>
        
        <ul class="overlay-content">
            <li><a href="index.html">Home</a> </li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li class="solutions"><a>Soluciones TOM &nbsp;&nbsp;<i class="fa-solid fa-caret-down"></i></a>
                <ul class="sub-overlay-content">
                    <li><a href="branding.html">Branding</a> </li>
                    <li><a href="e-learning.html">e-Learning</a></li>
                    <li><a href="arquitectura-de-software.html">Arquitectura de Software</a></li>
                    <li><a href="produccion-audiovisual.html">Producción Audiovisual</a></li>
                </ul>
            </li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>

        <div class="social-buttons-nav">
            <a href="#" class='d-none'><img src="assets/img/LKND.png" alt="" class='img-social-icon'></a>
            <a href="https://www.facebook.com/topofmindcommunication/?ref=br_rs" target='_blank'><img src="assets/img/FB.png" alt="" class='img-social-icon'></a>
            <a href="https://www.instagram.com/tomc_mx/?hl=es-la" target='_blank'><img src="assets/img/IN.png" alt="" class='img-social-icon'></a>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="header">
            <div class="hamburguer">
                <i class="fa-solid fa-bars" onclick="openNav()"></i>
            </div>
            <div class="logo">
                <a href="index.html"><img src="/assets/img/logo.png" id="logo" class="logo-header"></a>
            </div>
            <div></div>
        </div> 
    </div> 
</div>
`;

function openNav() {
    document.getElementById("overlayNav").style.width = "80%";
}

function closeNav() {
    document.getElementById("overlayNav").style.width = "0%";
}

const btnSubmenu = document.querySelector('.solutions');
const submenu = document.querySelector('.sub-overlay-content');

btnSubmenu.addEventListener('click', showSubmenu);

function showSubmenu() {
    if(submenu.classList.contains('active'))
    {
        submenu.classList.remove('active');
        this.classList.remove('active');
    } else{
        submenu.classList.add('active');
        this.classList.add('active');
    }
    
}