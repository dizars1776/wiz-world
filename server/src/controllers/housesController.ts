import { Request, Response } from 'express'
import { HouseList } from '../data/housesTypes'
import { houseList } from '../data/houseList.js'

// Get /houses: returns an array of houses (JSON) with 200
const getAllHouses = async (req: Request, res: Response<HouseList | { error: string }>) => {
    try {
        // Get the house name
        const houseName = req.query.name as string ?? null

        if (houseName) {
            // Perform case-insensitive filtering
            const houseNameLowercase = houseName.toLowerCase()
            const foundHouse = houseList.find(house => house.name.toLowerCase() === houseNameLowercase)
            if (!foundHouse) {
                return res.status(404).json({ error: "House not found" })
            }

            // Wrap the found house in an array
            const searchByNameRes: HouseList = [foundHouse]
            return res.status(200).json(searchByNameRes)
        }

        res.status(200).json(houseList)
    } catch (error) {
        console.error('Error while fetching house list: ', error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Get /houses/:name return a house (JSON) by Name with 200
// const getOneHouseByName = async (req: Request, res: Response) => {
//    try {
//     res.status(200).json(house)
// } catch (error) {
//        console.error('Error while fetching house data by name: ', error)
//        res.status(500).json({ error: "Internal Server Error" })
//  }
// }

export { getAllHouses }
