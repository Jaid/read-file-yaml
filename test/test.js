import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
  * @type { import("../src") }
  */
const {default: readFileYaml} = indexModule

it("should return string (async)", async () => {
  const file = path.join(__dirname, "hello.yml")
  const result = await readFileYaml(file)
  expect(result).toStrictEqual(["Hewwo", "OwO"])
})

it("should return null for non-existing files (async)", async () => {
  const file = path.join(__dirname, "bye.yml")
  const result = await readFileYaml(file)
  expect(result).toBe(null)
})