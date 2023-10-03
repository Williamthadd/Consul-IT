import React from 'react'
import Organizaton from "../Assets/Organization.jpg"
import Personal from "../Assets/Personal.jpg"
import Education from "../Assets/Education.jpg"

const PeopleWorkWith = () => {
  return (
    <div className='people-work-with'>
    
        <p className='title-people'>People Who We Work With</p>
        <div className="card-group">
            <div className="card" id='peoplecard'>
                <img src={Organizaton} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Organization</h5>
                    <p className="card-text">This can be a huge coorporates or even a small businesses, we will give a hand to all sectors of legal and profitable organizations.</p>
                </div>
            </div>
            <div className="card" id='peoplecard'>
                <img src={Personal} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Personal</h5>
                    <p className="card-text">You as an individual, freelancer, student, or coorporate worker obviously can work with us so we can give you consultation, management, or development.</p>
                </div>
            </div>
            <div className="card" id='peoplecard'>
                <img src={Education} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Educational Institution</h5>
                    <p className="card-text">Every individual who likes to learn has a right opportunity to get knowledges and insights, so we here to help any student for their research, study case, or consultation</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default PeopleWorkWith
