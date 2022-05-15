import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Props {
    title: String,
    type: "addres" | "email" | "socialMidias" | "phone" | String,
    link: {
        icon?: any,
        label?: any,
        to: Array<String> | String
    }
}

export default function CardContact({title, type, link}: Props) {
    const getIcon= type => {
        var el = <LocationOnIcon/>
        type == 'email' ? el = <EmailIcon/> :
        type == 'socialMidias' ? el = <ShareIcon/> :
        el = <PhoneIphoneIcon/>
        return el
    }

    const getIconSocialMidia = name => {
        var el = <InstagramIcon/>
        name == 'LinkedInIcon' ? el = <LinkedInIcon/> : <LinkedInIcon/>
        return el
    }

    return (
        <div className="d-flex" style={
            {
                backgroundColor: 'rgba(255,255,255,0.075)'
            }
        }>
            <>
                <div className="icon-on-left d-flex j-c-center j-c-c-center" style={{width: 50, height: 50, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 100, margin: "20px 0 20px 20px"}}>
                    {getIcon(type)}
                </div>
                <div style={{margin: "20px 0 0 20px"}}>
                    <h2 className="f-w-600 f-size-20 color-text-opacity-fff-50">{title}</h2>
                    {
                        type != 'socialMidias' ? <a target="_blank" href={`${link?.to}`}>{link.label}</a> : 
                        <div className="d-flex">
                            {
                                link.icon?.map((item, index) => {
                                    return(
                                        <div key={index}>
                                            {
                                                <Link href={`${link?.to[index]}`}>{getIconSocialMidia(item)}</Link>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </>
        </div>
    )
}