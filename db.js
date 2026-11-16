// require("dotenv").config();
// const { Pool } = require("pg");

import "dotenv/config";
import { Pool, types } from "pg";

// Gør så datoer i students ikke viser tidspunkt, men blot dato:
types.setTypeParser(1082, (value) => value);

export const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});
