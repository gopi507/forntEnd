import React, { useState } from "react";
import "./form.css";
import { Rating } from "primereact/rating";

function Form(props) {
    const [formData, setFormData] = useState({
        name: "",
        businessEmail: "",
        baseLocation: "",
        reportingToBase: "",
        explanation: "",
        certifications: "",
        benchStatus: "",
        attendingBenchCalls: "",
        currentWorkDetails: "",
        trainingOrActivity: "",
        otherActivity: "",
        completionDate: "",
        interviewPreparedness: "",
        isUpdatingDigiDashboard: "",
        involvedInPreviousProject: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/addBenchDataForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            alert("form submitted successfully");
            console.log(response);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="form">
            <div className="mainForm">
                <div className="head">
                    <span className="text-format-content">
                        <span>Bench Data Form Template</span>
                        <span className="parra">
                            <p>Dear Team,</p>

                            <p>

                                Your latest information is crucial for us to provide you with
                                the best support and stay connected. Please take a moment to
                                update your details to ensure accuracy. Your contribution
                                matters!
                            </p>

                            <p>Thank you for your cooperation.</p>
                        </span>
                    </span>
                </div>
                <div className="ele">
                    <form>
                        <ol>
                            <li>
                                <label htmlFor="name">Name</label>
                                <br></br>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    required
                                ></input>
                            </li>

                            <li>
                                <label htmlFor="mail">Business Email</label>
                                <br></br>
                                <input
                                    id="mail"
                                    name="businessEmail"
                                    type="email"
                                    onChange={handleChange}
                                    required
                                ></input>
                            </li>

                            <li>
                                <label htmlFor="base">Your Base Location</label>
                                <br></br>
                                <input
                                    id="base"
                                    type="text"
                                    name="baseLocation"
                                    onChange={handleChange}
                                    required
                                ></input>
                            </li>

                            <li>
                                <label htmlFor="true">
                                    Are you currently reporting to your base location?
                                </label>
                                <br></br>
                                <br></br>
                                <span className="radio">
                                    <input
                                        type="radio"
                                        id="Yes"
                                        onChange={handleChange}
                                        name="reportingToBase"
                                        value="Yes"
                                    />
                                    <label htmlFor="Yes">Yes</label>
                                </span>

                                <span className="radio">
                                    <input
                                        type="radio"
                                        id="No"
                                        onChange={handleChange}
                                        name="reportingToBase"
                                        value="No"
                                    />
                                    <label htmlFor="No">No</label>
                                    <br />
                                </span>
                            </li>
                            {formData.reportingToBase === "No" && (
                                <div>
                                    <li>
                                        <label htmlFor="ans">
                                            In Case your selection to the above question was NO. Could
                                            you provide an explanation for why you are not currently
                                            reporting to the designated base location?
                                        </label>
                                        <br></br>
                                        <textarea
                                            id="ans"
                                            className="ans"
                                            name="explanation"
                                            value={formData.explanation}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </li>
                                </div>
                            )}

                            <li>
                                <label htmlFor="cer">

                                    Enter Certification Achieved so far (comma separated)
                                </label>
                                <br></br>
                                <textarea
                                    id="cer"
                                    className="ans"
                                    type="text"
                                    name="certifications"
                                    onChange={handleChange}
                                    value={formData.certifications}
                                    required
                                ></textarea>
                            </li>

                            <li>
                                <label htmlFor="true">What is your Current Bench Status:</label>
                                <br></br>
                                <br></br>
                                <span className="radio1">
                                    <input
                                        type="radio"
                                        id="bench"
                                        name="benchStatus"
                                        value="bench"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="bench">On Bench</label>
                                </span>

                                <span className="radio1">
                                    <input
                                        type="radio"
                                        id="shadow"
                                        name="benchStatus"
                                        value="shadow"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="shadow">
                                        On Shadow Project (On project but not billable yet)
                                    </label>
                                    <br />
                                </span>

                                <span className="radio1">
                                    <input
                                        type="radio"
                                        id="billable"
                                        name="benchStatus"
                                        value="billable"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="billable">
                                        On Billable Project (Have confirmation Email)
                                    </label>
                                    <br />
                                </span>
                            </li>
                            {formData.benchStatus === "bench" && (
                                <div>
                                    <span className="bold">Form for bench candidates</span>
                                    <p>
                                        As you are currently on the bench (not assigned to a Shadow
                                        Project or a Billable Project), the information you provide
                                        is of utmost importance, and we kindly request that it be as
                                        detailed and accurate as possible. Additionally, I will
                                        include an extra field for you to share any additional
                                        information.
                                    </p>
                                    <li>
                                        <label htmlFor="true">
                                            Are you attending my bench calls?
                                        </label>
                                        <br></br>
                                        <br></br>
                                        <span className="radio">
                                            <input
                                                type="radio"
                                                id="Yes"
                                                onChange={handleChange}
                                                name="attendingBenchCalls"
                                                value="Yes"
                                            />
                                            <label htmlFor="Yes">Yes</label>
                                        </span>

                                        <span className="radio">
                                            <input
                                                type="radio"
                                                id="No"
                                                onChange={handleChange}
                                                name="attendingBenchCalls"
                                                value="No"
                                            />
                                            <label htmlFor="No">No</label>
                                            <br />
                                        </span>
                                    </li>
                                    <li>
                                        <label htmlFor="details">

                                            What are you currently working on? (Provide Detailed Info
                                            /bullet points)
                                        </label>
                                        <br></br>
                                        <textarea
                                            id="details"
                                            className="ans"
                                            type="text"
                                            name="currentWorkDetails"
                                            onChange={handleChange}
                                            value={formData.currentWorkDetails}
                                            required
                                        ></textarea>
                                    </li>
                                    <li>
                                        <label htmlFor="true">
                                            Are you currently under any other training or activity
                                            apart from bench? (For example: GCP/ AWS Level 1/ AWS
                                            Level 2/ CAF/ any other training)
                                        </label>
                                        <br></br>
                                        <br></br>
                                        <span className="radio">
                                            <input
                                                type="radio"
                                                id="Yes"
                                                onChange={handleChange}
                                                name="trainingOrActivity"
                                                value="Yes"
                                            />
                                            <label htmlFor="Yes">Yes</label>
                                        </span>

                                        <span className="radio">
                                            <input
                                                type="radio"
                                                id="No"
                                                onChange={handleChange}
                                                name="trainingOrActivity"
                                                value="No"
                                            />
                                            <label htmlFor="No">No</label>
                                            <br />
                                        </span>
                                    </li>
                                    <li>
                                        <label htmlFor="activity">

                                            Which other activity are you currently engaged in apart
                                            from being on bench?
                                        </label>
                                        <br></br>
                                        <textarea
                                            id="activity"
                                            className="ans"
                                            type="text"
                                            name="otherActivity"
                                            onChange={handleChange}
                                            value={formData.otherActivity}
                                            required
                                        ></textarea>
                                    </li>
                                    <li>
                                        <label htmlFor="date">

                                            What is the date of completion for this above mentioned
                                            activity?
                                        </label>
                                        <br></br>
                                        <input id="date" type="date"
                                            name="completionDate"
                                            onChange={handleChange}
                                            value={formData.completionDate}
                                            required
                                        ></input>
                                    </li>
                                    <li>
                                        <label htmlFor="rating">
                                            Rate yourself on Preparedness for immediate Project
                                            Interview.
                                        </label>
                                        <br></br>

                                        <Rating
                                            className="rating"
                                            id="rating"
                                            value={formData.interviewPreparedness}
                                            name="interviewPreparedness"
                                            onChange={handleChange}
                                            cancel={false}
                                            stars={10}
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="true">
                                            Are you updating Digi Dashboard?
                                        </label>
                                        <br></br>
                                        <br></br>
                                        <span className="radio">
                                            <input
                                                type="radio"
                                                id="Yes"
                                                onChange={handleChange}
                                                name="isUpdatingDigiDashboard"
                                                value="Yes"
                                            />
                                            <label htmlFor="Yes">Yes</label>
                                        </span>

                                        <span className="radio">
                                            <input
                                                type="radio"
                                                id="No"
                                                onChange={handleChange}
                                                name="isUpdatingDigiDashboard"
                                                value="No"
                                            />
                                            <label htmlFor="No">No</label>
                                            <br />
                                        </span>
                                    </li>
                                </div>
                            )}
                        </ol>
                        <button onClick={handleSubmit} type="button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
