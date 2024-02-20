import { http, HttpResponse } from "msw";

const url = "http://localhost:3000/dashboard";

export const handlers = [
  http.get(`${url}/`, () => {
    // 2. Return a mocked "Response" instance from the handler.
    return HttpResponse.text("Hello world!");
  }),
];
