import React from 'react'
import Button from './Button'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to recieve our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe anytime!
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email'
                            placeholder='Your email'
                            className='footer-input' />
                        <Button buttonStyle='btn--outline'>
                            Subscribe
                            </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/sign-up'>
                            How it works
                        </Link>
                        <Link to='/'>
                            Testimonials
                        </Link>
                        <Link to='/'>
                            Careers
                        </Link>
                        <Link to='/'>
                            Investors
                        </Link>
                        <Link to='/'>
                            TOS
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
