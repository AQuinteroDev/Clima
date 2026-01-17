// resources/js/routes/index.ts

// 1. IMPORTAMOS las rutas reales de verificación que tienes en la carpeta
import verification from './verification';

// 2. EXPORTAMOS las rutas de verificación para que los componentes las encuentren
export { verification };

// 3. Mantenemos los "Dummies" para que el resto de la app no falle
const dummyRoute: any = {
    url: () => '#',
    method: 'get'
};

export const route: any = (name: string) => name;
export const home = dummyRoute;
export const login = dummyRoute;
export const logout = dummyRoute;
export const register = dummyRoute;
export const dashboard = dummyRoute;
export const profile = dummyRoute;
export const edit = dummyRoute;
export const update = dummyRoute;
export const destroy = dummyRoute;

export default {};