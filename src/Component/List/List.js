import React from 'react';

const List = ({jwellery}) => {
    // console.log(props);
    const {name,img}=jwellery
    return (
        <div className='bg-white'>

           <h5>{name}</h5>
           <img className='w-25 h-25' src={img} alt="" />
        </div>
    );
};

export default List;