"use client"
import React, { useEffect, useState } from 'react'
import SoftBox from '@components/SoftBox'
import SoftButton from '@components/SoftButton'
import SoftInput from '@components/SoftInput'
import SoftTypography from '@components/SoftTypography'
import { toast } from 'react-toastify'
import { Box, Card, CssBaseline } from '@mui/material'
import { ThemeProvider } from "@mui/material/styles";
import theme from '@assets/theme'
import BasicLayout from '@layouts/authentication/components/BasicLayout'
import swal from '@sweetalert/with-react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'
import Link from 'next/link'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const history = useRouter()
  const ref = React.useRef(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user details from session storage
    const storedUser = sessionStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if(user !== null){
    history.push("/"); // Use 'push' method to redirect
  }



  const login = async(e) => {
    e.preventDefault();
    setLoading(true);

    if(!email){
      setLoading(false);
      toast.error("Email is requred!", {
        position: toast.POSITION.TOP_CENTER,
      })
    }else if(!password){
      setLoading(false);
       toast.error("Password is required!", {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      setLoading(true);
  
      const formData = {
        email: email,
        password: password,
      };
  
      try {
        const response = await fetch('https://electrikacomputers.co.ke/backend/php/login.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const responseData = await response.text();
        console.log(responseData); // Log the response data
  
        const data = JSON.parse(responseData);
        if (data && data.error) {
          const errorMessage = data.error; // Extract the error message
          setLoading(false);
          toast.error(errorMessage, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (data && data.message) {
          setLoading(false);

const userDetails = {
  firstName: data.user.firstName,
  lastName: data.user.lastName,
  email: data.user.email,
  phone: data.user.phone,
  idNo: data.user.idNo,
  country: data.user.country,
  profile: data.user.profile,
  timestamp: data.user.timestamp,
  id: data.user.id,
};

sessionStorage.setItem('user', JSON.stringify(userDetails));

          setLoading(false);
          Swal.fire({
            icon: "success",
            title: `Welcome Back ${data.user.firstName} ${data.user.lastName} to Electrika Computers!`,
            text: "We are your leading TECH HUB!",
          })
            history.push('/');
        } else {
          // Handle unexpected response format
          console.error('Invalid response:', data);
        }
      } catch (error) {
        // Handle fetch or other network errors
        console.error('Error:', error);
      }
    }
  
  };
  

  return (
    <Box sx={{ pb: 7 }} ref={ref} style={{marginBottom:-200}} >
    <Helmet>
    <title>{`Login Page  |  Electrika Computers`}</title>
    <meta name="description" content="Sign in page for Electrika Shops" />
    <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" />
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" />
    
    {/* Open Graph meta tags */}
    <meta property="og:title" content={`Login Page  |  Electrika Computers`}  />
    <meta property="og:description" content="Sign in page for Electrika Shops" />
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982"  />

    {/* Twitter Card meta tags */}
    <meta name="twitter:title" content={`Login Page  |  Electrika Computers`} />
    <meta name="twitter:description" content="Sign in page for Electrika Shops" />
    <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982"  />
  </Helmet>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <BasicLayout
    title="Welcome!"
    description="Use these awesome forms to login or create new account in your project for free."
    image="/media/images/background.jpg"
  >
  <Card>
  <SoftBox  p={3}>
  <center><img src="/media/images/logo2.jpg" style={{height:80}}/></center>
  <center>The Tech Hub!</center>
  <SoftBox component="form" role="form">
  <SoftBox mb={2}>
    <SoftBox mb={1} ml={0.5}>
      <SoftTypography component="label" variant="caption" fontWeight="bold">
        Email
      </SoftTypography>
    </SoftBox>
    <SoftInput type="email"
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email" />
  </SoftBox>
  <SoftBox mb={2}>
    <SoftBox mb={1} ml={0.5}>
      <SoftTypography component="label" variant="caption" fontWeight="bold">
        Password
      </SoftTypography>
    </SoftBox>
    <SoftInput type="password" 
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password" />
  </SoftBox>
  <SoftBox mt={2}>
    <SoftButton 
    onClick={login}
    style={{backgroundColor:'#2152ff',color:'#fff'}} fullWidth>
    {loading === true ?(
      <span><span style={{color:'#fff'}}>signing in...</span></span>
    ):(
      <span>Sign In</span>
    )}
    </SoftButton>
  </SoftBox>
  <SoftBox mt={2} textAlign="center">
  <SoftTypography variant="button" color="text" fontWeight="regular">
  <SoftTypography
  variant="button"
  color="info"
  fontWeight="medium"
  textGradient
  style={{cursor:'pointer'}}
  onClick={() => Swal.fire({
    icon:'info',
    title:'Forgot Password?',
    text:`Sorry, this feature is not yet available. We are working on it. Thank you for your patience.`,
  })}
>
  Forgotten Password?
</SoftTypography>
  </SoftTypography>
  </SoftBox>

  <SoftBox mt={1} textAlign="center">
  <SoftTypography variant="button" color="text" fontWeight="regular">
  <Link href="/register">
  <SoftTypography
  variant="button"
  color="info"
  fontWeight="medium"
  textGradient
  style={{cursor:'pointer'}}
>
  Don't have Eleckrika Computers Account?
</SoftTypography>
  </Link>
  </SoftTypography>
  </SoftBox>
  </SoftBox>
  
  </SoftBox>
</Card>
  </BasicLayout>
    </ThemeProvider>
  </Box>

  )
}

export default Login