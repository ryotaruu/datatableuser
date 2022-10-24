import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <h3>Data Table User</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">User Name</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address Street</th>
              <th scope="col">Address Suite</th>
              <th scope="col">Address City</th>
              <th scope="col">Address Zipcode</th>
              <th scope="col">Address Geo Lat</th>
              <th scope="col">Address Geo Ing</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Company Name</th>
              <th scope="col">Company CatchPhrase</th>
              <th scope="col">Company Bs</th>
              <th scope="col">Options</th>
            </tr>
          </thead>

          {
            items.map((item) => (
              <tbody key={item.id} >
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address.street}</td>
                  <td>{item.address.suite}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.zipcode}</td>
                  <td>{item.address.geo.lat}</td>
                  <td>{item.address.geo.lng}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.company.name}</td>
                  <td>{item.company.catchPhrase}</td>
                  <td>{item.company.bs}</td>
                  <td>
                    <button type="button" class="btn btn-primary">Update</button>
                    <span>
                      <button type="button" class="btn btn-danger">Delete</button>
                    </span>
                  </td>
                </tr>
              </tbody>
            ))
          }

        </table>
      </div>
    );
  }
}

export default App;