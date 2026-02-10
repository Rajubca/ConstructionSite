'use client'

import { useFormStatus } from 'react-dom'
import { Button, ButtonProps } from './Button'

export function SubmitButton({ children, ...props }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button {...props} disabled={pending || props.disabled} isLoading={pending}>
      {children}
    </Button>
  )
}
