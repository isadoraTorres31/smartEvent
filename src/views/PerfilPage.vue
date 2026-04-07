<template>
  <ion-page>
    <ion-header :translucent="true"> <!-- Cabeçalho da página com efeito translúcido, usando o componente IonHeader do Ionic Vue, div a coisa semantica, flex -->

      <ion-toolbar> <!-- Cabeçalho da página com barra de ferramentas, usando o componente IonHeader do Ionic Vue, div a porrinha perfeita -->
        <ion-title>Perfil</ion-title> <!-- h1 -->
      </ion-toolbar>

    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>

          <ion-title size="large">Perfil</ion-title>

        </ion-toolbar>
      </ion-header>

      <div id="container"> 
        <strong>Seu Perfil</strong>
        <p>Gerencie suas informações pessoais.</p>
        <ion-input v-model="nome" label="Nome"></ion-input> <!-- Campo de entrada para o nome, usando o componente IonInput do Ionic Vue, v-model para vincular o valor do campo à variável nome -->
      </div>
    </ion-content>
  </ion-page>
</template>

<!-- Importação das funções ref(constante atualizção) e watch (fala se mudou o que to procurando) do Vue para criar reatividade e observar mudanças na variável nome -->

<!-- constnome Variável reativa para armazenar o nome do usuário, usando a função ref do Vue para criar uma referência reativa -->
 
<!-- watch Observa mudanças na variável nome e registra o novo valor no console, usando a função watch do Vue para criar um observador reativo -->
<script setup lang="ts">
import { ref, watch } from 'vue' 
import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/vue'

const nome = ref('') 

watch(nome, (novo: string) => {
  console.log("Nome mudou:", novo)
}) 
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