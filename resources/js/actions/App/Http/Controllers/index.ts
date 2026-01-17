import UserController from './UserController'
import SearchController from './SearchController'
import PerfilController from './PerfilController'
import Settings from './Settings'
const Controllers = {
    UserController: Object.assign(UserController, UserController),
SearchController: Object.assign(SearchController, SearchController),
PerfilController: Object.assign(PerfilController, PerfilController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers