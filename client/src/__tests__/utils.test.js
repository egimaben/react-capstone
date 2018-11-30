import getToken from '../utils/getToken'
import { isLoggedIn } from '../utils/isLoggedIn'
import { logout } from '../utils/logout'
describe('Util methods', () => {
    it('should return token', () => {
        localStorage.setItem('jwtToken', 'asdf');
        expect(getToken()).toEqual('asdf')
    });
    it('isLogged in should return false without token', () => {
        localStorage.removeItem('jwtToken');
        const logged = isLoggedIn()
        expect(logged).toEqual(false)
    });
    it('isLogged in should return true with token', () => {
        localStorage.setItem('jwtToken', 'asdf');
        const logged = isLoggedIn()
        expect(logged).toEqual(true)
    });
    it('logout should unset token', () => {
        localStorage.setItem('jwtToken', 'asdf');
        expect(isLoggedIn()).toEqual(true)
        logout();
        expect(isLoggedIn()).toEqual(false)

        
    });

})