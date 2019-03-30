const validation = require('express-validation');

const responseParser = (err, req, res, next) => {
    if (err instanceof validation.ValidationError) {
        if (!err.message) {
            res.status(400).send()
        } else {
            res.status(400).json({
                status: 400,
                message: err,
            })
        }
    } else {
        
        if (err.message) {
            res.status(400)
                    .json({
                        status: err.status,
                        message: err.message,
                    });
        } else {
            res.status(400).json({
                status: 400,
                message: err,
            })
        }
    }
};

module.exports = {
    responseParser
}
