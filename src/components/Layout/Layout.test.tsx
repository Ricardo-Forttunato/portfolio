import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
    it('Should render the owner name inside the header', () => {
        render(
          <MemoryRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true
            }}
          >
                <Layout />
            </MemoryRouter>
        );

        const brandName = screen.getByRole('heading', {
          name: /ricardo fortunato/i,
          level: 1,
        });

        expect(brandName).toBeInTheDocument();
    })
});
