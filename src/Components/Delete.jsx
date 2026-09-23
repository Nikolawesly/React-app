import React, { Component } from 'react'

export class Delete extends Component {

  // componentDidMount() {
  //   const id = window.location.pathname.split('/')[2]
  //   fetch(`http://localhost:3000/products/${id}`,{method:'DELETE'}
  //   )
  //     .then(res => {
  //       if(res.status===200){
  //         alert('deleted succcessfully')
  //         window.location.href='/'
  //       }
  //     })
      
  // }
  componentDidMount() {
  const id = window.location.pathname.split('/')[2];

  fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (res.status === 200) {
        alert('deleted successfully');
        window.location.href = '/';
      }
    });
}

  render() {
    return (
      <div>
        <h1>Delete</h1>
      </div>
    )
  }
}

export default Delete
