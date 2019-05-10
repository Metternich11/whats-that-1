export const api = store => next => action => {
  if (!action.api) return next(action);

  const { api } = action;

  const method = api.method || 'GET';
  const body = api.body ? JSON.stringify(body) : undefined

  fetch(api.url, {
    method, 
    body
  })
    .then(res => res.json())
    .then(data => {
      store.dispatch({
        type: `${action.type}`,
        data
      });
    })
    .catch(error => {
      store.dispatch({
        type: `${action.type}`,
        error
      });
    });

}