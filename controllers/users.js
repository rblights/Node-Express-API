import initialUsers from '../user.json' with { type: 'json'}
import { v4 as uuidv4 } from 'uuid';

let users = initialUsers.map((user) => ({
    ...user,
    id: uuidv4()
}))

export const createUser = (req, res) => {
    console.log('POST Route Reached')
    console.log(req.body);

    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User ${user.firstName} added to the DB`);
}

export const getUser = (req, res) => {
    console.log(req.params);
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const getUsers = (req, res) => {
    res.send({
        message: "Hello",
        data: users
    });
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;

    users = users.filter((user) => user.id != id);

    res.send(`User ${user.firstName} removed from DB`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToBeUpdated = users.find((user) => user.id === id);

    if(firstName) userToBeUpdated.firstName = firstName;

    if(lastName) userToBeUpdated.lastName = lastName;

    if(age) userToBeUpdated.age = age;

    res.send(`User ${userToBeUpdated.firstName} has been updated`)
}

