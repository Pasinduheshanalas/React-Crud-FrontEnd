import React, { Component} from 'react'
import axios from "axios";

export default class Home extends Component {
  constructor(props){
    super(props);
     //const [state, setState] = useState({});
    this.state={
      posts:[]
    }; 
  }

  componentDidMount(){
    this.retrievePosts();
  }
  retrievePosts(){
    axios.get(`http://localhost:8000/posts`).then(res => {
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts 
        })
        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) => {
      alert ("Delete Successfuly");
      this.retrievePosts();
    })
    // console.log()
  }
  filterData(posts,searchKey){
    const result = posts.filter((post) => {
      post.topic.include(searchKey)
    })
      
    this.setState({posts:result})
   
  }

  handleSearchArea = (e) =>{
     const searchKey = e.currentTarget.value;

     axios.get(`http://localhost:8000/posts`).then(res => {
      if(res.data.success){
       this.filterData(res.data.existingPosts,searchKey)
      }
    });
  }
  render(){
    return (
   <div className='container'>
    <h1>All Posts</h1>
    <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" onChange={this.handleSearchArea} placeholder="Search" aria-label="Search" style={{marginBottom:"20px"}}/> 
    
    <button class="btn btn-success" type="submit" >Search</button>
  </form>
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Topic</th>
          <th scope='col'>Description</th>
          <th scope='col'>Post Category</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* displaying data */}
        {this.state.posts.map((posts,index)=>(
          <tr key={index}>
            <th scope='row'>{index+1}</th>
            <a href={`/post/${posts._id}`} style={{textDecoration:'none',color:"black"}}>
            <td>{posts.topic}</td>
            </a>
            <td>{posts.description}</td>
            <td>{posts.postCategory}</td>
            <td>
              <a className='btn btn-warning' href={`/edit/${posts._id}`}>
                <i className='fas fa-edit'></i>&nbsp;Edit
              </a>
              &nbsp;
              <a className='btn btn-danger' href='#' onClick={()=>this.onDelete(posts._id)}>
                <i className='far fa-trash-alt'></i>&nbsp;Delete
              </a>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
    <button className='btn btn-success'><a href='/add' style={{textDecoration:"none", color:"white"}}>Create New Posts</a></button>
   </div>
    )
  }
}
