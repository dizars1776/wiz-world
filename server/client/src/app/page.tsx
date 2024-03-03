'use client'
import Houses from '../components/Houses'

const Home = () => {
    return (
        <main className="flex flex-col items-center min-w-80">
            <div className="container flex flex-col gap-6 mt-12">
                <h1 className="text-2xl font-bold text-center">Explore the Wiz World Houses</h1>
                <div className='flex flex-col mt-6 px-4 justify-start items-center'>
                    <Houses />
                </div>
            </div>
        </main>
    )
}

export default Home;

