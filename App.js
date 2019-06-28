import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "ae59e4f61c9379bbc1f7fbdf9d510428";

class App extends React.Component{

    gettingWeather = async (e) => {
        e.preventDefault();
       
        const api_url = await 
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
    }
    render(){
        return (
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather />

            </div> 
        );
    }
}
export default App;