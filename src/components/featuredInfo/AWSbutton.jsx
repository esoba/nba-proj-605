import React from 'react'

export default function AWSbutton() {
    const [inputFileData, setInputFileData] = React.useState(''); // represented as bytes data (string)
    const [outputFileData, setOutputFileData] = React.useState(''); // represented as readable data (text string)
    const [buttonDisable, setButtonDisable] = React.useState(false);
    const [buttonText, setButtonText] = React.useState('Predict winner');
    const handleSubmit = (event) => {
        event.preventDefault();
        // temporarily disable submit button
        setButtonDisable(true);
        setButtonText('Loading Result');

        //Test with sample matchup
        setInputFileData("Kings vs. Bucks")

        // make POST request
        console.log('making POST request...');
        fetch('https://ckb9kg7ckd.execute-api.us-east-1.amazonaws.com/prod', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Accept": "text/plain" },
            body: JSON.stringify({ "matchup": inputFileData })
        }).then(response => response.json())
        .then(data => {
            console.log('getting response...')
            console.log(data);

        // POST request error
        if (data.statusCode === 400) {
            const outputErrorMessage = JSON.parse(data.errorMessage)['outputResultsData'];
            setOutputFileData(outputErrorMessage);
        }
        
        // POST request success
        else {
            const outputBytesData = JSON.parse(data.body)['outputResultsData'];
            setOutputFileData(outputBytesData);
        }

        // re-enable submit button
        setButtonDisable(false);
        setButtonText('Submit');
        })
        .then(() => {
            console.log('POST request success');
        })
    }
    return (
    <div className="Input">
        <form onSubmit={handleSubmit}>
            <button type="submit" disabled={buttonDisable}>{buttonText}</button>
        </form>
        <span> {outputFileData} </span>
    </div>
  )
}
