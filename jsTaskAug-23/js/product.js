const productName = document.getElementById('product')
const quantity = document.getElementById('quantity')
const mrpPrice = document.getElementById('mrpPrice')
const salePrice = document.getElementById('salePrice')
const form = document.getElementById('productForm')


// if (loginVal) {
//     console.log(loginVal);
// }


String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
};

function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            //Error
            errorInput(input, `${input.id} is Required`);
        } else {
            //Success
            successInput(input);

        }
    });
}

function errorInput(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;
}
function successInput(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector("p");
    p.innerHTML = "";
}


// function getName(input) {
//     //return input.id;
//     return input.getAttribute("data-name");
// }

function checkNumber(input) {
    let numbers = /^[0-9]+$/;
    if (!input.value.trim().match(numbers)) {
        errorInput(input, `please enter number only`)
        return false
    }
    else {
        return true
    }
}


function checkAlpha(input) {
    if (!input.value.trim().isAlpha()) {
        errorInput(input, `${input.id}  Must be Alphabets`);
        return false
    } else {
        return true
    }

}

function inputClear(inputs) {
    inputs.forEach(input => {
        input.value = ''
        let formGrp = input.parentElement
        console.log(formGrp);
        formGrp.classList.remove('success')
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired([productName, quantity, mrpPrice, salePrice]);
    // console.log('hhjj');
    checkAlpha(productName)
    checkNumber(quantity)
    checkNumber(mrpPrice)
    checkNumber(salePrice)

    if (
        checkAlpha(productName) &&
        checkNumber(quantity) &&
        checkNumber(mrpPrice) &&
        checkNumber(salePrice)
    ) {
        const createDate = new Date().toLocaleDateString()

        let mprice = parseFloat(mrpPrice.value).toFixed(2)
        let sale = parseFloat(salePrice.value).toFixed(2)
        let getVal = JSON.parse(localStorage.getItem('products') || '[]')
        let product = {
            productName: productName.value,
            Quantity: quantity.value,
            MRP_Price: mprice,
            Sale_Price: sale,
            createTime: createDate
        }
        getVal.push(product);
        localStorage.setItem('products', JSON.stringify(getVal))
        inputClear([productName, quantity, mrpPrice, salePrice])
    }
})

