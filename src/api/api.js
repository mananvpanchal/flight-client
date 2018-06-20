const url = 'http://localhost:5000';

export const get = (path, successCL) => fetch(url+path)
.then(res => res.json())
.then(successCL)
.catch(console.log);