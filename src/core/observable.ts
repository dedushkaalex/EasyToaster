interface IObservable {
  listeners: Set<() => void>;
  notify: (...args: unknown[]) => void;
  subscribe: (listener: () => void) => void;
  unsubscribe: (listener: () => void) => void;
  clearAll: () => void;
}

class Observable implements IObservable {
  listeners: Set<() => void> = new Set();

  subscribe(listener: (...args: unknown[]) => void) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: () => void) {
    this.listeners.delete(listener);
  }

  notify(...args: unknown[]) {
    this.listeners.forEach((listener) => {
      listener(...args);
    });
  }

  clearAll() {
    this.listeners.clear();
  }
}

export default new Observable();
