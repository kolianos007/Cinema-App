import { IActor } from '@/shared/types/movies.types'

export interface IActorEditInput extends Omit<IActor, '_id'> {}
