import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ae59e4f61c9379bbc1f7fbdf9d510428";

class App extends React.Component{

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        humidity: undefined,
        speed:undefined,
        
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;
       
         if( city ) {

        const api_url = await 
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);


        var date = new Date(data.sys.sunset*1000);
        var hours = date.getHours(); 
        var minutes = "0" + date.getMinutes(); 
        var seconds = "0" + date.getSeconds();
        var sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        
        var date = new Date(data.sys.sunrise*1000);
        var hours = date.getHours(); 
        var minutes = "0" + date.getMinutes(); 
        var seconds = "0" + date.getSeconds();
        var sunrise_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

         this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunrise: sunrise_date,
            sunset: sunset_date,
            humidity: data.main.humidity,
            speed: data.wind.speed,
            
            error: undefined

        });
    } else{

        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunrise: undefined,
            sunset: undefined,
            humidity: undefined,
            speed: undefined,
           
            error: "Введите название города"
        });
    }
}


    render() {
        return (
            <div className="wrapper">
                <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info">
                            <Info />
                         </div>
                        <div className="col-sm-7 form">
                            <Form weatherMethod={this.gettingWeather} />
                            <Weather 
                            temp={this.state.temp}
                            city={this.state.city}
                            country={this.state.country}
                            pressure={this.state.pressure}
                            sunrise={this.state.sunrise}
                            sunset={this.state.sunset}
                            humidity={this.state.humidity}
                            speed={this.state.speed}
                            
                            error={this.state.error}
                            />
                        </div>
                    </div>   
                </div>
                </div>
            </div> 
        );
    }
}
export default App;