import axios from 'axios';

const BASE_URL = 'https://uat-apis.ssctech.com';

const httpService = (url, type = 'get', data, bankconfig, queryParams) => {
  let config
  if(!bankconfig){
    config = {
      params: queryParams ? queryParams : {},
      headers: {
        'Authorization':`Bearer ${window.localStorage.getItem('token')}`,
        'content-type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'authorizationContext':'type=SSN|value=898778987',
        'tenant': 'hmrcs',
        'system': 'mfb',
        'fundSponsorId': '26',
        'securityChannel': 'ta-shd',
        'apikey': '97fcdbccc4a24dd192e080a8af4705e9'
      }
    }
  } else {
    config = {
      headers: {
        'Authorization':`Bearer ${window.localStorage.getItem('bankToken')}`,
        'content-type':'application/json',
        'bankAccountVerificationKey': 'dst',
        'apikey': 'c7e36741aafb4baf839efec45bff8217'
      }
    }
  }
	let full_url = BASE_URL + url;
  
  if (type === "get") {
    return axios.get(full_url, config);
  } else {
    return axios[type](full_url, data, config);
  }
}

const queryParams = {
  endDate: new Date().toLocaleDateString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"}),
  requestType:"Pending and Cancelled Pending Activity",
  startDate:"01/01/2020"
}

const BankService = {
  getAccountSummary: () => 
    httpService("/ams-uat/financialServices/ams/v1/accounts/summary", "get")
  ,
  getPositionSummary: () =>
    httpService("/ams-uat/financialServices/ams/v1/positions/summary", "get")
  ,
  getAccountBalance: (accountID, calculationDate) => 
    httpService(`/ams-uat/financialServices/ams/v1/accounts/${accountID}/balances?asOfCalculationDate=${calculationDate}`, "get")
  ,
  getPositionBalance: (positionID) => {
    httpService(`/ams-uat/financialServices/ams/v1/positions/${positionID}/balances`, "get").then(function (response) {
      console.log("PositionBalance",response);
    });
  },
  getAccountBankinstruction: (accountID) => 
    httpService(`/ams-uat/financialServices/ams/v1/accounts/${accountID}/bankInstructions?isDefault=false&bankInstructionType=All`, "get")
  ,
  additionalInvestment: (payload) => 
    httpService(`/ams-uat/financialServices/ams/v1/purchase`, "post",payload)
  ,
  bankVerification: (payload) => 
    httpService(`/bankverification-uat/globals/bankAccountVerification`, "post",payload, "bankConfig")
  ,
  addBankAccount: (accountID,payload) => 
    httpService(`/ams-uat/financialServices/ams/v1/accounts/${accountID}/bankInstructions`, "post",payload)
  ,
  getPendingRequest: (accountID) => 
    httpService(`/ams-uat/financialServices/ams/v1/accounts/${accountID}/financialActivity`, "get",null,null,queryParams)
    
};

export default BankService;
