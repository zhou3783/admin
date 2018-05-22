<template>
  <div class="main">
   {{name}} 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "前台页面",
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
