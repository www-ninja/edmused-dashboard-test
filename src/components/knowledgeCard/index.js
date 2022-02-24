import React from "react";
import './index.scss';

const KnowledgeCard = (props) => {
    const { item } = props;
    return (
        <div className='card-item' style={{background: item.color}}>
            <div className="item-logo">                
                <img src={item.src} alt="" />
                <span>&hellip;</span>
            </div>
            <div className="card-title">{item.title}</div>
        </div>
    )
}

export default KnowledgeCard;