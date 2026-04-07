import { ref } from 'vue'

export interface Evento {
  id: number
  nome: string
  favorito: boolean
}
export const eventos = ref<Evento[]>([
  { id: 1, nome: "Show de Rock", favorito: true },
  { id: 2, nome: "Workshop", favorito: false }
])

export const useEventos = () => {
  return {
    eventos
  }
}
// Simulando uma API de eventos com dados estáticos para fins de demonstração. Em um cenário real, você poderia buscar esses dados de um servidor.
// O `ref` é usado para criar uma referência reativa ao array de eventos, permitindo que a interface do usuário seja atualizada automaticamente quando os dados mudarem.
// A função `useEventos` é um composable que retorna o array de eventos. Isso permite que outros componentes importem e usem os dados de eventos de forma fácil e organizada.
// O `useEventos` é um padrão comum em Vue 3 para encapsular lógica relacionada a um conjunto específico de dados ou funcionalidades, promovendo a reutilização e a organização do código.
// Este código define uma estrutura básica para gerenciar eventos em um aplicativo Vue 3 usando a Composition API. Ele inclui uma interface para os eventos, um array reativo de eventos e um composable para acessar esses eventos em outros componentes.