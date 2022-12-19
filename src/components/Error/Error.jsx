
import "./Error.css";

export const Error = ({ text, state, set }) => {

    function timeOut() {
        if (state) {
            setTimeout(() => { set(false) }, 2000)
        }
    }
    timeOut()

    return (
        <div className={state ? 'errorbox on' : 'errorbox'}>
            <p className="error">{text}</p>
        </div>
    )

};