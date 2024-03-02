interface HouseHead {
    id: string
    firstName: string
    lastName: string
}

interface HouseTrait {
    id: string
    name: string
}

type HouseHeadList = HouseHead[]
type HouseTraitList = HouseTrait[]

interface House {
    id: string
    name: string
    houseColours: string
    founder: string
    animal: string
    element: string
    ghost: string
    commonRoom: string
    heads: HouseHeadList
    traits: HouseTraitList
}

type HouseList = House[]


export type { House, HouseList }
