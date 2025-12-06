'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'

import { clsx } from 'clsx'

import { Icon, Typography } from '@/components/ui'

import s from '@/components/ui/Select/Select.module.css'

/**
 * Выпадающий список на основе Radix UI Select
 * 
 * @example
 * ```tsx
 * // Базовое использование
 * <Select
 *   value={selectedValue}
 *   onValueChange={setSelectedValue}
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   placeholder="Choose an option"
 * />
 * 
 * // С меткой и обязательным полем
 * <Select
 *   label="Category"
 *   required
 *   value={category}
 *   onValueChange={setCategory}
 *   options={categories}
 * />
 * ```
 * 
 * @param value - Выбранное значение
 * @param onValueChange - Callback при изменении значения
 * @param placeholder - Текст-заполнитель
 * @param options - Массив опций для выбора
 * @param disabled - Неактивное состояние
 * @param label - Текст метки
 * @param required - Обязательное поле
 * @param size - Размер компонента
 * @param maxHeight - Максимальная высота выпадающего списка
 */

/* ---------------- TYPES ---------------- */

/**
 * Опция для выпадающего списка
 */
export type SelectOption = {
  /** Значение опции */
  value: string
  /** Отображаемый текст или React-элемент */
  label: string | ReactNode
}

/**
 * Пропсы компонента Select
 */
type SelectProps = {
  /** Выбранное значение */
  value: string
  /** Callback при изменении значения */
  onValueChange: (value: string) => void
  /** Текст-заполнитель */
  placeholder?: string
  /** Массив опций для выбора */
  options: SelectOption[]
  /** Неактивное состояние */
  disabled?: boolean
  /** Текст метки */
  label?: string
  /** Обязательное поле */
  required?: boolean
  /** ID для связи с меткой */
  htmlFor?: string
  /** Максимальная высота выпадающего списка */
  maxHeight?: string
  /** Размер компонента */
  size?: 'm' | 's'
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>

/* ---------------- COMPONENT ---------------- */

export const Select = forwardRef<HTMLButtonElement, SelectProps>((props, ref) => {
  const {
    value,
    onValueChange,
    placeholder = 'Select...',
    options,
    className,
    disabled = false,
    label,
    required = false,
    htmlFor,
    maxHeight = '200px',
    size = 'm',
    ...rest
  } = props

  return (
    <div className={s.wrapper}>
      {label && (
        <Typography as={'label'} className={s.label} htmlFor={htmlFor} variant={'regular_text_14'}>
          {label}
          {required && <span className={s.required}>*</span>}
        </Typography>
      )}
      <SelectPrimitive.Root value={value} onValueChange={onValueChange} disabled={disabled}>
        <SelectPrimitive.Trigger
          ref={ref}
          id={htmlFor}
          className={clsx(s.trigger, className, {
            [s.disabled]: disabled,
            [s.sizeS]: size === 's',
          })}
          {...rest}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <Icon iconId={'arrowIosDownOutline'} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className={s.content} position={'popper'}>
            <SelectPrimitive.Viewport
              className={s.viewport}
              style={{ maxHeight, overflowY: 'auto' }}
            >
              {options.map(option => (
                <SelectPrimitive.Item key={option.value} value={option.value} className={s.item}>
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
})

Select.displayName = 'Select'
