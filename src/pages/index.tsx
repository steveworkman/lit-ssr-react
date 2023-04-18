import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { SimpleButtonClient } from '../components/csr-button';
import { SimpleButton } from '../components/wrapped-simple-button';
import "../components/simple-button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'simple-button': any;
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Lit NextJS properties bug</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1>Lit NextJS properties bug</h1>
      <p>These two are client-side rendered</p>
      <SimpleButtonClient>I am CSRd</SimpleButtonClient>
      <SimpleButtonClient disabled={true}>I am CSRd and disabled</SimpleButtonClient>
      <p>These two are wrapped SSR</p>
      <SimpleButton>I am wrapped</SimpleButton>
      <SimpleButton disabled={true}>I am wrapped and disabled</SimpleButton>
      <p>These two are raw lit elements</p>
      <simple-button>I am a SSR-ed Lit element</simple-button>
      <simple-button disabled>I am a SSR-ed Lit element and disabled</simple-button>
      </main>
    </>
  )
}