import * as types from '../../../../../app/renderer/src/actions/types';
import copiedToClipboard from '../../../../../app/renderer/src/reducers/copiedToClipboard';

const { COPY_ITEM, SET_ACTIVE_KEY, CLEAR_ACTIVE_KEY, ...allTypes } = types;

describe('copiedToClipboard reducer', () => {
  it('should return the initial state', () => {
    const state = undefined;
    const action = { type: 'SOME_RANDOM_ACTION' };

    expect(copiedToClipboard(state, action)).toBe(false);
  });

  it('should handle COPY_ITEM action', () => {
    const state = undefined;
    const action = { type: COPY_ITEM };

    expect(copiedToClipboard(state, action)).toBe(true);
  });

  it('should handle SET_ACTIVE_KEY action', () => {
    const state = 'value';
    const action = { type: SET_ACTIVE_KEY };

    expect(copiedToClipboard(state, action)).toBe('value');
  });

  it('should handle CLEAR_ACTIVE_KEY action', () => {
    const state = 'value';
    const action = { type: CLEAR_ACTIVE_KEY };

    expect(copiedToClipboard(state, action)).toBe('value');
  });

  it('should handle the rest of the actions', () => {
    const state = undefined;
    Object.values(allTypes).map(type => (
      expect(copiedToClipboard(state, { type })).toBe(false)
    ));
  });
});
