import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react'
import clsx from 'clsx'

import s from '@/components/layout/Container/Container.module.css'

/**
 * Пропсы компонента Container
 * 
 * @param children - Содержимое контейнера
 * @param width - Максимальная ширина контейнера в пикселях
 * @param padding - Внутренние отступы (по умолчанию '0')
 * @param className - Дополнительные CSS классы
 */
type Props = {
  /** Содержимое контейнера */
  children: ReactNode
  /** Максимальная ширина контейнера в пикселях */
  width: number
  /** Внутренние отступы */
  padding?: string
} & ComponentPropsWithoutRef<'div'>

/**
 * Контейнер для центрирования контента с ограничением по ширине
 * 
 * @example
 * ```tsx
 * // Базовое использование
 * <Container width={1200}>
 *   <Typography>Центрированный контент</Typography>
 * </Container>
 * 
 * // С отступами
 * <Container width={800} padding="20px">
 *   <Card>Центрированный контент с отступами</Card>
 * </Container>
 * ```
 */
export const Container = ({ children, padding, width, className, ...rest }: Props) => {
  const cssVars = {
    '--container-width': `${width}px`,
    '--container-padding': padding,
  } as CSSProperties

  return (
    <div 
      className={clsx(s.container, className)} 
      style={cssVars}
      {...rest}
    >
      {children}
    </div>
  )
}