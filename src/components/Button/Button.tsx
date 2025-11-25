import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react'

import clsx from 'clsx'
import { Icon, type IconsId } from '@/components/Icon/'
import s from '@/components/Button/Button.module.css'

/**
 * Кнопка с поддержкой различных вариантов оформления
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Нажми меня
 * </Button>
 * ```
 * 
 * @param as - HTML-тег или компонент для рендеринга
 * @param variant - Вариант внешнего вида кнопки
 * @param fullwidth - Занимает всю доступную ширину
 * @param disabled - Неактивное состояние
 * @param iconId - ID иконки для отображения
 */

/* ---------------- TYPES ---------------- */

export type ButtonOwnProps<T extends ElementType = 'button'> = {
  /** HTML-тег или компонент для рендеринга */
  as?: T
  /** Содержимое кнопки */
  children: ReactNode
  /** Вариант внешнего вида */
  variant?: 'icon' | 'link' | 'outlined' | 'primary' | 'secondary'
  /** Занимает всю доступную ширину */
  fullwidth?: boolean
  /** Неактивное состояние */
  disabled?: boolean
  /** Обработчик клика */
  onClick?: () => void, 
  /** ID иконки */
  iconId?: IconsId
}

/** 
 * Комбинация собственных пропсов + HTML-пропсов элемента `as`
 * Omit предотвращает конфликт типов со Storybook и HTML-атрибутами.
 */
export type ButtonProps<T extends ElementType = 'button'> =
  ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>

/* ---------------- COMPONENT ---------------- */

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = 'primary',
    fullwidth,
    disabled = false,
    className,
    iconId,
    children,
    onClick,

    as: Component = 'button',
    ...rest
  } = props
  const styles = clsx(
    s.button,
    {
      [s.fullwidth]: fullwidth,
      [s.disabled]: disabled,
    },
    s[variant],
    className
  )

  if (variant === 'icon' && iconId) {
    return (
      <Component>
        <Icon iconId={iconId} />
      </Component>
    )
  }

  return (
    <Component className={styles} disabled={disabled} onClick={onClick} {...rest}>
      {iconId && <Icon iconId={iconId} />}
      {children}
    </Component>
  )


}
