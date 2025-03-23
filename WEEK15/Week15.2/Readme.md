# Docker Part 2

## Layers in Docker

- In Docker ,layers are the fundamental part of the image architecture that allows docker to be efficient,fast and portable.
- A docker image is essentially built up from a series of layers, each representing a set of differences from the previous layer.

## How layers are made

1. Base layer
2. Instruction layer
3. Reusable and shareable
4. Immutable

- Wouldn’t it be nice if we could cache the npm install step considering dependencies don’t change often?