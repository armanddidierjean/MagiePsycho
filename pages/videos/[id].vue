<template>
  <div class="w-100% px-10 md:px-40 lg:px-80">
    <h1 class="text-xl text-center font-semibold p-8">Video {{ videoId }} - {{ video.title }}</h1>

    <div class="flex flex-col justify-center items-center">

      <div v-if="video.type == Type.vimeo" class="w-full max-w-full flex flex-col items-center">
        <ScriptVimeoPlayer :id="Number(video.url)" :vimeoOptions="{
          autoplay: true,
          loop: true
        }" trigger="visible">
        </ScriptVimeoPlayer>
      </div>
      <div v-else-if="video.type == Type.youtube" class="w-full max-w-full flex flex-col items-center">
        <ScriptYouTubePlayer :video-id="video.url" trigger="visible">
        </ScriptYouTubePlayer>
      </div>


      <iframe v-if="video.type == Type.youtubeShort" width="315" height="560"
        :src="'https://www.youtube-nocookie.com/embed/' + video.url" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>


      <div class="p-8">
        <!-- <UIcon name="i-heroicons-bookmark-solid" class="w-5 h-5" /> -->
        <div class="flex flex-row items-center italic">
          <UIcon name="i-heroicons-newspaper" class="w-5 h-5 mr-2" />
          Chapitre {{ currentChapter }} - page 10
        </div>
        {{ video.description }}
      </div>
    </div>




    <div class="flex flex-col items-center">

      <div class="flex flex-row justify-items-stretch w-max gap-4">
        <UButton :to="String(videoId - 1)" :disabled="videoId <= 1">Vidéo Précédente</UButton>
        <UButton :to="String(videoId + 1)" :disabled="videoId >= videoList.length">Vidéo suivante</UButton>
      </div>

      <div class="flex flex-col my-5">

        <div v-for="chapter in chapters" :key="chapter.title">
          <div class="text-lg font-semibold my-2">Chapitre {{ chapter.number }} : {{ chapter.title }}</div>
          <div class="flex flex-col">
            <NuxtLink :class="'hover:text-orange-500 ' + (index + 1 == videoId ? 'text-orange-600' : '')"
              v-for="index in chapter.videos" :to="videoUrl(index + 1)" :key="index">
              {{ index + 1 }} - {{ videoList[index]?.title }}
            </NuxtLink>
          </div>

        </div>

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

const chapters = [
  {
    number: 1,
    title: "Comment faire disparaître un clown à monocycle",
    videos: [0, 1]
  },
  {
    number: 2,
    title: "Faire apparaître une montagne en un clin d’œil",
    videos: [2, 3, 4]
  },
  {
    number: 3,
    title: "Voir à travers la matière sans rayon X	",
    videos: [5, 6, 7]
  },
  {
    number: 5,
    title: "Le mystère de la balle qui disparaît en l’air",
    videos: [8, 9, 10]
  },
  {
    number: 6,
    title: "Comment ne plus perdre au bonneteau",
    videos: [11, 12, 13, 14]
  },
  {
    number: 7,
    title: "Survivre à l’assaut de plusieurs lames affûtées",
    videos: [15, 16]
  },
  {
    number: 9,
    title: "Pensez à une carte, celle que je veux !",
    videos: [17, 18]
  },
]

const videoList = [
  {
    title: "Expérience de Simon et Chabris",
    description: "Description de la vidéo 1",
    url: "vJG698U2Mvo",
    type: Type.youtube
  },
  {
    title: "Expérience de Barnhart et Goldinger",
    description: "Description de la vidéo 2",
    url: "Y1ndudvMLpU",
    type: Type.youtube
  },
  {
    title: "Expérience de Simon et Levin",
    description: "Description de la vidéo 3",
    url: "81039224",
    type: Type.vimeo
  },
  {
    title: "Exemple de cécité à un changement progressif",
    description: "Description de la vidéo 4",
    url: "ERQrgb1YnoM",
    type: Type.youtube
  },
  {
    title: "Illustration de la cécité au changement par Richard Wiseman",
    description: "Description de la vidéo 5",
    url: "v3iPrBrGSJM",
    type: Type.youtube
  },
  {
    title: "L’illusion de la sphère qui lévite",
    description: "Description de la vidéo 6",
    url: "U0q-Lu_5Lr8",
    type: Type.youtube // TODO maybe use short
  },
  {
    title: "L’illusion d’absence responsable d’accidents de la route",
    description: "Description de la vidéo 7",
    url: "SYeeTvitvFU",
    type: Type.youtube
  },
  {
    title: "Plusieurs illusions s’appuyant sur de la complétion perceptive",
    description: "Description de la vidéo 8",
    url: "aSljSwvsUYk",
    type: Type.youtubeShort
  },

  {
    title: "La balle qui disparaît en l’air",
    description: "Description de la vidéo",
    url: "_y5kezYmGS4",
    type: Type.youtubeShort
  },
  {
    title: "Faux transfert d’une pièce",
    description: "Description de la vidéo",
    url: "4GXjDL6W2Ns",
    type: Type.youtubeShort
  },
  {
    title: "L’illusion de la pièce qui disparaît en l’air",
    description: "Description de la vidéo",
    url: "NYD5A-y3qkE",
    type: Type.youtubeShort
  },
  {
    title: "L’illusion du comptage optique",
    description: "Description de la vidéo",
    url: "zZYfNLMiGcY",
    type: Type.youtubeShort
  },
  {
    title: "Distribution normale de cartes et comptage optique",
    description: "Description de la vidéo",
    url: "pfhWnr5ICJc",
    type: Type.youtubeShort
  },
  {
    title: "Plusieurs tours reposant sur l’erreur de substitution",
    description: "Description de la vidéo",
    url: "_QlHhNZnuU0",
    type: Type.youtubeShort
  },
  {
    title: "Exemple de mouvement utilisé au jeu du bonneteau",
    description: "Description de la vidéo",
    url: "jJAxDD4hLCk",
    type: Type.youtubeShort
  },
  {
    title: "Première version du tour utilisé par Thomas, Didierjean et Kuhn",
    description: "Description de la vidéo",
    url: "sUF9IPoTfHA",
    type: Type.youtubeShort
  },
  {
    title: "Seconde version du tour utilisé par Thomas, Didierjean et Kuhn",
    description: "Description de la vidéo",
    url: "0HNetH8zP38",
    type: Type.youtubeShort
  },
  {
    title: "Technique de forçage à l’effeuillage",
    description: "Description de la vidéo",
    url: "9E4Cx6DjfhU",
    type: Type.youtubeShort
  },
  {
    title: "Forçage gestuel utilisé par Pailhès et Kuhn",
    description: "Description de la vidéo",
    url: "yhuXIMq-Qrw",
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

// Get index of the current chapter
const currentChapter = chapters.find(chapter => chapter.videos.includes(videoId - 1))?.number ?? 0

</script>