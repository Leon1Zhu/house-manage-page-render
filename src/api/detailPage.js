import * as api from 'axios';

const getHouseByIdApi = '/api/getHouseById';

const getHouseById = function (houseid) {
  const params = {
    houseid
  }
  return api.get(getHouseByIdApi, {params});
};

export default {
  getHouseById,
};
