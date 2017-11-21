$("#productSave").on("click", e => {
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