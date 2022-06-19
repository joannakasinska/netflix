import React, { FC, PropsWithChildren, ReactNode, RefObject } from 'react';
import { FocusOn } from 'react-focus-on';

interface FocusableProps {
    enabled?: boolean;
    scrollLock?: boolean;
    focusLock?: boolean;
    autoFocus?: boolean;
    children: ReactNode;
    shards?: Array<RefObject<HTMLElement> | HTMLElement>;
    onEscapeKey?: () => void;
    onClickOutside?: () => void;
}

export const Focusable: FC<PropsWithChildren<FocusableProps>> = ({
    enabled,
    scrollLock = false,
    focusLock,
    autoFocus = false,
    shards,
    children,
    onEscapeKey,
    onClickOutside,
}: FocusableProps) => (
    <FocusOn
        enabled={enabled}
        scrollLock={scrollLock}
        focusLock={focusLock}
        autoFocus={autoFocus}
        shards={shards}
        onEscapeKey={onEscapeKey}
        onClickOutside={onClickOutside}
    >
        {children}
    </FocusOn>
);
