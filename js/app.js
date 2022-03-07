window.onload = function execute() {

    let toggle = document.getElementsByClassName("hamburger")[0];
    let collapse = document.getElementsByClassName("nav-links")[0];
    function switchClass(event) {
        collapse.classList.toggle('active');
    }
    toggle.addEventListener('click', switchClass);
}