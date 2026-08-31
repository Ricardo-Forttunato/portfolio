import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import AppRoutes from './routes/routes';

describe('Portfolio Routes - Dynamic Navigation', () => {
    beforeEach(() => {
        window.history.pushState({}, 'Home', '/');
    });

    const routesTable = [
        { linkName: /sobre/i, expectedTitle: /construo produtos/i },
        { linkName: /skills/i, expectedTitle: /habilidades aplicadas/i },
        { linkName: /portfolio/i, expectedTitle: /cronologica da minha trajetoria/i },
        { linkName: /contato/i, expectedTitle: /vamos tirar seu projeto/i },
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

        expect(
          screen.getByRole('heading', { name: /ricardo fortunato/i, level: 1 })
        ).toBeInTheDocument();
        expect(screen.getByText(/desenvolvedor front-end/i)).toBeInTheDocument();
    });
});
