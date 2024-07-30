import React from 'react'
import ListOfItems from './itemData'


const ItemsList = () => {
  const list = ListOfItems 
  return (
    <div className='bg-[#E60A2B] h-[80px] flex items-center gap-8 w-[8000px]'>
      {
        list.map((item)=>(
          <>
            <div key={item.id} className='text-[40px] text-[#FCCC35]' id='list'>
              <h2 className=''>*{item.product}</h2>
            </div>
          </>
        ))
      }
      
      
    </div>
  )
}

export default ItemsList