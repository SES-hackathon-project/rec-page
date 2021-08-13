import React from "react";
import "./recommendation.css"

// const recommendation = {
//     field: ___
// }
{/* <Recommendation rec = {recommendation}/> */}


class Recommendation extends React.Component {
    render() {
        const rec_name = this.props.rec.rec_name;
        return (
            <div className="one-rec-container">
                <div className="recommendation">
                    <button className="rec-button">
                        {rec_name}
                    </button>
                    <button className="rec-like-button"></button>
                </div>
            </div>
        )
    }
}

export default Recommendation;