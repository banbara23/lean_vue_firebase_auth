<template>
<div class="signin">
  <h2>Sign up</h2>
  <input type="text" placeholder="Username" v-model="username">
  <input type="password" placeholder="Password" v-model="password">
  <button>Register</button>
  <p>Do you hav an account?account
    <router-link to="/signup">sign in now!!</router-link>
  </p>
</div>
</template>

<script>
export default {
  name: "Signin",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {}
};
</script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
