import React from 'react'
import SubscribeButton from './SubscribeButton'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className='bg-black text-white md:flex md:justify-between p-5'>
                <div className='flex flex-col items-start gap-5 sm:flex-row sm:items-center'>
                    <p>Don't miss our updates</p>
                    <SubscribeButton />
                </div>
                <div className='flex gap-8 p-3 max-w-xs'>
                    Follow us
                    <a href="https://www.linkedin.com/" target='_blank'><img src="/assets/linkedinIcon.png" alt="Linkedin Icon" /></a>
                    <a href="https://www.facebook.com/" target='_blank'><img src="/assets/fbIcon.png" alt="Facebook Icon" /></a>
                    <a href="https://www.messenger.com/" target='_blank'><img src="/assets/messageIcon.png" alt="Messenger Icon" /></a>
                    <a href="https://www.twitter.com/" target='_blank'><img src="/assets/twitterIcon.png" alt="Twitter Icon" /></a>
                </div>
            </div>
            <div className='bg-black text-white flex flex-col-reverse sm:flex-row justify-around p-5'>
                <div>
                    <img src="/assets/meskyfooter.png" alt="mesky logo" className='max-w-xs' />
                    <p className='text-gray-500'>&copy; All rights are reserved.Mesky {currentYear}</p>
                </div>

                <div className='flex text-pale-yellow gap-5 flex-col sm:flex-row '>
                    <div className='flex flex-col gap-2'>
                        <Link to="/">About us</Link>
                        <Link to="/career">Careers</Link>
                        <Link to="/">Contact us</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to="/">Privacy policy</Link>
                        <Link to="/">Terms of usage</Link>
                        <Link to="/">Help Center(FAQs)</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
