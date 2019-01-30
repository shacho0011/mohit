import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            phone: newUser.phone,
            address: newUser.address
        })
        .then(res => {
            console.log('Registered!')
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post('/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            //localStorage.setItem('usertoken', res.data)
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}

export const getUsers = () => axios
    .get('/users')
    .then(res => {
        //console.log(res.data);
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })

