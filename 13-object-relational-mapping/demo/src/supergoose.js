/**
 * Combines SuperTest and Mongoose Memory Server
 * to reduce (hopefully) the pain of 
 * testing a Mongoose API 
 */
import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server';
import supertest from 'supertest';

let mongoServer;

/** 
 * @server 
 */
export default (server) => supertest(server);

/**
 * Typically used in Jest beforeAll hook
 */
export const startDB = async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, (err) => {
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