module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/Mike-Tranzit/YanReactWorkflow",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/gitlab"
    ]
}
