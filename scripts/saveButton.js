// Author: John Dulaney
// Purpose: This module exports a save button that saves to Firebase. Work in progress.
// ┌(° ͜ʖ͡°)┘  

const saveButton = () => $("#productSave").on("click", e => {
    const newProduct = {
        name: $("input[name='productName']").val(),
        category_id: parseInt($("select[name='productCategory']").find(":selected").val()),
        price: parseFloat(parseFloat($("input name='productPrice'")))
    }
        $.ajax({
            url: `https://personal-site-ffb9c.firebaseio.com/myBlog/.json`,
            method: "POST",
            data: JSON.stringify(newProduct)
        })
    })

module.exports = saveButton