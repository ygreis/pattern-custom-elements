function useWatch(callback, proxies) {
  proxies.forEach((item) => {
    item.watch = function() {
      callback?.(...proxies);
    }
  })
}

function setState(data) {

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

  return new Proxy(data, handler);

}
