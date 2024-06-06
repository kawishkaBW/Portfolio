import React, { useState, useEffect } from 'react';
import './Resume.css'; 
import { MdSchool } from 'react-icons/md'; 
import { MdPerson } from 'react-icons/md';
import school from '../../assets/images/info/school-logo.png';
import University from '../../assets/images/info/university-of-kelaniya-logo.png';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const App = () => {
  const [activeTab, setActiveTab] = useState('information');

  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowButton(true);
    }, 3000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return (
          <div className='tab-info'>

            <p><strong>Name:</strong> 
              <p>Kawishka Wimalarathna</p>
            </p>

            <p><strong>Contact Number:</strong> 
              <p>+94 779 885 779</p>
            </p>
            
            <p><strong>Email:</strong> 
              <p>kavishkabwimalarathna@gmail.com</p>
            </p>
          </div>
        );
      case 'education':
        return (
          <div>
            <p><strong>SCHOOL:</strong>
              <div>
              Ibbagamuwa Central College 
              <img src={school} alt="school" className='icon' />
              </div>
            </p>
            
            <p><strong>UNIVERSITY:</strong>
              <div>
              University Of Kelaniya 
                <img src={University} alt="University" className='icon' />
              </div>
            </p>
            <p><strong>Degree:</strong> 
              <p>Bachelor of Science Honours in Computer Science</p>
            </p>

            <p><strong>SPECIALIZED:</strong> 
              <p>Artificial Intelligence</p>
            </p>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='all'>
      <div className="container-box">
        <div className='resume'>
          <h2>WHO AM I?</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="tabs">
        <button 
            onClick={() => setActiveTab('information')} 
            className="icon-button"
          >
            <MdPerson size={24} />
            <span className="tooltip">information</span>
          </button>

        
          <button 
            onClick={() => setActiveTab('education')} 
            className="icon-button"
          >
            <MdSchool size={24} />
            <span className="tooltip">Education</span>
          </button>
        </div>
        <div className="content">
          {renderContent()}
        </div>
      </div>
      <div className='resumebtn-container'>
        
          {showButton ? (
            <a href='KawishkaCV.pdf' download='kawishka wimalarathna.pdf'>
            <button className='resumebtn' onClick={handleClick}>
              Download my Resume <FaCloudDownloadAlt size={20} />
            </button>
            </a>
          ) : (
            <span className='emoji'>Thank You...😊</span>
          )}
          
        </div>

    </div>
  );
};

export default App;
