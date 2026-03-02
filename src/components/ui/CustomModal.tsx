import { useState, type ReactNode } from 'react';
import { Button, Modal } from 'antd';

type Props = {
    btnName: string,
    title: string,
    children: ReactNode
}

function CustomModal({ children, btnName, title }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <Button onClick={showModal} type='text' variant='text'  >
                {btnName}
            </Button>
            <Modal
                title={`${title}`}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}>
                {children}
            </Modal>
        </>
    );
};

export default CustomModal;