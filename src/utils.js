import request from 'superagent';
const URL = 'https://evening-meadow-11540.herokuapp.com';

// CRUD Functions
export async function createItem(itemData) {
    const { body } = await request
        .post(`${URL}/magicItems/`)
        .send(itemData);
    return body;
}

export async function getAllItems() {
    const { body } = await request.get(`${URL}/magicItems`);
    return body;
}

export async function getOneItem(id) {
    const { body } = await request.get(`${URL}/magicItems/${id}`)
    return body;
}

export async function getAllTypes() {
    const { body } = await request.get(`${URL}/types`);
    return body;
}

export async function updateItem(id, itemData) {
    const { body } = await request
        .put(`${URL}/magicItems/${id}`)
        .send(itemData);
    return body;
}

export async function deleteItem(id) {
    const { body } = await request.delete(`${URL}/magicItems/${id}`);
    return body;
}