import cls from './popup.module.scss'

import { type DropdownDirection } from '@/shared/types/ui'

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.directionBottomLeft,
    'bottom left': cls.directionTopLeft,
    'bottom right': cls.directionBottomRight,
    'top right': cls.directionTopRight,
}
