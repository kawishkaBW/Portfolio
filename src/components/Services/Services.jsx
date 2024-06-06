import React from 'react';
import './Services.css';

import computer from '../../assets/images/role/Computer Application Developer.jpeg';
import blog from '../../assets/images/role/Blog Writer.jpeg';
import ai from '../../assets/images/role/AI application developer.jpg';
import web from '../../assets/images/role/Web Developer.jpg';
import uiux from '../../assets/images/role/UI-UX designer card.jpg';
import coder from '../../assets/images/role/coder.jpg';

const Services = () => {
  return (
      <div className='container-services' id='service'>
        <h2>WHAT I CAN DO</h2>
      
      <div className='container-imgbox'>
        <div className="box">
        <span style={{ '--i': 1 }}><img src={computer} alt="computer" />Computer</span>
        <span style={{ '--i': 2 }}><img src={blog} alt="blog" />Computer</span>
        <span style={{ '--i': 3 }}><img src={ai} alt="ai" />Computer</span>
        <span style={{ '--i': 4 }}><img src={web} alt="web" />Computer</span>
        <span style={{ '--i': 4 }}><img src={web} alt="web" />Computer</span>
        <span style={{ '--i': 5 }}><img src={uiux} alt="uiux" />Computer</span>
        <span style={{ '--i': 6 }}><img src={coder} alt="coder" />Computer</span>
        <span style={{ '--i': 7 }}><img src={computer} alt="computer" />Computer</span>
        <span style={{ '--i': 8 }}><img src={blog} alt="blog" />Computer</span>
        <span style={{ '--i': 9 }}><img src={ai} alt="ai" />Computer</span>
        <span style={{ '--i': 10 }}><img src={web} alt="web" />Computer</span>
        <span style={{ '--i': 11 }}><img src={uiux} alt="uiux" />Computer</span>
        <span style={{ '--i': 12 }}><img src={coder} alt="coder" />Computer</span>
      </div>
    </div>
    </div>
  );
}

export default Services;
