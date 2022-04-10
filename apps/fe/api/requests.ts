import { StartDto } from '@codeek-netflix/bff-service';
import axios from 'axios';
import prepareRequest from './config';

export const getStartPage = async (): Promise<StartDto> => {
  return await prepareRequest({
    method: 'get',
    url: '/api/start',
  });
};
