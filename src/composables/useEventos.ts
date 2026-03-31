import { ref } from 'vue'

export interface Evento {
  id: number
  nome: string
  favorito: boolean
}

export const eventos = ref<Evento[]>([
  { id: 1, nome: "Show de Rock", favorito: false },
  { id: 2, nome: "Workshop de TI", favorito: false }
])

export const useEventos = () => {
  return {
    eventos
  }
}