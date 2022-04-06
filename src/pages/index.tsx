import { MainLayout } from 'layouts/MainLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { Counter } from '../components/Counter';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Counter />
    </MainLayout>
  );
};

export default Home;
