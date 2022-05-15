import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

type Props = {children: ReactJSXElement, bgColor?: any }

export default function Gap({children, bgColor}: Props) {
  return (
    <div style={{padding: '25px', backgroundColor: bgColor || 'transparent'}}>{children}</div>
  )
}