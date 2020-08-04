const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Rics1sk',
        email: 'ria2ack.sanc3shez@gmail.com',
        password: 'sdfyoda3sd3'
    }).expect(201)
})