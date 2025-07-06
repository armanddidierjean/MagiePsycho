<template>
    <div>
        <UCard class="mb-10">
            <div class="text-xl relative">
                <UIcon name="ri:double-quotes-l" class="w-8 h-8 -top-3 -left-3 absolute text-gray-300" />
                <span class="relative">Si j'avais connu cet ouvrage de mon vivant, j'aurais mieux compris ce que je
                    faisais</span>
            </div>
            <div class="italic text-right mt-4">Jean-Eugène Robert-Houdin (1805-1871)</div>
        </UCard>

        <!-- expression_uuid & https://contribuer.geotribu.fr/guides/audio/#emissions-radio-france-->
        <iframe frameborder="0" height="200" width="100%"
            src="https://www.franceinter.fr/embed/player/aod/dd3afcae-41a3-4d56-8bd3-c92bbc4303b8"
            allow="autoplay"></iframe>

        <iframe frameborder="0" height="200" width="100%"
            src="https://embed.radiofrance.fr/francebleu/player?id_diffusion=02b35d00-b2b9-4cf6-b775-29e58e39faa4"
            allow="autoplay"></iframe>

        <UCard class="mb-16">
            <div class="flex flex-row gap-4 items-center">
                <NuxtImg src="images/RFI.svg" height="48" width="48" alt="RFI" />
                <div class="flex flex-col">
                    <NuxtLink to="https://rfi.my/Bht2" class="hover:underline">Comment les prestidigitateurs manipulent
                        notre cerveau ?
                    </NuxtLink>
                    <span class="text-xs">
                        Autour de la question, le magazine de toutes les sciences
                    </span>
                </div>
            </div>
        </UCard>


        <div class="relative w-full pb-[56.25%] mb-8">
            <div class="absolute top-0 left-0 w-full h-full">
                <ScriptYouTubePlayer video-id="BkLqjWimIB8" :player-vars="{ start: 1990, end: 2409 }"
                    trigger="visible" />
            </div>
        </div>


    </div>


</template>