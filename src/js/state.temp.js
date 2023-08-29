function useWatch(callback, proxies) {
  proxies.forEach((item) => {
    item.watch = function() {
      callback?.(...proxies);
    }
  })
}

function setState(data) {

  var handler = {
    get: function (props, attr) {
      if (typeof props.value === 'object') {
        return props.value[attr];
      }
      return props.value;
    },
    set: function (props, attr, value) {
      if(value === undefined){
        props.value = attr;
        return true;
      }
      if (typeof props.value === 'object') {
        if(props.value[attr] === value) return true;
        props.value[attr] = value;
        if (props.watch) {
          props.watch?.(props);
        }
      }
      props.value = value;
      return true;
    },
    
  };

  return new Proxy(data, handler);

}
