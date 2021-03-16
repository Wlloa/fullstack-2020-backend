const _ = require('lodash')

const dummy = (blogs) => {
    if (blogs.length === 0) {
        return 1
    }
}

const totalLikes = (blogs) => {
    if (blogs.length === 0) return 0
    if (blogs.length === 1 ) {
        return blogs[0].likes
    }
    const likes = blogs.reduce((curr, accu) => {
        return {likes: curr.likes + accu.likes }
    })

    return likes.likes
}

const favoriteBlog = (blogs) => {
    const mapped = blogs.map(blog => blog.likes)
    const maxLikes = Math.max.apply(null, mapped)
    const index = blogs.findIndex(blogs => blogs.likes === maxLikes) 
    return blogs[index]
}

const mostBlogs = (blogs) => {
    const sortedAuthors = _.countBy(blogs, 'author')
    const maxValue = Math.max.apply(null, Object.values(sortedAuthors))
    const key = _.findKey(sortedAuthors, (k) => k === maxValue)
    return {
        author: key,
        blogs: maxValue
    }
}

const mostLikes = (blogs) => {
    const value = Math.max.apply(null, blogs.map(blog => blog.likes))
    const blog = _.filter(blogs, (obj) => obj.likes === value)
    return {
        author: blog[0].author,
        likes: blog[0].likes
    }

}



module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}