import { render } from '@testing-library/react';

import Contactus from './contactus';

describe('Contactus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Contactus />);
    expect(baseElement).toBeTruthy();
  });
});
