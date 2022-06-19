import React, { ReactNode } from 'react';
import Ic12ArrowDown from '../assets/icons/12x12/ic12-arrow-down.svg';
import Ic12ArrowLeft from '../assets/icons/12x12/ic12-arrow-left.svg';
import Ic12ArrowRight from '../assets/icons/12x12/ic12-arrow-right.svg';
import Ic12ArrowUp from '../assets/icons/12x12/ic12-arrow-up.svg';
import Ic12Bell from '../assets/icons/12x12/ic12-bell.svg';
import Ic12Magnifier from '../assets/icons/12x12/ic12-magnifier.svg';
import Ic16Bell from '../assets/icons/16x16/ic16-bell.svg';
import Ic16Magnifier from '../assets/icons/16x16/ic16-magnifier.svg';
import Ic20ArrowDown from '../assets/icons/20x20/ic20-arrow-down.svg';
import Ic20ArrowLeft from '../assets/icons/20x20/ic20-arrow-left.svg';
import Ic20ArrowRight from '../assets/icons/20x20/ic20-arrow-right.svg';
import Ic20ArrowUp from '../assets/icons/20x20/ic20-arrow-up.svg';
import Ic20Bell from '../assets/icons/20x20/ic20-bell.svg';
import Ic20Magnifier from '../assets/icons/20x20/ic20-magnifier.svg';
import Ic24Account from '../assets/icons/24x24/ic24-account.svg';
import Ic24Bell from '../assets/icons/24x24/ic24-bell.svg';
import Ic24Magnifier from '../assets/icons/24x24/ic24-magnifier.svg';
import Ic24Pen from '../assets/icons/24x24/ic24-pen.svg';
import Ic24RoundedQuestionMark from '../assets/icons/24x24/ic24-rounded-question-mark.svg';

const prepareIconsMap = (icon12?: ReactNode, icon16?: ReactNode, icon20?: ReactNode, icon24?: ReactNode) => {
    return {
        ...(icon12 && { ic12: icon12 }),
        ...(icon16 && { ic16: icon16 }),
        ...(icon20 && { ic20: icon20 }),
        ...(icon24 && { ic24: icon24 }),
    };
};

const iconsMap: Record<string, Record<string, ReactNode>> = {
    account: prepareIconsMap(null, null, null, <Ic24Account />),
    'arrow-down': prepareIconsMap(<Ic12ArrowDown />, null, <Ic20ArrowDown />, null),
    'arrow-left': prepareIconsMap(<Ic12ArrowLeft />, null, <Ic20ArrowLeft />, null),
    'arrow-right': prepareIconsMap(<Ic12ArrowRight />, null, <Ic20ArrowRight />, null),
    'arrow-up': prepareIconsMap(<Ic12ArrowUp />, null, <Ic20ArrowUp />, null),
    bell: prepareIconsMap(null, null, null, <Ic24Bell />),
    magnifier: prepareIconsMap(null, null, null, <Ic24Magnifier />),
    pen: prepareIconsMap(null, null, null, <Ic24Pen />),
    'rounded-question-mark': prepareIconsMap(null, null, null, <Ic24RoundedQuestionMark />),
};

export const getIconByName = (name?: string | null): ReactNode | null => {
    if (!name?.length) {
        return null;
    }

    const splitName = name.split(/-(.*)/s);
    const iconSize = splitName[0];
    const iconName = splitName[1];
    const filteredName = Object.keys(iconsMap)?.filter(icon => icon === iconName)?.[0];

    return iconsMap?.[filteredName]?.[iconSize] || null;
};
