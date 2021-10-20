import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <h1>This is insta build</h1>
        <Header />

        {/* Feed */}

        {/* Modal */}

      </main>
    </div>
  )
}
