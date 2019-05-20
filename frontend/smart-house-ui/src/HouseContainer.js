import React from 'react'
import House from './House.js'

const HouseContainer = (props) => {
    let house = props.houses.map(obj=><House key={obj.id } house={obj}/>)
    return(
        <div>
            {house}
        </div>
    )
}

export default HouseContainer