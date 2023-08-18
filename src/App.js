import React from "react";
import axios from 'axios';

import './App.css';

class App extends React.Component{
    state = { quote: '', author: '' };

    componentDidMount() {
        this.fetchQuote();
      }
    
      fetchQuote = () => {
        const category = 'art';
        const apiKey = 'PZMacrd9wncbziVtxjPDTw==nwysjemq0qNDICzV'; // Make sure to replace with your actual API key
    
        axios({
          method: 'GET',
          url: `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json',
        })
          .then((response) => {
            // Assuming the response has a quote object in the data
            // You might need to adjust this line based on the actual structure of the response
            const { quote, author } = response.data[0];
      this.setState({ quote, author });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
    
    render(){
        const {quote, author} = this.state;
        return(
            <div className="app">
                <div className="card">
                <h1 className="heading">{quote}</h1>
                <p className="author">{author}</p>
                <button className="button" onClick={this.fetchQuote}>
                    <span>GIVE ME A QUOTE</span>
                </button>
                </div>

            </div>
            
        );
    }
}

export default App;