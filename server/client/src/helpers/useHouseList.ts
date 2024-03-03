import { useEffect, useState } from 'react'
import { getHouses } from '../lib/api'
import { HouseList } from '../lib/houses'

type WizHouseData = {
    houses: HouseList | null
    isLoading: boolean
    isError: boolean
}

const initData = {
    houses: null,
    isLoading: true,
    isError: false,
}

const useHouseList = () => {
    const [data, setData] = useState<WizHouseData>(initData)

    useEffect(() => {
        const fetchHouseList = async () => {
            const houseList = await getHouses()
            if (!houseList) {
                setData({ houses: houseList, isError: true, isLoading: false })
                return
            }

            setData({ houses: houseList, isError: false, isLoading: false })
        }

        fetchHouseList()
    }, [])

    return data
}

export default useHouseList
