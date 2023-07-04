import React from 'react'

const ServiceCard = ({brand,title,thumbnail}) => {
  return (
    <a href="#" class="block w-80 h-3/6 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-xl  font-bold tracking-tight text-gray-900 dark:text-white"><img className='w-full h-44 object-cover' src={thumbnail} alt="" />{brand}{title}</h5>
        
    </a>
    
  )
}

export default ServiceCard