"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Load .env
require("dotenv").config();
const app = (0, express_1.default)();
const port = 3000;
// Serve the static directory
app.use(express_1.default.static("src"));
// Helper to convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => {
    const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    return Math.round(fahrenheit);
};
// Handle GET /weather?zip=ZIPCODE
app.get("/weather", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { zip } = req.query;
    if (!zip) {
        console.error("Did not receive a zip code");
        res.status(500).json({ message: "Did not receive a zip code" });
        return;
    }
    try {
        const apiKey = process.env.API_KEY;
        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
            fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude=minutely&appid=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                res.json(kelvinToFahrenheit(data.current.temp));
            });
        });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: "Error retrieving weather data for zip code" + zip });
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
