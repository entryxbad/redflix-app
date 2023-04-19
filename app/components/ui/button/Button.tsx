import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Entypo'

import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
  className,
  children,
  ...rest
}) => {
  const icon = <Icon name='video' size={30} />

  return (
    <View>
      <Pressable className={cn('self-center mt-3.5', className)} {...rest}>
        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          className={cn('w-full py-3 px-8 rounded-2xl items-center', {
            'flex-row': !!icon
          })}
          colors={['#DC3F41', '#a6282b']}
        >
          {icon && <Icon name='video' color='white' size={20} />}
          <Text className='text-white text-center font-medium text-lg ml-2'>
            {children}
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  )
}

export default Button
