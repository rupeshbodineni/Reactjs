import React, { Component } from 'react'

export default class Login1 extends Component {
  state = {
    email: '',
    password: '',
    acceptedTerms: false,
    submitted: false,
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleTermsChange = (event) => {
    this.setState({ acceptedTerms: event.target.checked })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ submitted: true })

    if (!this.state.acceptedTerms) {
      return
    }

    const payload = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log('Login submitted:', payload)
    // Replace this with actual authentication logic.
  }

  render() {
    const { email, password, acceptedTerms, submitted } = this.state

    return (
      <main className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Login</h2>

                <form onSubmit={this.handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={this.handleEmailChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={this.handlePasswordChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div className="form-check mb-3">
                    <input
                      id="terms"
                      type="checkbox"
                      className="form-check-input"
                      checked={acceptedTerms}
                      onChange={this.handleTermsChange}
                    />
                    <label htmlFor="terms" className="form-check-label">
                      Accept terms and conditions
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={!acceptedTerms || !email || !password}
                  >
                    Login
                  </button>

                  {submitted && !acceptedTerms && (
                    <div className="alert alert-warning mt-3" role="alert">
                      Please accept the terms and conditions before logging in.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
