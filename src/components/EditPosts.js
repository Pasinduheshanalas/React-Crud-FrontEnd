import axios from 'axios';
import React, { Component } from 'react'

export default class EditPosts extends Component {

  constructor(props){
    super(props);
    this.state={
      topic:"",
      description:"",
      postCategory:""
    }
  }
  
  handleInputChange = (e) => {
   
    
    const {name,value} = e.target;
    //console.log(name, value);
    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const id = this.props.match.params.id;
    const {topic,description,postCategory}= this.state;

    const data ={
      topic : topic,
      description : description,
      postCategory : postCategory
    }
    console.log(data);
    //get api request
    axios.put(`http://localhost:8000/post/update/${id}`,data).then((res) => {
      if(res.data.success){
        alert ("Post Is Updated");
        this.setState({
          topic : "",
          description : "",
          postCategory : ""
        }
        )
      }
    })
  }

  componentDidMount(){
    const id = this.props.match.params.id;
  
    axios.get(`http://localhost:8000/post/${id}`).then(res => {
      if(res.data.success){
        this.setState({
          topic:res.data.post.topic, 
          description:res.data.post.description,
          postCategory:res.data.post.description
        })
        console.log(this.state.post);
      }
    } );
  }
  render() {
    return (
      <div>
         <div>
    <form style={{marginTop:"20px"}} >
    <div class="form-group" style={{marginTop:"20px"}}>
      <label for="topic">Topic</label>
      <input 
      name='topic'
      type="text" 
      class="form-control" 
    placeholder="Enter Topic"
    value={this.state.topic}
    onChange={this.handleInputChange}
    />
    </div>
    <div class="form-group" style={{marginTop:"20px"}}>
      <label for="description">Description</label>
      <input 
      name='description'
      type="text" 
      class="form-control" 
      placeholder="Enter Description"
      value={this.state.description}  
      onChange={this.handleInputChange}/>
    </div>
    <div class="form-group" style={{marginTop:"20px"}}>
      <label for="PostCategary">Post Category</label>
      <input 
      name='postCategory'
      type="text" 
      class="form-control" 
      placeholder="Enter PostCategory"
      value={this.state.postCategory}
      onChange={this.handleInputChange}/>
    </div>
    <button type="submit" class="btn btn-primary" onClick={this.onSubmit} style={{marginTop:"20px"}}>Update</button>
    </form>
  </div>
      </div>
    )
  }
}
