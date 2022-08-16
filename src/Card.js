import React from 'react'

const Card = ({data}) => {
  return (
    <div>
      <div className='row'>
{data.map(item=><div className='col-4'>
  <div class="card">
  <img class="card-img-top" src={item.largeImageURL} alt="Cardimage"/>
  
  <div className='title'>{item.tags}</div>
  
</div>
</div>)}
</div>
    </div>
  )
}

export default Card