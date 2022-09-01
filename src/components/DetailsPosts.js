import axios from 'axios';
import React, { Component } from 'react';

export default class DetailsPosts extends Component {
  constructor(props){
    super(props);
    this.state={
      post:{}
    };
  }
componentDidMount(){
  const id = this.props.match.params.id;

  axios.get(`http://localhost:8000/post/${id}`).then(res => {
    if(res.data.success){
      this.setState({
        post:res.data.post 
      })
      console.log(this.state.post);
    }
  } );
}

  render() {
    const{topic,description,postCategory}=this.state.post;
    return (
      //displaying post details
      <div style={{marginTop:"20px"}} >
        <h4 >{topic}</h4>
        <hr/>
        <div className='row'>
        <dt className='col-sm-3'>Discription</dt>
        <dd className='col-sm-9'>{description}</dd>

        <dt className='col-sm-3'>Post Category</dt>
        <dd className='col-sm-9'>{postCategory}</dd>
      </div>
      </div>

    )
  }
}
