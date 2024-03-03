import useHouseList from '../helpers/useHouseList'
import House from './House'
import Loading from './Loading'

const Houses = () => {
    const { houses, isLoading, isError } = useHouseList()

    if (isError) {
        return (
            <div className='flex flex-col mt-6 justify-start items-center'>
                <i className="italic text-sm">Unexpected error while fetching wiz houses</i>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-start items-center w-full'>
            {isLoading ? (
                <Loading />
            ) : (
                <ul className='flex flex-col gap-6 w-full max-w-sm md:max-w-md'>
                    {houses && houses.map((house) => <li key={house.id}><House house={house} /></li>)}
                </ul>
            )}
        </div>
    )
}

export default Houses
