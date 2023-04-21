import { FC } from 'react'
import { Pressable, Text } from 'react-native'

import type { IMenuItem } from './menu.interface'
import { TypeRootStackParamList } from '@/navigation/navigation.types'

interface IMenuItemProps {
  item: IMenuItem
  nav: (screenName: keyof TypeRootStackParamList) => void
  currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
  const isActive = currentRoute === item.path

  return (
    <Pressable className='items-center w-[20%]' onPress={() => nav(item.path)}>
      <Text>MenuItem</Text>
    </Pressable>
  )
}

export default MenuItem
