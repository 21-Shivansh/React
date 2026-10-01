import axios from 'axios'
import React from 'react'

export const getUsers = async() => {
    let res = await axios.get('https://fakestoreapi.com/users');
    console.log(res.data)
}
