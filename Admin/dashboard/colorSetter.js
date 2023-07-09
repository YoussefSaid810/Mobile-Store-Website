var colors = JSON.parse(localStorage.getItem("Colors"));

for (var i = 0; i < colors.length; i++) {
    document.documentElement.style.setProperty(colors[i].name, colors[i].value);
}

document.querySelector('body').innerHTML += `
<section class="loading">
    <div class="innerL">
        <p class="icon"><i class="fas fa-spinner"></i></p>
        <p>Loading...</p>
    </div>
</section>

<style>

.loading {
    background-color: var(--main-color);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2vw;
    color: var(--fourth-color);
}

.loading .innerL .icon {
    font-size: 4vw;
    margin-bottom: 1vw;
    animation: spin 1.5s;
    animation-iteration-count: infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

::-webkit-scrollbar {
    width: 0.4vw;
}

html {
    scroll-behavior: smooth;
}


/* Track */

 ::-webkit-scrollbar-track {
    background: var(--third-color);
}


/* Handle */

 ::-webkit-scrollbar-thumb {
    background: var(--fifth-color);
}


/* Handle on hover */

 ::-webkit-scrollbar-thumb:hover {
    background: var(--sixth-color);
}

</style>
`


$(() => {
    $('main').ready(() => {
        $('.loading').fadeOut(500);
    })

})