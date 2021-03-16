const favorite = require('../utils/list_helper').favoriteBlog

describe('favorite blog test', () => {
    test('dummy test', () => {
        const blogList = [ {
            _id: 'dsdasd123213213',
            title: 'Dummy title',
            author: 'Dumb author',
            url: 'http://dummy-url.com',
            likes: 3,
            __v:0
        }, {
            _id: 'dsdasd123213213',
            title: 'Dummy title',
            author: 'Dumb author',
            url: 'http://dummy-url.com',
            likes: 5,
            __v:0
        }, {
            _id: 'dsdasd123213213',
            title: 'Dummy title',
            author: 'Dumb author',
            url: 'http://dummy-url.com',
            likes: 7,
            __v:0
        }
        
        ]
        const maxLikes = favorite(blogList)
        expect(maxLikes).toEqual(blogList[2])
    })
})