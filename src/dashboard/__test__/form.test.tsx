import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { describe, expect } from 'vitest';

import Form from '../components/form';

describe('Dashboard Form', () => {
    test('Display Form', () => {
        render(<Form />);
        expect(screen.getByPlaceholderText('Agrega una nota')).toBeDefined()
    })
    test('Display Title', () => {
        render(<Form />);
        fireEvent.click(screen.getByPlaceholderText('Agrega una nota'))
        expect(waitFor(() => screen.getByPlaceholderText('Título'))).toBeDefined()
    })
    test('Change Input Value', () => {
        const form = render(<Form />)
        const input = form.getByPlaceholderText('Agrega una nota') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'This is lorem ipsum' } })
        expect(input.value).toBe('This is lorem ipsum')
    })
    test('Change Color Value', () => {
        const form = render(<Form />)
        fireEvent.click(form.container.getElementsByClassName('color-menu')[0]);
        fireEvent.click(screen.getByTitle('#FCB900'))
        expect(form.container.getElementsByClassName('pointer')[0].textContent).toBe("#FCB900".toLowerCase())
    })
})