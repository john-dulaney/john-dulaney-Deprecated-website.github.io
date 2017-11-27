const foo = () => {
    return Object.create(null, {
        "ANY KEY I WANT": {
            value: function (pass, stuff) {
                return "this is an example of objcr"
            }   
        }     
    })
}
