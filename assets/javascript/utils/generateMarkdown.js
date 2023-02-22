const licenseArray = [
  "Apache 2.0", "GNU v3.0", "MIT", "BSD 2-Clause", "Boost Software 1.0", "Creative Commons Zero v1",
  "Eclipse Public License", "BSD 3-New", "GNU Affero", "GNU General", "GNU Lesser", "Mozilla", "The Unlicense"
]

const licenseBadge = [
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
]

function renderLicenseInfo(license) {
  if (!license) {
    return "";
  } else if (licenseArray.includes(license)) {
    let info = licenseArray.indexOf(license);
    return licenseBadge[info];
  } else {
    return "License Not Found"
  }
}

function generateMarkdown(data) {
  return `

  # ${data.title}
  
  ${renderLicenseInfo(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  [Description](#description)
  [Installation](#installation)
  [Useage](#useage)
  [License](#license)
  [Contribute](#contribute)
  [Test](#test)
  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Useage
  ${data.useage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  Github Repo: [!${data.github}](https://github.com/${data.github}?tab=repositories)

  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
