import React from 'react'
import House from './House';

const HouseForm = (props) => {
    return(
        <div>
            <form
                onSubmit={props.handleSubmit}
            >
                <label>Address:</label>
                <input
                    onChange={props.handleFormInput} 
                    id="address"
                    name="address"
                    type="text"
                    value={props.newHouse}
                />
                <button>Submit</button>
            </form>
        </div>
    )


}

export default HouseForm