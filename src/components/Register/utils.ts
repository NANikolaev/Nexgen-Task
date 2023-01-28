import scrollreveal from "scrollreveal";
import {ScrollOptions } from "../../interfaces";

const bin = `1671463791257-9716832768172`
const url = `https://www.toptal.com/developers/postbin/${bin}`

export const onChange = (setState:React.Dispatch<string>,e:React.ChangeEvent<HTMLInputElement>) => {
    {
        e.target.files
            ? setState(URL.createObjectURL(e.target.files[0]))
            : setState("")
    }
};
export const onClick = (file:React.RefObject<HTMLInputElement>, e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(file.current != null){
     file.current.click()
    }
};

export const registerUser = (event:React.FormEvent<HTMLFormElement>,setError:React.Dispatch<boolean>) => {
    event.preventDefault()
    let data= new FormData(event.currentTarget);
    let student:{ [k: string]: FormDataEntryValue;}={...Object.fromEntries(data)}
    if (data.get('password') !== data.get('rePass')) {
       return  setError(true)
    }
    delete student['rePass']

  fetch(url, {
        method: "POST",
       mode: 'no-cors',
       headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
       body: JSON.stringify(student)
    })
    .then((res) =>event.currentTarget.reset())
    .catch(err=>console.log(err))
};



 export const scrollReveal= (props:ScrollOptions) => {
    const sr = scrollreveal({
        origin: props.direction,
        distance: props.distance,
        duration: props.duration,
        reset: false,
    });
    sr.reveal(props.elements)
};