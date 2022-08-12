<template>
    <div>
        <h4>상세페이지</h4>
        <h5>{{blogPosts[$route.params.id].title}}</h5>
        <p>{{blogPosts[$route.params.id].content}}</p>
        <p>{{blogPosts[$route.params.id].date}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "DetailPage",
    props: {
        blogPosts: Array
    }
}
</script>

<style>

</style>