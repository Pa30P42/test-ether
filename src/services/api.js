import axios from "axios";
const APIKEY = "BPWQ3DP4NUAZNXIG1BVRXWXK22ICX2GXMZ";
const ADDRESS = "0xa145ac099e3d2e9781c9c848249e2e6b256b030d";

export default {
  async getEtherBalance() {
    try {
      const response = axios.get(
        `https://api.etherscan.io/api?module=account&action=balance&address=${ADDRESS}&tag=latest&apikey=${APIKEY}
`
      );
      //   console.log(response);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getListNormalTransaction() {
    try {
      const response = axios.get(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&page=1000&offset=10&sort=asc&apikey=${APIKEY}`
      );
      // console.log(response);
      return response;
    } catch (error) {
      throw new Error();
    }
  },
  async getInternalTransactions() {
    try {
      const response = axios.get(`
      https://api.etherscan.io/api?module=account&action=txlistinternal&address=${ADDRESS}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=${APIKEY}`);
      return response;
    } catch (error) {
      throw new Error();
    }
  },
  async getErcToken() {
    try {
      const response = axios.get(
        `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${ADDRESS}&page=1&offset=100&sort=asc&apikey=${APIKEY}`
      );
      return response;
    } catch (error) {
      throw new Error();
    }
  },
};
