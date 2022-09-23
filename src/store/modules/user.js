import { getAllUsers } from "../../api/user";

const state = {
  userList: [],
};

const mutations = {
  setUserList(state, payload) {
    state.userList = payload;
  },
};

const actions = {
  async getAllUsers({ commit }) {
    const payload = await getAllUsers();
    console.log(payload);
    commit("setUserList", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
