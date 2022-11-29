import * as express from "express";
import * as request from 'supertest';

import Main from "../index";

describe("Testing", () => {
    const app = new Main();
    beforeAll(async () => {
        app.start();
    });

    it('/ (GET)', () => {
        return request(app)
            .get('/')
            .expect(200)
            .expect({
                "message": "Home",
            });
    });
});