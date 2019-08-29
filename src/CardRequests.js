import axios from 'axios';

class CardRequests{
    getAll(){
        return axios.get(`http://localhost:8080/getAll`);
    }
}
export default new CardRequests();