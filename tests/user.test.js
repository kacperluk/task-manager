const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Rick',
    email: 'rick.sanchez@gmail.com',
    password: 'sdfyoda3sd3'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Rick2',
        email: 'rick2.sanchez@gmail.com',
        password: 'sd2sdffyoda3sd3'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'not_real_user@gmial.com',
        password: 'not_real_password'
    }).expect(400)
})