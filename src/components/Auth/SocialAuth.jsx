import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@mui/icons-material/Facebook';
import s from './SocialAuth.module.css';



export const FacebookAuth = ({onSubmit}) => {
  
  const responseFacebook = (response) => {
  console.log(response)
    const { email, id, name} = response;
    const { url } = response.picture.data;
  console.log(id);
  console.log(email);
  console.log(url);
  console.log(name);
  
  onSubmit(email, id, url, name)
}

  return (
 <FacebookLogin
    appId="1085906475561984"
    autoLoad={false}
      fields="name,email,picture"
      textButton='Facebook'
      icon={<FacebookIcon className={s.fbIcon}/>}
      cssClass={s.fb}
    callback={responseFacebook} /> 
  )

}