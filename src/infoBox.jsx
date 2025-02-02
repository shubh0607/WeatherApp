import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
     
    let HOT_URL ="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    let COLD_URL="https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMCU1Q3dlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let WET_URL="https://media.istockphoto.com/id/504878730/photo/cloud.webp?a=1&b=1&s=612x612&w=0&k=20&c=luiTgQAsAKMYkzWTLpcxFZxqe7ew4TsPrnbr22DSqOA=";

    return (
        <div className="Infobox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                        ? WET_URL
                        : info.temp >35
                        ? HOT_URL
                        : COLD_URL
                    } // Dynamic weather icon
                    title={info.weather}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{" "}{
                        info.humidity > 80
                        ? ( <ThunderstormIcon/>)
                        : info.temp >35
                        ? (<WbSunnyIcon/>)
                        : (<AcUnitIcon/>)
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }} component="span">
                        <p>🌡️ Temperature: {info.temp}&deg;C</p>
                        <p>💧 Humidity: {info.humidity}%</p>
                        <p>📉 Min Temp: {info.tempMin}&deg;C</p>
                        <p>📈 Max Temp: {info.tempMax}&deg;C</p>
                        <p>💨 Wind Speed: {info.windSpeed} m/s</p>
                        <p>
                            ☁️ The weather is <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C.
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
       </div>
    );
}
