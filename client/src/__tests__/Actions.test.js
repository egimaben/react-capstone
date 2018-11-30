import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchToken, fetchUserName, fetchedUserName, fetchTodos } from '../actions/auth'
import { fetchInstructions } from '../actions/instructions'
import { FETCH_INSTRUCTIONS, FETCH_USER_NAME, FETCH_TOKEN, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS } from '../actions/types'
import fetchMock from 'fetch-mock'
import axios from 'axios'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
jest.mock('axios');
describe('Test thunk action creators', () => {
  it('expected fetchUsername should be dispatched on successful request', () => {
    const resp = { data: { name: 'benikod' } };
    const expectedActions = [fetchedUserName('benikod')];
    axios.get.mockResolvedValue(resp);
    const store = mockStore({ name: '' })
    return store.dispatch(fetchUserName()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('expected fetchInstructions should be dispatched on successful request', () => {
    const resp = {
      data: {
        instructions: [{
          "_id": "random_id",
          "tag": "remotes",
          "label": "Synchronization and remote repositories",
          "nuggets":
            [
              { "text": "Pushes all local change sets to the remote repository", "code": "git push [alias] [branch]" },
              { "text": "Downloads new remote history and incorporates changes", "code": "git reset pull" },
              { "text": "Shows the name of remote repositories", "code": "git remote -v" },
              { "text": "Get the latest changes from the origin but not merge", "code": "git fetch" },
              { "text": "Removes the remote repository", "code": "git remote rm [remote repo name]" }
            ]
        }]
      }
    };
    const action = {
      type: FETCH_INSTRUCTIONS,
      payload: resp.data.instructions
    }
    const expectedActions = [action];
    axios.get.mockResolvedValue(resp);
    const store = mockStore({ instructions: [] })
    return store.dispatch(fetchInstructions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('sync actions', () => {
  it('creates FETCH_TOKEN when fetching token has been done', () => {
    const store = mockStore({ token: '' })
    localStorage.setItem('jwtToken', 'asdf')
    store.dispatch(fetchToken())
    const actions = store.getActions()
    const expectedPayload = { type: 'FETCH_TOKEN', token: 'asdf' }
    expect(actions).toEqual([expectedPayload])

  })
})