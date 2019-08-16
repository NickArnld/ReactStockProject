import axios from "axios";
let tokenKey = 'pk_e9e3c572aa484f17b26c647756e66a0b';

export default {
    companyInfo: function(symbol){
        return axios({
            method: 'GET',
            url: `https://cloud.iexapis.com/v1/stock/${symbol}/company`,
            params: {
                'token' : tokenKey
            }, 
            headers: {
                'content-type' : 'application/json'
            }
        })
    },

    chart1M: function(symbol){
        return axios({
            method: 'GET',
            url: ``,
            params: {
                'token' : tokenKey
            }, 
            headers: {
                'content-type' : 'application/json'
            }
        })
    }
}