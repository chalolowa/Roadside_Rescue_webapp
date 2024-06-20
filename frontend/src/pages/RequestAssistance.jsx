import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RequestAssistance = () => {
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = () => {
    useEffect(async () => {
      await fetch("http://localhost:4000/api/request")
        .then((res) => res.json())
        .catch(error);
    }, []);
    useNavigate("/dashboard");
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Requesting assistance</h1>
      <p className="text-xl mb-4">
        Please provide some details on your issue for easier assistance by the
        service provider.
      </p>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="card-body bg-base-100 p-4">
          <div className="form-control">
            <label className="label">
              <span className="label">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="Currently active phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              Please select the nature of your vehicle problem
            </label>
            <div>
              <div>                
                <label className="cursor-pointer label">
                  <span className="label-text">Tyre puncture</span>
                  <input type="checkbox" className="checkbox checkbox-info" name="tyre" id="tyre" value="tyre" />
                </label>
              </div>
              <div>
                
                <label className="cursor-pointer label">
                  <span className="label-text">Engine problems</span>
                  <input type="checkbox" className="checkbox checkbox-info" name="engine" id="engine" value="engine"
                />
                </label>
              </div>
              <div>                
                <label className="cursor-pointer label">
                  <span className="label-text">Suspension related issues</span>
                  <input type="checkbox" className="checkbox checkbox-info" name="suspension" value="suspension" />
                </label>
              </div>
              <div>                
                <label className="cursor-pointer label">
                  <span className="label-text">Tow service</span>
                  <input type="checkbox" className="checkbox checkbox-info" name="tow" value="tow" />
                </label>
              </div>
              <div>
                <label className="cursor-pointer label">
                  <span className="label-text">Other issues</span>
                  <input type="checkbox" className="checkbox checkbox-info" name="other" id="other" />
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn mb-2 text-xl bg-orange-950 p-3">
            Request
          </button>
        </form>
      </div>
      <p>
        Change your mind? Aight let's go <Link to={`/dashboard`}>back</Link> and
        select another.
      </p>
    </div>
  );
};

export default RequestAssistance;
