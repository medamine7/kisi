import cors from 'cors';

const whitelist = ['http://localhost:8000'];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) return callback(null, true);

    return callback(new Error('Not allowed by CORS'));
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export default () => cors(corsOptions);