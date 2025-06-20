<template>
    <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold">Les auteurs</h1>

        <div class="flex flex-col items-center" v-for="author in authors" :key="author.name">
            <h2 class="text-2xl font-bold mb-4 mt-10">{{ author.name }}</h2>
            <p class="text-lg mb-4"> {{ author.desc }} </p>

            <ul>
                <li v-for="link in author.links" :key="link.text">
                    <NuxtLink :to="link.url"
                        class="flex flex-row items-center justify-center hover:text-red-500 cursor-pointer">
                        <UIcon :name="link.icon" class="mr-1" /> {{ link.text }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const authors = [
    {
        name: 'Cyril Thomas',
        desc: `Cyril Thomas est magicien et créateur de tours pour de nombreux prestidigitateurs dans le monde. Il est
                également
                maître de conférences en psychologie cognitive et membre junior de l’Institut universitaire de France.
                Ses travaux
                de recherche portent sur la compréhension des biais cognitifs utilisés dans la prestidigitation.`,
        links: [
            {
                icon: 'heroicons:envelope',
                url: 'mailto:cyril.thomas@univ-fcomte.fr',
                text: 'cyril.thomas@univ-fcomte.fr'
            },
            {
                icon: 'heroicons:cursor-arrow-rays',
                url: 'https://laboratoire-psychologie.univ-fcomte.fr/cyril-thomas/',
                text: 'Laboratoire de psychologie'
            },
            {
                icon: 'academicons:researchgate-square',
                url: 'https://www.researchgate.net/profile/Cyril-Thomas-4',
                text: 'ResearchGate'
            }
        ]
    },
    {
        name: 'André Didierjean',
        desc: `André Didierjean est professeur de psychologie
                cognitive et membre senior de l’Institut universitaire de France. Ses recherches portent sur les
                biais de raisonnement, l’attention, la psychologie de l’expertise, ou encore la perception visuelle.`,
        links: [
            {
                icon: 'heroicons:envelope',
                url: 'mailto:andre.didierjean@univ-fcomte.fr',
                text: 'andre.didierjean@univ-fcomte.fr'
            },
            {
                icon: 'heroicons:cursor-arrow-rays',
                url: 'https://laboratoire-psychologie.univ-fcomte.fr/andre-didierjean/',
                text: 'Laboratoire de psychologie'
            },
            {
                icon: 'academicons:researchgate-square',
                url: 'https://www.researchgate.net/profile/Andre-Didierjean',
                text: 'ResearchGate'
            }
        ]

    }
]

</script>