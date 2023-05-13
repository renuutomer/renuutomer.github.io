    
    
    
    
    
    <script>
    var typed = new Typed(".input",{
        strings:["Renuu Tomer","Full Stack Web Developer",],
        typeSpeed: 70,
        backSpeed: 60,
        loops: true
    });
    const header = document.querySelector("header");
    window.addEventListener ("scroll", function(){
    header. classList.toggle("sticky" , window.scrolly > 0);
});
</script>

// <!-- emailjs to mail contact form data -->
    /* SCROLL CONTACT */
    srtop.reveal('.contact .container', { delay: 400 });
    srtop.reveal('.contact .container .form-group', { delay: 400 });
    // add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}