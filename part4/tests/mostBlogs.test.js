const mostBlogs = require('../utils/list_helper').mostBlogs

describe('mostBlog', () => {
    test('count', () => {
        const blogList = [ {
            _id: 'dsdasd123213213',
            title: 'Dummy title1',
            author: 'Pepe',
            url: 'http://dummy-url.com',
            likes: 5,
            __v:0
        }, {
            _id: 'dsdasd123213213',
            title: 'Dummy title2',
            author: 'Dumb author',
            url: 'http://dummy-url.com',
            likes: 5,
            __v:0
        }, {
            _id: 'dsdasd123213213',
            title: 'Dummy title3',
            author: 'Dumb author',
            url: 'http://dummy-url.com',
            likes: 5,
            __v:0
        }
        
        ]
        const authors = mostBlogs(blogList)
        expect(authors).toEqual({author:'Dumb author', blogs: 2})
    })
})