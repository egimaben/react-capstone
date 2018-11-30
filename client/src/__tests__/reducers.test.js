import { FETCH_INSTRUCTIONS, FETCH_USER_NAME, FETCH_TOKEN, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS } from '../actions/types'
import authReducer from '../reducers/auth'
import instructionsReducer from '../reducers/instructions'

describe('auth reducer', () => {
    it('should return the initial state', () => {
      expect(authReducer(undefined, {})).toEqual(
        {
          name: '',
          token: ''
        }
      )
    });
    it('should handle FETCH_USER_NAME', () => {
      expect(
        authReducer({}, {
          type: FETCH_USER_NAME,
          name: 'Benikod'
        })
      ).toEqual(
        {
          name: 'Benikod'
        }
      )
    })
    it('should handle FETCH_TOKEN', () => {
        expect(
          authReducer({}, {
            type: FETCH_TOKEN,
            token: 'token'
          })
        ).toEqual(
          {
            token: 'token'
          }
        )
      })
  })

  describe('instructions reducer', () => {
    it('should return the initial state', () => {
      expect(instructionsReducer(undefined, {})).toEqual(
        []
      )
    });
    it('should handle FETCH_INSTRUCTIONS', () => {
      expect(
        instructionsReducer([], {
            type: FETCH_INSTRUCTIONS,
            payload: [{'tag':'git'}]
          })
      ).toEqual(
        [{'tag':'git'}]
      )
    })
  })