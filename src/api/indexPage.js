import * as api from 'axios';

// 获取猜你喜欢房子
const getLikeHouseApi = '/api/getLikeHouse';

// 获取猜你
const getGoodHouseApi = '/api/getGoodHouse';

// 点击拨打电话保存记录
const addCallListApi = '/api/addNewPersonTel';

const addCallList = function (telOrigin, telNumber, houseId) {
  const params = {
    telOrigin,
    telNumber,
    houseId
  };
  return api.post(addCallListApi, params, {params});
};

const getLikeHouse = function (page, size) {
  const params = {
    page,
    size,
  };
  return api.get(getLikeHouseApi, {params});
};

const getGoodHouse = function (page, size) {
  const params = {
    page,
    size,
  };
  return api.get(getGoodHouseApi, {params});
};

export default {
  getLikeHouse,
  getGoodHouse,
  addCallList,
};
