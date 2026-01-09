// window.addEventListener("scroll", () => {
//     const navbar = document.querySelector(".navbar");

//     if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// });

let arr=[
    {
        temperature:"29 F",
        wind:"17 mph",
        directiondegree:"314",
        name:"The Hamptons,New York",
        name2:"The Hills",
        location:"40.847787° N / -72.589811° W",
        img:"https://www.datocms-assets.com/128889/1745433311-25718_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
    },

    {
        temperature:"34 F",
        wind:"20 mph",
        directiondegree:"316",
        name:"MONCAYO GOLF & OCEAN CLUB",
        name2:"Fajardo, Puerto Rico",
        location:"45.847787° N / -172.589811° W",
        img:"https://www.datocms-assets.com/128889/1726232913-paesaggio_tappainer_2022-copy.jpeg?fit=max&h=1200&w=1000"
    },
    {
        temperature:"35 F",
        wind:"10 mph",
        directiondegree:"218",
        name:"TERRITORY 1889 GOLF & LAKE CLUB",
        name2:"Flathead Lake, Montara",
        location:"30.847787° N / 62.589811° W",
        img:"https://www.datocms-assets.com/128889/1749834672-binyan_hhc3121_wardvillageblocke_s020_ext_superman_final5000.jpg?fit=max&h=1200&w=1000"
    }
    ,{
        temperature:"28 F",
        wind:"30 mph",
        directiondegree:"114",
        name:"TENUTA TOSCANA",
        name2:"TUSCANY ,ITALY",
        location:"20.847787° N / -12.589811° W",
        img:"https://www.datocms-assets.com/128889/1742426220-horseback.jpg?fit=max&h=1200&w=1000"
    }
    ,{
        temperature:"38 F",
        wind:"70 mph",
        directiondegree:"144",
        name:"MOHALA",
        name2:"Honolulu,Hawaii ",
        location:"40.847787° N / -72.589811° W",
        img:"https://www.datocms-assets.com/128889/1721142462-15507_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
    },
    {
        temperature:"40 F",
        wind:"18 mph",
        directiondegree:"314",
        name:"The Hamptons,New York",
        name2:"The Hills",
        location:"37.847787° N / -50.589811° W",
        img:"https://www.datocms-assets.com/128889/1717077744-glasert_20220630sr_3213.jpg?fit=max&h=1200&w=1000"
    },
    {
        temperature:"35 F",
        wind:"17 mph",
        directiondegree:"314",
        name:"CRAZY MOUNTAIN RANCH",
        name2:"Shields Valley, Montana",
        location:"40.847787° N / -72.589811° W",
        img:"https://www.datocms-assets.com/128889/1714133620-polo_match_428.jpeg?fit=max&h=1200&w=1000"
    },
    {
        temperature:"36 F",
        wind:"17 mph",
        directiondegree:"314",
        name:"The Hamptons,New York",
        name2:"The Hills",
        location:"40.847787° N / -72.589811° W",
        img:"https://www.datocms-assets.com/128889/1717077616-matt6402-1.jpeg?fit=max&h=1200&w=1000"
    }

]
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const temp = document.getElementById("temp");
const title1=document.getElementById("title1")
const title = document.getElementById("title");
const wind = document.getElementById("wind");
const direction = document.getElementById("direction");
const img = document.getElementById("mainImg");
const location1=document.getElementById("location");

let i = 0;

function updateUI() {
    temp.textContent = arr[i].temperature;
    title1.textContent=arr[i].name;
    title.textContent = arr[i].name2;
    wind.textContent = arr[i].wind;
    direction.textContent =`${arr[i].directiondegree}°`;
    location1.textContent=arr[i].location
;    img.src = arr[i].img;
}

// initial load
updateUI();

nextBtn.addEventListener("click", () => {
    i = (i + 1) % arr.length;
    updateUI();
});

prevBtn.addEventListener("click", () => {
    i = (i - 1 + arr.length) % arr.length;
    updateUI();
});

// document.getElementById("h").addEventListener("click", () => {
// window.scrollTo({
//     top:window.innerHeight,
//     behavior:"smooth"
// })
// });



$(document).ready(function () {

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });

    let arr = [
        {
            temperature: "29 F",
            wind: "17 mph",
            directiondegree: "314",
            name: "The Hamptons, New York",
            name2: "The Hills",
            location: "40.847787° N / -72.589811° W",
            img: "https://www.datocms-assets.com/128889/1745433311-25718_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "34 F",
            wind: "20 mph",
            directiondegree: "316",
            name: "MONCAYO GOLF & OCEAN CLUB",
            name2: "Fajardo, Puerto Rico",
            location: "45.847787° N / -172.589811° W",
            img: "https://www.datocms-assets.com/128889/1726232913-paesaggio_tappainer_2022-copy.jpeg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "35 F",
            wind: "10 mph",
            directiondegree: "218",
            name: "TERRITORY 1889 GOLF & LAKE CLUB",
            name2: "Flathead Lake, Montana",
            location: "30.847787° N / 62.589811° W",
            img: "https://www.datocms-assets.com/128889/1749834672-binyan_hhc3121_wardvillageblocke_s020_ext_superman_final5000.jpg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "28 F",
            wind: "30 mph",
            directiondegree: "114",
            name: "TENUTA TOSCANA",
            name2: "Tuscany, Italy",
            location: "20.847787° N / -12.589811° W",
            img: "https://www.datocms-assets.com/128889/1742426220-horseback.jpg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "38 F",
            wind: "70 mph",
            directiondegree: "144",
            name: "MOHALA",
            name2: "Honolulu, Hawaii",
            location: "40.847787° N / -72.589811° W",
            img: "https://www.datocms-assets.com/128889/1721142462-15507_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
        }
    ];

    let i = 0;
    function updateUI() {
        $("#temp").text(arr[i].temperature);
        $("#title1").text(arr[i].name);
        $("#title").text(arr[i].name2);
        $("#wind").text(arr[i].wind);
        $("#direction").text(arr[i].directiondegree + "°");
        $("#location").text(arr[i].location);
        $("#mainImg").attr("src", arr[i].img);
    }

    /* initial load */
    updateUI();


    $("#nextBtn").on("click", function () {
        i = (i + 1) % arr.length;
        updateUI();
    });

    $("#prevBtn").on("click", function () {
        i = (i - 1 + arr.length) % arr.length;
        updateUI();
    });


    $("#h").on("click", function () {
        $("html, body").animate(
            { scrollTop: window.innerHeight },
            600
        );
    });

});
