import star from '../images/icon-star.svg'; // with import
import React, { useState } from 'react';
import thanks from '../images/illustration-thank-you.svg'; // with import

export const Rate = () => {
    const [rating, setRating] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const [selectionMade, setSelectionMade] = useState(false);

    const handleSubmit = () => {
        selectionMade == true ? setIsHidden(true) : setIsHidden.useState()
    }

    return (
        <div className="container">
            <div id={`${isHidden == false ? 'show' : 'hide'}`}>

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
                            return (
                                <div key={index} className="rating-num" onClick={() => {setRating(index); setSelectionMade(true)}}>{index}</div>
                            )
                        })}
                    </div>
                    <button className="submit" onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>

            <div id={`${isHidden == false ? 'hide' : 'show'}`}>
                <div className="thanks-icon">
                    <img src={thanks} />
                </div>

                <center>
                    <div className='selection'>
                        You selected {rating} out of 5 stars
                    </div>
                </center>

                <center>
                    <div className="question">
                        <h1>Thanks!</h1>
                    </div>
                </center>

                <div className="card-body">
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!
                </div>
            </div>
        </div>
    )

}