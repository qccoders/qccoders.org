import credentials from '../credentials'

const mockCredentials = Object.freeze(
    {
        slackToken: expect.any(String)
    }
)

describe('application credentials', () => {

    test('expect the correct keys in the credentials object', () => {
        expect(credentials).toEqual(mockCredentials)
    })
    
    test('throws an error when modifying the object', () => {
        expect(() => {
            credentials.slackToken = "12"
        }).toThrow()
    
        expect(() => {
            credentials.fakeItem = 2
        }).toThrow()
    })
    
})

