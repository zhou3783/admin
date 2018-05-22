<template>
  <div class="hello">
   {{name}} 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "登录页面",
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>