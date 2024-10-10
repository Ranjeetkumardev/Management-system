import { X } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Model = ({children , isOpen , onClose}) => {
  if (!isOpen) return null;
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-md relative w-96">
         <button
           className="absolute top-3 right-4 text-gray-600 hover:text-gray-800"
           onClick={()=>{
            navigate("/")
           }}
         >
           <X size={24} onClick={onClose} />
         </button>
         {children}
       </div>
      
    </div>
  );
};

export default Model
 