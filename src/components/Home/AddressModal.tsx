import React from 'react';
import "./AddressModal.css"

const AddressModal: React.FC = () => {
    return (
        <div className='modal_container'>
            <div className='addr_modal'>
                <h2>Few steps more!</h2>
                <div>
                    <input type="text" placeholder='Your address' />
                    <button className='addr_btn'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddressModal;