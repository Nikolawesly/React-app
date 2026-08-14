import React, { Component } from 'react'
import Delete from './Delete'

export class Dashboard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[]
      }
    }
    componentDidMount(){
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({products:data})
        })
    }
    
    render() {
        //Destrucuturing
        const {products} =this.state

        return (
            <div className='container'>
                <h1 className='bg-primary' >Dashboard</h1>
                <h1 className='alert alert-success' >Product List</h1>
                <a href="add" className='btn btn-success mb-3' >add new product</a>
                <table className='table table-responsive table-hover table-bordered' >
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Actions</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length && 
                            products.map((pro,i)=>
                                <tr key={i} >
                                    <td>{pro.id}</td>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                    <td>
                                        <a href={`edit/${pro.id}`} className='btn btn-warning ' >edit</a>
                                        <a href={`delete/${pro.id}`} className='btn btn-danger mx-2' onClick={<Delete/>} >delete</a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>


            </div>
        )
    }
}

export default Dashboard
