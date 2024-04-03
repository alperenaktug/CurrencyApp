import { useState } from "react";
import "../css/currency.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_qzrcYqPx8NI3YZ1VGzCYThcBkMeKkJtJrUOFXquq";

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(1);

  const exChange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );

    const result = (response.data.data[toCurrency] * amount).toFixed(3);
    setResult(result);
  };

  return (
    <div>
      <div className="currency-main">
        <div
          style={{
            backgroundColor: "#5E5D5D",
            width: "100%",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ fontFamily: "arial", color: "#fff" }}>
            DÖVİZ KURU UYGULAMASI
          </h3>
        </div>

        <div style={{ marginTop: "20px" }}>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            type="number"
            className="amount-input"
          />
          <select
            onChange={(e) => setFromCurrency(e.target.value)}
            className="first-currency-option"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
            <option>AUD</option>
            <option>BGN</option>
            <option>BRL</option>
            <option>CAD</option>
            <option>CHF</option>
            <option>CNY</option>
            <option>CZK</option>
            <option>DKK</option>
          </select>

          <FaArrowAltCircleRight style={{ marginRight: "10px" }} />

          <select
            onChange={(e) => setToCurrency(e.target.value)}
            className="second-currency-option"
          >
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
            <option>AUD</option>
            <option>BGN</option>
            <option>BRL</option>
            <option>CAD</option>
            <option>CHF</option>
            <option>CNY</option>
            <option>CZK</option>
            <option>DKK</option>
          </select>

          <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            type="text"
            className="result-input"
          />
        </div>

        <div className="button-main">
          <button
            onClick={exChange}
            style={{
              width: "100px",
              height: "30px",
              border: "none",
              backgroundColor: "blue",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          >
            Çevir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
