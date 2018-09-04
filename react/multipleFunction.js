
/*Dynamic binding with the Arrow Function for multiple elements*/


handleChange = name => event => {
    this.setState({ [name]: event.target.value });
}

/*...
render() {
    return (
        <input onChange={this.handleChange('one')} />
        <input onChange={this.handleChange('two')} />
      )
}
*/


handleChange = name => {
    if (!this.handlers[name]) {
        this.handlers[name] = event => {
            this.setState({ [name]: event.target.value });
        };
    }
    return this.handlers[name];
}

/*    
...
render() {
    return (
        <input onChange={this.handleChange('one')} />
        <input onChange={this.handleChange('two')} />
      )
}
  }
*/