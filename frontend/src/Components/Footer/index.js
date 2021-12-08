// import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import DSC_logo from '../../Assets/DSC-IIITA-Dark-Horizontal.png'
import mail_icon from '../../Assets/Message.svg'
import pin_icon from '../../Assets/Location.svg'
import { Link } from "react-router-dom";
import follow_icon_1 from '../../Assets/instagram.svg'
import follow_icon_2 from '../../Assets/facebook.svg'
import follow_icon_3 from '../../Assets/medium.svg'
import follow_icon_4 from '../../Assets/youtube.svg'
import follow_icon_5 from '../../Assets/twitter.svg'
import follow_icon_6 from '../../Assets/linkedin.svg'
import follow_icon_7 from '../../Assets/github.svg'
import follow_icon_8 from '../../Assets/discord.png'
import useViewport from "../../viewport/useViewport"
import loginperson from "./loginperson_Image.png"
import LoginPage from '../../pages/Projects/loginPage'

function Footer() {
    const { width } = useViewport();
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="DSC_logo">
                    <img src={DSC_logo} alt="DSC_logo"/>
                </div>
                <div className="footer_contact">
                    <div className="contact_sec_1">
                        <div className="contact_mail">
                            <div className="contact_mail_icon">
                                <img src={mail_icon} alt="mail"/>
                            </div>
                            <p><a href="mailto:gdsc@iiita.ac.in">gdsc@iiita.ac.in</a></p>
                        </div>
                        <div className="contact_address">
                            <div className="contact_pin_icon">
                                <img src={pin_icon} alt="pin"/>
                            </div>
                            <p>Google Developer Student's Club <br/><span>IIITA,Prayagraj, Uttar Pradesh, 211015</span></p>
                        </div>
                    </div>
                    <div className="contact_sec_2">
                        <p>Follow us on</p>
                        <div className="contact_links">
                            <div className="contact_icon">
                                <a href="https://www.instagram.com/gdsciiita/" target="_blank" rel="noopener noreferrer">
                                    <img src={follow_icon_1} alt="Insta"/>
                                </a>
                            </div>
                            <div className="contact_icon">
                                <a href="https://www.facebook.com/gdsciiita" target="_blank" rel="noopener noreferrer">
                                    <img src={follow_icon_2} alt="Facebook"/>
                                </a>
                            </div>
                            <div className="contact_icon">
                                <a href="https://medium.com/developer-student-clubs-iiit-allahabad" target="_blank" rel="noopener noreferrer">
                                    <img src={follow_icon_3} alt="Medium"/>
                                </a>
                            </div>
                            <div className="contact_icon">
                                <a href="https://www.youtube.com/channel/UCvItI3Qr_36kLB6zATcjj7Q/featured" target="_blank" rel="noopener noreferrer">
                                    <img src={follow_icon_4} alt="YouTube"/>
                                </a>
                            </div>
                            <div className="contact_icon">
                                <a href="https://twitter.com/Gdsciiita" target="_blank" rel="noopener noreferrer">
                                    <img src={follow_icon_5} alt="Twitter"/>
                                </a>
                            </div>
                            <div className="contact_icon">
                                <a href="https://www.linkedin.com/company/gdsciiita" target="_blank" rel="noopener noreferrer">
                                    <img src={follow_icon_6} alt="LinkedIn"/>
                                </a>
                            </div>
                            <div className="contact_icon">
                                <a href="https://github.com/Elevate-Lab" target="_blank" rel="noopener noreferrer">
                                    <img src={follow_icon_7} alt="Github"/>
                                </a>
                            </div>
                            <div className="contact_icon">
                                <a href="https://discord.com/invite/gv9zzDcQUH" target="_blank" rel="noopener noreferrer">
                                    <img src={follow_icon_8} alt="Discord"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="footer_divider"></p>
            <div style={{display:'flex',width:'100%'}}>
            <div style={{display:'flex',alignContent:'flex-end',width:'90%',marginLeft:width>10030?'1rem':'-2rem'}} xs={6} className="footer_bot">&copy;2021 GDSC IIITA</div>
            <div xs={6} style={{width:"10%",marginLeft:'0rem',display:'flex',justifyContent:'center',direction:'row',}}>
          
                <div  className="button_login_design" style={{width:'7rem',display:'flex',direction:'row',justifyContent:'center',height:'2rem',borderRadius:'3rem',background:'#70757a'}}>
                <img  style={{width:'2.2rem',height:'1.95rem',zIndex:'99',marginLeft:'-0.9rem',cursor:"wait"}}src={loginperson} alt="hell" />
                
                <a style={{marginTop:'0.1rem',marginLeft:'0rem',width:'4rem',color:'white',cursor:'pointer'}} className="button_login_design_txt" href={LoginPage} >Log Out</a>

                </div>
              
            </div>
            </div>
                  </div>
    )
}

export default Footer
