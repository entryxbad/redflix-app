import { TypeRootStackParamList } from '@/navigation/navigation.types'

export interface IMenuItem {
  path: keyof TypeRootStackParamList
}
