import React from 'react'
import { House } from '../lib/houses'
import useHouseColorsGradient from '@/helpers/useHouseColorsGradient'

const House = ({ house }: { house: House }) => {
    const { cssColorVars } = useHouseColorsGradient(house.houseColours)

    return (
        <div className='p-2 border border-gray-300 rounded-xl shadow-[rgba(50,50,93,0.15)_0px_6px_12px_-2px,_rgba(0,0,0,0.1)_0px_3px_7px_-3px] '>
            <div className='flex flex-col gap-2 mx-3 py-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-sansBold text-lg sm:text-xl'>{house.name}</h2>
                    <span>{house.animal}</span>
                </div>
                <div
                    style={cssColorVars}
                    className='h-6 rounded-md bg-gradient-to-r from-[var(--fromColor)] to-[var(--toColor)]'>
                </div>
                <div className='flex gap-1'>
                    <span>Founder:</span>
                    <p className='font-sansBold'>{house.founder}</p>
                </div>
            </div>
        </div >
    )
}

export default House
