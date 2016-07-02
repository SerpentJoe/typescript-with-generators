export default Promise.coroutine(function* (...args) {
    const resp = yield fetch(...args);
    const json = yield resp.json();
    console.log(json);
    return json;
});
