const dbFactory = function (blogs, contact, projects, resume, admin) {
    return Object.create(null, {
        "blogs": { value: blogs, enumerable: true },
        "contact": { value: contact, enumerable: true},
        "projects": { value: projects, enumerable: true },
        "resume": { value: resume, enumerable: true },
        "admin": { value: admin, enumerable: true }
    })
}

//exports
module.exports = dbFactory