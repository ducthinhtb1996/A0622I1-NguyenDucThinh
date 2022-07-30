function selectValue() {
    var a = document.getElementById("mySelect");
    var e = a.options[a.selectedIndex].text;
    document.getElementById("selectedValue").innerHTML = e;
}
