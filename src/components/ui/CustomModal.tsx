import { type ReactNode } from 'react';
import { Button, Modal } from 'antd';

type Props = {
    btnName: string,
    title: string,
    children: ReactNode,
    open: boolean,
    onOpen: () => void,
    onClose: () => void,
}


function CustomModal({ children, btnName, title, open, onOpen, onClose }: Props) {
    return (
        <>
            <Button onClick={onOpen} type='text' variant='text'>
                {btnName}
            </Button>
            <Modal
                title={title}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={open}
                onCancel={onClose}
                footer={null}>
                {children}
            </Modal>
        </>
    );
}

export default CustomModal;