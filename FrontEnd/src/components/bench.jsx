import React, { useState } from 'react';
// import './form.css';

function Bench(props) {
  const [formData, setFormData] = useState({
    attendingBenchCalls: '',
    currentWorkDetails: '',
    trainingOrActivity: '',
    otherActivity: '',
    completionDate: '',
    interviewPreparedness: '',
    isUpdatingDigiDashboard: '',
    involvedInPreviousProject: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form">
      <span>Bench Data Form Template </span>
     
        <div className="ele">
        <span>Form for bench candidates</span>
         <p>As you are currently on the bench (not assigned to a Shadow Project or a Billable Project), the information you provide is of utmost importance, and we kindly request that it be as detailed and accurate as possible.
            Additionally, I will include an extra field for you to share any additional information.</p>
        <form>
            <ol>
               <li>
                 <label htmlFor='true'>Are you attending my bench calls?</label>
                     <br></br><br></br>
                         <span className='radio'>
                          <input type="radio" id="Yes" onChange={handleChange} name="attendingBenchCalls" value="Yes" />
                          <label htmlFor="Yes">Yes</label>
                                </span>

                                <span className='radio'>
                                    <input type="radio" id="No" onChange={handleChange} name="attendingBenchCalls" value="No" />
                                    <label htmlFor="No">No</label><br />
                                </span>
                            </li>
                            <li>
                                <label htmlFor='details'> What are you currently working on? (Provide Detailed Info /bullet points) </label>
                                <br></br>
                                <textarea id='details' className='ans' type='text' name="currentWorkDetails" onChange={handleChange} value={formData.currentWorkDetails} required></textarea>
                            </li>
                        <li>
                            <label htmlFor='true'>Are you currently under any other training or activity apart from bench? 
                                 (For example: GCP/ AWS Level 1/ AWS Level 2/ CAF/ any other training)</label>
                            <br></br><br></br>
                         <span className='radio'>
                          <input type="radio" id="Yes" onChange={handleChange} name="trainingOrActivity" value="Yes" />
                          <label htmlFor="Yes">Yes</label>
                                </span>

                                <span className='radio'>
                                    <input type="radio" id="No" onChange={handleChange} name="trainingOrActivity" value="No"/>
                                    <label htmlFor="No">No</label><br />
                                </span>
                            </li>
                            <li>
                                <label htmlFor='activity'> Which other activity are you currently engaged in apart from being on bench? </label>
                                <br></br>
                                <textarea id='activity' className='ans' type='text' name="otherActivity" onChange={handleChange} value={formData.otherActivity} required></textarea>
                            </li>
                            <li>
                                <label htmlFor='date'> What is the date of completion for this above mentioned activity?</label>
                                <br></br>
                                <textarea id='date' className='ans' type='text' name="completionDate" onChange={handleChange} value={formData.completionDate}  dateFormat="MM/dd/yyyy" required></textarea>
                            </li>
                            </ol>
                           
                           </form>
                            </div>
                          
                            </div>
  );
}
export default Bench;
