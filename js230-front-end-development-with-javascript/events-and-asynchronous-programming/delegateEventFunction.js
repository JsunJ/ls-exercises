function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof Element) {
    return !parentElement.addEventListener(eventType, event => {
      const validTargets = Array.prototype.slice.call(parentElement.querySelectorAll(selector));
      if (validTargets.incliudes(event.target)) {
        callback(event);
      }
    });
  }
}