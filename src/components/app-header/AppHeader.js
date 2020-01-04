import React from 'react';

import './appHeader.css';

export default ({ done, toDo }) => (
  <div className="h1-div">
    <h1 className="h1">
      Todo app
      <span className="h1-version">
        v [.2]
        <h3>
          done {done} to Do {toDo}
        </h3>
      </span>
    </h1>
  </div>
);
