/** @module read-file-yaml */

import json5 from "json5"
import readFileString from "read-file-string"

/**
 * @function
 * @param {string} file Path to a file
 * @returns {Promise<string>} Object returned from json5.parse(fileString)
 * @example
 * import readFileYaml from "read-file-yaml"
 * const result = await readFileYaml("package.json")
 * result.version === "1.2.3"
 */
export default async file => {
  const text = await readFileString(file)
  if (text === null) {
    return null
  }
  return json5.parse(text)
}