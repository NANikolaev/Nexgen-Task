export interface ScrollOptions{
    direction:string,
    distance:string,
    duration:number,
    elements:string,
    
}

export interface ErrProps{
  text:string,
  state:boolean,
  set:React.Dispatch<boolean>
}

export interface User{
  name:string,
  birthdate:string,
  password:string,
  rePass?:string,
  phone:number,
  email:string,
  age:number,
  gender:'male'|'female',
  image?:object,
  description:string,
 
}
