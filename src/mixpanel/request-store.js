const Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init("fa3091a4c2741d4e14a822449d2176d9");

module.exports = (storeName) => {
  const store = storeName
  mixpanel.track('new store', {
    distinct_id: 1,
    store_name: store
});
}
