// Global states
window.__statesProxies__ = setState({});

function useWatch(callback, proxies) {
  proxies.forEach((item) => {
    console.log('item.watch', item.watch);
    item.watch = [...item.watch, function() {
      callback?.(...proxies);
    }]
    /*item.watch.forEach((push) => {
      push();
    })*/
  })
}

function setState(propsOrKey, props) {

  var handler = {
    get: function (currentProps, attr) {
      return currentProps[attr];
    },
    set: function (currentProps, attr, value) {
      if (currentProps[attr] !== value) {
        currentProps[attr] = value;
        if (currentProps.watch) {
          console.log('currentProps', value);
          /*console.log('currentProps', currentProps);
          currentProps.watch.push(currentProps.watch.bind(undefined, currentProps));
          currentProps.watch?.forEach((push) => {
            push(currentProps);
          })*/
          currentProps.watch.forEach((push) => {
            push(currentProps);
          })
          //currentProps.watch(currentProps);
        }
      }
      return true;
    },
  };

  var proxy = new Proxy({
    value: props || propsOrKey,
    watch: []
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
