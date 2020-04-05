import React from 'react'

type MyProps = { }
type MyState = { email: string, password: string}

//validation?

class LogForm extends React.Component<MyProps, MyState> {
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
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="mail"/>
        </label>
        <label>
          <input name="password" type="text" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
        </label>
        <input className="button" type="submit" value="Log in" />
      </form>
    );
  }
}

export function Login(){
    return <LogForm />
}