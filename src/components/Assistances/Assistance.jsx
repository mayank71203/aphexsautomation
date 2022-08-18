import './Assistance.css'

function Assistance(){
    return(
        <div className='Assistance'>
            <div className='Assistance-left'>
                <div>
                    <p>For Any Assistance</p>
                    <p>Required Please</p>
                    <p>Reach Out</p>
                </div>
            </div>
            <div className='Assistance-right'>
                <div>
                    <div>
                    First Name*
                    </div>
                    <div>
                    <input type='text'></input>
                    </div>
                </div>
                <div>
                    <div>
                    Last Name*
                    </div>
                    <div>
                    <input type='text'></input>
                    </div>
                </div>
                <div>
                    <div>
                    Email*
                    </div>
                    <div>
                    <input type='text'></input>
                    </div>
                </div>
                <div>
                    <div>
                        leave us a message
                    </div>
                    <textarea rows='4'></textarea>
                </div>
                <div>
                    <div>
                    Submit
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Assistance;