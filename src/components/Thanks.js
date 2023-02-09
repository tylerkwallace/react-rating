import thanks from '../images/illustration-thank-you.svg'; // with import
import { RatingScale } from "./RatingScale";
import { rating } from './Rate';

export const Thanks = (props) => {
    return (
        <div className="container">
            <div className="thanks-icon">
                <img src={thanks} />
            </div>

            <center>
                <div className='selection'>
                    You selected {props.rating} out of 5 stars
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
    )
}