import React from 'react';
import resumesvg from "./assets/resume3.svg";
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import resumetemplate from './assets/resumetemplate.svg';
import number1 from './assets/number-1-svgrepo-com.svg';
import number2 from './assets/number-2-svgrepo-com.svg';
import number3 from './assets/number-3-svgrepo-com.svg';
import number4 from './assets/number-4-svgrepo-com.svg';
import number5 from './assets/number-5-svgrepo-com.svg';
import number6 from './assets/number-6-svgrepo-com.svg';
import candidate from './assets/candidate.png';
import checklist from './assets/checklist.png';
import cv from './assets/cv.png';
import internet from './assets/internet.png';
import resum from './assets/resume.png';

function Home() {
    const topFunction = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <img src={resumesvg} alt="Resume" className={styles.resumeIcon} />

            <div className={styles.left}>
                <p className={styles.heading}>
                    Build Your <span>Professional Resume</span> that stands out!
                </p>
                <p className={styles.heading1}>
                    Create a resume that stands out with our easy-to-use builder.
                    <span>It's free</span>
                </p>

                <div className={styles.getstarted}>
                    <header>
                        <Link to="/body" className={styles.getStartedButton}>Get Started</Link>
                    </header>
                </div>

                <div className={styles.content}>
                    <p>&emsp;</p>
                    <p>&emsp;</p>
                    <p>&emsp;</p>
                    <p>&emsp;</p>
                    <p>&emsp;</p>

                    <div className={styles.imageTextContainer}>
                        <img src={resumetemplate} alt="Resume Template" className={styles.someImage} />
                        <div>
                            <div className={styles.coloredText}>3+ colours</div>
                            <p className={styles.customParagraph}>
                                Whether you're crafting a presentation, designing a flyer, or planning an event, our template offers the perfect professional starting point. Easy to customize and crafted, these colourful templates save your time.
                            </p>
                        </div>
                    </div>

                    <p className={styles.heading3}>
                        <span>How Our Resume Builder Works</span>
                    </p>
                    <p className={styles.heading4}>
                        Our resume builder streamlines the process of building a professional resume. It has user-friendly templates and guided prompts to help you properly highlight your talents and experience. With a few clicks, you can customize your CV for any job application.
                    </p>
                    <p>&emsp;</p><p>&emsp;</p>
                    <div className={styles.imageTextContainer}>
                        <div className={styles.imageColumn}>
                            
                            <img src={cv} alt="Resume Template" className={styles.rightimg1} />
                        </div>
                        <div>
                        
                            <div className={styles.coloredText}><pre><img src={number1} alt="Resume Template" className={styles.someImage1} />Choose your template's colour.</pre></div>
                            
                            <p className={styles.customParagraph}>
                                Select from a variety of professionally designed templates to give your project a consistent look. Whether you're working on a presentation or document, our templates provide a strong starting point. Customize them to suit your specific needs and save it.
                            </p>
                        </div>
                    </div>
                    <p>&emsp;</p><p>&emsp;</p>
                    <div className={styles.imageTextContainer}>
                        
                       
                        <div>
                        
                            <div className={styles.coloredText}><pre><img src={number2} alt="Resume Template" className={styles.someImage2} />    Enter your information.</pre></div>
                            <p className={styles.customParagraph}>
                                Provide the specific information or context for the professional you need a description for. This will help me create a tailored and relevant description for you.
                            </p>
                            
                        </div>
                        <img src={resum} alt="Resume Template" className={styles.rightimg2} />
                    </div>
                    
                    <p>&emsp;</p><p>&emsp;</p>
                    <div className={styles.imageTextContainer}>
                        
                        <img src={candidate} alt="Resume Template" className={styles.rightimg3} />
                        <div>
                        
                            <div className={styles.coloredText}><pre><img src={number3} alt="Resume Template" className={styles.someImage3} />Select your content.</pre></div>
                            <p className={styles.customParagraph}>
                                This step ensures that the information presented is both valuable and aligned with the overall objectives of the publication or platform.
                            </p>
                        </div>
                    </div>
                    <p>&emsp;</p><p>&emsp;</p>
                    <div className={styles.imageTextContainer}>
                        
                        
                        <div>
                        
                        
                            <div className={styles.coloredText}><pre><img src={number4} alt="Resume Template" className={styles.someImage4} />Finalize the details.</pre></div>
                            <p className={styles.customParagraph}>
                              
                                Ensure every element is perfectly aligned. Thoroughly review all aspects, 
                                from content accuracy to design. Achieve a polished and professional finish before moving forward.
                            </p>
                        </div>
                        <img src={checklist} alt="Resume Template" className={styles.rightimg4} />
                    </div>
                    <p>&emsp;</p><p>&emsp;</p>
                    <div className={styles.imageTextContainer}>
                        
                        <img src={internet} alt="Resume Template" className={styles.rightimg5} />
                        <div>
                        
                            <div className={styles.coloredText}><pre><img src={number5} alt="Resume Template" className={styles.someImage5} />Download & Share.</pre></div>
                            <p className={styles.customParagraph}>
                                Download the resume and share the file in pdf, doc format. Customize the resume with a few seconds, download, and save it easily.
                            </p>
                        </div>
                    </div>

                    <p>&emsp;</p>
                    <p>&emsp;</p>   <p>&emsp;</p><p>&emsp;</p>   
                    <div className={styles.getstarted}>
                    <header><p>&emsp;</p><p>&emsp;</p>
                        <Link to="/body" className={styles.getStartedButton}>Get Started</Link>
                    </header>
                </div>              
                </div>
            </div>
        </div>
    );
}

export default Home;


