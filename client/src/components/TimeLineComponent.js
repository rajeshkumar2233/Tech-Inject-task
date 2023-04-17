import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';


const TimeLineComponent = () => {
    const { deductionsLength } = useContext(AppContext);
    return (
        <>
            {deductionsLength ? null : <div className='emptyCon'>
                <p>No Punches Recorded</p>
                <button>Edit</button>
            </div>}
        </>

    )
}

export default TimeLineComponent
