import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "ae59e4f61c9379bbc1f7fbdf9d510428";

class App extends React.Component{

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;
       
         if( city ) {

        const api_url = await 
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        var date = new Date(data.sys.sunset*1000);
        var hours = date.getHours(); 
        var minutes = "0" + date.getMinutes(); 
        var seconds = "0" + date.getSeconds();
        var sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

         this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunset_date,
            error: undefined

        });
    } else{

        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunset: undefined,
            error: "Введите название города"
        });
    }
}


    render(){
        return (
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather 
                   temp={this.state.temp}
                   city={this.state.city}
                   country={this.state.country}
                   pressure={this.state.pressure}
                   sunset={this.state.sunset}
                   error={this.state.error}
                
                />

            </div> 
        );
    }
}
export default App;