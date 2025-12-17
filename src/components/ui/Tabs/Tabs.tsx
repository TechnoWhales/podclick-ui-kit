import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import * as TabsRadixUI from '@radix-ui/react-tabs'

import { clsx } from 'clsx'

import s from '@/components/ui/Tabs/Tabs.module.css'

/**
 * Компонент вкладок (табов) с поддержкой различных вариантов оформления.
 * Основан на Radix UI Tabs с дополнительной кастомизацией.
 * 
 * @example
 * ```tsx
 * // Базовое использование
 * <Tabs tabs={[{ value: 'tab1', title: 'Вкладка 1' }]}>
 *   <TabContent value="tab1">Содержимое 1</TabContent>
 * </Tabs>
 * ```
 * 
 * @param children - Содержимое вкладок, должно содержать компоненты TabContent
 * @param className - Дополнительные CSS-классы для корневого элемента
 * @param tabs - Массив объектов с данными вкладок
 * @param ...rest - Дополнительные пропсы, передаваемые в корневой элемент Radix UI Tabs
 */

/* ---------------- TYPES ---------------- */

/**
 * Описание отдельной вкладки (таба)
 * 
 * @property disabled - Отключает вкладку
 * @property title - Заголовок вкладки, отображаемый пользователю
 * @property value - Уникальное значение вкладки для идентификации
 */
export type TabType = {
  disabled?: boolean
  title: string
  value: string
}

/** Пропсы компонента Tabs */
export type TabsProps = {
  /** 
   * Содержимое вкладок. Должно содержать компоненты TabContent
   * @example
   * <Tabs>
   *   <TabContent value="tab1">Контент 1</TabContent>
   *   <TabContent value="tab2">Контент 2</TabContent>
   * </Tabs>
   */
  children?: ReactNode
  /** 
   * Массив вкладок для отображения в заголовке
   * @example
   * tabs={[
   *   { value: 'profile', title: 'Профиль' },
   *   { value: 'settings', title: 'Настройки', disabled: true }
   * ]}
   */
  tabs: TabType[]
  /** 
   * Значение активной вкладки по умолчанию
   * @default tabs[0].value
   * @example defaultValue="profile"
   */
  defaultValue?: string
   /** 
   * ARIA-лейбл для навигации по вкладкам. Описывает назначение группы вкладок для скринридеров
   * @default 'Navigation tabs'
   * @example ariaLabel="Profile settings tabs"
   */
  ariaLabel?: string
} & ComponentPropsWithoutRef<typeof TabsRadixUI.Root>



/* ---------------- COMPONENT ---------------- */

/**
 * Основной компонент вкладок.
 * 
 * @example
 * ```tsx
 * <Tabs
 *   tabs={[
 *     { value: 'tab1', title: 'Первая вкладка' },
 *     { value: 'tab2', title: 'Вторая вкладка', disabled: true }
 *   ]}
 *   defaultValue="tab1"
 *   ariaLabel="Main navigation tabs"
 *   className="custom-tabs"
 * >
 *   <TabContent value="tab1">Содержимое первой вкладки</TabContent>
 *   <TabContent value="tab2">Содержимое второй вкладки</TabContent>
 * </Tabs>
 * ```
 */
export const Tabs: FC<TabsProps> = ({
  children,
  className,
  tabs,
  defaultValue = tabs[0].value,
  ariaLabel = 'Navigation tabs',
  ...rest
}) => {
  const classNames = {
    list: s.list,
    root: clsx(s.root, className),
    trigger: s.trigger,
  }

  return (
    <TabsRadixUI.Root className={classNames.root} defaultValue={defaultValue} {...rest}>
      <TabsRadixUI.List className={classNames.list} aria-label={ariaLabel}>
        {tabs.map(tab => (
          <TabsRadixUI.Trigger
            className={classNames.trigger}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </TabsRadixUI.Trigger>
        ))}
      </TabsRadixUI.List>
      {children}
    </TabsRadixUI.Root>
  )
}

/**
 * Пропсы для компонента содержимого вкладки
 * 
 * @property children - Содержимое, отображаемое во вкладке
 * @property value - Значение, соответствующее value вкладки из массива tabs
 */
export type TabContentProps = {
  children: ReactNode
  value: string
}

/**
 * Компонент для отображения содержимого вкладки.
 * Должен использоваться внутри компонента Tabs.
 * 
 * @example
 * ```tsx
 * <Tabs tabs={[{ value: 'profile', title: 'Профиль' }]}>
 *   <TabContent value="profile">
 *     <ProfileForm />
 *   </TabContent>
 * </Tabs>
 * ```
 */
export const TabContent: FC<TabContentProps> = ({ children, value }) => {
  return (
    <TabsRadixUI.Content className={s.content} value={value}>
      {children}
    </TabsRadixUI.Content>
  )
}