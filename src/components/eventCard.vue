<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ evento.nome }}</ion-card-title>
    </ion-card-header>

    <ion-button @click="$emit('favoritar', evento)">
      Favoritar
    </ion-button>
  </ion-card>
</template>

<script setup>
defineProps(['evento'])
defineEmits(['favoritar'])
</script>