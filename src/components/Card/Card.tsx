import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import clsx from 'clsx'

import s from '@/components/Card/Card.module.css'

/**
 * Пропсы компонента Card
 * 
 * @param children - Содержимое карточки
 * @param flex - Настройка флекс-выравнивания для компонента
 * @param className - Дополнительные CSS классы
 */
type Props = {
  /** Содержимое карточки */
  children?: ReactNode
  /**
   * Настройка флекс-выравнивания для компонента.
   * Определяет способ выравнивания элементов внутри flex-контейнера.
   *
   * Возможные значения:
   * - 'center' — горизонтальное центрирование (justify-content: center)
   * - 'columnCenter' — вертикальное расположение с центрированием (flex-direction: column + align-items: center)
   * - 'spaceBetween' — элементы распределены с пробелами между (justify-content: space-between)
   * - 'spaceBetweenCenter' — элементы с пробелами между и вертикальным центрированием (justify-content: space-between + align-items: center)
   */
  flex?: 'center' | 'columnCenter' | 'spaceBetween' | 'spaceBetweenCenter'
} & ComponentPropsWithoutRef<'div'>

/**
 * Универсальный карточный компонент
 * 
 * @example
 * ```tsx
 * <Card flex="center">
 *   <Typography>Содержимое карточки</Typography>
 * </Card>
 * ```
 */
export const Card = ({ children, flex, className, ...rest }: Props) => {
  const cardStyles = clsx(s.card, flex && [s.flex, s[flex]])

  return (
    <div className={clsx(cardStyles, className)} {...rest}>
      {children}
    </div>
  )
}
