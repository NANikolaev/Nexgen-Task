import './Register.css';
import { useRef, useState, useEffect} from 'react';
import { Error } from '../Error/Error';

import { onChange, onClick, registerUser,scrollReveal} from './utils';



export const Register:React.FC=()=> {
    const [file, setFile] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const inputFile = useRef<HTMLInputElement>(null);
    useEffect(() => {
        scrollReveal({direction:'bottom', distance:'90px',duration:1000, elements:'.register'});
        scrollReveal({direction:'left', distance:'400px',duration:2000, elements:'.left'});
        scrollReveal({direction:'right',distance:'400px',duration:2000, elements:'.right'})
        scrollReveal({direction:'bottom',distance:'400px',duration:2000, elements:'.bottom'})
    }, [])



    return (
        <div className='register'>
            <div className='info'>
                <h2 className='register-title'>Student Registration</h2>
                <div className='profile-image'>
                    <img className='student-image' src={file} />
                </div>
            </div>
            <form className='student-form' onSubmit={(e)=>registerUser(e,setError)}>
                <div className='form-group left'>
                    <label htmlFor="fullname">Name<span>*</span></label>
                    <input type="text" name="name" id="fullname" required pattern='[A-z]{2,} [A-z]{2,}' placeholder='First and Last name' />
                </div>
                <div className='form-group right'>
                    <label htmlFor="birthdate">Date of Birth<span>*</span></label>
                    <input type="date" name="birthdate" id="birthdate" required min='1965-01-01' max='2004-12-31' />
                </div>
                <div className='form-group left'>
                    <label htmlFor="password">Password<span>*</span></label>
                    <input type="password" name="password" id="password" required minLength={8} placeholder="********" />
                </div>
                <div className='form-group right'>
                    <label htmlFor="rePass">Repeat Password<span>*</span></label>
                    <input type="password" name="rePass" id="rePass" required placeholder='********' />
                </div>
                <div className='form-group left'>
                    <label htmlFor="phone">Tel/Mobile<span>*</span></label>
                    <input type="tel" name="phone" id="phone" required pattern='^[0][8][5-9]{2}[0-9]{6}$' placeholder='08XXXXXXXX' />
                </div>
                <div className='form-group right'>
                    <label htmlFor="email">Email<span>*</span></label>
                    <input type="email" name="email" id="email" required pattern='^\w*.*@\w*.[A-z]{2,3}$' placeholder='student@gmail.com' />
                </div>
                <div className='form-group left'>
                    <label htmlFor="age">Age<span>*</span></label>
                    <input type="number" name="age" id="age" required min={18} max={50} step="none" placeholder='18' />
                </div>
                <div className='form-group right'>
                    <label htmlFor="gender">Gender<span>*</span></label>
                    <p className='gender-type'>Male</p>
                    <input type="radio" name="gender" id="male" value={'male'} required />
                    <p className='gender-type'>Female</p>
                    <input type="radio" name="gender" id="female" value={'female'} required />
                </div>
                <div className='form-group bottom'>
                    <p className='upload-title'>Student Image</p>
                    <button className='btn btn-up' onClick={(e) => onClick(inputFile, e)}>Upload File</button>
                    <input onChange={(e) => onChange(setFile, e)} name='image' type="file" ref={inputFile} id="up-file" />
                </div>
                <div className='form-group bottom'>
                    <label htmlFor="description">In a few sentences,write down why you want to become a student of our College.<span>*</span></label>
                    <textarea className='description' name="description" id="description" required minLength={60}></textarea>
                </div>
                <div className='form-group bottom'>
                    <input type="checkbox" name="" id="" required />
                    <p className='agr-text'><span>*</span> I agree to the <a className='terms' href='#'>terms of service</a></p>
                </div>
                <div className='form-group bottom'>
                    <input type="submit" className='btn btn-sub' value="Register" />
                    <input type="reset" className="btn btn-res" value="Reset" onClick={()=>setFile('')} />
                </div>
            </form>
            <Error text={"Password don`t match.Try again."} state={error} set={setError} />
        </div>
    )
    
}