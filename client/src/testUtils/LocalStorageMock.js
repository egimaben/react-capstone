let store={};
const localStorageMock = {
    clear:jest.fn(()=>store = {}),
  
    getItem:jest.fn(key=>store.key),
  
    setItem:jest.fn((key,value)=>store[key] = value),
  
    removeItem:jest.fn((key)=>delete store[key])
  }
export default localStorageMock
