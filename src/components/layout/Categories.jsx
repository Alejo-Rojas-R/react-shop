import React from 'react'

export const Categories = ({ data }) => {

    return (
        <>
            <ul className="list-group">
                {
                    data.data.map((item, index) => {
                        return <li key={index} className="list-group-item">{item}</li>
                    })
                }
            </ul>
        </>
    )
}
