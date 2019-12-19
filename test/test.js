import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
  * @type { import("../src") }
  */
const {default: readFileYaml} = indexModule

it("should return string (async)", async () => {
  const file = path.join(__dirname, "..", "package.json")
  const result = await readFileYaml(file)
  expect(result.name).toBe("read-file-yaml")
})

it("should return null for non-existing files (async)", async () => {
  const file = path.join(__dirname, "..", "package.freddy")
  const result = await readFileYaml(file)
  expect(result).toBe(null)
})