
import React from 'react';

type MyProps = { }
type MyState = { email: string, password: string}

/*
to be made
class NameForm extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {email: '', password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    if(event.target.name == "email")
      this.setState({email: event.target.value})
    else
      this.setState({password: event.target.value})
  }

  handleSubmit(event: any) {
    alert('A name was submitted: ' + this.state.email + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          E-mail:
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input name="password" type="text" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

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
*/