const mostLikes = require('../utils/list_helper').mostLikes

describe('mostLikes', ()=> {
    test('test it works', () => {
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
            author: 'Dumb author2',
            url: 'http://dummy-url.com',
            likes: 15,
            __v:0
        }, {
            _id: 'dsdasd123213213',
            title: 'Dummy title3',
            author: 'Dumb author3',
            url: 'http://dummy-url.com',
            likes: 5,
            __v:0
        }]

        expect(mostLikes(blogList)).toEqual({author: 'Dumb author2', likes: 15})
    })
})