import axios from "axios";

const BASE_URL ="http://localhost:8667/api/addresses";

class AddressService{

    createAddress(address){
        return axios.post(BASE_URL, address);
    }

}
export default new AddressService()