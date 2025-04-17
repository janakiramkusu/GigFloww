import React, { useState } from 'react'
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skillCategory: '',
    portfolio: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.skillCategory || !formData.portfolio) {
      setMessage('All fields are required.')
    } else {
      setMessage('Thank you for signing up!')
      setFormData({
        name: '',
        email: '',
        skillCategory: '',
        portfolio: '',
      })
    }
  }

  return (
    <section id="signup" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">Sign Up for GigFloww</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="skillCategory" className="form-label">Skill Category</label>
            <input
              type="text"
              className="form-control"
              id="skillCategory"
              name="skillCategory"
              placeholder='Enter your skill category'
              value={formData.skillCategory}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="portfolio" className="form-label">Portfolio Link</label>
            <input
              type="url"
              className="form-control"
              id="portfolio"
              name="portfolio"
              placeholder='Enter your portfolio link'
              value={formData.portfolio}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </section>
  )
}

export default Signup
