// an example of type-level computation
// a mapped type
type Endpoints = {
  "/users": { method: "GET"; response: { id: number; name: string } };
  "/posts": { method: "POST"; response: { id: number; title: string } };
};
