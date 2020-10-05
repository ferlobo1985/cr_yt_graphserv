import React,{ Component } from 'react';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    this.getUserById();
  }

  getUserById(){
    axios({
      url:'http://localhost:5000/graphql',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdhNmY4MDZjMzBjOWFjMGY1OWVjNDYiLCJlbWFpbCI6ImZyYW5jaXNAZ21haWwuY29tIiwiaWF0IjoxNjAxODYyMzQzLCJleHAiOjE2MDI0NjcxNDN9.I5JKJi00-BkvnVSxRwj-b36siLRVS0yb5Xy-avL9QaA'
      },
      method:'POST',
      data:{
        query:`query{
          user(
            _id: "5f7a6f806c30c9ac0f59ec46"
          ){
            _id
            email
            token
          }
        }`
      }
    }).then(response => {
      console.log(response.data);
    })
  }

  render(){
    return(
      <div>
          Hello
      </div>
    )
  }
}

export default App;
