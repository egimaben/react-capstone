import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import localStorageMock from './testUtils/LocalStorageMock'
configure({ adapter: new Adapter() });
global.localStorage = localStorageMock
