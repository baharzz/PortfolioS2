
function openPage(id)
{
    // console.log(id + ".html");
    let location = id + '.html';
    window.open(location, "_self");
}

// let card1 = document.querySelector(".c1");
// card1.addEventListener("click", function(){openPage('poc1')}, false);

document.querySelector(".c1").addEventListener('click', function() {openPage('development')}, false);

document.querySelector(".c2").addEventListener('click', function() {openPage('development')}, false);

document.querySelector(".c3").addEventListener('click', function() {openPage('development')}, false);

document.querySelector(".c4").addEventListener('click', function() {openPage('development')}, false);
