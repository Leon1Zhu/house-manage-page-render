import * as api from 'axios';

// 获取猜你喜欢房子
const getLikeHouseApi = '/api/getLikeHouse';

// 获取猜你
const getGoodHouseApi = '/api/getGoodHouse';

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
};
