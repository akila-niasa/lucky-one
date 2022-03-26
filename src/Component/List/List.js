import React from 'react';

const List = ({jwellery}) => {
    // console.log(props);
    const {name,img}=jwellery
    return (
        <div className='row bg-white'>

           <h5 className='col-8'>{name}</h5>
           <img className='col-4 w-25 h-25' src={img} alt="" />
        </div>
    );
};

export default List;