import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Portfolio from './Portfolio';

describe('Portfolio timeline ordering', () => {
  it('renders projects in descending year and quarter order', () => {
    render(<Portfolio />);

    const periods = screen.getAllByText(/^Q[1-4] \d{4}$/).map((element) => element.textContent);
    expect(periods).toEqual([
      'Q4 2026',
      'Q3 2026',
      'Q3 2026',
      'Q2 2026',
      'Q1 2026',
      'Q2 2025',
      'Q1 2025',
      'Q1 2025',
      'Q3 2024',
      'Q3 2024',
      'Q3 2024',
      'Q2 2024',
      'Q1 2024',
    ]);

    const projectTitles = screen.getAllByRole('heading', { level: 3 }).map((element) => element.textContent);
    expect(projectTitles).toEqual([
      'VLService',
      'PDF Extractor',
      'EasyDashboard',
      'Landing-Page B2B',
      'Portfolio Profissional',
      'Sistema MES',
      'Gerenciador de Tarefas de IMC',
      'Fungi Finders',
      'Alura Geek',
      'NatureFlix',
      'Landing Page de Marketing',
      'Organo',
      'Candidato SPA',
    ]);
  });
});
