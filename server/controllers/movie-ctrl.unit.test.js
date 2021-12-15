const { MongoClient } = require("mongodb");
require("dotenv").config();
const app = require("../app.js");
const supertest = require("supertest");
const mongoose = require("mongoose");
const Movie = require("../models/movie-model");

app.listen(process.env.SERVER_PORT, () => "Listening on port 5000");

beforeEach((done) => {
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});

afterEach((done) => {
  // Clear out database after each test
  // TODO: Figure out how to not delete entire and only delete simple
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

describe("Jest working sanity check", () => {
  const sum = (a, b) => a + b;
  test("simple sum function works", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Test API", () => {
  it("GET /movies should be OK", async () => {
    const res = await supertest(app).get("api/movies");
    expect(res.status).toBe(200);
  });

  it("POST /movie", async () => {
    const movie = { name: "Avengers", rating: 5, time: "2 Hours 2 minutes" };
    let movieObj = null;
    await supertest(app);
    post("/api/movie")
      .send(data)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response.body._id).toBeTruthy();
        expect(response.body.success).toBe(true);

        // Check the datja in the database
        movieOb = await Movie.findOne({ _id: response.body._id });
        expect(movieOb).toBeTruthy();
        expect(movieObj.name).toBe(data.name);
        expect(movieObj.rating).toBe(data.rating);
        expect(movieObj.time).toBe(data.time);
      });
  });

  it("GET /movie the movie just posted", async () => {
    await supertest(app)
      .get(`api/movie/${movieObj._id}`)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response.body._id).toBe(movieObj._id);
        expect(response.body.name).toBe(movieObj.name);
        expect(response.body.rating).toBe(movieObj.rating);
        expect(response.body.time).toBe(movieObj.time);
      });
  });

  it("PUT /movie just posted", async () => {
    const data = { rating: 4 };
    await supertest(app)
      .put(`api/movie/${movieObj._id}`)
      .send(data)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response.body._id).toBe(movieObj._id);
        expect(response.body.name).toBe(movieObj.name);
        expect(response.body.rating).toBe(data.rating);
        expect(response.body.time).toBe(movieObj.time);
      });
  });

  it("DELETE /movie just posted", async () => {
    await supertest(app)
      .delete(`api/movie/${movieObj._id}`)
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response.body.success).toBe(True);
        expect(response.body.data._id).toBe(movieObj._id);
        expect(response.body.data.name).toBe(movieObj.name);
        expect(response.body.data.rating).toBe(movieObj.rating);
      });
  });

  it("GET /movies should be empty", async () => {
    await supertest(app)
      .get("api/movies")
      .expect(200)
      .then(async (response) => {
        // Check the response
        expect(response.body.success).toBe(true);
        expect(response.body.data.length).toBe(0);
      });
  });
});
