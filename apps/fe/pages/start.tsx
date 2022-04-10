import { StartDto } from '@codeek-netflix/bff-service';
import { NextPage } from 'next';
import React from 'react';
import { getStartPage } from '../api/requests';

export interface StartPageProps {
  data?: StartDto;
}

export const Start: NextPage<StartPageProps> = ({ data }) => {
  return (
    <div>
      Start page
    </div>
  );
};

export default Start;

export const getServerSideProps = async() => {
  const data = await getStartPage();

  return {
    props: {
      data
    },
  };
};
