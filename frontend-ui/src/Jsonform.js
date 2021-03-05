import React,{useState} from 'react'
import styled from 'styled-components';

const Jsonform = () => {

    const [gender, setGender] = useState('Male');
    const [married, setMarried] = useState('No');
    const [dependents, setDependents] = useState(0);
    const [education, setEducation] = useState('Graduate');
    const [selfEmployed, setSelfEmployed] = useState('No');
    const [applicantIncome, setApplicantIncome] = useState(5489);
    const [coapplicantIncome, setCopplicantIncome] = useState(0);
    const [loanAmount, setLoanAmount] = useState(128);
    const [loanAmountTerm, setLoanAmountTerm] = useState(360);
    const [creditHistory, setCreditHistory] = useState(1)
    const [propertyArea, setPropertyArea] = useState('Urban')
    const [score, setscore] = useState(0.85)


    const HandleSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8000/scoreJson';
        const bodyData = JSON.stringify({
            "Gender":gender,"Married":married,"Dependents":dependents,"Education":education,"Self_Employed":selfEmployed,
            "ApplicantIncome":applicantIncome,"CoapplicantIncome":coapplicantIncome,"LoanAmount":loanAmount,
            "Loan_Amount_Term":loanAmountTerm,"Credit_History":creditHistory,"Property_Area":propertyArea

    });
    const reqOpt = {method:'POST',headers:{"Content-type":"application/json"},body:bodyData};
    fetch(url,reqOpt,)
    .then((resp) =>resp.json())
    .then((respJ)=> setscore(respJ.score))
    }

    return (
        <div>
            <StyledForm onSubmit={HandleSubmit}>
            <label>
        <strong>Gender: </strong>     
        <input
          name="Gender"
          type="text"
          value={gender}
          onChange={e => setGender(e.target.value)}
          required />
      </label>

      <label>
        <strong>Married: </strong>     
        <input
          name="married"
          type="text"
          value={married}
          onChange={e => setMarried(e.target.value)}
          required />
      </label>

      <label>
        <strong>Dependents: </strong>     
        <input
          name="dependents"
          type="text"
          value={dependents}
          onChange={e => setDependents(e.target.value)}
          required />
      </label>

      <label>
        <strong>Education: </strong>     
        <input
          name="education"
          type="text"
          value={education}
          onChange={e => setEducation(e.target.value)}
          required />
      </label>

      <label>
        <strong>Self Employed: </strong>     
        <input
          name="selfEmployed"
          type="text"
          value={selfEmployed}
          onChange={e => setSelfEmployed(e.target.value)}
          required />
      </label>

      <label>
        <strong>Applicant Income: </strong>     
        <input
          name="applicantIncome"
          type="text"
          value={applicantIncome}
          onChange={e => setApplicantIncome(e.target.value)}
          required />
      </label>

      <label>
        <strong>Co-Applicant Income: </strong>     
        <input
          name="coapplicantIncome"
          type="text"
          value={coapplicantIncome}
          onChange={e => setCopplicantIncome(e.target.value)}
          required />
      </label>

      <label>
        <strong>Loan Amount: </strong>     
        <input
          name="loanAmount"
          type="text"
          value={loanAmount}
          onChange={e => setLoanAmount(e.target.value)}
          required />
      </label>

      <label>
        <strong>Loan Amount Term: </strong>     
        <input
          name="loanAmountTerm"
          type="text"
          value={loanAmountTerm}
          onChange={e => setLoanAmountTerm(e.target.value)}
          required />
      </label>

      <label>
        <strong>Credit History: </strong>     
        <input
          name="creditHistory"
          type="text"
          value={creditHistory}
          onChange={e => setCreditHistory(e.target.value)}
          required />
      </label>

      <label>
        <strong>Property Area: </strong>     
        <input
          name="propertyArea"
          type="text"
          value={propertyArea}
          onChange={e => setPropertyArea(e.target.value)}
          required />
      </label>


        <input type="submit" value='Submit' className='Submitbutton' />
        </StyledForm>
        <StyledResult>The probability of getting approved is: {score} </StyledResult>
        </div>
    )
};

export default Jsonform;

const StyledResult = styled.div`
margin:2rem;

`

const StyledForm = styled.form`
display:flex;
flex-direction:column;

`