import React from 'react'

const House = (props) => {
    
    let lock = props.house.locks.map(obj=>obj)
    
    let isLocked = () => {
        if(lock[0]){
            if(lock[0]["locked"]=== true){
                return(
                    "Locked"
                )
            }else{
                return(
                    "Unlocked"
                )
            }
        
        }   
    }
    

    console.log(isLocked())
    
    return(
        <div>
            <div>
                <strong>House</strong>
            </div>
            <div>
                {props.house.address}
            </div>
            <div>
                {lock[0]? "Locks:" : ""} 
            </div>
            <div>
                {lock[0]? `${lock[0]["name"]}, ` : ""}<span> {isLocked()}</span>
            </div>

            <br/>
        </div>
    )
}

export default House