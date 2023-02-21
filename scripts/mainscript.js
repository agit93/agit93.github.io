function dropdownfunc() {
    const x = document.getElementById("dropdown");
    const y = document.getElementById("dropdownimg");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    if (y.style.transform === 'rotate(180deg)') {
        y.style.transform = 'rotate(0deg)';
    } else {
        y.style.transform = 'rotate(180deg)';
    }
}