import cors from 'cors';
  
const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
const whitelist = [
  clientUrl,
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) return callback(null, true);

    return callback(new Error('Not allowed by CORS'));
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export default () => cors(corsOptions);