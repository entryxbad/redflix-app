import cn from 'clsx'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error }
      }) => (
        <>
          <View
            className={cn(
              'bg-[#5e5e5e] w-full border rounded-lg pb-1.5 pt-1.5 px-4 my-1.5',
              error ? 'border-red' : 'border-transparent'
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              onChangeText={onChange}
              onBlur={onBlur}
              value={(value || '').toString()}
              className='text-white text-base'
              {...rest}
            />
          </View>
          {error && <Text className='text-red'>{error.message}</Text>}
        </>
      )}
    />
  )
}

export default Field
