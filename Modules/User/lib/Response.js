const language = require('../languages/index');

const status = {
    
    //MUA
    MUASignUpSuccess: {
        code: 'MUA100',
        message: 'Sign Up Success'
    },
    MUAInvalidPhone: {
        code: 'MUA200',
        message: 'Invalid Phone number.'
    },
    MUASaveFailed: {
        code: 'MUA300',
        message: 'Saving user Failed'
    },
    
    //MUB
    MUBSignUpSuccess: {
        code: 'MUB100',
        message: 'Sign Up Success'
    },
    MUBInvalidPhone: {
        code: 'MUB200',
        message: 'Invalid Phone, failed'
    },
    MUBInvalidPassword: {
        code: 'MUB300',
        message: 'Invalid Password.'
    },
    MUBInvalidOtp: {
        code: 'MUB400',
        message: 'Invalid Otp.'
    },
    MUBInvalidUser: {
        code: 'MUB500',
        message: 'User is either not registered, or not a signUp'
    },
    MUBFailed: {
        code: 'MUB600',
        message: 'An unexpected error'
    },
    MUBUserAlreadyRegistered: {
        code: 'MUB700',
        message: "The user is already registered."
    },
    MUBVerificationFailed: {
        code: 'MUB800',
        message: "The Otp verification failed"
    },

    //MUC
    MUCOtpSuccess: {
        code: 'MUC100',
        message: "An OTP is send successfully."
    },
    MUCInvalidRegistration: {
        code: 'MUC200',
        message: "The user is not registered yet."
    },
    MUCInvalidPhone: {
        code: 'MUC300',
        message: "The Phone number is invalid."
    },
    MUCFailed: {
        code: "MUC400",
        message: "Failed unexpectedly."
    },

    //MUD
    MUDSuccess: {
        code: 'MUD100',
        message: 'Login SUccess'
    },
    MUDUserNotRegistered: {
        code: 'MUD200',
        message: 'User is not registered yet.'
    },
    MUDOtpVerificationFailed: {
        code: 'MUD300',
        message: 'User Otp Verification failed.'
    },
    MUDInvalidData: {
        code: 'MUD400',
        message: 'Invalid data values'
    },
    MUDFailed: {
        code: 'MUD500',
        message: 'Failed'
    },

    //MUE
    MUESuccess: {
        code: 'MUE100',
        message: 'Successfully logged in user.'
    },
    MUEUserNotRegistered: {
        code: 'MUE200',
        message: 'User not registered yet.'
    },
    MUEAuthenticationFailed: {
        code: 'MUE300',
        message: 'Authentication Failed'
    },
    MUEFailed: {
        code: 'MUE400',
        message: 'Unexpected Failure.'
    },
    MUEInvalidData: {
        code: 'MUE500',
        message: 'Incomplete Data'
    },

    //MUF
    MUFSuccess: {
        code: 'MUF100',
        message: "Successfully changed the password."
    },
    MUFInvalidData: {
        code: 'MUF200',
        message: "Invalid Data"
    },
    MUFNotRegistered: {
        code: 'MUF300',
        message: "User is not registered."
    },
    MUFAuthenticationFailed: {
        code: "MUF400",
        message: "Authentication of the OTP failed."
    },
    MUFFailed: {
        code: "MUF500",
        message: "Unexpected Failure."
    }
};

module.exports.status = status;

module.exports.getResponse = function getResponse(term) {
    if(term) {
        return {
            statusCode: term.code,
            message: (term.message),
            data: null
        }
    }
}