'use client'

import {
  type ChangeEvent,
  type ComponentPropsWithRef,
  useId,
  useState,
} from 'react'

import clsx from 'clsx'

import { Button, Typography, Icon } from '@/components/ui'

import s from '@/components/ui/TextField/TextField.module.css'

/**
 * Универсальное поле ввода текста с поддержкой различных режимов и многострочного ввода
 * 
 * @example
 * ```tsx
 * // Базовое текстовое поле
 * <TextField
 *   label="Email"
 *   placeholder="Введите email"
 *   onChange={handleChange}
 * />
 * 
 * // Поле с паролем
 * <TextField
 *   label="Пароль"
 *   mode="password"
 *   error="Пароль слишком короткий"
 * />
 * 
 * // Поисковое поле
 * <TextField
 *   mode="search"
 *   placeholder="Поиск..."
 * />
 * 
 * // Многострочное поле
 * <TextField
 *   label="Комментарий"
 *   multiline
 *   rows={5}
 * />
 * ```
 * 
 * @param label - Текст метки поля
 * @param error - Текст ошибки валидации
 * @param variant - Вариант отображения границ
 * @param mode - Режим работы поля (по умолчанию, поиск, пароль)
 * @param multiline - Многострочный режим (textarea)
 * @param fullWidth - Занимает всю доступную ширину
 * @param margin - Внешние отступы контейнера
 * @param disabled - Неактивное состояние
 * @param value - Значение поля
 * @param onChange - Обработчик изменения значения
 */

/* ---------------- TYPES ---------------- */

/** Вариант отображения границ поля ввода */
export type InputVariant = 'fullBorders' | 'horizontalBorders'

/** Режим работы поля ввода */
export type InputMode = 'default' | 'search' | 'password'

/** Базовые свойства текстового поля */
export type BaseTextField = {
  /** Значение поля */
  value?: string
  /** Текст метки (label) */
  label?: string
  /** Текст ошибки валидации */
  error?: string
  /** Внешние отступы контейнера */
  margin?: string
  /** Занимает всю доступную ширину */
  fullWidth?: boolean
  /** Неактивное состояние */
  disabled?: boolean
  /** Обработчик изменения значения */
  onChange?: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
}

/** Свойства для однострочного поля ввода (input) */
export type InputProps = BaseTextField & {
  /** Вариант отображения границ */
  variant?: InputVariant
  /** Режим работы поля */
  mode?: InputMode
  /** Многострочный режим - всегда false для input */
  multiline?: false
} & ComponentPropsWithRef<'input'>

/** Свойства для многострочного поля ввода (textarea) */
export type TextAreaProps = BaseTextField & {
  /** Многострочный режим - true активирует textarea */
  multiline: true
  /** Количество видимых строк (по умолчанию 4) */
  rows?: number
} & ComponentPropsWithRef<'textarea'>

/** Объединенный тип свойств текстового поля */
export type TextFieldProps = InputProps | TextAreaProps

/* ---------------- COMPONENT ---------------- */

/**
 * Компонент TextField предоставляет гибкое поле ввода текста с поддержкой:
 * - Однострочного и многострочного ввода
 * - Режимов: обычный, поиск, пароль
 * - Валидации с отображением ошибок
 * - Кастомного оформления границ
 * - Состояния disabled
 */
export const TextField = (props: TextFieldProps) => {
  const { error, disabled, label, id, onChange } = props
  const [hidePassword, setHidePassword] = useState(false)
  const generatedId = useId()
  const inputId = id || generatedId

  // Рендеринг метки поля
  const labelComponent = label && (
    <Typography
      variant={'regular_text_14'}
      as={'label'}
      className={clsx(s.label, disabled && s.disabled)}
      htmlFor={inputId}
    >
      {label}
    </Typography>
  )

  // Рендеринг текста ошибки
  const errorComponent = error && (
    <Typography as={'span'} variant={"error"} className={clsx(s.errorText)}>
      {error}
    </Typography>
  )

  // Многострочный режим (textarea)
  if (props.multiline) {
    const { value, rows = 4, fullWidth, margin, className, multiline, ref, ...rest } = props
    const containerStyle = clsx(s.container, fullWidth && s.fullWidth, className && className)
    const marginContainer = margin ? { margin } : undefined

    const textAreaStyle = clsx(s.textField, s.multiline, error && s.error, disabled && s.disabled)

    return (
      <div className={containerStyle} style={marginContainer}>
        {labelComponent}
        <textarea
          ref={ref}
          id={inputId}
          onChange={onChange}
          value={value}
          className={textAreaStyle}
          disabled={disabled}
          rows={rows}
          {...rest}
        />
        {errorComponent}
      </div>
    )
  }

  // Однострочный режим (input)
  const {
    variant = 'fullBorders',
    mode = 'default',
    value,
    fullWidth,
    margin = '',
    className,
    ref,
    ...rest
  } = props

  const containerStyle = clsx(s.container, fullWidth && s.fullWidth, className && className)

  const inputStyle = clsx(
    s.textField,
    error && s.error,
    variant === 'horizontalBorders' && s.horizontalBorders,
    mode === 'search' && s.iconStart,
    mode === 'password' && s.iconEnd
  )

  return (
    <div className={containerStyle} style={{margin: margin}}>
      {labelComponent}

      <div className={s.textFieldWrapper}>
        {/* Иконка поиска */}
        {mode === 'search' && (
          <div className={clsx(s.searchIcon, disabled && s.disabled, value && s.activeIcon)}>
            {<Icon iconId={'search'} width={'20px'} height={'20px'} />}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          type={mode === 'password' && !hidePassword ? 'password' : 'text'}
          onChange={onChange}
          value={value}
          className={inputStyle}
          disabled={disabled}
          {...rest}
        />
        
        {/* Кнопка показа/скрытия пароля */}
        {mode === 'password' && (
          <div className={s.eyeIcon}>
            <Button
              type={'button'}
              disabled={disabled}
              className={clsx(s.eyeBtn)}
              onClick={() => setHidePassword(!hidePassword)}
              variant={'icon'}
            >
              { <Icon iconId={hidePassword ? 'eyeOffOutline' : 'eyeOutline'} /> }
            </Button>
          </div>
        )}
      </div>

      {errorComponent}
    </div>
  )
}