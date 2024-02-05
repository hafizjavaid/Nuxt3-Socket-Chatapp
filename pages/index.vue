<template>
  <div>
    <UCard class="max-w-[600px] mx-auto" :ui="{ body: { padding: 'p-5 sm:p-8' } }">
      <template #header>
        <div class="flex items-center justify-center gap-x-3 text-primary">
          <UIcon
            name="i-heroicons-chat-bubble-left-right"
            class="w-9 h-9 font-semibold"
          />
          <div class="text-primary font-semibold text-center text-3xl">Nuxt Discord</div>
        </div>
      </template>

      <UForm :state="state" @submit="onSubmit" class="space-y-6">
        <UFormGroup label="Username" name="username">
          <UInput v-model="state.username" />
        </UFormGroup>

        <UFormGroup label="Room" name="room">
          <USelect v-model="state.room" :options="rooms" />
        </UFormGroup>

        <UButton type="submit" size="xl" block :disabled="!state.username || !state.room">
          Join Discord
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
const rooms = ['nuxt installation', 'nuxt guide', 'nuxt api', 'nuxt examples'];
const state = reactive({
  username: '',
  room: rooms[0],
});

async function onSubmit(event: FormSubmitEvent<any>) {
  navigateTo(`/chat?username=${state.username}&room=${state.room}`);
}
</script>

<style scoped></style>
