import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
afterEach(() => {
  cleanup();
});

// import { server } from "../src/mocks/server";

// beforeAll(() => server.listen());

// afterEach(() => server.resetHandlers())

// afterAll(() => server.close());