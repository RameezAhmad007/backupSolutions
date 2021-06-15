import React from 'react'
import { dataheader } from '../../data/dataHeader'

const List = (props) => {
    
    return (
        <ul>
            {
                dataheader.map((items,index)=>(
                    <li><a className={`nav-link scrollto`} href={items.link}>{items.text}</a></li> 
                ))
            }
                                   
        </ul>
    )
}

export default List
