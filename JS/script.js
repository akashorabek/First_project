$(document).ready(function() {
    $('.under_header').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4500

    });
    $('.body_allblocks').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 4500,
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
            section2links[index].style.borderColor = '#ff701a';
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
            allBlock();
            removeProjectTabsColor();
            item.style.color = '#ff701a'
        });
    });
    projectTabs[1].addEventListener('click', (e) => {
        projects[0].style.display = 'none';
        projects[1].style.display = 'none';
        projects[2].style.width = '48%';
        projects[3].style.display = 'none';
        projects[4].style.display = 'none';
        projects[5].style.width = '48%';
    });
    projectTabs[2].addEventListener('click', (e) => {
        projects[0].style.display = 'none';
        projects[1].style.width = '48%';
        projects[2].style.display = 'none';
        projects[3].style.display = 'none';
        projects[4].style.width = '48%';
        projects[5].style.display = 'none';
    });
    projectTabs[3].addEventListener('click', (e) => {
        projects[0].style.width = '48%';
        projects[1].style.display = 'none';
        projects[2].style.display = 'none';
        projects[3].style.width = '48%';
        projects[4].style.display = 'none';
        projects[5].style.display = 'none';
    });
}
projectsSort();

function allBlock() {
    projects.forEach(item => {
        item.style.display = 'block';
        item.style.width = '30%';
    });
}
function removeProjectTabsColor() {
    projectTabs.forEach(item => {
        item.style.color = '#9b9b9b'
    });
    
}