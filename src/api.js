import axios from 'axios';


const api = axios.create({
  baseURL: 'https://dc-fd.duckcloud.info',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ff106e05d3cdc3d6effd10209cb9bae2a10e39eabac0b042c65f9796d34030cdcf273e96f416e7757ffe731d5acbbd7b684b07af6382de774afda2051f013299219464e99884039dba8aa93fd26db66528f3e2e2924575665137bef712e2d29f2d289aec14d27efd5537fbc57fd9b96cde9ea82f30b78cd0f8296c71806003c1',
  },
});

export default api;
