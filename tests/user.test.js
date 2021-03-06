const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setupDatbase } = require('./fixtures/db')

beforeEach(setupDatbase)

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Rick2',
        email: 'rick2.sanchez@gmail.com',
        password: 'sd2sdffyoda3sd3'
    }).expect(201)


    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Rick2',
            email: 'rick2.sanchez@gmail.com'
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('sd2sdffyoda3sd3')
})

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'not_real_user@gmial.com',
        password: 'not_real_password'
    }).expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should not delete account for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/dog1.jpeg')
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user', async () => {
    const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({ name: 'Morty' })
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toBe('Morty')
})

test('Should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .send({ location: 'Radom' })
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .set('Content-Type', 'application/json')
        .expect(400)
})