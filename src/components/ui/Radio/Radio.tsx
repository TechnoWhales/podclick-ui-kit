'use client'
import * as RadioPrimitive from '@radix-ui/react-radio-group'
import React, { useId } from 'react'

import s from '@/components/ui/Radio/Radio.module.css'

/**
 * Группа радио-кнопок для выбора одного значения из нескольких вариантов
 * 
 * Компонент предоставляет стилизованную реализацию радиогруппы на основе Radix UI.
 * 
 * @example
 * ```tsx
 * // Простой пример
 * <RadioGroup value={selected} onValueChange={setSelected}>
 *   <RadioItem value="option1" label="Опция 1" />
 *   <RadioItem value="option2" label="Опция 2" />
 * </RadioGroup>
 * ```
 * 
 * @example
 * ```tsx
 * // Пример с отключенными элементами и кастомным классом
 * <RadioGroup 
 *   value={userType} 
 *   onValueChange={setUserType}
 *   className="my-radio-group"
 * >
 *   <RadioItem value="admin" label="Администратор" />
 *   <RadioItem value="user" label="Пользователь" disabled />
 *   <RadioItem value="guest" label="Гость" />
 * </RadioGroup>
 * ```
 */

/* ---------------- TYPES ---------------- */

/**
 * Пропсы для компонента группы радио-кнопок
 * 
 * @param value - Текущее выбранное значение в группе
 * @param onValueChange - Обработчик изменения выбранного значения
 * @param children - Дочерние элементы Radio.Item
 * @param className - Дополнительные CSS-классы для кастомизации
 */

export type RadioGroupProps = {
  /** Текущее выбранное значение в группе */
  value: string
  /** Обработчик изменения выбранного значения */
  onValueChange: (value: string) => void
  /** Дочерние элементы Radio.Item */
  children: React.ReactNode
  /** Дополнительные CSS-классы для кастомизации */
  className?: string
}

/**
 * Пропсы для отдельного элемента радио-кнопки
 * 
 * @param value - Значение элемента, которое будет передано в onValueChange при выборе
 * @param label - Текстовая метка, отображаемая рядом с радио-кнопкой
 * @param disabled - Отключает взаимодействие с элементом
 * @param className - Дополнительные CSS-классы для кастомизации
 */
export type RadioItemProps = {
  /** Значение элемента, которое будет передано в onValueChange при выборе */
  value: string
  /** Текстовая метка, отображаемая рядом с радио-кнопкой */
  label?: string
  /** Отключает взаимодействие с элементом */
  disabled?: boolean
  /** Дополнительные CSS-классы для кастомизации */
  className?: string
}

/* ---------------- COMPONENTS ---------------- */

/**
 * Компонент-контейнер для группы радио-кнопок
 * 
 * Управляет состоянием выбора и обеспечивает логическую группировку элементов.
 * Все Radio.Item должны быть обернуты в этот компонент.
 * 
 * @param value - Текущее выбранное значение
 * @param onValueChange - Обработчик изменения выбранного значения
 * @param children - Элементы Radio.Item
 * @param className - Дополнительные CSS-классы
 * @returns React-компонент группы радио-кнопок
 */

export const Group = ({ value, onValueChange, children, className }: RadioGroupProps) => {
  return (
    <RadioPrimitive.Root
      className={`${s.group} ${className || ''}`}
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </RadioPrimitive.Root>
  )
}

/**
 * Отдельный элемент радио-кнопки
 * 
 * Представляет собой радио-кнопку с опциональной текстовой меткой.
 * Автоматически генерирует уникальный ID для связи с label.
 * 
 * @param value - Значение элемента
 * @param label - Текстовая метка элемента
 * @param disabled - Флаг отключения элемента
 * @param className - Дополнительные CSS-классы
 * @returns React-компонент радио-кнопки
 */
export const Item = ({ value, label, disabled, className }: RadioItemProps) => {
  const radioId = useId()

  return (
    <div className={`${s.wrapper} ${className || ''}`}>
      <RadioPrimitive.Item id={radioId} value={value} disabled={disabled} className={s.root}>
        <RadioPrimitive.Indicator className={s.indicator} />
      </RadioPrimitive.Item>

      {label && (
        <label htmlFor={radioId} className={s.label}>
          {label}
        </label>
      )}
    </div>
  )
}
