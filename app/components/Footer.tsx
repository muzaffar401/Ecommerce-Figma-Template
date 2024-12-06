import React from 'react';
import { CiInstagram, CiTwitter } from 'react-icons/ci';
import { LuSendHorizontal } from 'react-icons/lu';
import { RiFacebookLine, RiLinkedinLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-10 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Subscription Section */}
                    <div>
                        <h2 className="font-medium text-xl">Exclusive</h2>
                        <p className="mt-4 text-zinc-200 font-light">Subscribe</p>
                        <p className="mt-2 text-zinc-200 font-light">Get 10% off your first order</p>
                        <form className="mt-4 flex items-center border border-white rounded">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-black text-white p-2 flex-grow outline-none rounded-lg relative"
                                aria-label="Enter your email"
                            />
                            <button type="submit" className="p-2 absolute right-16 xl:relative xl:right-0" aria-label="Subscribe">
                                <LuSendHorizontal />
                            </button>
                        </form>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h2 className="font-medium text-xl">Support</h2>
                        <address className="mt-4 not-italic text-zinc-200 font-light">
                            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.<br />
                            <a href="mailto:exclusive@gmail.com" className="block mt-3">
                                exclusive@gmail.com
                            </a>
                            <a href="tel:+88015888889999" className="block mt-3">
                                +88015-88888-9999
                            </a>
                        </address>
                    </div>

                    {/* Account Section */}
                    <div>
                        <h2 className="font-medium text-xl">Account</h2>
                        <ul className="mt-4 space-y-3 text-zinc-200 font-light">
                            <li><a href="/my-account">My Account</a></li>
                            <li><a href="/login">Login / Register</a></li>
                            <li><a href="/cart">Cart</a></li>
                            <li><a href="/wishlist">Wishlist</a></li>
                            <li><a href="/shop">Shop</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h2 className="font-medium text-xl">Quick Links</h2>
                        <ul className="mt-4 space-y-3 text-zinc-200 font-light">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-of-use">Terms Of Use</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Download App Section */}
                    <div>
                        <h2 className="font-medium text-xl">Download App</h2>
                        <p className="mt-4 text-zinc-200 font-light">Save $3 with App New User Only</p>
                        <div className="mt-4 flex items-center gap-2">
                            <div className="w-[100px] h-[100px]">
                                <img
                                    src="/qr.webp"
                                    alt="QR code for app download"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="w-36 h-12">
                                    <img
                                        src="/google.webp"
                                        alt="Get on Google Play"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-36 h-12 mt-2">
                                    <img
                                        src="/apple.webp"
                                        alt="Get on Apple Store"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <RiFacebookLine size={30} />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                <CiTwitter size={30}/>
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <CiInstagram size={30}/>
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <RiLinkedinLine size={30}/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-center border-t border-zinc-800 text-zinc-800">
                    <p className="py-6">© Copyright Rimel 2022. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
