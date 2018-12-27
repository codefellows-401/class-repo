/**
 * Combines SuperTest and Mongoose Memory Server
 * to reduce (hopefully) the pain of 
 * testing a Mongoose API 
 */
import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server';
import supertest from 'supertest';

let mongoServer;

// May require additional time for downloading MongoDB binaries
global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

/** 
 * @server 
 * @returns function that expects an express server
 */
export default (server) => supertest(server);

/**
 * Typically used in Jest beforeAll hook
 */
export const startDB = async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  const options = { useNewUrlParser: true, useCreateIndex: true };
  await mongoose.connect(mongoUri, options, (err) => {
    if (err) console.error(err);
  });
};

/**
 * Typically used in Jest afterAll hook
 */
export const stopDB = () => {
  mongoose.disconnect();
  mongoServer.stop();
};