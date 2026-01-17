import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SearchController::store
 * @see app/Http/Controllers/SearchController.php:13
 * @route '/searches'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/searches',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SearchController::store
 * @see app/Http/Controllers/SearchController.php:13
 * @route '/searches'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::store
 * @see app/Http/Controllers/SearchController.php:13
 * @route '/searches'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SearchController::store
 * @see app/Http/Controllers/SearchController.php:13
 * @route '/searches'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SearchController::store
 * @see app/Http/Controllers/SearchController.php:13
 * @route '/searches'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\SearchController::read
 * @see app/Http/Controllers/SearchController.php:30
 * @route '/historial'
 */
export const read = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: read.url(options),
    method: 'get',
})

read.definition = {
    methods: ["get","head"],
    url: '/historial',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::read
 * @see app/Http/Controllers/SearchController.php:30
 * @route '/historial'
 */
read.url = (options?: RouteQueryOptions) => {
    return read.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::read
 * @see app/Http/Controllers/SearchController.php:30
 * @route '/historial'
 */
read.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: read.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::read
 * @see app/Http/Controllers/SearchController.php:30
 * @route '/historial'
 */
read.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: read.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::read
 * @see app/Http/Controllers/SearchController.php:30
 * @route '/historial'
 */
    const readForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: read.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::read
 * @see app/Http/Controllers/SearchController.php:30
 * @route '/historial'
 */
        readForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: read.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::read
 * @see app/Http/Controllers/SearchController.php:30
 * @route '/historial'
 */
        readForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: read.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    read.form = readForm
/**
* @see \App\Http\Controllers\SearchController::deleteAll
 * @see app/Http/Controllers/SearchController.php:40
 * @route '/deleteSearches'
 */
export const deleteAll = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteAll.url(options),
    method: 'get',
})

deleteAll.definition = {
    methods: ["get","head"],
    url: '/deleteSearches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::deleteAll
 * @see app/Http/Controllers/SearchController.php:40
 * @route '/deleteSearches'
 */
deleteAll.url = (options?: RouteQueryOptions) => {
    return deleteAll.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::deleteAll
 * @see app/Http/Controllers/SearchController.php:40
 * @route '/deleteSearches'
 */
deleteAll.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteAll.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::deleteAll
 * @see app/Http/Controllers/SearchController.php:40
 * @route '/deleteSearches'
 */
deleteAll.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteAll.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SearchController::deleteAll
 * @see app/Http/Controllers/SearchController.php:40
 * @route '/deleteSearches'
 */
    const deleteAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleteAll.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SearchController::deleteAll
 * @see app/Http/Controllers/SearchController.php:40
 * @route '/deleteSearches'
 */
        deleteAllForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleteAll.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SearchController::deleteAll
 * @see app/Http/Controllers/SearchController.php:40
 * @route '/deleteSearches'
 */
        deleteAllForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleteAll.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    deleteAll.form = deleteAllForm
/**
* @see \App\Http\Controllers\SearchController::deleteMethod
 * @see app/Http/Controllers/SearchController.php:47
 * @route '/searchesDelete/{id}'
 */
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/searchesDelete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SearchController::deleteMethod
 * @see app/Http/Controllers/SearchController.php:47
 * @route '/searchesDelete/{id}'
 */
deleteMethod.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return deleteMethod.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::deleteMethod
 * @see app/Http/Controllers/SearchController.php:47
 * @route '/searchesDelete/{id}'
 */
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\SearchController::deleteMethod
 * @see app/Http/Controllers/SearchController.php:47
 * @route '/searchesDelete/{id}'
 */
    const deleteMethodForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteMethod.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SearchController::deleteMethod
 * @see app/Http/Controllers/SearchController.php:47
 * @route '/searchesDelete/{id}'
 */
        deleteMethodForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteMethod.form = deleteMethodForm
const SearchController = { store, read, deleteAll, deleteMethod, delete: deleteMethod }

export default SearchController