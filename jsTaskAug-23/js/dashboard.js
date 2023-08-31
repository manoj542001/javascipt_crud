document.getElementById("addProduct").addEventListener("click", () => {
    window.open("product.html", "_self");
});

document.getElementById("productView").addEventListener("click", () => {
    window.open("productView.html", "_self");
});

const well = JSON.parse(localStorage.getItem("loggedInUser"));

document.getElementById("wellcome").innerHTML = `Wellcome <span class="text-success">"${well.usernameValue
    }"</span> `

document.getElementById("logOut").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser")
    window.open("login.html", "_self");
});
const productItem = JSON.parse(localStorage.getItem("products"));
const productCount = productItem.length
document.getElementById("productCt").innerHTML = `Product Count :${productCount}`