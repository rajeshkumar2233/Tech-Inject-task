import React, { useContext } from 'react'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { AppContext } from '../context/AppContext';

const UserComponent = () => {
    const { data, dataLength, page, handelClick } = useContext(AppContext);
    return (
        <div>
            <div className='userBox'>

                <div className='mainBox'>
                    <div id='box1'>
                        <h1>EMS</h1>
                        <div className='arrowsContainer'>
                            <div className='arrow' onClick={page === 0 ? () => handelClick(dataLength - 1) : () => handelClick(page - 1)}>
                                <FaLessThan />
                            </div>
                            <div className='arrow' onClick={page === dataLength - 1 ? () => handelClick(0) : () => handelClick(page + 1)}>
                                <FaGreaterThan />
                            </div>
                        </div>
                    </div>
                    <div id='box2'>
                        <div className='userDetailsBox'>
                            <div className='imgCon'>
                                <img src={data.image} alt='userImg' />
                            </div>

                            <div className='userDetails'>
                                <p>Name:{`${data.name}`}</p>
                                <p>Id:{`${data._id}`}</p>
                                <p>Phone No:{`${data.mobile}`}</p>
                            </div>

                        </div>
                    </div>

                </div>


                <div className='dayDetailsBox'>
                    <p>Day:{data.day}</p>
                    <p>Date:{data.date}</p>
                </div>

            </div>

        </div>
    )
}

export default UserComponent
