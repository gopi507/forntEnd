import React, { useState } from 'react';
import './form.css';

function Form(props) {

    const [formData, setFormData] = useState({
        name: "",
        businessEmail: "",
        baseLocation: "",
        reportingToBase: "",
        explanation: "",
        certifications: "",
        benchStatus: "On Bench",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/addBenchDataForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            alert("form submitted successfully");
            console.log(response);

        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className='form'>
            <div className='mainForm'>
                <div className='head'>
                    <span className="text-format-content">
                        <span>Bench Data Form Template</span>
                        <span className='parra'>
                            <p>Dear Team,</p>

                            <p> Your latest information is crucial for us to provide you with the best support and stay connected. Please take a moment to update your details to ensure accuracy. Your contribution matters!</p>

                            <p>Thank you for your cooperation.</p>
                        </span>
                    </span>
                </div>
                <div className='ele'>
                    <form >
                        <ol>
                            <li>
                                <label htmlFor='name'>Name</label><br></br>
                                <input id='name' name='name' type='text' onChange={handleChange} required ></input>
                            </li>

                            <li>
                                <label htmlFor='mail'>Business Email</label><br></br>
                                <input id='name' name='businessEmail' type='email' onChange={handleChange} required></input>
                            </li>

                            <li>
                                <label htmlFor='base'>Your Base Location</label><br></br>
                                <input id='base' type='text' name="baseLocation" onChange={handleChange} required></input>
                            </li>

                            <li>
                                <label htmlFor='true'>Are you currently reporting to your base location?</label>
                                <br></br><br></br>
                                <span className='radio'>
                                    <input type="radio" id="Yes" onChange={handleChange} name="reportingToBase" value="Yes" />
                                    <label htmlFor="Yes">Yes</label>
                                </span>

                                <span className='radio'>
                                    <input type="radio" id="No" onChange={handleChange} name="reportingToBase" value="No" />
                                    <label htmlFor="No">No</label><br />
                                </span>
                            </li>
                            {formData.reportingToBase === "No" && (
                                <div>
                                    <li>
                                        <label htmlFor='ans'>In Case your selection to the above question was NO. Could you provide an explanation for why you are not currently reporting to the designated base location?
                                        </label><br></br>
                                        <textarea id='ans' className='ans' name='explanation' value={formData.explanation} onChange={handleChange} required></textarea>
                                    </li>
                                </div>
                            )}

                            <li>
                                <label htmlFor='cer'> Enter Certification Achieved so far (comma separated)
                                </label><br></br>
                                <textarea id='cer' className='ans' type='text' name="certifications" onChange={handleChange} value={formData.certifications} required></textarea>
                            </li>

                            <li>
                                <label htmlFor='true'>What is your Current Bench Status:</label>
                                <br></br><br></br>
                                <span className='radio1'>
                                    <input type="radio" id="bench" name="status" value="bench" onChange={handleChange} />
                                    <label htmlFor="bench">On Bench</label>
                                </span>

                                <span className='radio1'>
                                    <input type="radio" id="shadow" name="status" value="shadow" onChange={handleChange} />
                                    <label htmlFor="shadow">On Shadow Project (On project but not billable yet)</label><br />
                                </span>

                                <span className='radio1'>
                                    <input type="radio" id="billable" name="status" value="billable" onChange={handleChange} />
                                    <label htmlFor="billable">On Billable Project (Have confirmation Email)</label><br />
                                </span>
                            </li>
                        </ol>
                        <button  onClick={handleSubmit} type='button'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;