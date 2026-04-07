<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-back-button slot="start"></ion-back-button>
        <ion-title>Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Favoritos</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div v-if="favoritos.length === 0">
          Nenhum favorito ainda 😢
        </div>
        <ion-list v-else>
          <ion-item v-for="evento in favoritos" :key="evento.id">
            {{ evento.nome }}
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { IonBackButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useEventos } from '@/composables/useEventos'

const { eventos } = useEventos()

const favoritos = computed(() =>
  eventos.value.filter((e: any) => e.favorito)
)
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