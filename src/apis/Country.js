import Api from "./Api";

export default {
  all() {
    return Api.get("all");
  },

  show(name) {
    return Api.get(`name/${name}`);
  },
};
