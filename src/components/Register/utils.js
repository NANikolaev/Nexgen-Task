
const bin = `1671463791257-9716832768172`
const url = `https://www.toptal.com/developers/postbin/${bin}`

export const onChange = (setState, e) => {
    {
        e.target.files[0]
            ? setState(e.target.files[0])
            : setState("")
    }
};
export const onClick = (file, e) => {
    e.preventDefault()
    file.current.click()
};

export const registerUser = (e, state) => {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let student = { ...Object.fromEntries(data) }

    if (data.get('password') !== data.get('re-pass')) {
        return state(true)
    }
    delete student['re-pass']
   
     fetch(url,{
        method:"POST",
        mode:'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body:JSON.stringify(student)
    } )
     .then(res=>e.target.reset())
};