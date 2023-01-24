import React from 'react';

const Page2=()=>{
    return(
        <>
        <h1>Working/ Speciality Details</h1>

        <label for="work">Working for any Hospital/ Clinic</label>  
        <select name="work">
          <option>--Select your options--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <h6><b>Doctor Speciality: </b></h6>

        <label className="col-sm-2"><input type="radio" value="pediatrics" name="special" />Pediatrics</label>
        <label className="col-sm-2"><input type="radio" value="Cardiology" name="special" />Cardiology</label>
        <label className="col-sm-2"><input type="radio" value="CT Surgery" name="special" />CT Surgery</label>
        <label className="col-sm-2"><input type="radio" value="Fertility" name="special" />Fertility</label>
        <label className="col-sm-2"><input type="radio" value="Liver" name="special" />Liver</label>

        <br />

        <label className="col-sm-2"><input type="radio" value="Mother and Child" name="special"/>Mother and Child</label>
        <label className="col-sm-2"><input type="radio" value="Vascular Surgery" name="special"/>Vascular Surgery</label>
        <label className="col-sm-2"><input type="radio" value="Neuroscience" name="special"/>Neuroscience</label>
        <label className="col-sm-2"><input type="radio" value="Orthopaedics" name="special"/>Orthopaedics</label>
        <label className="col-sm-2"><input type="radio" value="Nephrology" name="special"/>Nephrology</label>

        <br />
        <label className="col-sm-2"><input type="radio" value="Robotics Science" name="special"/>Robotics Science</label>
        <label className="col-sm-2"><input type="radio" value="Inventional Radio" name="special"/>Inventional Radio</label>
        <label className="col-sm-2"><input type="radio" value="Arthroscopy" name="special"/>Arthroscopy</label>
        <label className="col-sm-2"><input type="radio" value="Hemotology" name="special"/>Hemotology</label>
        <label className="col-sm-2"><input type="radio" value="Endocrinology" name="special"/>Endocrinology</label>

        <br />
        <label className="col-sm-2"><input type="radio" value="Kidney Transplant" name="special"/>Kidney Transplant</label>
        <label className="col-sm-2"><input type="radio" value="Physiotherapy" name="special"/>Physiotherapy</label>
        <label className="col-sm-2"><input type="radio" value="Surgical Gastro" name="special"/>Surgical Gastro</label>
        <label className="col-sm-2"><input type="radio" value="Pulmonology" name="special"/>Pulmonology</label>
        <label className="col-sm-2"><input type="radio" value="General Medicine" name="special"/>General Medicine</label>

        <br />
        <label className="col-sm-2"><input type="radio" value="Nuclear Medicine" name="special"/>Nuclear Medicine</label>
        <label className="col-sm-2"><input type="radio" value="Gastrointrenology" name="special"/>Gastrointrenology</label>
        <label className="col-sm-2"><input type="radio" value="Critical Care" name="special"/>Critical Care</label>
        <label className="col-sm-2"><input type="radio" value="Opthalmology" name="special"/>Opthalmology</label>
        <label className="col-sm-2"><input type="radio" value="Rheumatology" name="special"/>Rheumatology</label>

        <br />
        <label className="col-sm-2"><input type="radio" value="Dermatology" name="special"/>Dermatology</label>
        <label className="col-sm-2"><input type="radio" value="Gynecology" name="special"/>Gynecology</label>
        <label className="col-sm-2"><input type="radio" value="Pain Medicine" name="special"/>Pain Medicine</label>
        <label className="col-sm-2"><input type="radio" value="Radiology" name="special"/>Radiology</label>
        <label className="col-sm-2"><input type="radio" value="ENT" name="special"/>ENT</label>

        <br />
        <label className="col-sm-2"><input type="radio" value="Cancer" name="special"/>Cancer</label>
        <label className="col-sm-2"><input type="radio" value="BMT" name="special"/>BMT</label>
        <label className="col-sm-2"><input type="radio" value="Emerg. Services" name="special"/>Emerg. Services</label>
        
        <br />

        <h6><b>Services Provided</b></h6>
        <label className="col-sm-2"><input type="checkbox"  />Online Consulations</label>
        <label className="col-sm-2"><input type="checkbox"  />Direct Consulations</label>
        <label className="col-sm-2"><input type="checkbox"/>Home Care Services</label>
        <label className="col-sm-4"><input type="checkbox" />Online health queries</label>
        <br />

        <h6><b>Suggestions:</b></h6>
        <textarea cols="100" rows="4"></textarea>
        <br />
        <button type="submit" className="btn btn-success" value="submit" >Submit</button>
        </>
    );
}

export default Page2;