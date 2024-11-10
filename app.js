// Minimalistic Redux-inspired Store

// Initial state for the tally app
const initialState = { count: 0 };

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });

// Reducer to update state based on actions
const tallyReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

// Store implementation
class Store {
  constructor(reducer, initialState) {
    this.state = initialState;
    this.reducer = reducer;
    this.listeners = [];
  }

  // Get the current state of the store
  getState() {
    return this.state;
  }

  // Dispatch an action to modify the state
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.logState(action);
  }

  // Subscribe to state changes (for logging or updates)
  subscribe(listener) {
    this.listeners.push(listener);
  }

  // Log the current state after each dispatch
  logState(action) {
    console.log(`Action Dispatched: ${action.type}`);
    console.log('Current State:', this.getState());
    this.listeners.forEach(listener => listener(this.state));
  }
}

// Create a new store instance
const store = new Store(tallyReducer, initialState);

// Subscribe to state changes and log them
store.subscribe(state => {
  console.log('State updated:', state);
});

// Hook up buttons to dispatch actions
document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrement());
});

document.getElementById('reset').addEventListener('click', () => {
  store.dispatch(reset());
});

// Initial State Verification
console.log('Initial State:', store.getState()); // { count: 0 }
