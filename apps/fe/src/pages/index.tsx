import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ROUTES } from '../routes';

const Index: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push({
            pathname: ROUTES.START,
        });
    }, [router]);

    return null;
};

export default Index;
