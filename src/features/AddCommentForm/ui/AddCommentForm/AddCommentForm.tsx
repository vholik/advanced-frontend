import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import { Button, ButtonSize } from '@/shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors'
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice'
import { sendComment } from '../../model/services/sendComment/sendComment'

import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (value: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
    const { className, onSendComment } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value))
        },
        [dispatch]
    )

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Enter message')}
                    onChange={onCommentTextChange}
                    theme={InputTheme.BASE}
                    className={cls.input}
                />
                <Button size={ButtonSize.SM} onClick={onSendHandler}>
                    {t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
