<template>
  <div>
    <div v-for="(row, i) in blogPosts" :key="row.number">
      <h5 @click="$router.push(`detail/${i}`)">{{row.title}}</h5>
      <p>{{row.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    blogPosts: Array
  }
}
</script>

<style>

</style>