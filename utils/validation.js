import { body, query, check } from 'express-validator';


const passwordValidation = (value) => {
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value)) {
        throw new Error('Password must contain at least one lowercase letter, one uppercase letter, and one special character.');
    }
    return true;
};

export const register = [
    body('username').isLength({ min: 3, max: 30 }).withMessage('Username name must be between 3 and 30 characters'),
    body('email').isEmail().withMessage('Invalid email input.').notEmpty().withMessage('Email cannot be empty.'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').notEmpty().withMessage('Password cannot be empty.').custom(passwordValidation),
    body('system_number').notEmpty().withMessage('System Number cannot be empty.').isString().withMessage('System Number should be a string.')
]

export const login = [
    body('email').isEmail().withMessage('Invalid email input.').notEmpty().withMessage('Email cannot be empty.'),
    body('password').notEmpty().withMessage('Password cannot be empty.')
]

export const updatePassword = [
    body('email').isEmail().withMessage('Invalid email input.').notEmpty().withMessage('Email cannot be empty.'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').notEmpty().withMessage('Password cannot be empty.').custom(passwordValidation),
    body('confirm_password').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match');
        }
        return true;
    })
]

export const sendOtp = [
    body('email').isEmail().withMessage('Invalid email input.').notEmpty().withMessage('Email cannot be empty.')
]
export const verifyOtp = [
    body('email').isEmail().withMessage('Invalid email input.').notEmpty().withMessage('Email cannot be empty.'),
    body('otp').isNumeric().withMessage('Invalid otp input.').notEmpty().withMessage('otp cannot be empty.')
]
