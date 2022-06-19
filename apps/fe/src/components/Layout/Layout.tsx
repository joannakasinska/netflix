import React, { FC, PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { LayoutProps } from './Layout.types';

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ cms, children }: PropsWithChildren<LayoutProps>) => {
    console.log(cms);
    return (
        <>
            <Header sticky header={cms?.header} />
            <main>{children}</main>
            <Footer />
        </>
    );
};
