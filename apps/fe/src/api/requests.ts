import { StartDto } from '@codeek-netflix/bff-service';
import prepareRequest from './config';

export const getStartPage = async (): Promise<StartDto> => {
    return await fetch('http://localhost:4000/api/start').then(r => r.json());
    // return await prepareRequest({
    //     method: 'get',
    //     url: 'http://localhost:4000/api/start',
    // });
};
