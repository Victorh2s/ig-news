import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
import { GetServerSideProps, GetStaticProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps {
  product : {
    priceId: string;
    amount: number;
  }
}



export default function Home({product}: HomeProps) {

  const amount =  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format( product.amount / 100 )

  return (
    <>
    <Head>
      <title>Home | ig news</title>
    </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about  <br /> 
          the <span>React</span> world.</h1>
          <p>
            Get access to all the publicantions <br/>
            <span>for {amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}


export const getStaticProps : GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1MILHTBtbj1oLYuVoDF7kjI9', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: price.unit_amount,
  }

  return {
    props:{
      product,
    },
    revalidate: 60 * 60 * 24
  }
}

// export const getServerSideProps : GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve('price_1MILHTBtbj1oLYuVoDF7kjI9', {
//     expand: ['product']
//   })

//   const product = {
//     priceId: price.id,
//     amount: price.unit_amount,
//   }

//   return {
//     props:{
//       product,
//     }
//   }

