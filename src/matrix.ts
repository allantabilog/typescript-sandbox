function convertStringToMatrix(input: string) {
  return input.split(/\n/).map((r) => r.split(/\s+/));
}
