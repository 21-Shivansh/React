import { axiosInstance } from "../config/axiosInstance"

export const fetchProductsApi = async () => {
    try {
      let res = await axiosInstance.get('/products')
      return res.data.products
    } catch (error) {
      console.log(error)
    }
  }