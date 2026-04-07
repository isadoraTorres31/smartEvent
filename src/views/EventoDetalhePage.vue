<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-back-button slot="start"></ion-back-button>
        <ion-title>Detalhes do Evento</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Detalhes do Evento</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" v-if="evento">
        <h2>{{ evento.nome }}</h2>
        <p>Informações detalhadas sobre o evento selecionado.</p>
        <ion-button @click="toggleFavorito" :color="evento.favorito ? 'danger' : 'primary'">
          {{ evento.favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos' }}
        </ion-button>
      </div>
      <div v-else>
        Evento não encontrado.
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useEventos } from '@/composables/useEventos'

const route = useRoute()
const { eventos } = useEventos()

const evento = computed(() =>
  eventos.value.find((e: any) => e.id == route.params.id)
)

const toggleFavorito = () => {
  if (evento.value) {
    evento.value.favorito = !evento.value.favorito
  }
}
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