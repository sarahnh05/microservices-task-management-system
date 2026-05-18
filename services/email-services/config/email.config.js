import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

let transporter = null;

// Initialize email transporter
export const initializeEmailTransporter = () => {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      // secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log('Email Service: Email transporter initialized');
  } catch (error) {
    console.error(
      'Email Service: Failed to initialize email transporter:',
      error,
    );
  }
};

// Get email transporter
export const getTransporter = () => {
  return transporter;
};
