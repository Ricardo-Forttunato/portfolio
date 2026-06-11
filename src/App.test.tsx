import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AppRoutes from './routes/routes';

describe('Portfolio Routes - Dynamic Navigation', () => {
    const routesTable = [
        { linkName: /about/i, expectedTitle: /^about.title$/i },
        { linkName: /skills/i, expectedTitle: /^skills.title$/i },
        { linkName: /portfolio/i, expectedTitle: /^portfolio.title$/i },
        { linkName: /contact/i, expectedTitle: /^contact.title$/i },
    ]

    it.each(routesTable)(
        'Should navigate to the correct page when clicking on "$linkName" link',
        async ({ linkName, expectedTitle }) => {
            render(<AppRoutes />);

            const user = userEvent.setup();
            const menuLink = screen.getByRole('link', { name: linkName });
            await user.click(menuLink);

            const pageTitle = screen.getByRole('heading', { name: expectedTitle });
            expect(pageTitle).toBeInTheDocument();
        }
    );

    it('Should navigate to the Home page by default and handle invalid routes', async () => {
        window.history.pushState({}, 'Invalid Page', '/broken-link');

        render(<AppRoutes />);

        expect(screen.getByText('Ricardo Fortunato')).toBeInTheDocument();
        expect(screen.getByText('layout.role')).toBeInTheDocument();
    });
});