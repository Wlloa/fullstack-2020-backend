const totalLikes = require('../utils/list_helper').totalLikes

describe('total likes', () => {
    test('of empty list is zero', () => {
        expect(totalLikes([])).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {
        const blogList = [ {
            _id: 'dsdasd123213213',
            title: 'Dummy title',
            author: 'Dumb author',
            url: 'http://dummy-url.com',
            likes: 5,
            __v:0
        }]

        expect(totalLikes(blogList)).toBe(5)
    })

    test('of a bigger list is calculated right', () => {
        const blogList = [ {
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
            likes: 5,
            __v:0
        }, {
            _id: 'dsdasd123213213',
            title: 'Dummy title',
            author: 'Dumb author',
            url: 'http://dummy-url.com',
            likes: 5,
            __v:0
        }
        
        ]

        expect(totalLikes(blogList)).toBe(15)
    })
})

