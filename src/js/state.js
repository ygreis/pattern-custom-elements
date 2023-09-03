// Global states
window.__statesProxies__ = setState({});

function useWatch(callback, proxies) {
  proxies.forEach((item) => {
    item.watch = function() {
      callback?.(...proxies);
    }
  })
}

function setState(propsOrKey, props) {

  var handler = {
    get: function (object, attr) {
      return object[attr];
    },
    set: function (object, attr, value) {
      if (object[attr] !== value) {
        object[attr] = value;
        if (object.watch) {
          object.watch?.(object);
        }
      }
      return true;
    },
  };

  var proxy = new Proxy({
    value: props || propsOrKey
  }, handler);
  
  if (props) {
    window.__statesProxies__.value[propsOrKey].value = props;
  }

  return proxy;

}

function useState(proxyKey) {
  if(window.__statesProxies__?.value[proxyKey]){
    return window.__statesProxies__.value[proxyKey];
  }
  window.__statesProxies__.value[proxyKey] = setState(undefined)
  return window.__statesProxies__.value[proxyKey];

}
