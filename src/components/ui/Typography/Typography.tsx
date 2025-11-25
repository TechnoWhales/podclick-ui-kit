import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from '@/components/ui/Typography/Typography.module.css'

/* ---------------- TYPES ---------------- */

/** Варианты типографики для текстовых элементов */
export type TypographyVariant =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'regular_text_16'
  | 'bold_text_16'
  | 'regular_text_14'
  | 'medium_text_14'
  | 'bold_text_14'
  | 'small_text'
  | 'semibold_small_text'
  | 'regular_link'
  | 'small_link'
  | 'error'
  | 'caption'

/**
 * Пропсы компонента Typography
 * 
 * @template T - HTML-элемент или компонент для рендеринга
 * 
 * @param as - HTML-тег или компонент для рендеринга (по умолчанию 'p')
 * @param variant - Вариант типографики из доступных стилей
 * @param className - Дополнительные CSS классы
 * @param children - Содержимое текстового элемента
 */
export type TypographyProps<T extends ElementType = 'p'> = {
  /** HTML-тег или компонент для рендеринга */
  as?: T
  /** Содержимое текстового элемента */
  children: ReactNode
  /** Вариант типографики */
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

/* ---------------- COMPONENT ---------------- */

/**
 * Универсальный компонент типографики для консистентного отображения текста
 * 
 * @example
 * ```tsx
 * // Заголовок как h1
 * <Typography variant="h1" as="h1">
 *   Главный заголовок
 * </Typography>
 * 
 * // Обычный текст как параграф
 * <Typography variant="regular_text_14">
 *   Обычный текст размером 14px
 * </Typography>
 * 
 * // Ссылка как span с стилями ссылки
 * <Typography variant="regular_link" as="span">
 *   Текст ссылки
 * </Typography>
 * ```
 * 
 * @param props - объект пропсов компонента Typography. Включает в себя:
 *   - variant: Вариант типографики
 *   - as: HTML-тег для рендеринга  
 *   - className: Дополнительные классы
 *   - children: Содержимое элемента
 *   - ...rest: Все остальные HTML-атрибуты
 * 
 * @returns - текстовый React-элемент с примененными CSS-стилями типографики
 * соответствующего HTML-тега с переданными дочерними элементами
 */

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const {
    /** Вариант типографики (по умолчанию 'regular_text_14') */
    variant = 'regular_text_14',
    /** Дополнительные CSS классы */
    className = '',
    /** HTML-тег или компонент для рендеринга (по умолчанию 'p') */
    as: Component = 'p',
    ...rest
  } = props

  return <Component className={clsx(s[variant], className)} {...rest} />
}
