// const pro =  || [];
const pro = [...JSON.parse(localStorage.getItem("products"))]
console.log();
console.log(pro)

const product = document.getElementById('product');
const quantity = document.getElementById('quantity');
const mrpprice = document.getElementById('mrpprice');
const salePrice = document.getElementById('salePrice');
const form = document.getElementById('form');

for (let i = 0; i < pro.length; i++) {
    document.getElementById('tableBody').innerHTML +=
        ` <tr>
    <td>${i + 1}</td>
   <td>${pro[i].productName}</td>
    <td>${pro[i].Quantity}</td>
  <td>${pro[i].MRP_Price}</td>
 <td>${pro[i].Sale_Price}</td>
 <td>${pro[i].createTime}</td>

  <td><button class="btn btn-danger" onclick="deleteBtn(this)">Delete</button></td>
   <td><button class="btn btn-warning px-4" onclick="editBtn(this)">edit</button></td>
    </tr>`

}
function deleteBtn(element) {
    let getParent = element.parentElement.parentElement
    console.log(getParent);
    let getData = getParent.children[1];
    console.log(getData);
    getParent.remove()


    pro.forEach((item) => {
        if (item.productName === getData.innerText) {
            pro.splice(pro.indexOf(item), 1)
        }
    })

    localStorage.setItem('products', JSON.stringify(pro))

    // console.log(getParent);
}

function editBtn(element) {

    let getParent = element.parentElement.parentElement
    let getData = getParent.children[1];
    form.style.display = "block"
    let findVal = pro.find((item) => item.productName === getData.innerText)
    if (findVal) {
        product.value = findVal.productName
        quantity.value = findVal.Quantity
        mrpprice.value = findVal.MRP_Price
        salePrice.value = findVal.Sale_Price
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let getParent = element.parentElement.parentElement
        let getData = getParent.children[1];
        let findIndex = pro.findIndex((item) => item.productName === getData.innerText)
        console.log(findIndex);
        pro[findIndex].productName = product.value
        pro[findIndex].Quantity = quantity.value
        pro[findIndex].MRP_Price = mrpprice.value
        pro[findIndex].Sale_Price = salePrice.value
        localStorage.setItem('products', JSON.stringify(pro))
        form.style.display = 'none'
    })
}




document.getElementById("add").addEventListener("click", function (event) {
    window.open("product.html", "_self");
})
document.getElementById("dashboard").addEventListener("click", function (event) {
    window.open("dashboard.html", "_self");
})
// document.getElementById("softN").addEventListener("click", function (event) {
//     sortItem();
// })