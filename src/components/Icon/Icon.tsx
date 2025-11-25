import type { IconsId } from '@/components/Icon/types';
import spriteUrl from '@/assets/icons-sprite.svg';

/**
 * Компонент для отображения иконки из SVG-спрайта.
 *
 * @example
 * ```tsx
 * <Icon iconId="home" width="32" height="32" />
 * ```
 *
 * @param iconId - ID иконки из спрайта (см. `IconsId`)
 * @param width - Ширина иконки (по умолчанию 24)
 * @param height - Высота иконки (по умолчанию 24)
 * @param viewBox - viewBox SVG (по умолчанию "0 0 24 24")
 */

export type IconProps = {
  /** ID иконки из спрайта */
  iconId: IconsId;
  /** Ширина иконки */
  width?: string;
  /** Высота иконки */
  height?: string;
  /** viewBox SVG */
  viewBox?: string;
}

export const Icon = ({
  iconId,
  width = '24',
  height = '24',
  viewBox = '0 0 24 24',
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <use href={`${spriteUrl}#${iconId}`} />
    </svg>
  );
};
