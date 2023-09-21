HTMLElement.prototype.find = function($elment) {
  return this.querySelector($elment);
}

HTMLElement.prototype.hasEl = function($elment) {
  return !!this.find($elment);
}