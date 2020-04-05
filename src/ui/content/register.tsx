import React from 'react'

type MyProps = { }
type MyState = { email: string, name: string, password: string, password2: string}

class RegForm extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {email: '', name:'', password:'', password2:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    if(event.target.name === "email")
      this.setState({email: event.target.value})
    if(event.target.name === "name")
      this.setState({name: event.target.value})
    if(event.target.name === "password")
      this.setState({password: event.target.value})
    if(event.target.name === "password2")
    this.setState({password2: event.target.value})
  }

  handleSubmit(event: any) {
    alert('A name was submitted: ' + this.state.email + this.state.name + this.state.password + this.state.password2);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="mail"/>
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="name"/>
        </label>
        <label>
          <input name="password" type="text" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
          <input name="password2" type="text" value={this.state.password2} onChange={this.handleChange} placeholder="password again"/>
        </label>
        <input className="button" type="submit" value="Register" />
      </form>
    );
  }
}

export function Register(){
    return <RegForm />
}