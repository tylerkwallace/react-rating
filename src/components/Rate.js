import star from '../images/icon-star.svg'; // with import
import React, {useState} from 'react';

export const Rate = () =>{
    const [rating, setRating] = useState(0);
    return(
        <div className="container">
            <div className="icon">
                <img src={star} />
            </div>
            
            <div className="question">
                <h1>How did we do?</h1>
            </div>

            <div className="card-body">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </div>

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

            {/* <RatingScale /> */}

            <button className="submit">SUBMIT</button>
        </div>
        
    )
}