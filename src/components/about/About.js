import React from 'react'
import AboutImg from '../../assets/images/about-img.jpg'
import { BiCaretRight } from "react-icons/bi";
import './about.css'

function About() {
  return (
    <div className='about'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 about-left-content'>
                   <div className='about-content'>
                      <h2>Rathinam Group Profile</h2>
                      <p>Rathinam Group is into development and management of educational Institutions, Information Technology (IT) Parks,anddevelopment other infrastructure (Housing Development and entertainment). With more than 15 years of experience in these fields, Rathinam Group consists of the following organizations:</p>
                      <ul>
                        <li><BiCaretRight className='bigCaretRight'/> <p>Educational Institutions - RathinamCollege of Arts and Science, RathinamTechnical Campus, RathinamSchool of Architecture, Rathinam Institute of Management, RathinamInternational Public School</p></li>
                        <li><BiCaretRight className='bigCaretRight'/> <p>Rathinam Shelters Pvt. Limited (Housing development)</p></li>
                        <li><BiCaretRight className='bigCaretRight'/> <p>RTZ Services LLP (Infrastructure Maintenance Services providing company)</p></li>
                        <li><BiCaretRight className='bigCaretRight'/> <p>RAISE (Rathinam Incubator for Social Enterprises)</p></li>
                        <li><BiCaretRight className='bigCaretRight'/> <p>RAISE BPO</p></li>
                        <li><BiCaretRight className='bigCaretRight'/> <p>Rathinavani 90.8 (Community Radio)</p></li>
                        <li><BiCaretRight className='bigCaretRight'/> <p>Rathinam Techpark</p></li>
                        <li><BiCaretRight className='bigCaretRight'/> <p>Rathinam Techpark (Special Economic Zone-SEZ)</p></li>
                      </ul>
                   </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <div className='about-img'>
                        <img src={AboutImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About