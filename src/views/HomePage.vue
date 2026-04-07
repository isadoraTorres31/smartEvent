<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-back-button slot="start"></ion-back-button>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>SmartEvent</h1>
      <ion-button router-link="/favoritos">Favoritos</ion-button>
      <ion-button router-link="/perfil">Perfil</ion-button>
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
import { IonBackButton, IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
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
