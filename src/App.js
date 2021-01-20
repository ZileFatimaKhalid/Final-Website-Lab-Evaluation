import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import SearchPage from './SearchPage';
import Details from './Details';
import { client } from './client';

class App extends React.Component {
    state ={
      articles: [],
      searchKeyWord: '',
      detailName: '',
      detailPrice: '',
      detailDescription: '',
      detailImage: '',
    }

    // componentDidMount(){
    //   client.getEntries()
    //   .then((response) => {
    //     console.log(response)
    //     this.setSate({
    //       articles: response.items
    //     })
    //   })
    //   .catch(console.error)
    // }

    updateSearchKeyWord = (search) => {
      this.setState({ searchKeyWord: search });
    }

    updateDetailPrice = (search) => {
      this.setState({ detailPrice: search });
    }

    updateDetailName = (search) => {
      this.setState({ detailName: search });
    }

    updateDetailDescription = (search) => {
      this.setState({ detailDescription: search });
    }

    updateDetailImage = (search) => {
      this.setState({ detailImage: search });
    }

    updateDetailType = (search) => {
      this.setState({ detailType: search });
    }

    render () {
      const { 
        updateDetailDescription,
        updateDetailName,
        updateDetailPrice,
        updateDetailImage,
        updateDetailType
      } = this;
      
      return (
        <div className="App">
            <Router>
              <Header 
                onSearchKeyWordChangeCallback={ (s) => this.setState({ searchKeyWord: s }) }
              />
              <Switch>
                <Route path="/search">
                  <SearchPage
                    searchKeyWord={ this.state.searchKeyWord }
                    onItemSelected={{
                      updateDetailDescription,
                      updateDetailName,
                      updateDetailPrice,
                      updateDetailImage,
                      updateDetailType
                    }}
                  />
                </Route>
                <Route path="/detail">
                  <Details
                    name={this.state.detailName}
                    description={this.state.detailDescription}
                    price={this.state.detailPrice}
                    imageUrl={this.state.detailImage}
                    type={this.state.detailType}
                  />
                </Route>
                <Route path="/">
                  <Homepage />
                </Route>
              </Switch>
              <Footer />
            </Router>
        </div> 
      );
    }
  }


export default App;
