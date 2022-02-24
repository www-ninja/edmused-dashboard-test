import React from "react";
import './index.scss';

const ProgressCard = props => {
    const { info } = props;
    return (
        <div className="progress-card">
            <div className="card-logo" style={{background: info.color}}>
                <i className={info.icon} />
            </div>
            <div className="progress-card-detail">
                <div className="progress">{info.progress}%</div>
                <div className="title">{info.title}</div>
                <div className="detail">{info.detail}</div>
            </div>
        </div>
    )
}

export default ProgressCard;