export const api = new Proxy({}, {
  get: () => new Proxy({}, {
    get: () => () => {},
  })
});
