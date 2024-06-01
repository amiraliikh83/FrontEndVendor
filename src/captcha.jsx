import  { useState, useEffect } from 'react';
import axios from 'axios';

const Captcha = () => {
  const [captchaData, setCaptchaData] = useState({ text: '', imageData: '' });

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const fetchCaptcha = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/captcha');
      setCaptchaData(response.data);
    } catch (error) {
      console.error('Error fetching captcha:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <img src={captchaData.imageData} alt="Captcha" />
    </div>
  );
};

export default Captcha;