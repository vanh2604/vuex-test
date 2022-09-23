<template>
  <tbody>
    <user-item v-for="user in userList" :user="user" :key="user.id"></user-item>
  </tbody>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UserItem from "./UserItem.vue";
const { mapActions, mapState } = createNamespacedHelpers("user");
export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
  },
  methods: {
    ...mapActions({
      getAllUsers: "getAllUsers",
    }),
  },
  created() {
    console.log(this.$store);
    this.getAllUsers();
  },
};
</script>

<style></style>
