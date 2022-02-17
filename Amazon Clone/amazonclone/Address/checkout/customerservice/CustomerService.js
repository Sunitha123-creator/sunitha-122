import axios from "axios";

const BASE_URL ="http://localhost:8222/api/customers";

class CustomerService{

    createCustomer(customer){
        return axios.post(BASE_URL, customer);
    }

}
export default new CustomerService()