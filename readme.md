> The state? I am the state.
>
> — <cite>Louis XIV</cite>

## Usage

Install:

```
$ yarn add louis-xiv
```

Use:

```js
import React from "react";
import State from "louis-xiv";

const App = () => (
  <State
    init={{ counter: 0 }}
    map={(state, setState, deferredSetState) => ({
      ...state,
      increment: () => setState(prev => ({ counter: prev.counter + 1 }))
    })}
  >
    {({ counter, increment }, setState, deferredSetState) => (
      <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
      </div>
    )}
  </State>
);
```

## License

Released under MIT license.
