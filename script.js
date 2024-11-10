// Importing necessary Redux functions
const { createStore } = require('redux');

// Initial state
const initialState = {
  count: 0
};

// Action types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Action creators
const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });
const reset = () => ({ type: RESET });

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case SUBTRACT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Create the store
const store = createStore(counterReducer);

// Scenario 1: Initial State Verification
console.log('--- SCENARIO 1: Initial State Verification ---');
console.log('Initial state (should be 0):', store.getState()); // Expect { count: 0 }

// Scenario 2: Incrementing the Counter
console.log('--- SCENARIO 2: Incrementing the Counter ---');
store.dispatch(add()); // Expect count: 1
store.dispatch(add()); // Expect count: 2
console.log('State after increments:', store.getState()); // Expect { count: 2 }

// Scenario 3: Decrementing the Counter
console.log('--- SCENARIO 3: Decrementing the Counter ---');
store.dispatch(subtract()); // Expect count: 1
console.log('State after decrement:', store.getState()); // Expect { count: 1 }

// Scenario 4: Resetting the Counter
console.log('--- SCENARIO 4: Resetting the Counter ---');
store.dispatch(reset()); // Expect count: 0
console.log('State after reset:', store.getState()); // Expect { count: 0 }
