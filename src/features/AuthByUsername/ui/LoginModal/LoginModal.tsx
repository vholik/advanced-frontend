import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'

import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({
    className,
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            className={classNames('', {}, [className])}
        >
            <LoginForm />
        </Modal>
    )
}
