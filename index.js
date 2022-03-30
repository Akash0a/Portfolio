// window.addEventListener('scroll', function () {
//     let navbar = document.getElementsByClassName("navMain");
//     // console.log(navbar);
//     if (window.pageYOffset >= 70) {
//         navbar.classList.add("sticky");
//     }
//     console.log("ok");
// });



function changeBG(color) {
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("intro-h3 ");
    let txtprjct = document.getElementsByClassName("wdp-detail");
    let txth2 = document.getElementsByClassName("wdp-img-h2");


    // if (color == "#000000") {
    //     for (let elm of txt) {
    //         // console.log(elm);
    //         elm.style.color = "white";
    //     }
    // } else {
    //     for (let elm of txt) {
    //         elm.style.color = "black";
    //     }
    // }

    if (color == "#000000") {
        for (let elm of txt) {
            elm.style.color = "white";
        }
        for (let elm of txtprjct) {
            elm.style.color = "white";
        }
        for (let elm of txth2) {
            elm.style.color = "white";
        }
    } else if (color == "#f4edff") {
        for (let elm of txt) {
            elm.style.color = "#303349";
        }
        for (let elm of txtprjct) {
            elm.style.color = "black";
        }
        for (let elm of txth2) {
            elm.style.color = "black";
        }
    } else {
        for (let elm of txt) {
            elm.style.color = "black";
        }
        for (let elm of txtprjct) {
            elm.style.color = "black";
        }
        for (let elm of txth2) {
            elm.style.color = "black";
        }
    }

}



