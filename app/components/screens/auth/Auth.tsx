import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { Button, DismissKeyboard, Loader } from '@/components/ui'

import { IAuthFormData } from '@/shared/types/auth.interface'

import AuthFields from './AuthFields'

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false)

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthFormData> = ({ email, password }) => {}

  const isloading = false

  return (
    <DismissKeyboard>
      <View className='mx-2 items-center justify-center h-full'>
        <View className='w-9/12'>
          <Text className='text-center text-white text-4xl font-bold mb-2.5'>
            {isReg ? 'Register' : 'Login'}
          </Text>
          {isloading ? (
            <Loader />
          ) : (
            <>
              <AuthFields control={control} isPassRequired />

              <Button onPress={handleSubmit(onSubmit)}>Go to watch</Button>

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text className='text-white opacity-30 text-right text-base mt-3'>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </DismissKeyboard>
  )
}

export default Auth
