# read-file-yaml


<a href="https://raw.githubusercontent.com/jaid/read-file-yaml/master/license.txt"><img src="https://img.shields.io/github/license/jaid/read-file-yaml?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor read-file-yaml"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/read-file-yaml/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fread-file-yaml%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/read-file-yaml/commits"><img src="https://img.shields.io/github/commits-since/jaid/read-file-yaml/v2.0.0?style=flat-square&logo=github" alt="Commits since v2.0.0"/></a> <a href="https://github.com/jaid/read-file-yaml/commits"><img src="https://img.shields.io/github/last-commit/jaid/read-file-yaml?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/read-file-yaml/issues"><img src="https://img.shields.io/github/issues/jaid/read-file-yaml?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/read-file-yaml"><img src="https://img.shields.io/npm/v/read-file-yaml?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/read-file-yaml/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/read-file-yaml?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/read-file-yaml"><img src="https://img.shields.io/npm/dm/read-file-yaml?style=flat-square&logo=npm" alt="Downloads"/></a>

**Reads YAML 1.2 from a file. Returns null if file does not exist (or is a directory) instead of throwing an Error.**





## Installation

<a href="https://npmjs.com/package/read-file-yaml"><img src="https://img.shields.io/badge/npm-read--file--yaml-C23039?style=flat-square&logo=npm" alt="read-file-yaml on npm"/></a>

```bash
npm install --save read-file-yaml@^2.0.0
```

<a href="https://yarnpkg.com/package/read-file-yaml"><img src="https://img.shields.io/badge/Yarn-read--file--yaml-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="read-file-yaml on Yarn"/></a>

```bash
yarn add read-file-yaml@^2.0.0
```

<a href="https://github.com/jaid/read-file-yaml/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/read--file--yaml-24282e?style=flat-square&logo=github" alt="@jaid/read-file-yaml on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/read-file-yaml@^2.0.0
```



## Example


```javascript
import readFileYaml from "read-file-yaml"

readFileYaml("./exists.yml").then(result => {

})

readFileYaml("./doesNotExist.yml").then(result2 => {

})
```

Variable `result` will be:

```javascript
["a", "b", "c"]
```
Variable `result2` will be:

```javascript
null
```

















## Development



Setting up:
```bash
git clone git@github.com:jaid/read-file-yaml.git
cd read-file-yaml
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/read-file-yaml/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
