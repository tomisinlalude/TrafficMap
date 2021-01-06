import {
    ADD_API_DATA,
    FETCH_API_START,
    FETCH_API_SUCCESS,
    FETCH_API_FAILURE
} from './actions_types'

export function fectchAPIStart {
    return {
        type: FETCH_API_START
    }
}

export function fetchAPISuccess {
    return {
        type: FETCH_API_SUCCESS,
        payload: data
    }
}

export function fetchAPIFailure {
    return {
        type: FETCH_API_FAILURE,
        payload: data
    }
}