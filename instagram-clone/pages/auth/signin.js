
import { getProviders, signIn as signInProvider } from 'next-auth/react'

// running on the browswer
function signIn({ providers }) {
    return (
        /*
        next auth documentation
        looping thru the providers getting the values
        mapping thru all the providers and get the provider value which is google
        */
        <>
            {
                Object.values(providers).map((provider) => (
                    <div>
                        <button onClick={() => signInProvider(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))
            }

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
