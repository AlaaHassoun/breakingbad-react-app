import React, { useEffect, useReducer } from "react";

const API = "https://www.breakingbadapi.com/api";

function fetchReducer(state, action) {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        response: null,
        loading: true,
        error: null,
      };
    case "success":
      return {
        ...state,
        response: action.data,
        loading: false,
        error: null,
      };
    case "failed":
      return {
        ...state,
        error: action.error,
        response: null,
        loading: false,
      };
    default:
      throw new Error(
        `Sorry this type of action : ${action.type} doesn't exist...`
      );
  }
}

function useFetch(type,id) {
  const [state, dispatch] = useReducer(fetchReducer, {
    response: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    dispatch({ type: "fetch" });
    fetch(id ? `${API}/${type}/${id}` : `${API}/${type}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "success", data });
      })
      .catch(({ message }) => {
        dispatch({ type: "failed", message });
        console.warn("Uh-oh", message);
      });
  }, [type,id]);

  const { response, loading, error } = state;

  return {
    response,
    loading,
    error,
  };
}

export default useFetch;
