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
            localStorage.setItem('token', res.headers.token)
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}

export const getUsers = token => {
    //console.log(token);
    axios.defaults.headers['Authorization'] = token;
    return axios 
        .get('/users')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
}

