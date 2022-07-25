const calculateTemp = () => {
    const numberTemp = document.getElementById("temp").value;
    
    const tempSelected = document.getElementById("tempDiff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (valueTemp) => {
        let fahrenheit = (valueTemp * 9 / 5) + 32;
        return fahrenheit;
    }

    const FahTocel = (valueTemp) => {
        let celsius = Math.round((valueTemp - 32) * 5 / 9);
        return celsius;
    }
    let result;

    if (valueTemp === "cel") {
        result = celToFah(numberTemp);
        document.getElementById("resultContainer").innerHTML=`= ${result} °Fahrenheit`
    } else {
        result = FahTocel(numberTemp);
        document.getElementById("resultContainer").innerHTML=`= ${result} °Celsius`
    }
}