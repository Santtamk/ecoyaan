import React from 'react'
import paper_bag from '../images/paper_bag.jpg';
import data from '../images/home.json';
import './css/hero.css';

function MainSection() {
  return (
    <div className='d-flex flex-wrap justify-content-start align-items-start container p-4'>
        
        <div class="card-deck">
            {data.map((item, index) => {
                return (
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded" key={index}>
                        <img class="card-img-top image" src={paper_bag} alt="Card"/>
                        <div class="card-body">
                            <h4 class="font-weight-bold">{item.heading}</h4>
                            <p class="card-text">{item.paragraph}</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted"></small>
                        </div>
                    </div>
                )
            })}
            </div>
    </div>
  )
}

export default MainSection