import axios from 'axios'
import { Auth } from '@/firebase'

const productsURL = 'api/products'

function ProductException (message) {
  this.message = message
}

export default {
  async getProducts () {
    try {
      const token = await Auth.currentUser?.getIdToken(true)
      const response = await axios.get(productsURL, { headers: { Authorization: `Bearer ${token}` } })
      return response.data
    } catch (error) {
      throw new ProductException('No se pudo')
    }
  }
}
