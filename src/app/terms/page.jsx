// components/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <>
            <div className='privacy'>
                <div className="container privacy-container ">
                    <div className="mb-4 privacy-header">
                        <h2 className="text-2xl text-center font-bold">Terms & Conditions</h2>
                    </div>
                    <div className="mb-4">
                        <h3>Introduction</h3>
                        <p className='terms-p' >Welcome to Orvo Personal CRM! These Terms & Conditions (“Terms”) govern your access to and use of Orvo services, including our web app and related services. By creating an account, you agree to comply with these Terms.</p>
                    </div>

                    <div className="mb-4">
                        <h3>User Access & Restrictions</h3>
                        <p className='terms-p'>We only collect the minimal personal data necessary to provide our services. This includes:</p>
                        <ul className='py-2'>
                            <li className='mb-2'>Users may only access their own data or data explicitly shared with them.</li>
                            <li className='mb-2'>Misuse of features or causing excessive usage through automated scripts or other methods that degrade the quality of service is prohibited.</li>
                            <li className='mb-2'>Violations of these restrictions may result in immediate suspension or termination of your account.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3>Subscription Plans</h3>
                        <p className='terms-p'>Orvo offers the following subscription tiers:</p>
                        <h6>Trial– 14 days</h6>
                        <ul className='py-2'>
                            <li className='mb-2'><strong>Premium Plan ($10 per account):</strong>
                            <ul>
                            <li className='mb-2'>
                            Features: Search, Groups, Tags, Notes, Reminders, Activity Timeline, Unlimited Life Updates, and Relationship Tracker.
                            </li>
                            <li className='mb-2'>Additional Features: Company Organization Charts for enhanced productivity.</li>
                            </ul></li>


                           <li className='mb-2'><strong>Team Plan ($19 per account):</strong>
                            <ul>
                            <li className='mb-2'>
                            Includes all Premium Plan features.
                            </li>
                            <li className='mb-2'>Additional Features: Shared Contacts, Notes, Reminders, and Groups for team collaboration.</li>
                            </ul></li>
                        </ul>
                        <p className='terms-p'>Payments are processed securely via Stripe. Subscription fees are charged on a recurring basis, and you may cancel anytime through your account settings.</p>
                    </div>

                    <div className="mb-4">
                        <h3>Termination of Service</h3>
                        <ul className='py-2'>
                            <li className='mb-2'><strong>User-Initiated Termination:</strong> You may terminate your account at any time for any reason.</li>
                            <li className='mb-2'><strong>Company-Initiated Termination:</strong> Orvo may terminate your account if:
                            <ul>
                                <li className='mb-2'>You violate these Terms by causing service degradation through unauthorized activities (e.g., DDOS attacks or excessive scripting).</li>
                            </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3>Disclaimers & Limitations of Liability</h3>
                       <ul className='py-2'>
                        <li className='mb-2'>Orvo provides its services "as-is" without warranties of any kind.</li>
                        <li className='mb-2' >Orvo is not responsible for the accuracy, completeness, or reliability of user-entered data, including shared company org charts or other entries.</li>
                        <li className='mb-2' >Orvo is not liable for any indirect, incidental, or consequential damages arising from the use of its services.</li>
                       </ul>

                    </div>

                    <div className="mb-4">
                        <h3>User Responsibilities</h3>
                       <ul className='py-2'>
                        <li className='mb-2'>Users are solely responsible for the accuracy and legality of their data.</li>
                        <li className='mb-2'>Users must comply with applicable laws when using Orvo.</li>
                       </ul>

                    </div>

                    <div className="mb-4">
                        <h3>Intellectual Property</h3>
                       <ul className='py-2'>
                        <li className='mb-2'>All features, designs, and intellectual property within Orvo, including but not limited to the Hierarchy feature, remain the property of Orvo.</li>
                        <li className='mb-2'>Shared data within the app is the sole responsibility of the user sharing it. Orvo does not validate or endorse user-provided data.</li>
                       </ul>

                    </div>

                    <div className="mb-4">
                        <h3>Jurisdiction & Governing Law</h3>
                       <ul className='py-2'>
                        <li className='mb-2'>These Terms are governed by the laws of Poland and the European Union.</li>
                        <li className='mb-2'>Any disputes arising from these Terms shall be resolved in the courts of Poland.</li>
                       </ul>

                    </div>

                    <div className="mb-4">
                        <h3>Updates to the Terms</h3>
                       <ul className='py-2'>
                        <li className='mb-2'>Orvo reserves the right to update these Terms.</li>
                        <li className='mb-2'>Users will be notified of changes via email or a popup notification upon login. Continued use of the service after such notification constitutes acceptance of the updated Terms.</li>
                       </ul>

                    </div>
                    <div className="mb-4">
                        <h3>Contact Information</h3>
                     <p className='mt-2'>For questions or concerns regarding these Terms, please contact us at: <br/>
                     <strong><a href="">office@getorvo.com</a></strong></p>

                    </div>
                </div>
            </div>

        </>

    );
};

export default PrivacyPolicy;
