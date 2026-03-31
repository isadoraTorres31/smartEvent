<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1>SmartEvent</h1>
      <ion-button router-link="/eventos"> Ver Eventos </ion-button>
      <ion-list>
  <ion-item v-for="evento in eventos" :key="evento.id" :router-link="`/eventos/${evento.id}`">
    {{ evento.nome }}
  </ion-item>
</ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonItem, IonList, IonPage } from '@ionic/vue'
import { useEventos } from '@/composables/useEventos'

const { eventos } = useEventos()
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
