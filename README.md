# Project's Title

<!---
This is the name of the project. It describes the whole project in one sentence, and helps people understand what the main goal and aim of the project is.
-->

Change all `repo-template-ts-lib` occurrences by the name of your repo.

[![JS Library](https://github.com/parcelLab/repo-template-ts-lib/actions/workflows/js.yaml/badge.svg)](https://github.com/parcelLab/repo-template-ts-lib/actions/workflows/js.yaml)
[![JSON](https://github.com/parcelLab/repo-template-ts-lib/actions/workflows/json.yaml/badge.svg)](https://github.com/parcelLab/repo-template-ts-lib/actions/workflows/json.yaml)
[![NPM](https://github.com/parcelLab/repo-template-ts-lib/actions/workflows/npm.yaml/badge.svg)](https://github.com/parcelLab/repo-template-ts-lib/actions/workflows/npm.yaml)
[![YAML](https://github.com/parcelLab/repo-template-ts-lib/actions/workflows/yaml.yaml/badge.svg)](https://github.com/parcelLab/repo-template-ts-lib/actions/workflows/yaml.yaml)

Remove `./index.ts` if your application is a command line tool and not a library.
Remove `./cli.ts` if your application is a library and not a command line tool.

## Table of Contents (Optional)

<!---
If your README is very long, you might want to add a table of contents to make it easy for users to navigate to different sections easily. It will make it easier for readers to move around the project with ease.
-->

## About The Project

<!---
This is an important component of your project that many new developers often overlook.

Your description is an extremely important aspect of your project. A well-crafted description allows you to show off your work to other developers as well as potential employers.

The quality of a README description often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase:
- What your application does,
- Why you used the technologies you used,
- Some of the challenges you faced and features you hope to implement in the future.
-->

## Getting started

Install packages:

```sh
npm i
```

Lint files listed in the tsconfig include, but don't format:

```sh
npm run lint
```

Format files listed in the tsconfig include:

```sh
npm run format
```

## Usage

Run the application:

```sh
npm start
```

### Container

To run containers locally you need `podman` ([install podman](https://podman.io/getting-started/installation) or [run the parcelLab set up script](https://github.com/parcelLab/getting-started)).

Build the container:

```sh
podman build --build-arg NPM_GITHUB_TOKEN=$NPM_GITHUB_TOKEN --build-arg APP_NAME=repo-template-ts --build-arg APP_ENV=dev --build-arg GITHUB_SHA=$(git rev-parse HEAD) --build-arg VERSION='*' .
```

The output will give you a hash (like `bc6495c7874225d7a9bcf28bb5438c1ed07eb9d1fd149c10def9f6a27ade0174`) that you can
run with `podman run` (e.g. `podman run bc6495c7874225d7a9bcf28bb5438c1ed07eb9d1fd149c10def9f6a27ade0174`)

## Contributing

[Contribution guidelines](CONTRIBUTING.md)
