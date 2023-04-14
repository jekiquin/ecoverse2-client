import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { MemoryRouter } from 'react-router-dom';

import BottomNav from './BottomNav';
import NavListItems from './NavListItems';
import SideNav from './SideNav';

describe('Testing Nav Components', () => {
  const cases = ['Map', 'Projects'];

  describe('SideNav testing', () => {
    test.each(cases)('%s link should exist', (label) => {
      render(<SideNav />, { wrapper: MemoryRouter });
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
    test('Should have links', () => {
      render(<SideNav />, { wrapper: MemoryRouter });
      const defaultLinks = 2; // home and login/logout link
      expect(screen.getAllByRole('link')).toHaveLength(
        defaultLinks + cases.length
      );
    });
  });

  describe('BottomNav testing', () => {
    test.each(cases)('%s link should exist', (label) => {
      render(<BottomNav />, { wrapper: MemoryRouter });
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
    test('Should have links', () => {
      render(<BottomNav />, { wrapper: MemoryRouter });

      expect(screen.getAllByRole('link')).toHaveLength(cases.length);
    });
  });

  describe('NavListItems testing', () => {
    let user: UserEvent;

    beforeAll(() => {
      user = userEvent.setup();
    });

    test.each(cases)('%s should be active when clicked', async (label) => {
      render(
        <ul>
          <NavListItems />
        </ul>,
        { wrapper: MemoryRouter }
      );
      const link = screen.getAllByText(label)[0].parentElement;

      expect(link).not.toBeNull();

      if (link) {
        await user.click(link);
        expect(screen.getAllByText(label)[0].parentElement).toHaveClass(
          'active'
        );
      }
    });
  });
});
