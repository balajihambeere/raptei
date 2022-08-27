import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Products from '../features/products';
import HomeLayout from '../features/home/Layout';
import { NextPageWithLayout } from './_app';
import Product from '../features/products/models/Product';

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
    const result = await Product.find({}) || [];
    products = result.map((doc) => {
      const product = doc.toObject();
      product._id = product._id.toString()
      return product
    })
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
