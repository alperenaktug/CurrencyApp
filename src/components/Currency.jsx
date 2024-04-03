import "../css/currency.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Currency() {
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
          <input id="amount" type="number" className="amount-input" />
          <select className="first-currency-option">
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>

          <FaArrowAltCircleRight style={{ marginRight: "10px" }} />

          <select className="second-currency-option">
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

          <input type="text" className="result-input" />
        </div>

        <div className="button-main">
          <button
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
