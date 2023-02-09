import React, {useState} from "react";


export const RatingScale = () => {
    let arr = [1, 2, 3, 4, 5]
    const [rating, setRating] = useState(0);
    return (
        <div>
            <div className="rating">
                {[...Array(5)].map((number, index) => {
                    index += 1
                    return(
                        <div key={index} className="rating-num" onClick={() => setRating(index)}>{index}</div>
                    )
                })}
            </div>
        </div>
    )
}