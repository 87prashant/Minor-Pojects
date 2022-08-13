let lengthEl = document.querySelector("#lengthOutput")
let volumeEl = document.querySelector("#volumeOutput")
let massEl = document.querySelector("#massOutput")

function newConversions() {
    const userInput = document.querySelector("#input").value
    
    let length_in_feet = (userInput * 3.281).toFixed(3)
    let length_in_meter = (userInput * 0.305).toFixed(3)

    let volume_in_gallons = (userInput * 0.264).toFixed(3)
    let volume_in_liters = (userInput * 3.785).toFixed(3)

    let mass_in_pounds = (userInput * 2.205).toFixed(3)
    let mass_in_kilos = (userInput * 0.453).toFixed(3)

    lengthEl.textContent = userInput + " Meters = " + length_in_feet + " Feet || " + userInput + " Feet = " + length_in_meter + " Meters"
    volumeEl.textContent = userInput + " Liters = " + volume_in_gallons + " Gallons || " + userInput + " Gallons = " + volume_in_liters + " Liters"
    massEl.textContent = userInput + " Kilos = " + mass_in_pounds + " Pounds || " + userInput + " Pounds = " + mass_in_kilos + " Kilos"

}
