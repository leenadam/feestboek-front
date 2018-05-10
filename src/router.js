import pathToRegexp from 'path-to-regexp'

import Front from './Pages/Front'
import About from './Pages/About'

const routes = [
    { path: '/', name: 'front', page: Front },
    { path: '/about', name: 'about', page: About },
]

const notFoundRoute = { name: 'notFound' }

routes.forEach(route => route.re = pathToRegexp(route.path))

export const match = (path) => {
    for (let index = 0; index < routes.length; index++) {
        const route = routes[index];
        const params = route.re.exec(path)
        if (params) {
            return { route, params }
        }
    }

    return notFoundRoute
}
