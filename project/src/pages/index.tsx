import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Products from '../features/products';
import HomeLayout from '../features/home/Layout';
import { NextPageWithLayout } from './_app';
import { HttpMethods } from '../shared/constants';
import { requestHeaders } from '../shared/utils/HttpHelpers';

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
  let products: any = [];
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      method: HttpMethods[HttpMethods.GET],
      headers: requestHeaders,
    });
    const result = await res.json();
    products = result.data || [];
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
