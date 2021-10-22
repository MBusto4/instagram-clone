
import { getProviders, signIn as signInProvider } from 'next-auth/react'
import Header from '../../components/Header'

// running on the browswer
function signIn({ providers }) {
    return (
        /*
        next auth documentation
        looping thru the providers getting the values
        mapping thru all the providers and get the provider value which is google
        */
        <>
            <Header />
            <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
                <img className='w-80' src="https://links.papareact.com/ocw" alt="" />
                <p className='font-xs italic'> Not Real APP!! This is an Instagram clone Made by Michael Busto</p>
                <div className='mt-40'>
                    {
                        Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() =>
                                    signInProvider(provider.id, { callbackUrl: '/' })}>
                                    Sign in with {provider.name}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

// Server Side Render -- from next.js docs
export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default signIn
