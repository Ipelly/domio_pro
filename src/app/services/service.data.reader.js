'use strict'

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const requestUtil = require('../../utility/util.request')
const logger = require('../../logger/app.logger')

class ServiceDataReader {

    async fetchProperties(path){
        try {
            return await requestUtil.get({path});
        } catch(error) {
            throw error;
        }
    }
}

module.exports = new ServiceDataReader();


