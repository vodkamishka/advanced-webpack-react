import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';

import popupCls from '../../styles/popup.module.scss';

import cls from './Popover.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '@/shared/ui/Popups/styles/const';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = ({
    className,
    trigger,
    direction = 'bottom right',
    children,
}: PopoverProps) => {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
