import type {FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren} from 'react'

export type ReactButtonprops = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonProps = ReactButtonProps & {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({...buttonProps}) => {
    return <button {...buttonProps} />
}