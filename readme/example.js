import readFileYaml from "read-file-yaml"

readFileYaml("./exists.yml").then(result => {

})

readFileYaml("./doesNotExist.yml").then(result2 => {

})