import axiosInstance from '../'

export async function getAllShopList () {
  return axiosInstance.get('/shop')
}
