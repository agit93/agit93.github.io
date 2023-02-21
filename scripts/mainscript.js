function dropdownfunc() {
    const x = document.getElementById("dropdown");
    const y = document.getElementById("dropdownimg");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    if (y.style.rotate === "0") {
        y.style.rotate = "180";
    } else {
        y.style.rotate = "0";
    }
}