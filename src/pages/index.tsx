import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Products from '../features/products';
import HomeLayout from '../features/home/Layout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = ({ products }: any) => {
  return (<Products products={products} />);
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let products = [];
  try {
    const res = await fetch('http://localhost:3004/products')
    products = await res.json()
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      products,
    },
  }
}

export default Home;
