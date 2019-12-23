'use strict'


const joi = require('joi');
const config = require('config-yml');
const configVars = require('./config.common');


const envVarsSchema = joi.object({
    ENDPOINT : joi.string()
}).unknown().required();


const {
    error,
    value : envVars
} = joi.validate(configVars.getConfigVars().api, envVarsSchema);

if(error) {
    console.error(`API Endpoints : Config Varidation Error : ${error.message}`);
    process.exit(1);
}

let envVariables = {
    endpoint : envVars.ENDPOINT
}

module.exports = envVariables;