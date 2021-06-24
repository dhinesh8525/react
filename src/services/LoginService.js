import axios from 'axios';

const BASE_URL = "https://uat-apis.ssctech.com/"

const params = {
    grant_type: 'client_credentials',
    scope: 'email',
    client_id: 'b2f47d69-4d03-4f7a-bb5b-2a03035a2aed',
    client_secret: 'fff413a9-e65b-4ff5-95e2-7969c9d8829b',
    'Client Authentication': 'Send as Basic Auth header'
};
const data = Object.keys(params)
.map((key) => `${key}=${encodeURIComponent(params[key])}`)
.join('&');

export const getAccessToken = () => {
    return axios.post(BASE_URL + 'ams-uat/oauth2/token', data, {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Accept': 'application/json',   
        }
    })
}

const params1 = {
    grant_type: 'client_credentials',
    scope: 'email',
    client_id: '7b8f6307-5a3b-4219-9932-b6f3704e0c2b',
    client_secret: '25262e2f-b073-4bf3-a479-2cae37609ae9',
    'Client Authentication': 'Send as Basic Auth header'
};
const data1 = Object.keys(params1)
.map((key) => `${key}=${encodeURIComponent(params1[key])}`)
.join('&');

export const getBankAccessToken = () => {
    return axios.post(BASE_URL + 'bankverification-uat/oauth2/token', data1, {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Accept': 'application/json',   
        }
    })
}
