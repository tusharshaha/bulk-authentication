import React from 'react';
import { useSelector } from 'react-redux';
import AddressModal from 'src/components/Home/AddressModal';
import { RootState } from 'src/redux/store';
import "./Home.css";

const Home: React.FC = () => {
    const { address } = useSelector((state: RootState) => state.users.value)
    const gallary: string[] = [
        "https://i.ibb.co/Hq0YjBy/pressure-250x227.png",
        "https://i.ibb.co/sWFMSBW/product01-250x227.jpg",
        "https://i.ibb.co/tHnnXJy/product02-250x227.jpg",
        "https://i.ibb.co/TvkM7B8/product03-250x227.jpg",
        "https://i.ibb.co/b6RRTcs/product04-250x227.jpg",
        "https://i.ibb.co/FwjpLqs/product05-250x227.jpg",
        "https://i.ibb.co/wgrvzLM/product06-250x227.jpg",
        "https://i.ibb.co/r6FM7d1/product07-250x227.jpg"
    ]
    return (
        <div className='home_container'>
            {
                address ?
                    <h3 className='address_title'>You're from {address}</h3>
                    :
                    <AddressModal />
            }
            <div className='gallary'>
                {
                    gallary.map((ele, i) => <div key={i}>
                        <img src={ele} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;