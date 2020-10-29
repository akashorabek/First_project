$(document).ready(function() {
    $('.menu_burger').click(function(){
        $('.menu_burger').toggleClass('active_menu');
        $('.topnav').toggleClass('active_menu');
        $('body').toggleClass('lock');
    })
    $('.mobile_bar.fas').click(function(){
        $('.mobile_bar.fas').toggleClass('active_menu');
        $('.numlogo').toggleClass('active_menu');
        
    })
    $('.under_header').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,


    });
    $('.body_allblocks').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
                
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
                
            }
        ],
        

    });

});


let section2Tabs = document.querySelectorAll('.section2_text');
let section2links = document.querySelectorAll('.section2_tabs a');
let projectTabs = document.querySelectorAll('.projects_tabs a');
let projects = document.querySelectorAll('.project_img');

function section2tabs() {
    section2links.forEach((item, index) => {
        
        item.addEventListener('click', (e) => {
            removeActive ()
            e.preventDefault();
            section2Tabs[index].classList.add('active');
            section2links[index].style.color = '#ff701a';
        });
    });
}
section2tabs();
function removeActive () {
    section2Tabs.forEach(item => {
        item.classList.remove('active');
    });
    section2links.forEach(item => {
        item.style.borderColor = "transparent";
        item.style.color = "#9b9b9b";
    });
}
function projectsSort () {
    projectTabs.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            removeProjectTabsColor();
            item.classList.add('active');
        });
    });
    $('.projects_tabs a:nth-child(1)').click(function(){
        $('.project_img').fadeIn();
        $('.project_img').css({
            width: 'calc(100% / 4 - 3%)'
        })
    })
    $('.projects_tabs a:nth-child(2)').click(function(){
        $('.project_img:nth-child(3), .project_img:nth-child(6)').fadeIn();
        $('.project_img').not('.project_img:nth-child(3), .project_img:nth-child(6)').hide();
        $('.project_img').css({
            width: '40%'
        })
    })
    $('.projects_tabs a:nth-child(3)').click(function(){
        $('.project_img:nth-child(2), .project_img:nth-child(5)').fadeIn();
        $('.project_img').not('.project_img:nth-child(2), .project_img:nth-child(5)').hide();
        $('.project_img').css({
            width: '40%'
        })
    })
    $('.projects_tabs a:nth-child(4)').click(function(){
        $('.project_img:nth-child(1), .project_img:nth-child(4)').fadeIn();
        $('.project_img').not('.project_img:nth-child(1), .project_img:nth-child(4)').hide();
        $('.project_img').css({
            width: '40%'
        })
    })
}
projectsSort();

// function allBlock() {
//     projects.forEach(item => {
//         item.style.display = 'block';
//         item.style.width = '100%';
//     });
// }
function removeProjectTabsColor() {
    projectTabs.forEach(item => {
        item.classList.remove('active');
    });
    
}