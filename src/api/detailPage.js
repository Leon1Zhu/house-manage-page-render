import * as api from 'axios';

const getHouseByIdApi = '/api/getHouseById';

// 新增预约信息
const addSubscribeApi = '/api/addSubscribe';

const getHouseById = function (houseid) {
  const params = {
    houseid
  }
  return api.get(getHouseByIdApi, {params});
};

const addSubscribe = function (phone, name, proId, type, origin) {
  const params = {
    phone,
    name,
    proId,
    type,
    origin,
  }
  return api.post(addSubscribeApi, null, {params});
};

export default {
  getHouseById,
  addSubscribe,
};
