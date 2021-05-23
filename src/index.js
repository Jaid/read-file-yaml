/** @module read-file-yaml */

import jsYaml from "js-yaml"
import readFileString from "read-file-string"

/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<Object|null>} Object returned from YAML parsing
 * @example
 * import readFileYaml from "read-file-yaml"
 * const result = await readFileYaml("package.yml")
 * result.version === "1.2.3"
 */
export default async file => {
  const text = await readFileString(file)
  if (text === null) {
    return text
  }
  return jsYaml.load(text, {
    filename: file,
  })
}