const jsonResponseView = ({ res, status,
    message,
    data = null,
    error = null,
    meta = null }) => {

    const response = { status, message, body: { data, error }, meta };
    res.status(status).json(response);
};


module.exports = jsonResponseView;