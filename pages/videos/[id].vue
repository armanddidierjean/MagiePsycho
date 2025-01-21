<template>
  <div class="w-100% px-10 md:px-40 lg:px-80">
    <h1 class="text-xl text-center p-4">Video {{ videoId }} - {{ video.title }}</h1>

    <div class="flex flex-col justify-center">

      <div v-if="video.type == Type.vimeo">

        <ScriptVimeoPlayer :id="Number(video.url)" :vimeoOptions="{
          autoplay: true,
          loop: true
        }" trigger="visible">
        </ScriptVimeoPlayer>
      </div>
      <div v-else-if="video.type == Type.youtube">

        <ScriptYouTubePlayer :video-id="video.url" trigger="visible">
        </ScriptYouTubePlayer>

      </div>

      <iframe v-if="video.type == Type.youtubeShort" width="315" height="560"
        :src="'https://www.youtube-nocookie.com/embed/' + video.url" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>


    </div>


    <div class=" p-4">
      {{ video.description }}
    </div>

    <div class="flex flex-col items-center">

      <div class="flex flex-row justify-items-stretch w-max gap-4">
        <UButton :to="String(videoId - 1)" :disabled="videoId <= 1">Vidéo Précédente</UButton>
        <UButton :to="String(videoId + 1)" :disabled="videoId >= videoList.length">Vidéo suivante</UButton>
      </div>

      <div class="flex flex-col my-5">
        <NuxtLink :class="'hover:text-orange-500 ' + (index + 1 == videoId ? 'text-orange-600' : '')"
          v-for="video, index in videoList" :to="videoUrl(index + 1)" :key="index">
          {{ index + 1 }} - {{ video.title }}
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const route = useRoute()


enum Type {
  youtube,
  vimeo,
  youtubeShort
}

const videoList = [
  {
    title: "Première vidéo",
    description: "Description de la vidéo 1",
    url: "vJG698U2Mvo",
    type: Type.youtube
  },
  {
    title: "Seconde vidéo",
    description: "Description de la vidéo 2",
    url: "wkTsl0qZp7g",
    type: Type.youtube
  },
  {
    title: "Troisieme vidéo",
    description: "Description de la vidéo 3",
    url: "81039224",
    type: Type.vimeo
  },
  {
    title: "Quatrieme vidéo",
    description: "Description de la vidéo 4",
    url: "ERQrgb1YnoM",
    type: Type.youtube
  },
  {
    title: "Cinquième vidéo",
    description: "Description de la vidéo 5",
    url: "v3iPrBrGSJM",
    type: Type.youtube
  },
  {
    title: "Sixieme vidéo",
    description: "Description de la vidéo 6",
    url: "U0q-Lu_5Lr8",
    type: Type.youtube // TODO maybe use short
  },
  {
    title: "Septieme vidéo",
    description: "Description de la vidéo 7",
    url: "SYeeTvitvFU",
    type: Type.youtube
  },
  {
    title: "Huitieme vidéo",
    description: "Description de la vidéo 8",
    url: "aSljSwvsUYk",
    type: Type.youtubeShort
  },
]

function videoUrl(videoId: number) {
  return `/videos/${videoId}`
}

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

const videoId = Number(route.params.id)

if (videoId < 1 || videoId > videoList.length || isNaN(videoId)) {
  // Redirect to the first video if the video_id is invalid
  console.log("Redirecting to the first video")
  await navigateTo(videoUrl(1))
}

const video = videoList[videoId - 1] ?? {
  title: "",
  description: "",
  url: ""
}

</script>