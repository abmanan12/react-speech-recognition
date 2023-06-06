import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'

import CopyToClipboard from 'react-copy-to-clipboard';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App() {

  const {
    transcript,
    listening,
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  return (
    <div className="App">

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">

              <div className='text-center'>
                <h3 className='pt-5 fw-bold'>Speech to Text Converter</h3>
                <p className='py-3'>A React hook that converts speech from the microphone to text and makes it available to your Reat components.</p>
              </div>

              <div className="card shadow border-5 mt-4">

                <p className='p-3'>{transcript}</p>

                <div className='text-center mb-3 mt-5' style={{ padding: '100px 5px 20px 5px' }}>

                  <CopyToClipboard text={transcript}>
                    {/* <button className='btn btn-success' onClick={listening}>Copy to clipboard</button> */}
                    <button className='btn btn-success' style={{width: 70}} onClick={listening}>Copy</button>
                  </CopyToClipboard>

                  {/* <button className='btn btn-success my-2 my-sm-0' onClick={startListening}>Start Listening</button> */}
                  <button className='btn btn-success mx-2' style={{width: 70}} onClick={startListening}>Start</button>
                  {/* <button className='btn btn-success' onClick={SpeechRecognition.stopListening}>Stop Listening</button> */}
                  <button className='btn btn-success' style={{width: 70}} onClick={SpeechRecognition.stopListening}>Stop</button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
