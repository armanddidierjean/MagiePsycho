<template>
    <UNavigationMenu :items="items" class="w-full justify-center" />
</template>

<script lang="ts" setup>
// flex flex-col items-center justify-center
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
    {
        label: 'Le livre',
        icon: 'heroicons-book-open',
        to: '/',
    },
    {
        label: 'Les auteurs',
        icon: 'heroicons-user-circle',
        to: '/auteurs',
    },
    {
        label: 'On en parle',
        icon: 'heroicons-chat-bubble-bottom-center-text',
        to: '/press',
    },
    {
        label: 'Les vidéos',
        icon: 'heroicons-video-camera',
        to: '/videos/1',
    },
])
</script>

<style></style>