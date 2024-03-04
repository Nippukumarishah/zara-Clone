import React from 'react';
import './StyleCss/SignUp.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



function SignUp() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState();

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    async function handleSubmit(){
        e.preventDefault()
        try {
            let res = await fetch("https://zaraclone.herokuapp.com/register",
            {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
            });
            let data = await res.json()
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <h2 className='headingForm'>PERSONAL DETAILS</h2>
      <div className="changeFrom-btn">
        <div className="form-check">
            <input type="radio" className="form-check-input" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label htmlFor="flexRadioDefault1" className="form-check-label">PERSONAL</label>

        </div>
        <div className="form-check">
            <input type="radio" className="form-check-input" name='flexRadioDefault' id='flexRadioDefault2' checked />
            <label htmlFor="flexRadioDefault2" className="form-check-label">COMPANY</label>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="container">
      
        <div className="left-form">
            <div className="input-text-box">
                <input type="text" className="input-text" onChange={handleChange} id='fname' name='email' placeholder='E-MAIL'/>

            </div>
            <div className="input-text-box">
                <input type="password" id="fname" name='password' placeholder='PASSWORD' onChange={handleChange} />

            </div>
            <div className="input-text-box">
                <input type="text" id="fname" onChange={handleChange} name='name' placeholder='NAME' />

            </div>
            <div className="input-text-box">
                <input type="text" id="fname" name='address' placeholder='ADDRESS' />
            </div>
            <div className="input-text-box">
                <input type="text" id="fname" name='locality' placeholder='LOCALITY' />
            </div>
            <div className="input-text-options">
                <select name="stateCode" type="select" className="input-text-box" data-qa-input-qualifier="stateCode" aria-labelledby="form-input__label-stateCode" aria-required="true">
                    <option value="">Select State</option>
                    <option value="INAN">ANDAMAN AND NICOBAR ISLANDS</option>
                    <option value="INAP">ANDHRA PRADESH</option>
                    <option value="INAR">ARUNACHAL PRADESH</option>
                    <option value="INAS">ASSAM</option>
                    <option value="INBR">BIHAR</option>
                    <option value="INCH">CHANDIGARH</option>
                    <option value="INCT">CHHATTISGARH</option>
                    <option value="INDN">DADRA AND NAGAR HAVELI</option>
                    <option value="INDD">DAMAN AND DIU</option>
                    <option value="INDL">DELHI</option>
                    <option value="INGA">GOA</option>
                    <option value="INGJ">GUJARAT</option>
                    <option value="INHR">HARYANA</option>
                    <option value="INHP">HIMACHAL PRADESH</option>
                    <option value="INJK">JAMMU AND KASHMIR</option>
                    <option value="INJH">JHARKHAND</option>
                    <option value="INKA">KARNATAKA</option>
                    <option value="INKL">KERALA</option>
                    <option value="INLA">LADAKH</option>
                    <option value="INLD">LAKSHADWEEP</option>
                    <option value="INMP">MADHYA PRADESH</option>
                    <option value="INMH">MAHARASHTRA</option>
                    <option value="INMN">MANIPUR</option>
                    <option value="INML">MEGHALAYA</option>
                    <option value="INMZ">MIZORAM</option>
                    <option value="INNL">NAGALAND</option>
                    <option value="INOR">ORISSA</option>
                    <option value="INPY">PONDICHERRY</option>
                    <option value="INPB">PUNJAB</option>
                    <option value="INRJ">RAJASTHAN</option>
                    <option value="INSK">SIKKIM</option>
                    <option value="INTN">TAMIL NADU</option>
                    <option value="INTG">TELANGANA</option>
                    <option value="INTR">TRIPURA</option>
                    <option value="INUP">UTTAR PRADESH</option>
                    <option value="INUT">UTTARANCHAL</option>
                    <option value="INWB">WEST BENGAL</option>
                </select>
            </div>
            <div className="input-text-box1">
            <div>
                <input type="tel" className="tele" id='fname' name='fname' value="+91" />
            </div>
            <div className="teleinput">
                <input type="text" id="fname" placeholder='TELEPHONE' name='phone' onChange={handleChange}/>
            </div>
        </div>
        <div className="checkbox">
            <div>
                <input type="checkbox" className="input-checkbox__input" name='newsletterCheck' data-qa-input-qualifier="newsletterCheck" value="false" />
            </div>
            <div>
            <h6 className="checkbox__label">I wish to receive Zara news on my e-mail</h6>
            </div>
        </div>

        <div className="checkbox">
            <div>
                <input type="checkbox" className="input-checkbox__input" name='newsletterCheck' data-qa-input-qualifier="newsletterCheck" value="false" />

                </div>
                <div>
                    <h6 className="check__label">I ACCEPT THE PRIVACY STATEMENT</h6>
                    </div>
       </div>
       <input type="submit" className="signUpBtn" value="CREATE ACCOUNT" />
       <div className="right-form">
        <div className="input-text-box">
            <h1 className="dot">.</h1>
        </div>
        <div className="input-text-box2">
            <input type="text" id='fname' name="fname" placeholder='REPEATE PASSWORD' />
        </div>
        <div className="input-text-box">
            <input type="text" id='fname' name='fname' placeholder='PINCODE' />
        </div>
        <div className="input-text-box">
            <input type="text" id='fname' name='fname' placeholder='OPTIONAL' />
        </div>
        <div className="input-text-box">
            <input type="text" id='fname' name='fname' placeholder='CITY' />
        </div>
        <div className='input-text-box'>
     <span >India</span>.
  </div>

       </div>
       </div>

      </form>
      <Footer />
    </>
  )
}

export default SignUp
