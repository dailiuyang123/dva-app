import {getUser} from '../services/user';

export default {

  namespace: 'indexpage',

  state: {

    columns: [{
      title: '姓名',
      dataIndex: 'name',
    }, {
      title: '性别',
      dataIndex: 'gender',
    }],
    data: [{
      "key": "1",
      "name": "王大斌",
      "gender": "男"
    }, {
      "key": "2",
      "name": "刘小洋",
      "gender": "男"
    }]

  },

  // 绑定页面
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步请求
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    *addUser({ payload }, { call, put }) {  // eslint-disable-line
      const myuser = yield call(getUser, {});
      yield put({  
        type: 'ADD_USER',
        payload: {
              myuser:myuser.data
        },
      });
    },
  },

  // 修改 state
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    ADD_USER(state, action) {
      return { ...state, 
        data:state.data.concat(action.payload.myuser) };
    },
  },

};
