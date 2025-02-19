


document.getElementById("3")!.addEventListener("click", function (event) {
    event.preventDefault(); // Formun sayfa yenilemesini engelle

    const input = document.getElementById("1") as HTMLInputElement;
    const select = document.getElementById("2") as HTMLSelectElement;
    const resultDiv = document.getElementById("4") as HTMLDivElement;

    const sicaklik = parseFloat(input.value);
    const birim = select.value as "celsius" | "fahrenheit";

    if (isNaN(sicaklik)) {
        resultDiv.innerText = "Lütfen geçerli bir sıcaklık girin!";
        return;
    }

    let sonuc: number = 0;
    if (birim === "celsius") {
        sonuc = (sicaklik * 9) / 5 + 32; // Celsius -> Fahrenheit
        resultDiv.innerText = `Sonuç: ${sonuc.toFixed(2)}°F`;
    } else if (birim === "fahrenheit") {
        sonuc = ((sicaklik - 32) * 5) / 9; // Fahrenheit -> Celsius
        resultDiv.innerText = `Sonuç: ${sonuc.toFixed(2)}°C`;
    } else {
        resultDiv.innerText = "Geçersiz sıcaklık birimi!";
    }
});
