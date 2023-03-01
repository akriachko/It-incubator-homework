import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType
* 2 - указать нужный тип для defaultAffairs
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами
* 4 - выполнить пункт 3 для функции deleteAffair
* 5 - указать нужный тип в useState с affairs
* 6 - дописать тип и логику функции deleteAffairCallback
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

export type AffairType = {
    _id: number
    name: string
    priority: 'high' | 'low' | 'middle'
}

export type AffairPriorityType = AffairType['priority']

export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if(filter === 'all') return affairs

    return affairs.filter((item) => item.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: AffairType['_id']): AffairType[] => {
    return affairs.filter((item) => item._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const [isChanged, setChanged] = useState(false)

    const filteredAffairs = filterAffairs(affairs, filter)

    const resetAll = () => {
        setFilter('all')
        setAffairs(defaultAffairs)
    }

    const deleteAffairCallback = (_id: number) => {
        const newAffairs = deleteAffair(affairs, _id)

        setAffairs(newAffairs)
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    filter={filter}
                    resetAll={resetAll}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    )
}

export default HW2
