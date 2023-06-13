import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { type Profile } from '@/entities/Profile'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'

import { profileReducer } from '../../model/slice/profileSlice'

import { EditableProfileCard } from './EditableProfileCard'

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 41,
    currency: Currency.EUR,
    country: Country.Germany,
    city: 'Munich',
    username: 'admin123',
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1' },
        },
    },
    asyncReducers: { profile: profileReducer },
}

describe('features/editableProfileCard', () => {
    test('switch mode to editable from readonly', async () => {
        componentRender(<EditableProfileCard id="1" />, options)

        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.EditButton')
        )
        expect(
            screen.getByTestId('EditableProfileHeader.CancelButton')
        ).toBeInTheDocument()
    })

    test('Click cancel should back data', async () => {
        componentRender(<EditableProfileCard id="1" />, options)

        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.EditButton')
        )

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user'
        )
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.CancelButton')
        )

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
    })

    test('should sent put query', async () => {
        const mockPutReq = jest.spyOn($api, 'put')

        componentRender(<EditableProfileCard id="1" />, options)

        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.EditButton')
        )

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user'
        )

        await userEvent.click(
            screen.getByTestId('EditableProfileHeader.SaveButton')
        )

        expect(mockPutReq).toHaveBeenCalled()
    })
})
