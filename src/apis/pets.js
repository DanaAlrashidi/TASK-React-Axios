import instance from ".";

export async function list() {
  return await instance.get("/pets");
}
export async function get(id) {
  return await instance.get("/pets");
}
export async function create(pet) {
  return await instance.post("/pets", pet);
}

export async function deletePet(id) {
  return await instance.delete("/pets/" + id);
}
