var searchInput = document.querySelector("#search-input");
var searchInput1 = document.querySelector(".search-btn");

searchInput.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        search();
    }
});

searchInput1.addEventListener("click", function () {
    search();
})

function search() {
    var input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"
}

var voiceSearch = document.querySelector("#voice-search");
var imageSearch = document.querySelector("#image-search");

voiceSearch.addEventListener("click", function () {
    var voice = new Audio('sounds/voice-search.mp3');
    voice.play();
})

imageSearch.addEventListener("click", function () {
    var audio = new Audio('sounds/image-search.mp3');
    audio.play();
})
