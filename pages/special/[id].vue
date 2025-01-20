<template>
    <div>
        <h1 class="text-xl text-center p-4">{{ route.params.id }}</h1>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()


// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)


</script>