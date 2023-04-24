import React from 'react'

const items = [1, 2, 3, 4, 5];

export const RatingStars = ({ rating }) => {

    return (
        <>
            {
                items.map((item, index) => (
                    <i key={index} className={`bi bi-star-fill me-1 ${(index < Math.round(rating)) ? 'text-warning' : 'text-muted opacity-25'}`}></i>
                ))
            }
            <div className="opacity-75">{rating}</div>
        </>
    );
}
