import React, { useState } from 'react';
import './Cart.css'
import { Button } from 'react-bootstrap';
import List from '../List/List';
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";
Modal.setAppElement("#root")

const Cart = ({singleJewellery,clearCart}) => {
    const [choose,setChoose]=useState([])
    const [modal, setModal] = useState(false);
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          height: "200px",
          width: "500px",
          overflow: "auto",
        },
      };
 const random=(singleJewellery)=>{
    setModal(true);
    if(singleJewellery.length>=0){
        let random=singleJewellery[Math.floor(Math.random()*singleJewellery.length)]
        setChoose(random)
        // alert(random.name);
      }
     
 }
 const closeModal = () => {
    setModal(false);
  };
    
    return (
       <div>
        <div className="container">
        {
             singleJewellery.map(jwellery=><List key={jwellery.id} jwellery={jwellery}></List>)
        }
        </div>
        <Button onClick={()=>random(singleJewellery)} className='button mt-5'>CHOOSE 1 FOR ME</Button>
            <br />
            <Button onClick={clearCart} className='button'>CHOSE AGAIN</Button>
            <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
            <h1>{choose.name}</h1>
        <button className='modal-close-button' onClick={closeModal}>
          <CgCloseR size={25} />
        </button>
      </Modal>
       </div>
        
    );
};

export default Cart;