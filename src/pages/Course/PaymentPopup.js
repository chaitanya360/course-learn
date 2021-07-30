import React, { useState } from "react";
import { colors } from "../../utility";

function PaymentPopup({ setDisplay, id = 1, setHaveAccess }) {
  const [otpSent, setOtpSent] = useState(false);
  const [no, setNo] = useState("");
  const [otp, setOtp] = useState("");

  const handleFinishClick = () => {
    if (otp === "123456") {
      alert("Success!");
      setDisplay(false);
      setHaveAccess(true);
    } else {
      alert("enter valid otp");
    }
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-body">
        <h2
          style={{
            margin: "0px 20px",
            marginBottom: "20px",
            color: colors.primary,
          }}
        >
          Payment
        </h2>
        <div className="popup-close" onClick={() => setDisplay(false)}>
          x
        </div>
        <div className="payment-pic">
          <img
            src={`${process.env.PUBLIC_URL}/images/payment.svg`}
            alt="payment"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <form className="payment-form">
          <div className="card-details">
            <label>Card No.</label>
            <input
              className="payment-input"
              type="text"
              value={no}
              onChange={(e) => setNo(e.target.value)}
            />
          </div>
          <div
            className="otp card-btn"
            onClick={() => {
              if (no.length < 5) return alert("enter valid card no.");
              setOtpSent(true);
            }}
          >
            Get OTP
          </div>
          {otpSent && (
            <div>
              <label>Enter your OTP</label>
              <input
                className="payment-input otp-input"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div
                className="otp card-btn"
                style={{ marginBottom: "0px" }}
                onClick={handleFinishClick}
              >
                Finish
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default PaymentPopup;
