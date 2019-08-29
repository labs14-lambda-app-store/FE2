import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home.js';

describe('<Home />', () => {
      it('should render without errors', () => {
            render(<Home />)
      });
});