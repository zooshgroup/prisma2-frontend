
import React from 'react';

// from Apollo mutation example - to be made

function App() {
  //let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          //if(input.value) addTodo({ variables: { data: input.value } });
          //input.value = '';
        }}
      >
        <input
          ref={node => {
            //input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}