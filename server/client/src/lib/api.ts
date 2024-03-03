import { HouseList } from "./houses"

const getHouses = async (): Promise<HouseList | null> => {
    try {
        const res = await fetch(
            `/houses`,
            {
                next: { revalidate: 5, }
            },
        )

        if (!res.ok) {
            throw new Error('Failed to fetch houses')
        }

        const houseList = await res.json()
        return houseList
    } catch (error) {
        console.error('Error while fetching houses', error)
        return null
    }
}

export { getHouses }
