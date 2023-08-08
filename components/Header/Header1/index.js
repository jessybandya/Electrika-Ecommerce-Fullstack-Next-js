"use client"

import { Avatar, Button, Icon, IconButton, Tooltip } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import {datas,routes} from '@assets/data/categories/data';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { auth, db } from '@auth/firebase';
import Modal from '../../CartModal';
import CartContext from '@auth/store/cart-context';
import SearchInput from './Search-input';
import { useDispatch } from 'react-redux';
import { usePathname, useRouter } from "next/navigation";
import { useRouter as useRouter1 } from "next/router";

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import UseWhatsapp from 'whatsapp-react-component';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Link from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Product({ product, images }) {
  return (
    <div>
      <h2>{product.title}</h2>
      {/* Render images here */}
      {images.map((image, index) => (
        <img key={index} src={image.image_url} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

// <h1>Header1</h1>
// {allData.map((product, index) => (
//   <Product key={index} product={product} images={images[index].images} />
// ))}

export default function Header1({ allData, images }) {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [posts, setPosts] = useState([]);
    const history = useRouter()
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const receiver = '+254713441634';
    const [showMenu, setShowMenu] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const router = ''
    const cart = useSelector(state => state.cart);

    
  
    const submitQuote = () => {
      setLoading(true);
      if (name === '' || email === '' || phoneNumber === '' || message === '') {
        toast.error('Please fill all fields!', {
          position: toast.POSITION.TOP_CENTER
        });
        setLoading(false);
        return;
      } else {
        const confirmDetails = async () => {
          const result = await Swal.fire({
            title: 'Confirm your details',
            html: `Name: ${name}<br/>
                   Phone Number: ${phoneNumber}<br/>
                   Email: ${email}<br/><br/>
                   Message: ${message}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            customClass: {
              container: 'my-swal-container', // Add a custom CSS class name
            },
          });
  
          if (result.isConfirmed) {
            const senderDetails = `*Quote Request*\n*Name:* ${name}\n*Phone Number:* ${phoneNumber}\n*Email:* ${email}`;
            const messageWithSenderDetails = `${senderDetails}\n\n*Message*\n${message}`;
  
            UseWhatsapp(receiver, messageWithSenderDetails);
            setLoading(false);
            setName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
            setOpen(false);
          } else {
            setLoading(false);
          }
        };
  
        confirmDetails();
      }
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClickClose = () => {
      setOpen(false);
    };
  
    useEffect(() => {
      // Retrieve user details from session storage
      const storedUser = sessionStorage.getItem('user');
  
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
  
        setIsHeaderVisible(currentScrollPos < prevScrollPos || currentScrollPos < 50);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
  
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = (data) => {
      db.collection('electronics').where('category','==', `${data}`).limit(5).onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
        })));
      });
    };
  
    const [isHeaderVisible1, setHeaderVisible] = useState(true);
    const [isCartVisible, setCartVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const scrollThreshold = 200; // Adjust this value to change when the transition effect triggers
  
        if (scrollPosition > scrollThreshold) {
          setHeaderVisible(false);
          setCartVisible(false);
        } else {
          setHeaderVisible(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleCartClick = () => {
      setCartVisible(!isCartVisible);
    };
  
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const [isModalOpenCart, setIsModalOpenCart] = useState(false);
  
    const openModalCart = () => {
      setIsModalOpenCart(true);
    };
  
    const closeModalCart = () => {
      setIsModalOpenCart(false);
    };
  
    const cartCtx = useContext(CartContext);
  
    const totalAmount = `${cartCtx?.totalAmount?.toFixed(2)}`;
    const {items} = cartCtx;
    const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  
  
      const numberOfCartItems = items.reduce((curNumber, item) => {
          return curNumber + item.amount;
      }, 0);
  
  
  
  
    const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('authId');
      sessionStorage.removeItem('user');
      history.push("/login")

      Swal.fire({
        icon: 'success',
        title: 'Authentication Status!',
        text: 'You have logged out successfully!',
      })
  } 
  
  
  // <div className="preloader">
  // <div className="clear-loading loading-effect-2">
  //   <span />
  // </div>
  // </div>
  
  // <li className="column-1">
  // <Link href="#" title style={{display:'flex',alignItems:'center'}}><Icon>auto_stories</Icon>Pages</Link>
  // <ul className="submenu">
  //   <li>
  //     <Link href="#" title><i className="fa fa-angle-right" aria-hidden="true" />page 1</Link>
  //   </li>
  // </ul>
  // </li>

  

  const handleClick = () => {
      setShowMenu(true);
  };
  const handleClickCategories = () => {
    setShowCategories(true);
};

const handleClickSearch = () => {
  setShowSearch(true);
};
  
    console.log('Path: ',router.asPath)
  
    return (
      <>
      <header 
      style={{zIndex:1000}} className={`header ${isHeaderVisible ? '' : 'hide'}`}
      >
  <section id="header" className="header">
  <div className="header-middle">
  <div className="container">
    <div style={{backgroundColor:'#fff'}}  className="row">
      <div className="col-md-12">
        <div id="logo" className="logo style1">
          <Link href="/" title>
            <img src="/media/images/logo2.jpg" style={{height:100}} alt="" />
          </Link>
        </div>{/* /#logo */}
        <div    className="nav-wrap">
          <div id="mainnav"  className="mainnav style1">
          <ul className="menu">
          {routes.map((route) => 
            <li className="column-1">
            <Link href={route.href} title style={{display:'flex',alignItems:'center'}}><Icon fontSize='small'>{route.icon}</Icon>{route.name}</Link>
            </li>
            )}
          </ul>{/* /.menu */}
          </div>{/* /.mainnav */}
                
        </div>{/* /.nav-wrap */}
        {showMenu === true ?(
          <div onClick={() => setShowMenu(false)} style={{backgroundColor:'#10BBE5'}} className="btn-menu">
          <ClearIcon style={{color:'#fff'}} />
          </div>
        ):(
          <div onClick={handleClick} style={{backgroundColor:'#10BBE5'}} className="btn-menu">
          <MenuIcon style={{color:'#fff'}} />
          </div>
        )}
        <ul className="flat-infomation style1">
          <li className="phone">
           <span style={{
            border:'2px solid #5C5CFF',
            height:60,
            width:150,
            padding:10,
            borderRadius:10,
            color:'#5C5CFF',
            cursor:'pointer',
           }}
           onClick={handleClickOpen}
           >
           Get Quote
           </span>
          </li>
        </ul>{/* /.flat-infomation */}
      </div>{/* /.col-md-12 */}
    </div>{/* /.row */}
  </div>{/* /.container */}
  </div>{/* /.header-middle */}
  <div className="header-bottom">
  <div className="container">
  <div className="row">
    <div className="col-md-3 col-2">
    {showCategories === true ?(
      <div onClick={() => setShowCategories(false)} className="btn-menu-mega">
      <ClearIcon  style={{color:'#fff'}} />
      </div>
    ):(
      <div onClick={handleClickCategories} className="btn-menu-mega">
      <MenuIcon style={{color:'#fff'}} />
      </div>
    )}
      <div id="mega-menu">
        <div className="btn-mega"><span />ALL CATEGORIES</div>        
        <ul className="row-header1 menu">
        {datas.map((data, index) => {
          return (
            <>
              <li>
              <Link style={{display:'flex',alignItems:'center'}} href={`/category/${data.id}/1`} title >
                <span style={{marginTop:5}} className="menu-img">
                  <Icon>{data.icon}</Icon>
                </span>
                <span className="menu-title">
                  {data.name}
                </span>
              </Link>
              </li>
            </>
      )})
    }
        </ul>
      </div>

    </div>{/* /.col-md-3 col-2 */}

    <div className="col-md-9 col-10">
    {showSearch === true ?(
      <div className="top-search style1 active">
        <form action="#" method="get" className="form-search" acceptCharset="utf-8">
          <div className="cat-wrap cat-wrap-v1">            
          </div>{/* /
        .cat-wrap */}
          <SearchInput data={allData} images={images} showSearch={showSearch}/>
        </form>{/* /.form-search */}
      </div>
    ):(
      <div className="top-search style1">
      <form action="#" method="get" className="form-search" acceptCharset="utf-8">
        <div className="cat-wrap cat-wrap-v1">            
        </div>{/* /
      .cat-wrap */}
        <SearchInput data={allData} images={images} showSearch={showSearch}/>
      </form>{/* /.form-search */}
    </div>
    )}


    <div className="search-part-icon">
    {showSearch === true ?(
      <span onClick={() => setShowSearch(false)} className="show-search">
      <ClearIcon fontSize='medium' style={{cursor:'pointer',fontWeight:'bold'}}/>
    </span>
    ):(
      <span onClick={handleClickSearch} className="show-search">
      <SearchIcon fontSize='medium' style={{cursor:'pointer',fontWeight:'bold'}}/>
    </span>
    )}
    </div>





      <div style={{marginTop:10}} className="box-cart style1">
        <div className="inner-box">
          <span title>
          <Badge badgeContent={cart.length} color="error">
          <ShoppingCartOutlinedIcon style={{cursor:'pointer'}} onClick={openModalCart} />
        </Badge>
          </span>
        </div>{/* /.inner-box */}
        <div className="inner-box">
        {user !== null ?(
          <div style={{
            marginLeft:15
          }}><span>
          
          <Tooltip title="Logout">
          <IconButton>
            <Avatar onClick={logout} style={{cursor:'pointer'}} alt={user?.firstName} src={user?.profile} />
          </IconButton>
        </Tooltip>
          </span></div>
        ):(
         <>
         <span><Link style={{color:'#fff',fontSize:15,fontWeight:'bold',marginLeft:8}} href='/login' >Login</Link></span>
         <span className="vl"></span>
         <span><Link style={{color:'#fff',fontSize:15,fontWeight:'bold',marginLeft:5}} href='/register'>Register</Link></span>
         </>
        )}
      </div>{/* /.inner-box */}
      </div>{/* /.box-cart */}
  
  
      
    </div>{/* /.col-md-9 col-10 */}
  </div>{/* /.row */}
  </div>{/* /.container */}
  </div>{/* /.header-bottom */}
  </section>{/* /#header */}

  {showMenu &&(
    <div id="mainnav-mobi" style={{display:'block',top:80}} className="mainnav style1">
    <ul className="menu">
    {routes.map((route) => 
      <li className="column-1">
      <Link href={route.href} title style={{display:'flex',alignItems:'center'}}><Icon fontSize='small'>{route.icon}</Icon>{route.name}</Link>
      </li>
      )}
    </ul>{/* /.menu */}
  </div>
  )}

  
  {showCategories === true &&(
    <div id="mega-mobile">
    <ul className="row-header1 menu">
    {datas.map((data, index) => {
      return (
        <>
          <li>
          <Link style={{display:'flex',alignItems:'center'}} href={`/category/${data.id}/1`} title >
            <span style={{marginTop:5}} className="menu-img">
              <Icon>{data.icon}</Icon>
            </span>
            <span className="menu-title">
              {data.name}
            </span>
          </Link>
          </li>
        </>
  )})
}
    </ul>
    </div>
  )}
  </header>
  <Modal isOpen={isModalOpenCart} onClose={closeModalCart}/>
  
  
  
  <BootstrapDialog
  onClose={handleClickClose}
  aria-labelledby="customized-dialog-title"
  open={open}
  >
  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClickClose}>
  <img src="/media/images/logo2.jpg" style={{height:50}} alt="" />
  </BootstrapDialogTitle>
  <DialogContent dividers>
  <div className="form-contact-content">
  <div id="form-contact">
    <div className="form-box one-half name-contact">
      <label htmlFor="name-contact">Full Name</label>
      <input type="text" id="name-contact" name="name-contact" placeholder="Full Name" 
      value={name}
      onChange={e => setName(e.target.value)}
      />
    </div>
    <div className="form-box one-half password-contact">
      <label htmlFor="password-contact">Phone Number</label>
      <input type="text" id="password-contact" 
      value={phoneNumber}
      onChange={e => setPhoneNumber(e.target.value)}
      name="password-contact" placeholder="Your Phone" />
    </div>
    <div className="form-box">
      <label htmlFor="subject-contact">Email</label>
      <input type="email" id="subject-contact" 
      value={email}
      onChange={e => setEmail(e.target.value)}
      name="subject-contact" placeholder="Your email" />
    </div>
    <div className="form-box">
      <label htmlFor="comment-contact">Message</label>
      <textarea id="comment-contact" 
      value={message}
      onChange={e => setMessage(e.target.value)}
      defaultValue={""} />
    </div>
    <div className="form-box">
      <button style={{
        marginTop:-10
      }} onClick={submitQuote} className="contact">
      {loading ? (
        <span>Submitting...</span>
      ):(
      <span>Submit</span>
      )}
      </button>
    </div>
  </div>{/* /#form-contact */}
  </div>{/* /.form-contact-content */}
  </DialogContent>
  </BootstrapDialog>



  </>
    );
  };