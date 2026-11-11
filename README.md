<div align="center">

<img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/header.svg" alt="Deepesh Dangi, software engineer: low-latency systems, applied AI, distributed backends" width="100%">

<br>

<a href="https://www.linkedin.com/in/deepesh-dangi-377a1028a/"><img src="https://img.shields.io/badge/LinkedIn-0a66c2?style=flat-square" alt="LinkedIn"></a>
<a href="https://stackoverflow.com/users/31307423/deepesh"><img src="https://img.shields.io/badge/Stack%20Overflow-f48024?style=flat-square&logo=stackoverflow&logoColor=white" alt="Stack Overflow"></a>
<a href="mailto:deepeshdangi700@gmail.com"><img src="https://img.shields.io/badge/Email-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email"></a>
<a href="https://www.scholardive.com/"><img src="https://img.shields.io/badge/ScholarDive-live-8b5cf6?style=flat-square" alt="ScholarDive"></a>
<a href="https://buymeacoffee.com/deepesh70"><img src="https://img.shields.io/badge/Sponsor-ffdd00?style=flat-square&logo=buymeacoffee&logoColor=black" alt="Buy me a coffee"></a>
<img src="https://komarev.com/ghpvc/?username=Deepesh70&style=flat-square&color=22d3ee&label=profile+views" alt="Profile views">

<img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/divider.svg" width="100%" alt="">

</div>

## About

Computer science undergraduate focused on **low-latency systems (C++)**, **applied AI pipelines** and **distributed backend platforms**. I co-build [ScholarDive](https://www.scholardive.com/) and author [Unreal-MCP](https://github.com/Deepesh70/Unreal-MCP), a bridge that lets LLM agents drive Unreal Engine. I care about clean system boundaries, low-overhead inter-process communication and architecture that scales.

| | |
|---|---|
| **Building** | ScholarDive, an adaptive assessment platform with NLP-based grading |
| **Shipped open source** | Unreal-MCP, Mini GPT, AI Anime Challenge |
| **Strongest at** | C++ and Python, backend services, ML from first principles |
| **Looking for** | SDE internships, systems programming, high-impact applied AI roles |

<div align="center"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/divider.svg" width="100%" alt=""></div>

## Featured projects

<table>
  <tr>
    <td width="50%"><a href="https://www.scholardive.com/"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/card-scholardive.svg" alt="ScholarDive" width="100%"></a></td>
    <td width="50%"><a href="https://github.com/Deepesh70/Unreal-MCP"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/card-unreal-mcp.svg" alt="Unreal-MCP" width="100%"></a></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://github.com/Deepesh70/Mini_Generative_Pretrained_Transformer"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/card-mini-gpt.svg" alt="Mini GPT" width="100%"></a></td>
    <td width="50%"><a href="https://github.com/Deepesh70/ai-anime-challenge"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/card-ai-anime.svg" alt="AI Anime Challenge" width="100%"></a></td>
  </tr>
</table>

<details>
<summary><b>ScholarDive</b>: what I built and how it fits together</summary>
<br>

- **Semantic scoring.** Evaluation microservices on custom NLP pipelines that cut the manual, subjective part of grading.
- **Submission backend.** Asynchronous, low-latency services for ingesting and validating student submissions and reporting analytics.
- **Feedback loop.** Real-time telemetry so students see contextual feedback and performance tracking immediately.

```mermaid
flowchart LR
  S[Student submission] --> API[Async ingestion and validation]
  API --> NLP[Semantic scoring with PyTorch]
  NLP --> DB[(MongoDB)]
  DB --> FB[Real-time feedback and analytics]
```

</details>

<details>
<summary><b>Unreal-MCP</b>: what I built and how it fits together</summary>
<br>

- **Native engine RPCs.** C++ bindings into Unreal Engine editor subsystems so an external reasoning model can control the viewport, actor transforms and scene assets.
- **Low-latency IPC.** Inter-process communication structured inside the native runtime for fast round-trip command execution.

```mermaid
flowchart LR
  A[LLM agent] -->|MCP tool calls| B[MCP server in TypeScript]
  B -->|IPC| C[C++ editor bindings]
  C --> D[Viewport, actors, assets]
```

</details>

<details>
<summary><b>Mini GPT</b>: what I built</summary>
<br>

- **First principles.** Multi-head scaled dot-product attention, positional embeddings, layer normalization and residual layers, written without high-level abstraction frameworks.
- **Training.** Custom tokenization and GPU-accelerated batch training loops, with perplexity convergence benchmarks and KV-cache inference.

</details>

<details>
<summary><b>AI Anime Challenge</b>: what I built</summary>
<br>

- **Domain restoration.** Engineered a video restoration and super-resolution pipeline targeting broadcast anime video on the Re-Anime600 benchmark (AINIME Challenge @ WACV 2027 Workshop).
- **Temporal consistency.** Implemented guided filtering and temporal consistency algorithms in PyTorch and CUDA to suppress compression artifacts and edge flickering.

</details>

<div align="center"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/divider.svg" width="100%" alt=""></div>

## Stack

<div align="center"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/stack.svg" alt="Languages: C++, Python, TypeScript, JavaScript, SQL. Backend: FastAPI, Node.js, Express, PostgreSQL, MongoDB, Redis. AI and tooling: PyTorch, CUDA, MCP, Docker, Linux, Git." width="100%"></div>

<div align="center"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/divider.svg" width="100%" alt=""></div>

## How I like to build

| Clean system boundaries | Low-overhead IPC | Scalable by design |
|---|---|---|
| Small services with clear contracts, so scoring, ingestion and analytics can change independently. | Keep the hot path inside the process and the messages between processes small. | Cache in front of slow or rate-limited dependencies, and keep the write path asynchronous. |

<div align="center"><img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/divider.svg" width="100%" alt=""></div>

## Activity

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Deepesh70/Deepesh70/output/github-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Deepesh70/Deepesh70/output/github-snake.svg">
  <img alt="Contribution snake" src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/output/github-snake-dark.svg" width="100%">
</picture>

<br><br>

<img height="170" src="https://github-stats-extended.vercel.app/api?username=Deepesh70&show_icons=true&hide_border=true&theme=tokyonight&bg_color=0d1222&title_color=a78bfa&icon_color=22d3ee&include_all_commits=true" alt="GitHub stats">
<img height="170" src="https://github-stats-extended.vercel.app/api/top-langs/?username=Deepesh70&layout=compact&hide_border=true&theme=tokyonight&bg_color=0d1222&title_color=a78bfa" alt="Top languages">

<br>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=Deepesh70&theme=tokyonight&hide_border=true&background=0d1222&ring=22d3ee&fire=f472b6&currStreakLabel=a78bfa" width="100%" alt="Contribution streak">

</div>

<div align="center">

<br>

If something here is useful, you can [buy me a coffee](https://buymeacoffee.com/deepesh70).

<img src="https://raw.githubusercontent.com/Deepesh70/Deepesh70/main/assets/footer.svg" width="100%" alt="">

</div>
