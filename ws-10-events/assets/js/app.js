//Start our 'application' after the page has been loaded
window.addEventListener("load", init);

//Create gobal variables that will be used within our functions
let productList = null; //"null" means it's available but completely empty
let submitButton = null;
let errorElement = null;
let totalPriceField = null;
let removeText = "X";
let errorText = "Oeps, check je invoer nogmaals...";

/**
 * Function called after document is loaded
 *
 * @param e Load event (we won't use it, but keep in mind: a event -always- passes a parameter with information!)
 */
function init(e) {
    //Add the table body & totalprice field to our global variables
    productList = document.getElementById("product-list");
    totalPriceField = document.getElementById("total-price");

    //Set event on productList for click events (needed for removeCell)
    productList.addEventListener("click", removeProduct);

    //Get the submit button from the form & add a click event to it
    submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", addProduct);
}

/**
 * Add product to the tablelist
 *
 * @param e Click event
 */
function addProduct(e) {
    //Make sure we prevent default behavior, else the form will be submitted and all JS behavior will be a waste of code
    e.preventDefault();

    //Get the input fields
    const productField = document.getElementById("product");
    const priceField = document.getElementById("price");

    //Before we continue, check if we have any errors
    if (checkFormErrors(productField.value) || checkFormErrors(priceField.value)) {
        return; //Return within a function cancels all functionality below.
    }

    //Create a new tableRow & cell for the added product (name & price)
    const tableRow = createNewElement("tr", false, false);
    const productCell = createNewElement("td", productField.value, false);
    const priceCell = createNewElement("td", priceField.value, false);

    //Create a remove 'button' with a specific class to handle removing later on
    const removeCell = createNewElement("td", removeText, "remove-cell");

    //Append the cells to the row
    tableRow.appendChild(productCell);
    tableRow.appendChild(priceCell);
    tableRow.appendChild(removeCell);

    //Append the row to the global defined productlist (table body) & update total price
    productList.appendChild(tableRow);
    updateTotalPrice(priceField.value, true);

    //Focus back to our product field & clear both inputfields (usability!)
    productField.value = "";
    priceField.value = "";
    productField.focus();
}

/**
 * Check error within the passed value and deliver feedback
 *
 * @param value Field to check errors
 * @return {Boolean}
 */
function checkFormErrors(value) {
    let hasError = false;

    //If our given value is empty, we have an error
    if (value === "") {
        hasError = true;

        //If element is null, we need to create a new one. Avoid double error message
        if (errorElement === null) {
            //Create a element which will present our error
            errorElement = createNewElement("span", errorText, "error");

            //Add the error next to our submit button
            submitButton.parentNode.appendChild(errorElement);
        }
    } else {
        //Remove error, when there is an error to remove
        if (errorElement) {
            submitButton.parentNode.removeChild(errorElement);
            errorElement = null; //Put it back on null, so it can be added again with a new error
        }
    }

    //Return our boolean with our error state (true/false)
    return hasError;
}

/**
 * Remove product from the tablelist
 *
 * @param e Click event
 */
function removeProduct(e) {
    //console.log() will always be your debug friend. Using 'alert' or 'document.write' might have a negative effect on your grade :-)
    console.log(e); //'e' is the event itself (in our case the click event)

    //If we clicked in anything else than the remove cell, we cancel our functionality
    if (e.target.className != "remove-cell") {
        return;
    }

    //Update the totalPrice with our previousSiblings value (the price field)
    updateTotalPrice(e.target.previousSibling.innerHTML, false);

    //Remove the clicked row (getting the parentElement returns the actual row, instead of a 'cell')
    productList.removeChild(e.target.parentElement);
}

/**
 * Return a new HTML element
 *
 * @param tagName Sort of element to create (p, td, span, etc.)
 * @param innerHTML The content of our element
 * @param className The className of our new element
 * @return {Object}
 */
function createNewElement(tagName, innerHTML, className) {
    //Create our element with the given tagName
    const element = document.createElement(tagName);

    //If we passed HTML, add it to our element
    if (innerHTML) {
        element.innerHTML = innerHTML; //Actual visible content within our element
    }
    //If we passed a className, add it to our element
    if (className) {
        element.className = className; //Class styled in CSS!
    }

    //Return makes sure the result of this function can be used within a different scope
    return element;
}

/**
 * Update the totalPrice cell
 *
 * @param price Field with a new price to add
 * @param sum true is sum, false is subtract
 */
function updateTotalPrice(price, sum) {
    let newPrice = 0;
    price = price.replace(",", "."); //Let's be nice: replace our , by a . to fix price calculating

    if (sum) { //Asking if (sum) is the same as asking if (sum == true)
        newPrice = (parseFloat(totalPriceField.innerHTML) + parseFloat(price)).toFixed(2);
    } else {
        newPrice = (parseFloat(totalPriceField.innerHTML) - parseFloat(price)).toFixed(2);
    }

    //Just a fallback for when our code fails (read: our number field is not supported & we add corrupt data.)
    if (isNaN(newPrice) || newPrice < 0) {
        newPrice = 0;
    }

    totalPriceField.innerHTML = newPrice;
}