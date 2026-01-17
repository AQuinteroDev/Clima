import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PerfilController::showProfile
 * @see app/Http/Controllers/PerfilController.php:14
 * @route '/perfilInfo'
 */
export const showProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showProfile.url(options),
    method: 'get',
})

showProfile.definition = {
    methods: ["get","head"],
    url: '/perfilInfo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PerfilController::showProfile
 * @see app/Http/Controllers/PerfilController.php:14
 * @route '/perfilInfo'
 */
showProfile.url = (options?: RouteQueryOptions) => {
    return showProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PerfilController::showProfile
 * @see app/Http/Controllers/PerfilController.php:14
 * @route '/perfilInfo'
 */
showProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showProfile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PerfilController::showProfile
 * @see app/Http/Controllers/PerfilController.php:14
 * @route '/perfilInfo'
 */
showProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showProfile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PerfilController::showProfile
 * @see app/Http/Controllers/PerfilController.php:14
 * @route '/perfilInfo'
 */
    const showProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showProfile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PerfilController::showProfile
 * @see app/Http/Controllers/PerfilController.php:14
 * @route '/perfilInfo'
 */
        showProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showProfile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PerfilController::showProfile
 * @see app/Http/Controllers/PerfilController.php:14
 * @route '/perfilInfo'
 */
        showProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showProfile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showProfile.form = showProfileForm
/**
* @see \App\Http\Controllers\PerfilController::update
 * @see app/Http/Controllers/PerfilController.php:27
 * @route '/updatePerfil'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/updatePerfil',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PerfilController::update
 * @see app/Http/Controllers/PerfilController.php:27
 * @route '/updatePerfil'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PerfilController::update
 * @see app/Http/Controllers/PerfilController.php:27
 * @route '/updatePerfil'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PerfilController::update
 * @see app/Http/Controllers/PerfilController.php:27
 * @route '/updatePerfil'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PerfilController::update
 * @see app/Http/Controllers/PerfilController.php:27
 * @route '/updatePerfil'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const PerfilController = { showProfile, update }

export default PerfilController