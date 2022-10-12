import React, {useState} from 'react';
import { Button, Modal } from 'antd';


function Works(prop) {
        const [isModalVisible, setIsModalVisible] = useState(false);
      
        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };
    return (
        <div className='block worksBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className='content-holder'>
                <Button onClick={showModal}>
                    <i className='fas fa-play'></i>
                </Button>
                </div>
                <Modal title="woocommerce tutorial" visible={isModalVisible}  onCancel={handleCancel} footer={null}>

                    <iframe title='woocommerce tutorial' width="100%" height='350' src='https://youtu.be/8f8_JYIzOno'></iframe>
                </Modal>
            </div>
        </div>
    );
}

export default Works;