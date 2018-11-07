> The state? I am the state.
>
> — <cite>Louis XIV</cite>

---

### 🛑 Deprecated 

---

## Usage

[![npm version](https://img.shields.io/npm/v/louis-xiv.svg?style=flat)](https://www.npmjs.com/package/louis-xiv)

Install:

```
$ yarn add louis-xiv
```

Use:

```js
import React from "react";
import { render } from "react-dom";
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

render(<App />, document.getElementById("root"));
```

## Similar

* https://github.com/reactions/component

## License

Released under MIT license.
