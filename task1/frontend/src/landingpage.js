import React from 'react';
import './landing.css'

import { Link } from 'react-router-dom';
 
export default function Landingpage() {
  return (<>
         <section className='cont'>
           <section>
              <img alt='img' src={require('./images/Capture.JPG')} />
           </section>
           <section className='part-2'>
              <h1 className='hd'>10x Team 04</h1>
              <Link to='postview'>
              <button>Enter</button>
              </Link>
            </section>
          </section>  
          
  </>);
}
