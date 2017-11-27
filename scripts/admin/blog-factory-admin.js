// Author: John Dulaney
// Purpose: This module is a factory function for any blog posts made through admin page.
// ┌(° ͜ʖ͡°)┘  
  
// Factory function for new myBlog
const articleFactory = function (title, date, tags, author, content) {
    return Object.create(null, {
        "id": {
            value: articleUUIDGen.next().value,
            enumerable: true
        },
        "title": {
            value: title,
            enumerable: true
        },
        "date": {
            value: date,
            enumerable: true
        },
        "tags": {
            value: tags,
            enumerable: true
        },
        "author": {
            value: author,
            enumerable: true
        },
        "content": {
            value: content,
            enumerable: true
    }   
})
}

module.exports = articleFactory