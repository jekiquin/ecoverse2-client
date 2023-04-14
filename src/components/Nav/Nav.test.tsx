import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// import userEvent from '@testing-library/user-event';
import SideNav from './SideNav';

describe('Testing Nav Components', () => {
  describe('SideNav testing', () => {
    describe('Should have links', () => {
      const cases = ['Map', 'Projects'];

      test.each(cases)('Testing %s', (label) => {
        render(<SideNav />, { wrapper: MemoryRouter });

        expect(screen.getAllByText(label)).toHaveLength(2);
      });
    });
  });
});
