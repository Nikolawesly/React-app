import React, { Component } from 'react'

export class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '', price: 0
    }
  }

  ChangeHandler = (event) => {
    //target:gives input tag and name gives nae in input tag
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  submitHandler = (event) => {
    event.preventDefault()//ensures result doesnt disappear in console
    console.log(this.state)
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(res => {
        console.log(res)
        if (res.status === 201) {
          alert('product added successfully')
          window.location.href = '/'
        }
      })
  }



  render() {
    const { name, price } = this.state
    return (
      <div className='container'>
        <h1 className='alert alert-success'>Add new products</h1>
        <form action="" className='container' method='post' onSubmit={this.submitHandler} >
          <div className='row mb-3'>
            <div className='col' >
              <label for="name" className='form-label' >Name</label>
              <input type="text" className='form-control' id='name' name='name' defaultValue={name} onChange={this.ChangeHandler} />
            </div>
          </div>

          <div className='row mb-3'>
            <div className='col' >
              <label for="price" className='form-label' >Price</label>
              <input type="text" className='form-control' id='price' name='price' defaultValue={price} onChange={this.ChangeHandler} />
            </div>
          </div>

          <div className='row mb-3'>
            <div className='col' >
              <input type="reset" className='btn btn-warning' />
              <input type="submit" className='btn btn-success mx-2' value="Add Product" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Add
