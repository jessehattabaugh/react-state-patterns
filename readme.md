# Patterns for managing state in a React app

## Stateful React Components

`$ npm run react`

Each component is the source of it's own state. When a component's state is based on another component, callbacks are used to keep them synced.

### Pros
* No flux dependencies

### Cons
* Syncing state requires boilerplate

## Reflux with components connected to stores

`$ npm run reflux`

Components get their state by listening to Stores. User actions are communicated between components by Actions.

### Pros
* State is synced with little extra effort

### Cons
* Components require knowledge of Actions and Stores

## Use Reflux but avoid Stores

`not yet implemented`

Components are the source of their own state. User actions are communicated between components by Actions.

## Redux

`$ npm run redux`

With Redux, there is only one Store. Components are always stateless. Components get their props connected to action creators and the Store's state using Container Components.

## Pros
* Stateless components are easier to reason about
* Store and Actions are injected into Components making them easier to test

## Cons
* Container Components add extra boilerplate
