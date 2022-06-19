import { SeparatorProps as RadixSeparatorProps, Root as SeparatorPrimitive } from '@radix-ui/react-separator';
import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Separator.module.scss';

interface SeparatorProps extends RadixSeparatorProps {
    customClass?: string;
}

const cx = classNames.bind(styles);

export const Separator: FC<SeparatorProps> = ({ decorative, orientation, customClass }: SeparatorProps) => (
    <SeparatorPrimitive
        decorative={decorative}
        orientation={orientation}
        className={cx([styles.separator, customClass && customClass])}
    />
);
