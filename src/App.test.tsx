import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AppRoutes from './routes/routes';

vi.mock('react-i18next', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-i18next')>();
    return {
        ...actual,
        useTranslation: () => ({
            t: (key: string) => key,
            i18n: {
                resolvedLanguage: 'pt',
            },
        }),
    }
});
    

describe('Portfolio Routes', () => {
    it('Should render the Home page on default route', () => {
        render(
            <AppRoutes />
        );

        const homeTitle = screen.getByRole('heading', { name: /home\.title/i });
        const homeDescription = screen.getByText(/home\.description/i);
        
        expect(homeTitle).toBeInTheDocument();
        expect(homeDescription).toBeInTheDocument();
    })
});