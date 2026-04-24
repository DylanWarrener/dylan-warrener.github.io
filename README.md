# Setup

To execute this project, open a terminal at project root and run the following commands in order:

1. `npm i`
2. `build:dev`

# Commands

## For Formatting

The following commands can be executed in a terminal directed at the project root, for raising formatting issues in files, across the repo:

- `npm run format` - Formats the files. Does update files.
- `npm run format:check` - Checks for formatting issues. Does not update files.

## For TypeScript

The following commands can be executed in a terminal directed at the project root, for raising TypeScript issues in files, across the repo:

- `npm run lint` - Formats the files. Does update files.
- `npm run lint:check` - Checks for TypeScript issues. Does not update files.

## For Building Development Site Locally

The following commands can be executed in a terminal directed at the project root, for building the project (do so in order):

- `npm i` - Installs the project dependencies.
- `npm run build:dev` - Builds the project locally. Checks for issues, but does not fix files.
- `npm run fix:then:build:dev` - Fixes formatting and type issues before building locally.

## For Building Production Site Locally

The following commands can be executed in a terminal directed at the project root, for building the project (do so in order):

- `npm i` - Installs the project dependencies.
- `npm run build:prod` - Builds the project locally.
