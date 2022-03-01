import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    
    
    <div className="container mx-auto px-10 mb-8">
   
   { <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
  
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black">
            <img src="https://i.ibb.co/GVZSNdn/menu-resto1-1-270x270.png" 
            class="object-cover min-w-50 h-50"
            alt="logo"/>
      
            </span>
            
          </Link>
          </div>
      </div>
  }
    </div>
  );
};

export default Header;