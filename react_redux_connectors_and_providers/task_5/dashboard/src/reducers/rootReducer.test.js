import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('initial state', () => {
  it('has the correct structure', () => {
    const expectedFields = ['courses', 'notifications', 'ui'];
    const initialState = rootReducer();

    for (const field of expectedFields) {
      expect(initialState).toHaveProperty(field);
      expect(initialState[field]).toBeInstanceOf(Map);
    }
  });
});
