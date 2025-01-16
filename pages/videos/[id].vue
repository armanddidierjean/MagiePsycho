<template>
  <div>
    <h1 class="text-xl text-center p-4">Video {{ videoId }} - {{ video.title }}</h1>

    <iframe width="560" height="315" :src="video.url" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <div class="p-4">{{ video.description }}</div>

    <div class="flex flex-row justify-items-stretch w-max">
      <UButton :to="String(videoId - 1)" :disabled="videoId == 0">Vidéo Précédente</UButton>
      <UButton :to="String(videoId + 1)" :disabled="videoId >= videoList.length - 1">Vidéo suivante</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const videoList = [
  {
    title: "Première vidéo",
    description: "Description de la vidéo 0",
    url: "https://www.youtube-nocookie.com/embed/vJG698U2Mvo?si=TjIjxbpFQv4SdqzS",
  },
  {
    title: "Seconde vidéo",
    description: "Description de la vidéo 1",
    url: "https://www.youtube.com/embed/wkTsl0qZp7g?si=Vbk9LGbKV5eS018q",
  }
]

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

const videoId = Number(route.params.id)

if (videoId < 0 || videoId >= videoList.length || isNaN(videoId)) {
  // Redirect to the first video if the video_id is invalid
  console.log("Redirecting to the first video")
  await navigateTo(`/videos/0`)
}

const video = videoList[videoId] ?? {
  title: "",
  description: "",
  url: ""
}

</script>