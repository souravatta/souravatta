const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-03-23T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
![README-CI](https://github.com/souravatta/souravatta/workflows/README-CI/badge.svg?branch=master)  ![Stackoverflow-Stats-CI](https://github.com/souravatta/souravatta/workflows/Stackoverflow-Stats-CI/badge.svg)
# Hey there 👋, I am Sourav Atta

I am currently working as a DevOps engineer. As a DevOps engineer, I always try to be very tool agnostic. I do am fond of some particular tools like 
ELK, Ansible, Sonarqube and Docker, but I sure can work on other tools with utmost efficiency. Apart from that, I am very much into learning old-school IT concepts.

<img align="right" alt="GIF" src="https://media.giphy.com/media/eMPormrWOvXQHSKTjO/giphy.gif"/>

**Know more about me**
- 🏢 I’m currently working in [Wipro Technologies](https://www.wipro.com/en-IN/about-us/)
- 🌱 I’m currently learning Cloud Native Technologies eg. Docker, K8's
- ⚡️ Fun-Fact: Strategically lazy😎
- ⏳ Interests: Travelling, Cooking, Video Games
- 📝[Resume](https://drive.google.com/file/d/1WKBaDRkh0mF3jUro1mdAaSuPuqFu1_iW/view?usp=drivesdk)
- 📝[Curriculum Vitae](https://drive.google.com/file/d/1WNEU3FT_DAQsXG_uXpbf_TcyQjgS6SQW/view?usp=drivesdk)

> "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is the most adaptable to change."--Charles Darwin

**How to reach me**

[![Linkedin Badge](https://img.shields.io/badge/-sourav-blue?style=?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/souravatta/)](https://www.linkedin.com/in/souravatta/)
[![Instagram Badge](https://img.shields.io/badge/-@sourav_0319-7248c5?style=flat&logo=instagram&logoColor=white&link=https://www.instagram.com/sourav_0319/)](https://www.instagram.com/sourav_0319/)
[![Stack Overflow Badge](https://img.shields.io/badge/-@souravatta-orange?style=flat&logo=StackOverflow&logoColor=white&link=https://stackoverflow.com/users/8854824/souravatta?tab=profile)](https://stackoverflow.com/users/8854824/souravatta?tab=profile)
[![Gmail Badge](https://img.shields.io/badge/-sourav.atta19395-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:sourav.atta19395@gmail.com)](mailto:sourav.atta19395@gmail.com)
[![WhatsApp Badge](https://img.shields.io/badge/-+917827970696-25D366?style=flat&logo=WhatsApp&logoColor=white&link=https://api.whatsapp.com/send?phone=917827970696)](https://api.whatsapp.com/send?phone=917827970696)

<details>
  <summary> Stackoverflow Stats </summary>
  <br>
  <img alt="IMG" src="https://github-readme-stackoverflow.vercel.app/?userID=8854824"/>
  <br>
  <hr>
  <p align="right" float="right">

  **StackOverflow Activity**
  <!-- STACKOVERFLOW:START -->
  <!-- STACKOVERFLOW:END -->

  </p>
 </details>

**Devops Tools**

|Types                         |Tools (x/5)                                                                                                                                                                                                          |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Build Tools                   |![](https://img.shields.io/badge/Maven-3-9400D3?labelColor=7D898B) ![](https://img.shields.io/badge/npm-3-9400D3?labelColor=7D898B)                                                                                  |
|Code Quality                  |![](https://img.shields.io/badge/Sonarqube-4-orange?labelColor=7D898B) ![](https://img.shields.io/badge/Jacoco-1-blue?labelColor=7D898B)                                                                             |
|Collaboration                 |![](https://img.shields.io/badge/JIRA-3-9400D3?labelColor=7D898B) ![](https://img.shields.io/badge/Confluence-3-9400D3?labelColor=7D898B)                                                                            |
|Containerization              |![](https://img.shields.io/badge/Docker-3-9400D3?labelColor=7D898B)                                                                                                                                                  |  
|Test Automation               |![](https://img.shields.io/badge/Selenium-2-green?labelColor=7D898B) ![](https://img.shields.io/badge/TOSCA-2-green?labelColor=7D898B)                                                                               |
|Source Control Tools          |![](https://img.shields.io/badge/GIT-3-9400D3?labelColor=7D898B) ![](https://img.shields.io/badge/Gitlab-3-9400D3?labelColor=7D898B) ![](https://img.shields.io/badge/Github-3-9400D3?labelColor=7D898B)             |
|Repository Management         |![](https://img.shields.io/badge/Nexus-3-9400D3?labelColor=7D898B)                                                                                                                                                   |
|Continuous Integration        |![](https://img.shields.io/badge/Jenkins-3-9400D3?labelColor=7D898B) ![](https://img.shields.io/badge/Gitlab%20CI-2-green?labelColor=7D898B) ![](https://img.shields.io/badge/Github%20CI-1-blue?labelColor=7D898B)  |
|Monitoring and Alerting       |![](https://img.shields.io/badge/ELK-4-orange?labelColor=7D898B) ![](https://img.shields.io/badge/Icinga-2-green?labelColor=7D898B) ![](https://img.shields.io/badge/Grafana-3-9400D3?labelColor=7D898B)             |
|Configuration Management      |![](https://img.shields.io/badge/Ansible-3-9400D3?labelColor=7D898B)                                                                                                                                                 |
|Scripting Tools               |![](https://img.shields.io/badge/Bash-2-green?labelColor=7D898B) ![](https://img.shields.io/badge/Python-1-blue?labelColor=7D898B)                                                                                   |

**Other Tools**

|Types                         |Tools (x/5)                                                                                                                         |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
|Web Services                  |![](https://img.shields.io/badge/SOAP-2-green?labelColor=7D898B) ![](https://img.shields.io/badge/REST-2-green?labelColor=7D898B) |
|API Automation                |![](https://img.shields.io/badge/TOSCA%20OSV-5-red?labelColor=7D898B)                                                               |
|Service Virtualization        |![](https://img.shields.io/badge/TOSCA%20OSV-5-red?labelColor=7D898B)                                                               |

⏰ Updated on ${new Date().toUTCString()}
\
`

console.log(readme)
