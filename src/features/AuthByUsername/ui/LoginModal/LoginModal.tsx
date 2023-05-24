import { Suspense, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Loader } from 'shared/ui/Loader/Loader'

import { LoginFormAsync } from '../LoginForm/LoginForm.async'

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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
}
