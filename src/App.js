import React from 'react';
 
class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: [],
      loaded: false
    };
  }
 
  componentDidMount() {
    fetch('https://www.ifixit.com/api/2.0/wikis/CATEGORY?offset=0&limit=50')
      .then(response => response.json())
      .then(data => this.setState({items: data, loaded: true}));
  }
  
  render() {
    const { items, loaded } = this.state;
        if (!loaded) return <div>
            <h1> Items loading... </h1> </div> ;

    return (
      <div className = "Grab Bag">
            <h1> Grab Bag </h1>  {
                items.map((item, index) => ( 
                <ol key = { index } >
                    <img src={item.image.standard} alt=""/>
                  </ol>
                ))
            }
         </div>
      );
}
}
 
export default App;
