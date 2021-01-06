import {
  ADD_API_DATA,
  FETCH_API_START,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "./actions_types";

const api = [
  { latitude: 53.5225, longitude: -113.6242 },
  { latitude: 53.5437, longitude: -113.4917 },
  { latitude: 53.5439, longitude: -113.4914 },
  { latitude: 53.5449, longitude: -113.491 },
  { latitude: 53.545, longitude: -113.4904 },
  { latitude: 53.5456, longitude: -113.4901 },
  { latitude: 53.5461, longitude: -113.4888 },
  { latitude: 53.5468, longitude: -113.4873 },
];

export function fectchAPIStart() {
  return {
    type: FETCH_API_START,
  };
}

export function fetchAPISuccess(data) {
  return {
    type: FETCH_API_SUCCESS,
    payload: data,
  };
}

export function fetchAPIFailure(data) {
  return {
    type: FETCH_API_FAILURE,
    payload: data,
  };
}

export function fetchfromAPI() {
  return (dispatch) => {
    dispatch(fectchAPIStart());

    fetch(api, { method: "GET" })
      .then((res) => res.json())
      .then((res) => dispatch(fetchAPISuccess(res)))
      .catch((res) => dispatch(fetchAPIFailure(res)));
  };
}
