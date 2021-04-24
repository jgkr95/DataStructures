const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
const port = 8080

app.get('/', (req, res) => {
  var tables=[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", "HeightCm": 167, "WeightKg": 82}];
  console.log("hello shanku")
  var overWeightPeopleCount = 0;
  tables.forEach(function(table) {
    var weightKg = table["WeightKg"];
    var heightInMetres = table["HeightCm"] / 100;
    var bmi = weightKg / heightInMetres;
    var bmiCategory = "";
    var healthRisk = "";
    if(bmi <= 18.4) {
      bmiCategory = "Under Weight";
      healthRisk = "Malnutrition Risk";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = "Normal Weight";
      healthRisk = "Low Risk"
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = "Over Weight";
      healthRisk = "Enhanced risk";
      overWeightPeopleCount++;
    } else if (bmi >= 30 && bmi <= 34.9) {
      bmiCategory = "Moderately Obese";
      healthRisk = "Medium risk";
    } else if (bmi >= 35 && bmi <= 39.9) {
      bmiCategory = "Severely Obese";
      healthRisk = "High risk";
    } else if (bmi >= 40) {
      bmiCategory = "Very Severely Obese";
      healthRisk = "Very High risk";
    } 
    table["bmi"] = bmi;
    table["bmiCategory"] = bmiCategory;
    table["healthRisk"] = healthRisk;
  });
})


// Input format
// {
//     "input":[{"Gender": "Male", "HeightCm": 166, "WeightKg": 45 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 70}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", "HeightCm": 167, "WeightKg": 82}]
// }
app.get('/calculateBMI', (req, res) => {
  console.log("assa",req.body);
  var tables = req.body.input;
  var overWeightPeopleCount = 0;
  tables.forEach(function(table) {
  	var weightKg = table["WeightKg"];
  	var heightInMetres = table["HeightCm"] / 100;
  	var bmi = weightKg / heightInMetres;
  	var bmiCategory = "";
  	var healthRisk = "";
  	if(bmi <= 18.4) {
  		bmiCategory = "Under Weight";
  		healthRisk = "Malnutrition Risk";
  	} else if (bmi >= 18.5 && bmi <= 24.9) {
  		bmiCategory = "Normal Weight";
  		healthRisk = "Low Risk"
  	} else if (bmi >= 25 && bmi <= 29.9) {
  		bmiCategory = "Over Weight";
  		healthRisk = "Enhanced risk";
  		overWeightPeopleCount++;
  	} else if (bmi >= 30 && bmi <= 34.9) {
  		bmiCategory = "Moderately Obese";
  		healthRisk = "Medium risk";
  	} else if (bmi >= 35 && bmi <= 39.9) {
  		bmiCategory = "Severely Obese";
  		healthRisk = "High risk";
  	} else if (bmi >= 40) {
  		bmiCategory = "Very Severely Obese";
  		healthRisk = "Very High risk";
  	} 
   	table["bmi"] = bmi;
   	table["bmiCategory"] = bmiCategory;
   	table["healthRisk"] = healthRisk;
	});
  res.send({"response":tables,"overWeightPeopleCount":overWeightPeopleCount})
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})