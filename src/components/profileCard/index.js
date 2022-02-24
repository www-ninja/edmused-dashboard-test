import React from 'react';
import './index.scss';

const ProfileCard = (props) => {
    const { userInfo } = props;
    return (
        <div className='profile-card'>
            <img className='profile-card-avatar' src={userInfo.image ?? ''} alt="avatar"/>
            <div className="profile-card-name">{userInfo.name}</div>
            <div className="profile-card-email">{userInfo.email}</div>
            <div className="profile-card-details">
                <div className='detail-item'>
                    <div className='detail-title'>Lessons</div>
                    <div className='detail-info'>{userInfo.lessons}</div>
                </div>
                <div className='detail-item'>
                <div className='detail-title'>Terms</div>
                    <div className='detail-info'>{userInfo.terms}</div>
                </div>                
            </div>
        </div>
    )
}

export default ProfileCard;