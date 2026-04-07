<template>
  <ion-page>

    <ion-content class="ion-padding"> <!-- Conteúdo da página com preenchimento -->
      <h1>SmartEvent</h1>
      <ion-button router-link="/eventos"> Ver Eventos </ion-button> <!-- Botão para navegar para a página de eventos botão do coiso -->

      <ion-list>
  <ion-item v-for="evento in eventos" :key="evento.id" :router-link="`/eventos/${evento.id}`">
    {{ evento.nome }}
  </ion-item> <!-- Exibe cada evento como um item de lista com um link para sua página individual pq tá usando as variavel dos coiso -->
</ion-list> <!-- Exibe a lista de eventos com links para suas páginas individuais -->

    </ion-content>

  </ion-page>

  <h2>⭐ Meus Favoritos</h2>

<div v-if="favoritos.length === 0">
  Nenhum favorito ainda
</div>

<ion-list v-else>
  <ion-item v-for="evento in favoritos" :key="evento.id">
    {{ evento.nome }}
  </ion-item>
</ion-list>

</template>

<!-- Script setup (estrutura, talvez) para a página inicial, usando TypeScript (linguagem usada) -->
<!-- import1 Importação estilo dos componentes do Ionic Vue e import2 funcionalidade do composable useEventos para acessar os eventos -->
<!-- const Acessa a lista de eventos usando o composable useEventos, permitindo que a página exiba os eventos disponíveis -->
<script setup lang="ts"> 
import { computed, unref } from 'vue'
import { IonButton, IonContent, IonItem, IonList, IonPage } from '@ionic/vue'
import { useEventos } from '@/composables/useEventos'

const { eventos } = useEventos()
const favoritos = computed(() => unref(eventos).filter(evento => evento.favorito))
</script>

<!-- Estilos específicos para a página inicial, usando CSS (linguagem de estilo) -->
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
