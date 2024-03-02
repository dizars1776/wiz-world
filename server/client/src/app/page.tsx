'use client'
import { useEffect, useState } from 'react'
import { HouseList } from '../lib/houses'

const Home = () => {
    const [houses, setHouses] = useState<HouseList | []>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchHouses = async () => {
            setLoading(true);
            try {
                const response = await fetch('/houses');
                if (response.ok) {
                    const data = await response.json();
                    setHouses(data);
                } else {
                    console.error('Failed to fetch houses:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching houses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHouses();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="container flex flex-col gap-8 mt-12">
                <h2 className="text-2xl font-bold text-center">Explore the Wiz World Houses</h2>
            </div>
            <div className='flex flex-col mt-8'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ul className='flex flex-col gap-4'>
                        {houses.map((house) => (
                            <li key={house.id}>{house.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
};

export default Home;

